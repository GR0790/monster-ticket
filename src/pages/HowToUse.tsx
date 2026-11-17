import type React from "react";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, PageHero, SectionHead } from "../components/ui";
import { CheckGlyph, ServiceGlyph } from "../components/icons";
import { services, site, steps } from "../data/site";

const faqData = [
  {
    question: "상담을 시작하려면 무엇이 필요한가요?",
    answer:
      "성함과 휴대폰 번호만 있으면 됩니다. 상담창이 열린 뒤 상품권 종류나 결제 방법, 금액을 알려주시면 확인해 안내드립니다.",
  },
  {
    question: "상담만 받고 진행하지 않아도 되나요?",
    answer:
      "네. 가능 범위와 조건을 확인하는 것까지는 비용이 들지 않고, 진행 여부를 결정하지 않으셔도 됩니다. 조건을 확인한 뒤 동의하신 경우에만 다음 단계로 진행합니다.",
  },
  {
    question: "상담 기록은 남나요?",
    answer:
      "채널톡 대화에 상담 내용과 안내한 조건이 남습니다. 구두로만 진행하지 않으므로, 나중에 같은 내용을 다시 확인할 수 있습니다.",
  },
  {
    question: "이용이 어려운 경우도 있나요?",
    answer:
      "타인 명의 휴대폰·카드, 출처가 확인되지 않은 상품권, 확인되지 않은 결제 상태는 진행하지 않습니다. 가능 여부를 먼저 확인하고 이유를 설명드립니다.",
  },
];

const prepared = [
  {
    title: "성함과 휴대폰 번호",
    body: "상담 응대와 고객 식별에만 사용합니다. 최초 1회 입력하면 다음 상담부터는 자동으로 연결됩니다.",
  },
  {
    title: "상품권 종류 또는 결제 방법",
    body: "모바일 상품권인지, 휴대폰 결제인지 카드 결제인지에 따라 확인 항목이 달라집니다.",
  },
  {
    title: "금액과 현재 상태",
    body: "결제 예정 금액과 미납·정책 상태를 알려주시면 실제 조건을 정확하게 안내할 수 있습니다.",
  },
];

const cautions = [
  {
    title: "감당하기 어려운 결제는 권하지 않습니다",
    body: "상품권 구매 금액은 다음 달 청구서에 반영될 수 있습니다. 지금의 한도와 사용 계획을 기준으로 가능한 범위를 함께 정리합니다.",
  },
  {
    title: "타인 명의는 진행하지 않습니다",
    body: "가족이나 지인의 휴대폰·카드를 빌려 진행하는 방식은 안내하지 않습니다. 명의자 본인 확인이 필요합니다.",
  },
  {
    title: "필요한 정보만 확인합니다",
    body: "주민등록번호, 비밀번호, 인증번호 전체를 요구하지 않습니다. 상담에 필요한 최소한의 정보만 확인합니다.",
  },
  {
    title: "확인되지 않은 상품권은 진행하지 않습니다",
    body: "출처가 확인되지 않거나 타인 명의로 발행된 상품권은 매입하지 않습니다.",
  },
];

const HowToUse: React.FC = () => (
  <>
    <SEO
      title="이용 방법 — 네 단계 안내"
      description="몬스터티켓 이용 방법 안내입니다. 상담 정보 입력부터 내용 확인, 조건 안내, 동의 후 진행까지 네 단계로 정리했습니다. 상품권 매입과 결제 구매 절차를 확인하세요."
      keywords="몬스터티켓 이용 방법, 상품권 매입 절차, 채널톡 상담, 결제 구매 절차"
      faqItems={faqData}
    />
    <PageHero
      eyebrow="How to use"
      title={
        <>
          복잡한 절차는 없습니다.
          <br />
          네 단계면 충분합니다.
        </>
      }
      lead="상담 접수에서 끝나지 않고, 조건 안내와 진행 확인까지 이어집니다. 각 단계에서 확인하는 내용을 미리 알아두면 상담이 짧아집니다."
      crumbs={[{ label: "이용 방법" }]}
      meta={
        <div className="flex flex-wrap gap-2">
          <span className="chip">상담 무료</span>
          <span className="chip">{site.hours}</span>
          <span className="chip">
            <span className="num">전화 {site.phone}</span>
          </span>
        </div>
      }
    />

    <div className="wrap py-16 md:py-20">
      <section>
        <SectionHead eyebrow="Step by step" title="진행 순서" lead="각 단계에서 무엇을 확인하는지 정리했습니다." />
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {steps.map((s) => (
            <li key={s.no} className="grid gap-4 py-8 sm:grid-cols-[88px_1fr] sm:gap-8">
              <div className="flex items-start gap-3">
                <span className="num text-[13px] font-semibold tracking-[0.2em] text-mint-deep">{s.no}</span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold tracking-[-0.01em] text-ink">{s.title}</h3>
                <p className="mt-2 max-w-2xl text-[13.5px] leading-[1.9] text-ink-soft">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-line bg-frost px-6 py-5">
          <p className="text-[13px] text-ink-soft">상담창은 우측 하단 버튼이나 각 페이지의 상담 버튼으로 열 수 있습니다.</p>
          <ArrowLink to="/faq">자주 묻는 질문 보기</ArrowLink>
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-4">Prepare</p>
          <h2 className="display-section">준비할 것 세 가지</h2>
          <ul className="mt-8 space-y-6">
            {prepared.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <span className="mt-1 text-mint">
                  <CheckGlyph className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-[14.5px] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.85] text-ink-soft">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">By method</p>
          <h2 className="display-section">방법별로 확인하는 것</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {services.map((s) => (
              <li key={s.no} className="flex items-start gap-3 py-4">
                <span className="mt-0.5 shrink-0 text-ink-muted">
                  <ServiceGlyph name={s.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[13.5px] font-semibold text-ink">{s.title}</p>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-ink-muted">{s.check}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-16">
        <SectionHead
          eyebrow="Before you proceed"
          title="진행 전에 알아두실 점"
          lead="아래 항목은 몬스터티켓이 지키는 기준입니다."
        />
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
          {cautions.map((c) => (
            <div key={c.title} className="bg-white p-6 md:p-7">
              <h3 className="text-[14px] font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.85] text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-t border-line pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHead eyebrow="FAQ" title="자주 묻는 질문" />
        </div>
        <Accordion items={faqData} />
      </section>
    </div>

    <CTABand
      title="준비되셨다면, 상담부터."
      body="성함과 연락처만 남기면 채널톡 1:1 상담창이 열립니다. 조건 확인까지는 무료입니다."
    />
  </>
);

export default HowToUse;
