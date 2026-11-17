// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + BreadcrumbList 스키마 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로를 읽을 수 있습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--z52bu9l3wk26b91c.com';

const ROUTE_META = {
  "/": {
    "title": "상품권 매입·모바일 상품권 구매 절차 안내 | 몬스터티켓",
    "description": "상품권 매입, 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매까지. 수수료 비교 가이드와 안전 체크리스트로 확인할 것을 먼저 정리하고 24시간 채널톡 1:1 상담으로 조건을 안내합니다.",
    "crumbs": [
      ["몬스터티켓", "/"]
    ]
  },
  "/ko": {
    "title": "상품권 매입·모바일 상품권 구매 절차 안내 | 몬스터티켓",
    "description": "상품권 매입, 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매까지. 수수료 비교 가이드와 안전 체크리스트로 확인할 것을 먼저 정리합니다.",
    "crumbs": [
      ["몬스터티켓", "/ko"]
    ]
  },
  "/fee-guide": {
    "title": "수수료·지급률 비교 가이드 | 몬스터티켓",
    "description": "지급률과 수수료율 계산법, 결제수단별 참고 구간, 실제 견적을 비교하는 순서를 정리했습니다. 같은 조건으로 비교하는 방법을 확인하세요.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["수수료·지급률 비교 가이드", "/fee-guide/"]
    ]
  },
  "/checklist": {
    "title": "안전한 업체 선택 체크리스트 | 몬스터티켓",
    "description": "거래 전 반드시 확인해야 할 6가지 체크포인트와 사기 패턴을 정리했습니다. 사업자등록 조회, 선입금 요구 여부까지 안내합니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["안전한 업체 선택 체크리스트", "/checklist/"]
    ]
  },
  "/authentic-review": {
    "title": "진짜 후기 vs 가짜 후기 구별하는 법 | 몬스터티켓",
    "description": "조작된 후기의 특징과 신뢰할 수 있는 후기를 구별하는 방법을 정리했습니다. 평점 분포와 작성 패턴, 채널별 신뢰도 확인 기준을 확인하세요.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["진짜 후기 vs 가짜 후기 구별법", "/authentic-review/"]
    ]
  },
  "/how-to-use": {
    "title": "이용 방법 — 네 단계 안내 | 몬스터티켓",
    "description": "상담 정보 입력부터 내용 확인, 조건 안내, 동의 후 진행까지 네 단계로 정리했습니다. 처음 이용하시는 분도 쉽게 따라할 수 있는 절차와 주의사항을 안내합니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["이용 방법", "/how-to-use/"]
    ]
  },
  "/faq": {
    "title": "자주묻는질문 | 몬스터티켓",
    "description": "상품권 매입과 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매에 대한 자주 묻는 질문을 정리했습니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["자주묻는질문", "/faq/"]
    ]
  },
  "/privacy": {
    "title": "개인정보처리방침 | 몬스터티켓",
    "description": "몬스터티켓 개인정보처리방침. 상담 시 수집하는 개인정보의 항목과 목적, 보유기간, 파기 방법, 정보주체의 권리를 안내합니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["개인정보처리방침", "/privacy/"]
    ]
  },
  "/terms": {
    "title": "이용약관 | 몬스터티켓",
    "description": "몬스터티켓 서비스 이용약관 안내입니다. 상품권 매입과 상품권 구매 절차 안내 서비스의 이용조건과 절차를 규정합니다.",
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
