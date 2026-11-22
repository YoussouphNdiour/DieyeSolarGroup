"""Génère des variantes réduites (480 w, 800 w) de chaque image WebP + src/img-manifest.json.
Usage : python3 tools/variants.py   (Pillow requis). Les originaux ne sont jamais modifiés."""
import json, re, glob, os
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, 'public/assets/img')
manifest = {}
for f in sorted(glob.glob(IMG + '/*.webp')):
    name = os.path.basename(f)[:-5]
    if re.search(r'-(480|800)$', name):
        continue
    im = Image.open(f); w, h = im.size
    vs = []
    for tw in (480, 800):
        if w > tw * 1.2:
            out = os.path.join(IMG, f'{name}-{tw}.webp')
            if True:
                r = im.convert('RGB').resize((tw, round(h * tw / w)), Image.LANCZOS)
                r.save(out, 'WEBP', quality=62, method=6)
            vs.append(tw)
    manifest[name] = {'w': w, 'h': h, 'v': vs}
json.dump(manifest, open(os.path.join(ROOT, 'src/img-manifest.json'), 'w'), indent=0)
print(len(manifest), 'images,', sum(len(m['v']) for m in manifest.values()), 'variantes')
