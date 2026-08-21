import type React from "react";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const faqData = [
  {
    question: "지급률과 수수료는 어떻게 다른가요?",
    answer:
      "지급률은 결제 금액 대비 실제로 받는 현금의 비율이고, 수수료율은 100%에서 지급률을 뺀 값입니다. 예를 들어 지급률 80%는 수수료율 20%와 같은 말입니다. 업체마다 '지급률'과 '수수료율' 중 하나만 강조해서 표기하는 경우가 많으니, 두 수치를 함께 확인해야 헷갈리지 않습니다.",
  },
  {
    question: "지급률이 90% 이상이라고 광고하는 업체는 믿어도 되나요?",
    answer:
      "일반 결제 기준으로 지급률 90% 이상을 상시 광고하는 경우는 드뭅니다. 통신사 정책, 결제 수단 수수료, 운영비를 고려하면 일반적인 지급률은 70~85% 수준에서 형성됩니다. 지나치게 높은 지급률을 앞세우는 곳은 실제 상담 시 다른 조건(정책 위반, 미납 등)을 이유로 지급률을 낮추는 경우가 많으니 상담 초반에 정확한 조건을 문서나 채팅 기록으로 남겨두는 것이 안전합니다.",
  },
  {
    question: "정책 위반이나 미납 상태면 지급률이 얼마나 낮아지나요?",
    answer:
      "정책 위반(과다 결제, 반복 이용 등)이나 미납 이력이 있으면 일반 지급률보다 10~20%p 낮게 책정되는 것이 일반적입니다. 업체별로 편차가 크기 때문에, 본인의 결제 상태를 먼저 밝히고 정확한 지급률을 안내받은 뒤 진행 여부를 결정하는 것이 좋습니다.",
  },
  {
    question: "여러 업체 지급률을 비교할 때 무엇을 기준으로 봐야 하나요?",
    answer:
      "같은 결제수단, 같은 금액대, 같은 통신사 조건으로 비교해야 정확합니다. 업체마다 결제수단(소액결제/정보이용료/상품권)별로 지급률이 다르고, 금액 구간별 차등 지급률을 적용하는 곳도 있으므로, 단순히 '최고 지급률'이라는 광고 문구보다 본인 상황에 맞는 실제 견적을 직접 문의해서 비교하는 것이 정확합니다.",
  },
];

const FeeGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="소액결제 현금화 수수료·지급률 비교 가이드"
        description="소액결제·정보이용료·신용카드·상품권 현금화 수수료 계산법과 지급률 비교 기준을 정리했습니다. 적정 지급률 판단법과 주의해야 할 광고 문구를 확인하세요."
        keywords="소액결제현금화 수수료, 지급률 비교, 현금화 수수료 계산법"
        faqItems={faqData}
      />
      <section className="bg-gradient-to-br from-lime-50 to-lime-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumb items={[{ label: "몬스터티켓", path: "/" }, { label: "수수료·지급률 비교 가이드" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            수수료·지급률, 이렇게 비교하세요
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            '최고 지급률'이라는 광고만 보고 결정하면 나중에 실망하기 쉽습니다.
            <br />
            계산법과 비교 기준을 먼저 알아두면 상담이 훨씬 수월해집니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">지급률·수수료율 계산법</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              현금화 거래에서 <strong>지급률</strong>은 결제한 금액 대비 실제로 입금받는 현금의 비율을 말합니다.
              공식은 간단합니다.
            </p>
            <div className="bg-lime-50 border-l-4 border-lime-500 p-5 rounded-lg my-6">
              <p className="text-gray-800 font-semibold">실수령액 = 결제 금액 × 지급률</p>
              <p className="text-gray-600 text-sm mt-2">예) 30만원 결제, 지급률 78% → 실수령액 234,000원</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              반대로 수수료율은 <strong>100% − 지급률</strong>로 계산합니다. 지급률 78%라면 수수료율은 22%인
          셈입니다. 업체 광고에서 지급률만 강조하거나 수수료율만 강조하는 경우가 있으니, 상담 시 두 표현을
              모두 요청해서 실제 받을 금액을 직접 계산해보는 것이 가장 정확합니다.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">결제수단별 지급률 차이</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📱 소액결제 / 정보이용료</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                통신사 소액결제·정보이용료 현금화는 통상 일반 지급률 70~85% 구간에서 형성됩니다. 정책 위반이나
                미납 이력이 있으면 이보다 10~20%p 낮아질 수 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💳 신용카드</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                카드사·결제대행사 수수료가 별도로 발생하는 구조라 소액결제보다 지급률이 다소 낮게 형성되는
                경우가 많습니다. 카드사별로 편차가 있으니 반드시 개별 확인이 필요합니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎫 상품권</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                문화상품권·해피머니 등은 매입 시세가 유통 시장 상황에 따라 매일 조금씩 바뀝니다. 같은 브랜드
                상품권이라도 시점에 따라 지급률이 달라질 수 있습니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">⚠️ 미납·정책 위반</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                미납 상태이거나 통신사 정책 위반 이력이 있으면 처리 난이도가 높아져 지급률이 낮게 책정되는 것이
                일반적입니다. 상담 초반에 본인 상태를 정확히 알려야 나중에 조건이 바뀌는 일을 줄일 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">비교할 때 이 순서로 확인하세요</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-gray-700">본인의 결제수단·금액·미납 여부를 먼저 정리한다</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-gray-700">동일한 조건으로 2~3곳에 실제 견적(지급률)을 문의한다</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-gray-700">안내받은 지급률을 채팅 기록이나 캡처로 남겨둔다</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-lime-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span className="text-gray-700">최종 입금 전 실수령액을 다시 한번 계산해 확인한다</span>
              </li>
            </ol>
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

export default FeeGuide;

