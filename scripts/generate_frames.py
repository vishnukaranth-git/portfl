import glob
import os

files = sorted(glob.glob('public/sequence/frame_*_delay-*.webp'))
print('Frame count:', len(files))

os.makedirs('lib', exist_ok=True)
relative_paths = [f.replace('\\', '/').replace('public/', '/') for f in files]

with open('lib/frames.ts', 'w', encoding='utf-8') as f:
    f.write('// Auto-generated frame sequence manifest\n')
    f.write(f'export const TOTAL_FRAMES = {len(relative_paths)};\n\n')
    f.write('export const FRAME_PATHS: string[] = [\n')
    for p in relative_paths:
        f.write(f'  "{p}",\n')
    f.write('];\n')

print('Generated lib/frames.ts with', len(relative_paths), 'frames.')
