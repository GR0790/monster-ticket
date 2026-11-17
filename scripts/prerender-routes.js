// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + 구조화 데이터 + noscript 안내문 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로, 페이지 제목과 요지를 읽을 수 있습니다.
//
// 주의: 이 스크립트는 <head>의 메타태그와 </head> 앞 구조화 데이터,
//       <!--seo-noscript-start--> ~ <!--seo-noscript-end--> 구간만 다룹니다.
//       디자인(클래스·CSS)·GTM/Google Ads(AW-)·채널톡 식별 로직은 건드리지 않습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--z52bu9l3wk26b91c.com';
const BRAND = '몬스터티켓';

const ROUTE_META = {
  "/": {
    "title": "몬스터티켓 | 휴대폰 소액결제·정보이용료 구조와 수수료 계산",
    "description": "결제한 금액에서 실제로 돌려받는 금액이 어떻게 정해지는지, 지급률과 수수료율 계산식으로 먼저 확인합니다. 거래 전 점검할 6가지와 후기 판별 기준도 함께 정리했습니다. 조건은 상담에서 확인한 숫자로 안내합니다.",
    "heading": "몬스터티켓 — 소액결제·정보이용료 구조와 수수료 계산",
    "crumbs": [
      ["몬스터티켓", "/"]
    ]
  },
  "/ko": {
    "title": "몬스터티켓 | 휴대폰 소액결제·정보이용료 구조와 수수료 계산",
    "description": "지급률과 수수료율 계산식, 거래 전 점검 6가지, 후기 판별 기준을 한 페이지에 정리했습니다. 조건은 상담에서 확인한 숫자로 안내합니다.",
    // 홈과 같은 내용의 보조 주소이므로 canonical은 홈으로 모읍니다.
    "canonical": "/",
    "crumbs": [
      ["몬스터티켓", "/"]
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
    "title": "이용 방법 — 접수부터 숫자 확인까지 | 몬스터티켓",
    "description": "접수, 결제수단 확인, 지급률·수수료 계산, 숫자 확인 후 진행까지 네 단계입니다. 각 단계에서 무엇을 확인하고 어떤 숫자를 맞추는지 정리했습니다.",
    "crumbs": [
      ["몬스터티켓", "/"],
      ["이용 방법", "/how-to-use/"]
    ]
  },
  "/faq": {
    "title": "자주 묻는 질문 | 몬스터티켓",
    "description": "지급률과 수수료 계산, 참고 구간과 확정 금액의 차이, 상담 준비물, 개인정보 처리까지. 숫자와 조건에 관한 질문을 모았습니다.",
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

// 사이트 안내 링크(noscript 블록 하단에 붙는 내부 링크). 크롤러가 JS 없이도 경로를 찾도록 돕습니다.
const NAV_LINKS = [
  ['수수료·지급률 비교 가이드', '/fee-guide/'],
  ['안전한 업체 선택 체크리스트', '/checklist/'],
  ['진짜 후기 vs 가짜 후기 구별법', '/authentic-review/'],
  ['이용 방법', '/how-to-use/'],
  ['자주 묻는 질문', '/faq/'],
  ['개인정보처리방침', '/privacy/'],
  ['이용약관', '/terms/'],
];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 라우트 → 최종 URL. 루트는 "/" 하나만, 나머지는 항상 끝에 "/" (canonical·sitemap과 같은 형태)
function pageUrl(route) {
  return route === '/' || route === '' ? SITE + '/' : SITE + route + '/';
}

// <meta name|property="key" content="..."> 값을 태그 서식(줄바꿈·속성 순서)에 상관없이 교체
function setMetaContent(html, key, value) {
  return html.replace(/<meta\b[^>]*>/gi, (tag) => {
    const keyMatch = tag.match(/(?:name|property)\s*=\s*"([^"]*)"/i);
    if (!keyMatch || keyMatch[1] !== key) return tag;
    if (/\bcontent\s*=\s*"/i.test(tag)) {
      return tag.replace(/(\bcontent\s*=\s*")[^"]*(")/i, '$1' + value + '$2');
    }
    return tag.replace(/\s*\/?>$/, (end) => ' content="' + value + '"' + end);
  });
}

function setCanonical(html, url) {
  return html.replace(/<link\b[^>]*rel\s*=\s*"canonical"[^>]*>/gi, (tag) => {
    if (/\bhref\s*=\s*"/i.test(tag)) return tag.replace(/(\bhref\s*=\s*")[^"]*(")/i, '$1' + url + '$2');
    return tag.replace(/\s*\/?>$/, (end) => ' href="' + url + '"' + end);
  });
}

function breadcrumbLd(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c[0], item: SITE + c[1],
    })),
  });
}

// FAQ 페이지의 질문/답변을 페이지 소스에서 그대로 읽어 FAQPage 구조화 데이터를 만듭니다.
// (답변이 JSX로 되어 있는 항목은 건너뛰고, 문자열로 된 항목만 넣습니다.)
function readFaqPairs(file) {
  if (!fs.existsSync(file)) return [];
  const source = fs.readFileSync(file, 'utf-8');
  const re = /q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*\n?\s*a:\s*"((?:[^"\\]|\\.)*)"/g;
  const pairs = [];
  let m;
  while ((m = re.exec(source)) !== null) {
    const q = m[1].replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
    const a = m[2].replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
    if (q && a) pairs.push({ q, a });
  }
  return pairs;
}

const faqLd = () => {
  const pairs = readFaqPairs(path.resolve(process.cwd(), 'src/pages/FAQ.tsx'));
  if (pairs.length === 0) return null;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map((p) => ({
      '@type': 'Question',
      name: p.q,
      acceptedAnswer: { '@type': 'Answer', text: p.a },
    })),
  });
};

// JS를 실행하지 않는 환경에서 보이는 최소 안내문 (디자인 CSS를 쓰지 않고 인라인 스타일만 사용)
function noscriptBlock(route, heading, description) {
  const selfPath = route === '/' ? '/' : route + '/';
  const links = NAV_LINKS
    .filter(([, href]) => href !== selfPath)
    .map(([label, href]) => `          <li><a href="${href}">${esc(label)}</a></li>`)
    .join('\n');
  return `<!--seo-noscript-start-->
    <noscript>
      <div style="max-width: 720px; margin: 56px auto; padding: 0 24px; font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; color: #0b1117; line-height: 1.75">
        <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 12px">${esc(heading)}</h1>
        <p style="margin: 0 0 18px; color: #45525f">${esc(description)}</p>
        <p style="margin: 0 0 6px; font-size: 13px; font-weight: 600; color: #334155">정리해 둔 안내</p>
        <ul style="margin: 0; padding-left: 18px; font-size: 14px">
${links}
        </ul>
        <p style="margin: 18px 0 0; font-size: 13px; color: #64748b">${esc(BRAND)} · 숫자로 확인하는 조건 · 채널톡 1:1 상담 24시간 · 전화 010-2138-0790</p>
      </div>
    </noscript>
    <!--seo-noscript-end-->`;
}

function inject(html, route, m) {
  const title = esc(m.title);
  const desc = esc(m.description);
  const url = pageUrl(route);
  const canonicalUrl = pageUrl(m.canonical || route);
  const heading = m.heading ?? m.crumbs[m.crumbs.length - 1][0];
  let out = html;

  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  out = setMetaContent(out, 'description', desc);
  out = setCanonical(out, canonicalUrl);
  out = setMetaContent(out, 'og:title', title);
  out = setMetaContent(out, 'og:description', desc);
  out = setMetaContent(out, 'og:url', canonicalUrl);
  out = setMetaContent(out, 'twitter:title', title);
  out = setMetaContent(out, 'twitter:description', desc);

  // 구조화 데이터: BreadcrumbList + (FAQ 페이지) FAQPage
  const blocks = ['<script type="application/ld+json">' + breadcrumbLd(m.crumbs) + '<\/script>'];
  if (route === '/faq') {
    const faq = faqLd();
    if (faq) blocks.push('<script type="application/ld+json">' + faq + '<\/script>');
  }
  out = out.replace('</head>', blocks.join('\n    ') + '</head>');

  // noscript 안내문: 홈페이지에 심어둔 구간을 라우트별 문구로 교체
  const block = noscriptBlock(route, heading, m.description);
  if (/<!--seo-noscript-start-->[\s\S]*?<!--seo-noscript-end-->/.test(out)) {
    out = out.replace(/<!--seo-noscript-start-->[\s\S]*?<!--seo-noscript-end-->/, block);
  } else {
    out = out.replace('<div id="root"></div>', '<div id="root"></div>\n    ' + block);
  }
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with static meta, structured data and noscript body.');
