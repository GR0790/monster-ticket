import type React from "react";
import SEO from "../components/SEO";
import { Accordion, ArrowLink, CTABand, PageHero } from "../components/ui";

const groups = [
  {
    title: "기본 안내",
    items: [
      {
        q: "몬스터티켓은 어떤 사이트인가요?",
        a: "상품권 매입과 휴대폰 소액결제·신용카드 상품권 구매, 정보이용료 게임재화 구매의 절차를 안내하는 사이트입니다. 사이트에서 금액을 약속하지 않고, 상담에서 조건을 확인해 안내한 뒤 동의하신 경우에만 진행합니다.",
      },
      {
        q: "상담은 무료인가요?",
        a: "네. 내용 확인과 조건 안내까지는 비용이 들지 않습니다. 실제 진행을 결정할 때 금액과 조건을 다시 확인하고 동의를 받습니다.",
      },
      {
        q: "상담 가능한 시간이 정해져 있나요?",
        a: "채널톡 1:1 상담은 24시간 접수됩니다. 전화 상담도 같은 번호(010-2138-0790)로 연결됩니다.",
      },
      {
        q: "상품권 매입과 상품권 구매는 어떻게 다른가요?",
        a: "매입은 이미 보유한 상품권의 종류와 잔액을 확인해 정리하는 절차이고, 구매는 휴대폰 결제나 카드 결제로 상품권을 새로 구매하는 절차입니다. 확인 항목과 조건이 다릅니다.",
      },
    ],
  },
  {
    title: "이용 방법",
    items: [
      {
        q: "어떻게 시작하면 되나요?",
        a: "화면 우측 하단의 '24시간 1:1 상담' 버튼을 누르고 성함과 휴대폰 번호를 입력하시면 채널톡 상담창이 바로 열립니다. 최초 1회만 입력하면 다음부터는 자동으로 연결됩니다.",
      },
      {
        q: "상담에서 어떤 내용을 확인하나요?",
        a: "상품권 종류나 결제 방법, 금액과 현재 상태(미납·정책 여부)를 확인합니다. 확인된 내용을 기준으로 가능 범위와 지급률, 수수료, 절차를 안내합니다.",
      },
      {
        q: "상담만 받고 진행하지 않아도 되나요?",
        a: "네. 조건을 확인한 뒤 진행 여부를 결정하시면 됩니다. 비교를 위해 다른 곳의 조건도 함께 확인하시길 권합니다.",
      },
      {
        q: "진행은 얼마나 걸리나요?",
        a: "확인이 필요한 항목이 많을수록 시간이 달라집니다. 상담에서 예상 순서와 소요 시간을 구체적으로 안내합니다.",
      },
    ],
  },
  {
    title: "상품권 매입",
    items: [
      {
        q: "어떤 상품권을 매입할 수 있나요?",
        a: "모바일 상품권과 기프트카드, 문화·도서 상품권 등을 상담할 수 있습니다. 발행사와 잔액, 유효기간을 알려주시면 진행 가능 여부를 확인해 안내합니다.",
      },
      {
        q: "일부 사용한 상품권도 상담되나요?",
        a: "잔액이 남아 있다면 상담할 수 있습니다. 다만 잔액 확인 방법과 처리 가능 범위가 발행사마다 다르므로, 먼저 잔액과 사용 이력을 확인합니다.",
      },
      {
        q: "유효기간이 지난 상품권도 되나요?",
        a: "발행사 정책에 따라 처리가 제한됩니다. 상담은 가능하지만 가능 여부를 먼저 확인해 안내하며, 어려운 경우에는 이유를 설명합니다.",
      },
      {
        q: "상품권을 먼저 보내야 하나요?",
        a: "아니요. 종류와 잔액 확인, 조건 안내가 먼저입니다. 진행이 확정된 뒤에 필요한 절차와 순서를 안내합니다.",
      },
    ],
  },
  {
    title: "결제 구매",
    items: [
      {
        q: "휴대폰 소액결제 한도는 어떻게 확인하나요?",
        a: "통신사 앱이나 고객센터에서 남은 한도를 확인할 수 있습니다. 한도는 요금제와 가입 기간, 이용 이력에 따라 달라지며, 사이트에서 조정할 수 없습니다.",
      },
      {
        q: "결제 금액은 언제 청구되나요?",
        a: "휴대폰 결제 금액은 다음 달 통신요금에 합산됩니다. 청구 시점과 납부 기한은 통신사 기준을 따르므로 상담에서 함께 확인해 드립니다.",
      },
      {
        q: "신용카드 할부는 어떻게 확인하나요?",
        a: "할부 개월과 수수료는 카드사 정책에 따라 달라집니다. 월 납부액만 보지 말고 수수료를 포함한 총액을 기준으로 판단하시길 권하며, 상담에서 총액을 안내합니다.",
      },
      {
        q: "게임 재화 구매 후 환불이 되나요?",
        a: "게임 재화는 계정에 귀속되어 사용 후에는 환불이 제한됩니다. 사용 전이라도 스토어와 게임사 정책에 따르므로 결제 전에 기준을 확인해 안내합니다.",
      },
    ],
  },
  {
    title: "안전 · 개인정보",
    items: [
      {
        q: "상담할 때 어떤 정보를 입력하나요?",
        a: "성함과 휴대폰 번호만 입력합니다. 상담 응대와 고객 식별에만 사용하며, 개인정보 수집·이용에 동의한 경우에만 진행됩니다.",
      },
      {
        q: "주민등록번호나 비밀번호도 필요한가요?",
        a: "아니요. 주민등록번호, 비밀번호, 인증번호 전체를 요구하지 않습니다. 필요한 정보만 확인하며, 그 외 정보를 요구하는 연락은 받지 않습니다.",
      },
      {
        q: "타인 명의로도 이용할 수 있나요?",
        a: "명의자 본인 확인이 필요합니다. 가족이나 지인의 휴대폰·카드를 빌려 진행하는 방식은 안내하지 않습니다.",
      },
      {
        q: "안전한 업체인지 어떻게 판단하나요?",
        a: "사업자등록 조회, 지급률·수수료의 명확한 안내, 선입금 요구 여부, 정산 절차 설명, 결정 재촉 여부, 상담 채널의 안정성 — 여섯 가지를 확인하세요. 안전 체크리스트에 정리해 두었습니다.",
      },
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

const FAQ: React.FC = () => (
  <>
    <SEO
      title="자주 묻는 질문"
      description="지급률과 수수료 계산, 참고 구간과 확정 금액의 차이, 상담 준비물, 개인정보 처리까지. 숫자와 조건에 관한 질문을 모았습니다."
      keywords="몬스터티켓 FAQ, 상품권 매입 질문, 소액결제 한도, 상담 방법"
      faqItems={allItems.map((i) => ({ question: i.q, answer: i.a }))}
    />
    <PageHero
      eyebrow="FAQ"
      title="자주 묻는 질문"
      lead="상담 전에 미리 확인하면 더 빠릅니다. 다섯 가지 주제로 정리했습니다."
      crumbs={[{ label: "자주 묻는 질문" }]}
    />

    <div className="wrap py-16 md:py-20">
      <div className="grid gap-14 lg:grid-cols-[220px_1fr] lg:gap-16">
        <nav aria-label="FAQ 주제" className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow mb-4">Topics</p>
          <ul className="space-y-1 border-l border-line">
            {groups.map((g, i) => (
              <li key={g.title}>
                <a
                  href={`#faq-${i}`}
                  className="block border-l-2 border-transparent py-2 pl-4 text-[13px] text-ink-soft transition-colors hover:border-mint hover:text-mint-deep"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 border border-line bg-frost p-4">
            <p className="text-[12px] leading-relaxed text-ink-soft">찾는 답이 없다면 상담창에 바로 물어보세요.</p>
            <ArrowLink to="/how-to-use" className="mt-3">
              이용 방법 보기
            </ArrowLink>
          </div>
        </nav>

        <div className="space-y-14">
          {groups.map((g, i) => (
            <section key={g.title} id={`faq-${i}`} className="scroll-mt-24">
              <div className="mb-6 flex items-baseline gap-3">
                <span className="num text-[11px] font-semibold tracking-[0.24em] text-mint-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-[1.15rem] font-bold tracking-[-0.02em] text-ink">{g.title}</h2>
              </div>
              <Accordion items={g.items} />
            </section>
          ))}
        </div>
      </div>
    </div>

    <CTABand
      title="질문이 남아 있다면, 상담으로."
      body="채널톡 1:1 상담은 24시간 접수됩니다. 상품권 종류나 결제 방법을 알려주시면 확인해 안내드립니다."
    />
  </>
);

export default FAQ;
