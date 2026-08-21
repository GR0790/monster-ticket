import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const HeroSection: React.FC = () => (
  <section className="bg-gradient-to-br from-lime-50 to-lime-100 py-12 md:py-20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-shrink-0 lg:w-1/3">
          <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <img
              src="/monster-mascot.webp"
              alt="소액결제현금화 몬스터티켓 마스코트"
              className="w-full h-full object-cover rounded-full drop-shadow-2xl animate-bounce-subtle border-4 border-white shadow-lg"
              width="320"
              height="320"
              loading="eager"
            />
          </div>
        </div>

        <div className="flex-1 text-center">
          <div className="mb-4">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-2">
              🔥 소액결제현금화 3분 즉시입금! 몬스터티켓
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="sr-only">몬스터티켓</span>
            <span className="text-red-600">소액결제현금화 미납·정책 99.9% 승인!</span>
            <br />
            <span className="text-blue-600">정보이용료현금화</span> 안전 거래
            <br />
            <span className="text-lime-600">3분 초스피드 입금 완료</span>
          </h1>

          <div className="flex justify-center mb-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); (window as any).startConsult(); }}
              aria-label="1:1 상담하기"
              className="inline-flex items-center bg-yellow-400 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 cursor-pointer"
            >
              💬 소액결제현금화 1:1 상담
              <svg className="ml-2 w-5 md:w-6 h-5 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z" />
              </svg>
            </a>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong>급하게 현금이 필요할 때, 믿을 수 있는 곳인지부터 확인하세요.</strong>
            <br />
            소액결제·정보이용료·신용카드·상품권 현금화를 이용하기 전{" "}
            <Link to="/fee-guide" className="text-lime-600 hover:underline font-semibold">
              수수료·지급률 비교
            </Link>
            와{" "}
            <Link to="/checklist" className="text-lime-600 hover:underline font-semibold">
              안전한 업체 체크리스트
            </Link>
            를 먼저 확인하고,
            <br />
            <span className="text-red-600 font-bold">준비되셨다면 지금 바로 1:1 상담으로 진행하세요.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">✅ 정식사업자등록</div>
            <div className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm font-semibold">⚡ 3분 즉시입금</div>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">🛡️ 100% 안전거래 보장</div>
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">🕐 24시간 실시간 상담</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GuideLinksSection: React.FC = () => (
  <section className="py-14 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          상담 전에, 이것만은 꼭 확인하세요
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          현금화 서비스는 업체마다 수수료·지급률·응대 방식이 크게 다릅니다.
          몬스터티켓이 준비한 비교 가이드로 먼저 기준을 잡아보세요.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/fee-guide"
          className="block bg-lime-50 hover:bg-lime-100 transition-colors rounded-2xl p-6 border border-lime-100"
        >
          <div className="text-3xl mb-3">💰</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">수수료·지급률 비교 가이드</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            지급률 계산법과 업체별 수수료 구조, 적정 수준 판단 기준을 정리했습니다.
          </p>
        </Link>
        <Link
          to="/checklist"
          className="block bg-blue-50 hover:bg-blue-100 transition-colors rounded-2xl p-6 border border-blue-100"
        >
          <div className="text-3xl mb-3">✅</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">안전한 업체 선택 체크리스트</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            사업자등록, 상담 응대, 정산 방식 등 거래 전 반드시 확인할 항목입니다.
          </p>
        </Link>
        <Link
          to="/authentic-review"
          className="block bg-amber-50 hover:bg-amber-100 transition-colors rounded-2xl p-6 border border-amber-100"
        >
          <div className="text-3xl mb-3">🔍</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">진짜 후기 vs 가짜 후기 구별법</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            조작된 후기의 패턴과 신뢰할 수 있는 후기를 구별하는 방법을 안내합니다.
          </p>
        </Link>
      </div>
    </div>
  </section>
);

const StatsSection: React.FC = () => (
  <section className="py-10 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto border-2 border-lime-200">
        <div className="text-center text-sm text-red-600 font-bold mb-4">
          🔥 소액결제현금화 실시간 거래 현황 (LIVE)
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-lime-600">3분 이내</div>
            <div className="text-xs text-gray-500">평균 입금 시간</div>
          </div>
          <div>
            <div className="text-xl font-bold text-blue-600">99.9%</div>
            <div className="text-xs text-gray-500">미납·정책 승인률</div>
          </div>
          <div>
            <div className="text-xl font-bold text-purple-600">24시간</div>
            <div className="text-xs text-gray-500">실시간 상담</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section className="py-14 md:py-20 bg-lime-600">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        확인하셨다면, 지금 바로 상담 받아보세요
      </h2>
      <p className="text-lime-100 mb-8 max-w-xl mx-auto">
        전문 상담원이 실시간 채팅으로 지급률, 절차, 소요 시간을 바로 안내해 드립니다.
      </p>
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); (window as any).startConsult(); }}
        className="inline-flex items-center bg-white text-lime-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
      >
        💬 1:1 실시간 상담 시작하기
      </a>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="소액결제현금화 수수료 비교 및 안전 업체 체크리스트"
        description="소액결제·정보이용료·신용카드·상품권 현금화 이용 전 수수료 비교, 안전한 업체 선택 체크리스트, 후기 구별법을 확인하세요. 몬스터티켓에서 3분 즉시입금 상담도 가능합니다."
        faqItems={[
          {
            question: "몬스터티켓은 어떤 서비스인가요?",
            answer:
              "몬스터티켓은 소액결제·정보이용료·신용카드·상품권 현금화를 이용하기 전 수수료 비교, 안전한 업체 체크리스트, 후기 구별법 등 실질적인 정보를 제공하고, 1:1 채팅 상담을 통해 실제 거래까지 안내해 드리는 서비스입니다.",
          },
          {
            question: "상담은 어떻게 시작하나요?",
            answer:
              "화면 우측 하단의 채팅 버튼이나 '1:1 상담' 버튼을 누르시면 이름과 연락처 입력 후 바로 실시간 상담원과 채팅으로 연결됩니다.",
          },
        ]}
      />
      <HeroSection />
      <GuideLinksSection />
      <StatsSection />
      <CTASection />
    </>
  );
};

export default Home;

