import re

with open('d:/Web Administrasi/dashboard.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

def repl(match):
    x = match.group(1)
    y = int(match.group(2))
    fill = match.group(3)
    val = match.group(4)
    new_y = y + 4
    return f'<text x="{x}" y="{new_y}" fill="{fill}" font-size="8" font-weight="bold" text-anchor="start" transform="rotate(-90 {x} {new_y})">{val}</text>'

pattern = r'<text x="(\d+)" y="(\d+)" fill="([^"]+)" font-size="8" font-weight="bold" text-anchor="middle">([\d\.]+)</text>'

# We only want to apply this to lines 360 to 425 (Card 3)
for i in range(360, min(426, len(lines))):
    lines[i] = re.sub(pattern, repl, lines[i])

with open('d:/Web Administrasi/dashboard.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Texts rotated successfully!")
