// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + BreadcrumbList 스키마 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로를 읽을 수 있습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--z52bu9l3wk26b91c.com';

const ROUTE_META = {
  "/": {
    "title": "소액결제현금화 수수료 비교 및 안전 체크리스트 | 몬스터티켓",
    "description": "소액결제·정보이용료·신용카드·상품권 현금화 이용 전 수수료 비교, 안전한 업체 체크리스트, 후기 구별법을 확인하세요. 몬스터티켓에서 3분 즉시입금 상담도 가능합니다.",
    "crumbs": [
      ["몬스터티켓", "/"]
    ]
  },
  "/fee-guide": {
    "title": "소액결제 현금화 수수료·지급률 비교 가이드 | 몬스터티켓",
    "description": "소액결제·정보이용료·신용카드·상품권 현금화 수수료 계산법과 지급률 비교 기준을 정리했습니다. 적정 지급률 판단법을 확인하세요.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["수수료·지급률 비교 가이드", "/fee-guide/"]
    ]
  },
  "/checklist": {
    "title": "안전한 현금화 업체 선택 체크리스트 | 몬스터티켓",
    "description": "현금화 업체를 고를 때 반드시 확인해야 할 6가지 체크포인트를 정리했습니다. 선입금 요구, 사업자등록 조회 방법까지 안내합니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["안전한 업체 선택 체크리스트", "/checklist/"]
    ]
  },
  "/authentic-review": {
    "title": "진짜 후기 vs 가짜 후기 구별하는 법 | 몬스터티켓",
    "description": "현금화 업체 후기 중 조작된 후기의 특징과 신뢰할 수 있는 후기를 구별하는 방법을 정리했습니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["진짜 후기 vs 가짜 후기 구별법", "/authentic-review/"]
    ]
  },
  "/how-to-use": {
    "title": "몬스터티켓 이용 방법 안내 | 몬스터티켓",
    "description": "처음 이용하시는 분도 쉽게 따라할 수 있는 단계별 이용 방법과 주의사항을 안내합니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["이용 방법", "/how-to-use/"]
    ]
  },
  "/faq": {
    "title": "자주묻는질문 | 몬스터티켓",
    "description": "소액결제·정보이용료·신용카드·상품권 현금화에 대한 자주묻는질문을 확인하세요.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["자주묻는질문", "/faq/"]
    ]
  },
  "/privacy": {
    "title": "개인정보처리방침 | 몬스터티켓",
    "description": "몬스터티켓 개인정보처리방침. 고객님의 개인정보 수집·이용·보관·파기에 관한 안내입니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["개인정보처리방침", "/privacy/"]
    ]
  },
  "/terms": {
    "title": "이용약관 | 몬스터티켓",
    "description": "몬스터티켓 서비스 이용약관 안내입니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["이용약관", "/terms/"]
    ]
  }
};

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

function breadcrumbLd(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c[0], item: SITE + c[1],
    })),
  });
}

function inject(html, route, m) {
  const title = esc(m.title);
  const desc = esc(m.description);
  const url = SITE + route + '/';
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/, '$1' + desc + '$2');
  const bc = '<script type="application/ld+json">' + breadcrumbLd(m.crumbs) + '<\/script>';
  out = out.replace('</head>', bc + '</head>');
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with static meta + breadcrumbs.');
