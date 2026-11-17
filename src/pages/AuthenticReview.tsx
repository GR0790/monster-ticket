import type React from "react";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, PageHero, SectionHead } from "../components/ui";

const faqData = [
  {
    question: "짧고 비슷한 후기가 많으면 무조건 가짜인가요?",
    answer:
      "단정할 수는 없지만 의심해볼 신호입니다. 실제 이용자 후기는 금액, 소요 시간, 상담원 응대 태도 등 구체적인 디테일이 섞여 있는 경우가 많습니다. 반대로 '빠르고 친절해요', '만족합니다' 같은 짧고 유사한 문장이 한 기간에 몰려 게시되면 조작 가능성을 의심해볼 필요가 있습니다.",
  },
  {
    question: "평점이 너무 높기만 하면 이상한 건가요?",
    answer:
      "정상적으로 운영되는 업체도 낮은 평점의 후기가 일부 섞여 있는 것이 자연스럽습니다. 부정적인 후기가 하나도 없이 최고점만 가득한 경우, 오히려 후기 관리(삭제)나 조작 가능성을 의심해볼 수 있습니다.",
  },
  {
    question: "후기 작성 시점이 몰려있는 것도 확인해야 하나요?",
    answer:
      "네. 특정 날짜에 후기가 대량으로 몰려 있다면 이벤트성으로 후기를 모았거나 조작했을 가능성이 있습니다. 시간이 흐르며 자연스럽게 쌓인 후기인지 날짜 분포를 살펴보는 것도 좋은 판단 기준입니다.",
  },
  {
    question: "제3자 플랫폼 후기는 더 믿을 만한가요?",
    answer:
      "업체가 직접 운영하는 홈페이지 후기보다는, 블로그·카페·커뮤니티처럼 업체가 직접 관리하기 어려운 채널의 후기가 상대적으로 신뢰도가 높은 편입니다. 다만 이런 채널에도 광고성 게시글이 섞여 있을 수 있으니, 작성자의 다른 게시물 이력이나 계정 활동을 함께 살펴보는 것이 좋습니다.",
  },
];

const signals = [
  {
    title: "내용이 짧고 비슷하다",
    body: "'빠르고 친절해요', '만족합니다'처럼 구체적 정보 없이 짧은 문장이 반복되면 의심해볼 신호입니다. 실제 후기는 금액, 소요 시간, 상담 과정 등 디테일이 섞여 있는 경우가 많습니다.",
  },
  {
    title: "부정적인 후기가 전혀 없다",
    body: "모든 후기가 최고점이라면 자연스러운 분포라기보다 후기 관리나 조작 가능성을 의심해볼 수 있습니다.",
  },
  {
    title: "특정 날짜에 몰려 있다",
    body: "짧은 기간에 후기가 대량으로 게시됐다면 이벤트성 후기 모집이나 조작 가능성이 있습니다. 날짜 분포를 살펴보는 습관이 도움이 됩니다.",
  },
  {
    title: "업체가 직접 관리하는 채널뿐이다",
    body: "자사 홈페이지 후기만 있고 제3자 채널에서 언급을 찾기 어렵다면 신뢰도를 조금 더 보수적으로 판단하는 것이 좋습니다.",
  },
];

const ways = [
  "업체 홈페이지 외에 제3자 채널(커뮤니티·블로그·SNS)에서도 검색해본다",
  "후기 작성자의 다른 게시물이나 활동 이력을 함께 확인한다",
  "긍정·부정 후기가 골고루 섞여 있는지 평점 분포를 살펴본다",
  "후기 작성 날짜가 자연스럽게 분산되어 있는지 확인한다",
];

const AuthenticReview: React.FC = () => (
  <>
    <SEO
      title="진짜 후기 vs 가짜 후기 구별법"
      description="상품권 매입·결제 구매 업체 후기 중 조작된 후기의 특징과 신뢰할 수 있는 후기를 구별하는 방법을 정리했습니다. 평점 분포, 작성 패턴, 채널별 신뢰도 확인 기준을 안내합니다."
      keywords="후기 구별법, 가짜 후기, 상품권 매입 후기, 업체 후기 신뢰도"
      faqItems={faqData}
    />
    <PageHero
      eyebrow="Guide 03 — Authentic review"
      title={
        <>
          그 후기,
          <br />
          진짜일까요?
        </>
      }
      lead="업체를 검색하면 좋은 후기만 가득한 경우가 많습니다. 조작된 후기의 특징을 알아두면 판단이 쉬워집니다."
      crumbs={[{ label: "진짜 후기 vs 가짜 후기 구별법" }]}
    />

    <div className="wrap py-16 md:py-20">
      <section>
        <SectionHead
          eyebrow="Signals"
          title="조작된 후기의 흔한 특징"
          lead="하나만으로 단정할 수는 없습니다. 여러 신호가 겹칠 때 판단하세요."
        />
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
          {signals.map((s, i) => (
            <div key={s.title} className="bg-white p-7">
              <span className="num text-[11px] font-semibold tracking-[0.24em] text-mint-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-[14.5px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.85] text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">How to verify</p>
          <h2 className="display-section">
            신뢰할 수 있는
            <br />
            후기를 찾는 방법
          </h2>
          <p className="lead mt-5">
            후기는 참고 자료입니다. 조건과 절차를 직접 확인하는 것이 가장 확실합니다.
          </p>
          <ArrowLink to="/checklist" className="mt-6">
            안전 체크리스트 보기
          </ArrowLink>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {ways.map((w, i) => (
            <li key={w} className="flex items-start gap-4 py-5">
              <span className="num shrink-0 text-[12px] font-semibold text-mint-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[13.5px] leading-[1.85] text-ink-soft">{w}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 border-t border-line pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHead eyebrow="FAQ" title="자주 묻는 질문" />
        </div>
        <Accordion items={faqData} />
      </section>
    </div>

    <CTABand
      title="후기보다 조건을 먼저 확인하세요."
      body="상담창에서 지급률과 수수료, 진행 절차를 숫자로 확인할 수 있습니다. 확인한 조건은 채팅 기록으로 남습니다."
    />
  </>
);

export default AuthenticReview;
