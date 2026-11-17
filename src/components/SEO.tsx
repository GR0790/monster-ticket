import React from "react";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  faqItems?: FAQItem[];
  noindex?: boolean;
}

const defaultKeywords =
  "몬스터티켓,상품권 매입,모바일 상품권 매입,휴대폰 소액결제 상품권 구매,신용카드 상품권 구매,정보이용료 게임재화 구매,상품권 지급률,수수료 비교,안전 체크리스트";

const siteUrl = "https://xn--z52bu9l3wk26b91c.com";

/**
 * 페이지별 메타데이터 + 구조화 데이터.
 * (사업자·평점 등 확인되지 않은 정보는 넣지 않습니다.)
 */
const SEO: React.FC<SEOProps> = ({ title, description, keywords, faqItems, noindex = false }) => {
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const canonicalUrl = typeof window !== "undefined" ? `${siteUrl}${window.location.pathname}` : `${siteUrl}/`;
  const fullTitle = `${title} | 몬스터티켓`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "몬스터티켓",
    url: siteUrl,
    inLanguage: "ko-KR",
    description:
      "상품권 매입과 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매 절차를 안내하는 사이트입니다.",
    publisher: {
      "@type": "Organization",
      name: "몬스터티켓",
      url: siteUrl,
      logo: `${siteUrl}/monster-mascot.webp`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+82-10-2138-0790",
        contactType: "customer service",
        availableLanguage: "Korean",
        hoursAvailable: "Mo-Su 00:00-24:00",
      },
    },
  };

  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="몬스터티켓" />
      <meta property="og:image" content={`${siteUrl}/monster-mascot.webp`} />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={canonicalUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/monster-mascot.webp`} />
      <meta name="twitter:image:alt" content={fullTitle} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </Helmet>
  );
};

export default SEO;
