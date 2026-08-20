import type React from "react";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const faqData = [
  {
    question: "사업자등록번호는 어떻게 확인하나요?",
    answer:
      "국세청 홈택스의 '사업자등록상태조회' 메뉴에서 업체가 안내한 사업자등록번호를 조회하면 정상 사업자인지, 휴폐업 상태인지 바로 확인할 수 있습니다. 상담 중 사업자등록번호 안내를 꺼리거나 조회가 안 되는 번호를 제시하는 곳은 이용하지 않는 것이 안전합니다.",
  },
  {
    question: "선입금을 요구하면 무조건 사기인가요?",
    answer:
      "현금화 거래의 정상적인 절차는 결제(상품권 구매 등)를 먼저 진행한 뒤 그 내역을 확인시켜 입금받는 방식입니다. 반대로 '수수료 선입금', '보증금' 명목으로 현금을 먼저 요구하는 경우는 전형적인 사기 수법이므로 즉시 거래를 중단해야 합니다.",
  },
  {
    question: "상담원이 지나치게 빠른 결정을 재촉하면 어떻게 해야 하나요?",
    answer:
      "'지금 안 하면 지급률이 내려간다', '한도가 곧 사라진다'는 식으로 즉각적인 결정을 압박하는 것은 흔한 유도 수법입니다. 정상 업체라면 고객이 충분히 비교하고 판단할 시간을 존중합니다. 압박이 느껴진다면 잠시 대화를 멈추고 다른 곳과 비교해보세요.",
  },
  {
    question: "후기가 아예 없는 신생 업체는 무조건 피해야 하나요?",
    answer:
      "신생 업체라고 무조건 위험한 것은 아니지만, 판단할 근거가 부족한 것은 사실입니다. 운영 기간이 짧다면 사업자등록 여부, 상담 응대의 전문성, 정산 방식의 투명성을 더 꼼꼼히 확인하고, 처음에는 소액으로 시험 거래를 해보는 것이 리스크를 줄이는 방법입니다.",
  },
];

const items = [
  {
    title: "사업자등록번호가 있고 조회가 되는가",
    desc: "홈택스에서 사업자등록상태를 직접 조회해 정상 운영 중인지 확인하세요.",
  },
  {
    title: "지급률·수수료를 상담 초반에 명확히 안내하는가",
    desc: "구체적인 수치 없이 '최고 조건'만 강조한다면 주의가 필요합니다.",
  },
  {
    title: "선입금·보증금을 요구하지 않는가",
    desc: "결제 내역 확인 전에 현금을 먼저 요구하는 경우는 사기 패턴입니다.",
  },
  {
    title: "정산 방식과 소요 시간을 구체적으로 설명하는가",
    desc: "'빠르게 해드립니다' 같은 모호한 답변보다 절차를 단계별로 설명하는지 확인하세요.",
  },
  {
    title: "즉각적인 결정을 과도하게 재촉하지 않는가",
    desc: "정상 업체는 고객이 비교하고 판단할 시간을 존중합니다.",
  },
  {
    title: "상담 채널(채팅/전화)이 안정적으로 운영되는가",
    desc: "상담 중 갑자기 연락이 끊기거나 다른 채널로 유도하는 경우 위험 신호입니다.",
  },
];

const Checklist: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="안전한 현금화 업체 선택 체크리스트"
        description="소액결제·정보이용료·신용카드·상품권 현금화 업체를 고를 때 반드시 확인해야 할 6가지 체크포인트를 정리했습니다. 선입금 요구, 사업자등록 조회 방법까지 안내합니다."
        keywords="현금화 업체 체크리스트, 안전한 현금화 업체, 소액결제현금화 사기 예방"
        faqItems={faqData}
      />
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumb items={[{ label: "몬스터티켓", path: "/" }, { label: "안전한 업체 선택 체크리스트" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            거래 전, 이 6가지만 확인하세요
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            급한 마음에 놓치기 쉬운 부분들을 미리 체크리스트로 정리했습니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <section className="mb-14">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="space-y-5">
              {items.map((item, idx) => (
                <div key={item.title} className="flex gap-4 items-start border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">특히 주의해야 할 사기 패턴</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed list-disc list-inside">
              <li>결제 전에 "수수료 먼저 입금해달라"고 요구하는 경우</li>
              <li>사업자등록번호를 알려주지 않거나, 조회했을 때 존재하지 않는 번호인 경우</li>
              <li>실제 지급률보다 훨씬 높은 수치를 먼저 제시한 뒤, 결제 직전 조건을 바꾸는 경우</li>
              <li>카카오톡·문자 등 특정 채널로만 연락을 유도하고 상담 기록을 남기지 않으려는 경우</li>
              <li>"지금 아니면 안 된다"는 식으로 비교할 시간을 주지 않고 압박하는 경우</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.question} className="bg-white rounded-xl p-6 shadow">
                <h3 className="font-bold text-gray-900 mb-2">Q. {item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checklist;
