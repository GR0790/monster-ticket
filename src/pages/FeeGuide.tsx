import type React from "react";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, PageHero, SectionHead } from "../components/ui";
import { CheckGlyph } from "../components/icons";
import { feeRows } from "../data/site";

const faqData = [
  {
    question: "지급률과 수수료는 어떻게 다른가요?",
    answer:
      "지급률은 결제 금액 대비 실제로 돌려받는 금액의 비율이고, 수수료율은 100%에서 지급률을 뺀 값입니다. 예를 들어 지급률 80%는 수수료율 20%와 같은 말입니다. 업체마다 '지급률'과 '수수료율' 중 하나만 강조해 표기하는 경우가 많으니, 두 수치를 함께 확인해야 헷갈리지 않습니다.",
  },
  {
    question: "지급률이 높다고 광고하는 곳은 믿어도 되나요?",
    answer:
      "일반 결제 기준으로 상시 높은 지급률을 앞세우는 경우는 조건이 붙는 경우가 많습니다. 통신사 정책, 결제 수단 수수료, 운영비를 고려하면 일반적인 지급률은 70~85% 수준에서 형성됩니다. 상담 초반에 안내받은 조건을 채팅 기록으로 남겨두는 것이 안전합니다.",
  },
  {
    question: "정책 위반이나 미납 상태면 지급률이 달라지나요?",
    answer:
      "정책 위반(과다 결제, 반복 이용 등)이나 미납 이력이 있으면 일반 지급률보다 낮게 책정되는 것이 일반적입니다. 업체별로 편차가 크기 때문에, 본인의 결제 상태를 먼저 밝히고 정확한 지급률을 안내받은 뒤 진행 여부를 결정하는 것이 좋습니다.",
  },
  {
    question: "여러 곳의 지급률을 비교할 때 무엇을 기준으로 봐야 하나요?",
    answer:
      "같은 결제수단, 같은 금액대, 같은 통신사 조건으로 비교해야 정확합니다. 결제수단별로 지급률이 다르고 금액 구간별 차등을 적용하는 곳도 있으므로, 광고 문구보다 본인 상황에 맞는 실제 견적을 문의해 비교하는 것이 정확합니다.",
  },
  {
    question: "사이트에 표시된 참고 구간은 확정 금액인가요?",
    answer:
      "아닙니다. 참고 구간은 일반적으로 형성되는 범위를 정리한 것이며, 실제 조건은 결제수단과 금액, 통신사·카드사·발행사 정책에 따라 달라집니다. 확정 조건은 상담에서 확인한 뒤 안내드립니다.",
  },
];

const methodNotes = [
  {
    title: "휴대폰 소액결제",
    body: "통신사 소액결제 한도 안에서 상품권을 구매하는 방식입니다. 통상 70~85% 구간에서 형성되며, 정책 위반이나 미납 이력이 있으면 낮아질 수 있습니다.",
  },
  {
    title: "정보이용료",
    body: "앱 마켓에서 사용하는 별도 한도로 게임 재화나 디지털 아이템을 구매합니다. 스토어와 게임, 결제 한도에 따라 조건이 달라집니다.",
  },
  {
    title: "신용카드",
    body: "카드사·결제대행사 수수료가 함께 발생하는 구조라 소액결제보다 낮게 형성되는 경우가 많습니다. 카드사별 편차가 있어 개별 확인이 필요합니다.",
  },
  {
    title: "상품권 매입",
    body: "문화상품권·모바일 상품권 등은 매입 시세가 유통 상황에 따라 매일 조금씩 바뀝니다. 같은 브랜드라도 시점에 따라 조건이 달라집니다.",
  },
];

const order = [
  "본인의 결제수단·금액·미납 여부를 먼저 정리한다",
  "동일한 조건으로 2~3곳에 실제 견적(지급률)을 문의한다",
  "안내받은 지급률과 수수료를 채팅 기록으로 남긴다",
  "진행 전 실수령액을 다시 한 번 계산해 확인한다",
];

const FeeGuide: React.FC = () => (
  <>
    <SEO
      title="수수료·지급률 비교 가이드"
      description="상품권 매입과 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매의 지급률 계산법과 결제수단별 참고 구간, 실제 견적을 비교하는 순서를 정리했습니다."
      keywords="상품권 지급률, 수수료 비교, 소액결제 지급률, 상품권 매입 수수료"
      faqItems={faqData}
    />
    <PageHero
      eyebrow="Guide 01 — Fee & rate"
      title={
        <>
          수수료·지급률,
          <br />
          이렇게 비교하세요.
        </>
      }
      lead="'최고 지급률'이라는 광고만 보고 결정하면 나중에 조건이 달라져 실망하기 쉽습니다. 계산법과 비교 기준을 먼저 알아두면 상담이 훨씬 수월해집니다."
      crumbs={[{ label: "수수료·지급률 비교 가이드" }]}
    />

    <div className="wrap py-16 md:py-20">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <section>
          <p className="eyebrow mb-4">Calculation</p>
          <h2 className="display-section">지급률·수수료율 계산법</h2>
          <p className="lead mt-5">
            <strong className="font-semibold text-ink">지급률</strong>은 결제한 금액 대비 실제로 돌려받는 금액의
            비율입니다. 공식은 간단합니다.
          </p>

          <div className="mt-8 border border-line bg-frost p-6 md:p-7" style={{ borderRadius: 4 }}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-muted">공식</p>
            <p className="mt-3 text-[1.12rem] font-bold text-ink">
              실수령액 = 결제 금액 <span className="text-mint">×</span> 지급률
            </p>
            <p className="mt-2 text-[13px] text-ink-soft">예) 30만원 결제 · 지급률 78% → 234,000원</p>
            <div className="mt-5 grid gap-3 border-t border-line pt-5 sm:grid-cols-2">
              <div>
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-mint-deep">지급률 78%</p>
                <p className="mt-1 text-[12.5px] text-ink-soft">30만원 → 234,000원</p>
              </div>
              <div>
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-mint-deep">수수료율 22%</p>
                <p className="mt-1 text-[12.5px] text-ink-soft">30만원 → 66,000원</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[13.5px] leading-[1.9] text-ink-soft">
            반대로 수수료율은 <strong className="font-semibold text-ink">100% − 지급률</strong>로 계산합니다. 업체
            광고에서 지급률만 강조하거나 수수료율만 강조하는 경우가 있으니, 상담 시 두 표현을 모두 요청해 실제 받을
            금액을 직접 계산해보는 것이 가장 정확합니다.
          </p>

          <div className="mt-8 border border-line bg-white p-6" style={{ borderRadius: 4 }}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-muted">주의할 광고 문구</p>
            <ul className="mt-4 space-y-2.5 text-[13px] leading-relaxed text-ink-soft">
              {[
                "수수료율만 크게 쓰고 지급률은 표시하지 않는 경우",
                "금액 구간별 조건을 상담 후에야 알려주는 경우",
                "'최고 조건'이라는 표현만 있고 숫자가 없는 경우",
                "결제 직전에 조건이 바뀌는 경우",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-[3px] text-mint">
                    <CheckGlyph />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <p className="eyebrow mb-4">Reference range</p>
          <h2 className="display-section">결제수단별 참고 구간</h2>
          <p className="lead mt-5">
            같은 금액이라도 결제수단과 상태에 따라 조건이 달라집니다. 아래 표는 일반적인 참고 범위입니다.
          </p>

          <div className="card mt-8 overflow-hidden">
            <div className="flex items-center justify-between border-b border-line bg-frost px-5 py-3.5">
              <p className="text-[12.5px] font-semibold text-ink">결제수단</p>
              <p className="num text-[11.5px] font-semibold text-ink-muted">참고 구간</p>
            </div>
            <ul className="divide-y divide-line">
              {feeRows.map((row) => (
                <li key={row.method} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[13px] font-semibold text-ink">{row.method}</p>
                    <p className="num shrink-0 text-[12.5px] font-semibold text-mint-deep">{row.range}</p>
                  </div>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{row.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-[11.5px] leading-relaxed text-ink-muted">
            표시된 구간은 확정 금액이 아닙니다. 실제 조건은 상담에서 확인한 뒤 안내드립니다.
          </p>

          <div className="mt-10 grid gap-4">
            {methodNotes.map((m) => (
              <div key={m.title} className="border-l-2 border-mint/50 pl-4">
                <h3 className="text-[13.5px] font-semibold text-ink">{m.title}</h3>
                <p className="mt-1 text-[12.5px] leading-[1.8] text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-20 border-t border-line pt-16">
        <SectionHead
          eyebrow="Compare in order"
          title="비교할 때 이 순서로 확인하세요"
          lead="같은 조건으로 비교하지 않으면 숫자가 달라 보입니다. 네 단계면 충분합니다."
        />
        <ol className="mt-10 grid gap-px border border-line bg-line md:grid-cols-4">
          {order.map((t, i) => (
            <li key={t} className="bg-white p-6">
              <span className="num text-[11px] font-semibold tracking-[0.24em] text-mint-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[13px] leading-[1.8] text-ink-soft">{t}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 border-t border-line pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHead eyebrow="FAQ" title="자주 묻는 질문" />
          <ArrowLink to="/checklist" className="mt-6">
            이어서 안전 체크리스트 보기
          </ArrowLink>
        </div>
        <Accordion items={faqData} />
      </section>
    </div>

    <CTABand
      title="내 조건으로 계산해 보세요."
      body="결제수단과 금액, 미납 여부를 알려주시면 지급률과 수수료를 숫자로 안내드립니다. 상담은 무료입니다."
    />
  </>
);

export default FeeGuide;
