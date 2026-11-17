import type React from "react";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, PageHero, SectionHead } from "../components/ui";
import { checklistItems } from "../data/site";

const faqData = [
  {
    question: "사업자등록번호는 어떻게 확인하나요?",
    answer:
      "국세청 홈택스의 '사업자등록상태조회' 메뉴에서 업체가 안내한 사업자등록번호를 조회하면 정상 사업자인지, 휴폐업 상태인지 확인할 수 있습니다. 상담 중 사업자등록번호 안내를 꺼리거나 조회되지 않는 번호를 제시하는 곳은 이용하지 않는 것이 안전합니다.",
  },
  {
    question: "선입금을 요구하면 무조건 사기인가요?",
    answer:
      "정상적인 절차는 상품권 구매나 매입을 먼저 진행한 뒤 그 내역을 확인해 정산하는 방식입니다. 반대로 '수수료 선입금', '보증금' 명목으로 돈을 먼저 요구하는 경우는 전형적인 사기 수법이므로 즉시 거래를 중단해야 합니다.",
  },
  {
    question: "상담원이 지나치게 빠른 결정을 재촉하면 어떻게 해야 하나요?",
    answer:
      "'지금 안 하면 지급률이 내려간다', '한도가 곧 사라진다'는 식으로 즉각적인 결정을 압박하는 것은 흔한 유도 수법입니다. 정상 업체라면 고객이 충분히 비교하고 판단할 시간을 존중합니다. 압박이 느껴진다면 잠시 대화를 멈추고 다른 곳과 비교해보세요.",
  },
  {
    question: "후기가 아예 없는 신생 업체는 무조건 피해야 하나요?",
    answer:
      "신생 업체라고 무조건 위험한 것은 아니지만, 판단할 근거가 부족한 것은 사실입니다. 운영 기간이 짧다면 사업자등록 여부, 상담 응대의 전문성, 정산 방식의 투명성을 더 꼼꼼히 확인하고, 처음에는 소액으로 거래를 해보는 것이 위험을 줄이는 방법입니다.",
  },
];

const warnings = [
  "결제 전에 '수수료 먼저 입금해달라'고 요구하는 경우",
  "사업자등록번호를 알려주지 않거나, 조회했을 때 없는 번호인 경우",
  "실제 지급률보다 훨씬 높은 수치를 먼저 제시한 뒤 결제 직전 조건을 바꾸는 경우",
  "카카오톡·문자 등 특정 채널로만 연락을 유도하고 상담 기록을 남기지 않으려는 경우",
  "'지금 아니면 안 된다'는 식으로 비교할 시간을 주지 않고 압박하는 경우",
];

const Checklist: React.FC = () => (
  <>
    <SEO
      title="안전한 업체 선택 체크리스트"
      description="상품권 매입과 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매 업체를 고를 때 반드시 확인해야 할 6가지 체크포인트와 사기 패턴을 정리했습니다."
      keywords="상품권 매입 업체 체크리스트, 안전한 업체 선택, 상품권 거래 사기 예방"
      faqItems={faqData}
    />
    <PageHero
      eyebrow="Guide 02 — Safety checklist"
      title={
        <>
          거래 전,
          <br />
          이 6가지만 확인하세요.
        </>
      }
      lead="급한 마음에 놓치기 쉬운 부분들을 미리 체크리스트로 정리했습니다. 하나라도 걸린다면 진행을 멈추고 다른 곳과 비교하세요."
      crumbs={[{ label: "안전한 업체 선택 체크리스트" }]}
    />

    <div className="wrap py-16 md:py-20">
      <section>
        <SectionHead
          eyebrow="Six checkpoints"
          title="진행 전 확인 항목"
          lead="모두 확인할 필요는 없습니다. 다만 걸리는 항목이 있다면 그 이유를 먼저 물어보세요."
        />
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {checklistItems.map((item, i) => (
            <li key={item.title} className="grid gap-3 py-7 sm:grid-cols-[64px_1fr] sm:gap-6">
              <span className="num text-[13px] font-semibold tracking-[0.2em] text-mint-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold leading-snug text-ink">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.85] text-ink-soft">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">Warning signs</p>
          <h2 className="display-section">
            특히 주의해야 할
            <br />
            사기 패턴
          </h2>
          <p className="lead mt-5">
            아래 다섯 가지 중 하나라도 해당한다면, 조건이 좋아 보여도 진행하지 않는 것이 안전합니다.
          </p>
          <ArrowLink to="/authentic-review" className="mt-6">
            후기 구별법도 함께 보기
          </ArrowLink>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {warnings.map((w) => (
            <li key={w} className="flex items-start gap-3 py-5">
              <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <p className="text-[13.5px] leading-[1.85] text-ink-soft">{w}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 grid gap-10 border-t border-line pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHead eyebrow="FAQ" title="자주 묻는 질문" />
        </div>
        <Accordion items={faqData} />
      </section>
    </div>

    <CTABand
      title="확인이 끝났다면, 조건을 물어보세요."
      body="상품권 종류나 결제 방법을 알려주시면 진행 가능 여부와 조건을 먼저 안내드립니다. 확인 없이 결제를 요구하지 않습니다."
    />
  </>
);

export default Checklist;
