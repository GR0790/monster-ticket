import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).startConsult();
  };

  const navLinks = [
    { to: "/fee-guide", label: 수수료 비교 },
    { to: "/checklist", label: 업체 체크리스트 },
    { to: "/authentic-review", label: 후기 구별법 },
    { to: "/how-to-use", label: 이용 방법 },
    { to: "/faq", label: 자주묻는질문 },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl font-bold text-violet-600 hover:text-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded"
                aria-label="몬스터티켓 홈페이지로 이동"
              >
                몬스터티켓
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-violet-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#"
                onClick={handleConsultClick}
                className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors"
              >
                24시간 빠른상담
              </a>
            </div>

            <button
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 rounded p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 메뉴 닫기 : 메뉴 열기}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <nav id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4" aria-label="모바일 메뉴">
              <div className="space-y-2">
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  홈
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="#"
                  onClick={handleConsultClick}
                  className="block mx-4 mt-4 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors text-center"
                >
                  24시간 빠른상담
                </a>
              </div>
            </nav>
          )}
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-white mb-4">몬스터티켓</div>
              <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
                소액결제·정보이용료·신용카드·상품권 현금화를 이용하기 전 꼭 필요한 비교 정보와
                안전 체크리스트를 제공합니다. 궁금한 점은 채팅 상담으로 바로 문의하세요.
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">비교/가이드</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link to="/fee-guide" className="hover:text-white transition-colors">
                    수수료·지급률 비교 가이드
                  </Link>
                </li>
                <li>
                  <Link to="/checklist" className="hover:text-white transition-colors">
                    안전한 업체 선택 체크리스트
                  </Link>
                </li>
                <li>
                  <Link to="/authentic-review" className="hover:text-white transition-colors">
                    진짜 후기 vs 가짜 후기 구별법
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold mb-4">고객지원 및 정보</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>
                  <Link to="/how-to-use" className="hover:text-white transition-colors">
                    이용 방법
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white transition-colors">
                    자주 묻는 질문 (FAQ)
                  </Link>
                </li>
                <li>
                  <a href="#" onClick={handleConsultClick} className="hover:text-white transition-colors">
                    24시 고객센터 문의
                  </a>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-left text-gray-500 text-xs">
            <h4 className="font-bold text-gray-400 mb-2">업체 정보</h4>
            <p>상호명: 몬스터티켓 | 대표: 김민수</p>
            <p>사업자등록번호: 101-81-59985</p>
            <p>주소: 서울시 강남구 테헤란로 27-5</p>
            <p>고객센터: 010-2138-0790 | 이메일: benzamn779@gmail.com</p>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
            <p className="text-sm md:text-base">© 2026 몬스터티켓. 모든 권리 보유.</p>
            <p className="mt-2 text-xs md:text-sm leading-relaxed max-w-4xl mx-auto">
              본 웹사이트는 소액결제, 정보이용료, 신용카드, 상품권 현금화 서비스 이용 전
              확인해야 할 비교·안전 정보를 제공하는 목적으로 운영됩니다. 서비스 이용 전 반드시
              이용약관 및 개인정보처리방침을 확인하시기 바랍니다. 과도한 현금화 서비스 이용은
              개인의 재정 상황에 부담을 줄 수 있으니 신중한 판단 후 이용해 주시기 바라며,
              불법적인 목적으로 서비스를 이용하는 것을 엄격히 금지합니다.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
        {showTooltip && (
          <div
            className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 mb-2 mr-2 relative max-w-[240px] animate-bounce pointer-events-auto"
            style={{ animationDuration: "3s" }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="absolute top-2 right-2 text-gray-300 hover:text-gray-500"
              aria-label="툴팁 닫기"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="font-bold text-gray-800 text-sm mb-1">궁금한 건 채팅으로 문의하세요</p>
            <p className="text-xs text-gray-500 flex items-center">
              <span className="text-violet-500 mr-1">⚡</span> 빠르게 답변 받으실 수 있어요
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100" />
          </div>
        )}

        <button
          id="floating-consult-btn"
          onClick={handleConsultClick}
          className="w-16 h-16 bg-[#5C31D6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative overflow-hidden pointer-events-auto"
          aria-label="1:1 상담 시작하기"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
            <circle cx="8" cy="10" r="1.5" fill="white" />
            <circle cx="12" cy="10" r="1.5" fill="white" />
            <circle cx="16" cy="10" r="1.5" fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Layout;
