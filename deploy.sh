#!/bin/bash
# 배포 스크립트
#
#   ./deploy.sh "커밋 메시지"
#
# styles.css / app.js 의 내용 해시를 index.html 의 ?v= 뒤에 다시 써넣고,
# 커밋해서 push 합니다. 해시가 바뀌면 브라우저가 캐시를 무시하고 새로 받아가므로,
# "고쳤는데 화면이 그대로"인 상황이 생기지 않습니다.

set -euo pipefail
cd "$(dirname "$0")"

msg="${1:-사이트 수정}"

python3 - <<'PY'
import hashlib, re

html = open('index.html', encoding='utf-8').read()
for asset in ('styles.css', 'app.js'):
    h = hashlib.sha1(open(asset, 'rb').read()).hexdigest()[:8]
    html = re.sub(
        r'(["\'])' + re.escape(asset) + r'(\?v=[0-9a-f]+)?\1',
        lambda m: f'{m.group(1)}{asset}?v={h}{m.group(1)}',
        html)
    print(f'  {asset} -> ?v={h}')
open('index.html', 'w', encoding='utf-8').write(html)
PY

if git diff --quiet && git diff --cached --quiet; then
  echo "바뀐 내용이 없습니다."
  exit 0
fi

git add -A
git commit -q -m "$msg"
git push -q origin main
echo "push 완료 — https://sang-t.github.io (반영까지 1분 정도)"
