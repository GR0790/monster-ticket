import type React from "react";
import Breadcrumb from "../components/Breadcrumb";
import SEO from "../components/SEO";

const faqData = [
  {
    question: "짧고 비슷한 후기가 많으면 무조건 가짜인가요?",
    answer:
      "단정할 수는 없지만 의심해볼 신호입니다. 실제 이용자 후기는 금액, 소요 시간, 상담원 응대 태도 등 구체적인 디테일이 섞여 있는 경우가 많습니다. 반대로 '빠르고 친절해요', '만족합니다' 같은 짧고 유사한 문장이 짧은 기간에 몰려서 게시되면 조작 가능성을 의심해볼 필요가 있습니다.",
  },
  {
    question: "평점이 너무 높기만 하면 이상한 건가요?",
    answer:
      "정상적으로 운영되는 업체도 평점이 낮은 후기가 일부 섞여 있는 것이 자연스럽습니다. 부정적인 후기가 하나도 없이 5점만 가득한 경우, 오히려 후기 관리(삭제)나 조작 가능성을 의심해볼 수 있습니다.",
  },
  {
    question: "후기 작성 시점이 몰려있는 것도 확인해야 하나요?",
    answer:
      "네. 특정 날짜에 후기가 대량으로 몰려 있다면 이벤트성으로 후기를 매입했거나 조작했을 가능성이 있습니다. 시간이 흐르며 자연스럽게 쌓인 후기인지 날짜 분포를 살펴보는 것도 좋은 판단 기준입니다.",
  },
  {
    question: "제3자 플랫폼 후기는 더 믿을 만한가요?",
    answer:
      "업체가 직접 운영하는 홈페이지 후기보다는, 네이버 블로그·카페, 커뮤니티 등 업체가 직접 관리하기 어려운 채널의 후기가 상대적으로 신뢰도가 높은 편입니다. 다만 이런 채널에도 광고성 게시글이 섞여 있을 수 있으니, 작성자의 다른 게시물 이력이나 계정 활동을 함께 살펴보는 것이 좋습니다.",
  },
];

const AuthenticReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="진짜 후기 vs 가짜 후기 구별하는 법"
        description="현금화 업체 후기 중 조작된 후기의 특징과 신뢰할 수 있는 후기를 구별하는 방법을 정리했습니다. 평점, 작성 패턴, 채널별 신뢰도 확인 기준을 확인하세요."
        keywords="현금화 후기 구별법, 가짜 후기, 소액결제현금화 후기"
        faqItems={faqData}
      />
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumb items={[{ label: "몬스터티켓", path: "/" }, { label: "진짜 후기 vs 가짜 후기 구별법" }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            그 후기, 진짜일까요?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            현금화 업체를 검색하면 좋은 후기만 가득한 경우가 많습니다.
            <br />
            조작된 후기의 특징을 알아두면 판단이 쉬워집니다.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">조작된 후기의 흔한 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📝 내용이 짧고 비슷하다</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                "빠르고 친절해요", "만족합니다" 처럼 구체적 정보 없이 짧은 문장이 반복되면 의심해볼 신호입니다.
                실제 후기는 금액, 소요 시간, 상담 과정 등 디테일이 섞여 있는 경우가 많습니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">⭐ 부정적 후기가 전혀 없다</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                모든 후기가 5점만점인 경우, 자연스러운 후기 분포라기보다 후기 관리나 조작 가능성을 의심해볼 수
                있습니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📅 특정 날짜에 몰려있다</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                짧은 기간에 후기가 대량으로 게시됐다면 이벤트성 후기 매입이나 조작 가능성이 있습니다. 날짜 분포를
                살펴보는 습관이 도움이 됩니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🔗 업체가 직접 관리하는 채널뿐이다</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                업체 자체 홈페이지 후기만 있고 제3자 플랫폼(커뮤니티, 블로그 등)에서는 언급을 찾기 어렵다면
                신뢰도를 조금 더 보수적으로 판단하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">신뢰할 수 있는 후기를 찾는 방법</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-gray-700">업체 홈페이지 외에 제3자 채널(커뮤니티, 블로그, SNS)에서도 검색해본다</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-gray-700">후기 작성자의 다른 게시물이나 활동 이력을 함께 확인한다</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-gray-700">긍정·부정 후기가 골고루 섞여 있는지 평점 분포를 살펴본다</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span className="text-gray-700">후기 작성 날짜가 자연스럽게 분산되어 있는지 확인한다</span>
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

export default AuthenticReview;

