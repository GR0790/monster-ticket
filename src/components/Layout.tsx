import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nav, site } from "../data/site";
import { openConsult } from "../lib/consult";
import { ArrowGlyph, ChatGlyph } from "./icons";
import { PhoneLink } from "./ui";

const Wordmark: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <Link to="/" aria-label="몬스터티켓 홈으로" className="group flex items-center gap-2.5">
    <span
      className={`relative flex h-9 w-9 items-center justify-center overflow-hidden transition-colors ${
        light ? "bg-white/10 text-mint-light" : "bg-gradient-to-br from-mint to-cyan-deep text-white"
      }`}
      style={{ borderRadius: 5 }}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="8.6" r="3.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="11.1" cy="7.5" r="0.85" fill="currentColor" />
        <path d="M5.6 15.4c2.6 1.4 6.2 1.4 8.8 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
    <span className="leading-none">
      <span className={`block text-[1.2rem] font-bold tracking-[-0.03em] ${light ? "text-white" : "text-ink"}`}>
        {site.name}
      </span>
      <span
        className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.26em] ${
          light ? "text-white/40" : "text-ink-muted"
        }`}
      >
        {site.nameEn}
      </span>
    </span>
  </Link>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setShowTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (to: string) => location.pathname.startsWith(to);

  return (
    <div className="flex min-h-screen flex-col bg-frost">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-mint focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        본문으로 바로가기
      </a>

      <header
        className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className="wrap flex h-[72px] items-center justify-between">
          <Wordmark />

          <nav aria-label="주 메뉴" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative py-2 text-[13.5px] font-medium tracking-wide transition-colors ${
                  isActive(item.to) ? "text-mint-deep" : "text-ink-soft hover:text-mint-deep"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-mint transition-all duration-300 ${
                    isActive(item.to) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <PhoneLink />
            <button
              type="button"
              onClick={() => openConsult()}
              className="relative inline-flex h-11 items-center gap-2 bg-gradient-to-r from-mint to-cyan-deep px-5 text-[13.5px] font-semibold text-white shadow-[0_12px_28px_-14px_rgba(16,185,129,0.9)] transition-transform hover:-translate-y-px"
              style={{ borderRadius: 5 }}
            >
              <ChatGlyph className="h-4 w-4" />
              1:1 상담
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center border border-line text-ink lg:hidden"
            style={{ borderRadius: 5 }}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">메뉴</span>
            <span aria-hidden="true" className="flex w-[18px] flex-col gap-[5px]">
              <span
                className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span className={`h-[1.5px] w-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[72px] z-30 overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <div className="wrap py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center justify-between border-b border-line/80 py-4 text-[15px] font-semibold text-ink"
              >
                {item.label}
                <ArrowGlyph className="h-3.5 w-3.5 text-ink-muted" />
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openConsult()}
                className="flex h-14 w-full items-center justify-center gap-2.5 bg-gradient-to-r from-mint to-cyan-deep text-[15px] font-semibold text-white shadow-[0_16px_36px_-16px_rgba(16,185,129,0.9)]"
                style={{ borderRadius: 6 }}
              >
                <ChatGlyph className="h-5 w-5" />
                채널톡 1:1 상담
              </button>
              <a href={site.phoneHref} className="btn-outline w-full">
                전화 {site.phone}
              </a>
              <p className="mt-2 text-center text-xs text-ink-muted">
                {site.hoursNote} · {site.hours}
              </p>
            </div>
          </div>
        </div>
      )}

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="bg-night-deep text-white">
        <div className="wrap py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
            <div>
              <Wordmark light />
              <p className="mt-6 max-w-xs text-[13px] leading-[1.9] text-white/55">
                상품권 매입부터 휴대폰·카드 결제 구매, 정보이용료 게임재화까지.
                확인할 것을 먼저 정리해 안내하는 몬스터티켓입니다.
              </p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.26em] text-mint-light/60">
                Verify first · Guide then
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-light">비교 · 가이드</h3>
              <ul className="mt-5 space-y-3 text-[13px] text-white/55">
                <li>
                  <Link to="/fee-guide" className="transition-colors hover:text-white">
                    수수료·지급률 비교 가이드
                  </Link>
                </li>
                <li>
                  <Link to="/checklist" className="transition-colors hover:text-white">
                    안전한 업체 선택 체크리스트
                  </Link>
                </li>
                <li>
                  <Link to="/authentic-review" className="transition-colors hover:text-white">
                    진짜 후기 vs 가짜 후기 구별법
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-light">안내</h3>
              <ul className="mt-5 space-y-3 text-[13px] text-white/55">
                <li>
                  <Link to="/how-to-use" className="transition-colors hover:text-white">
                    이용 방법
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="transition-colors hover:text-white">
                    자주 묻는 질문
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="transition-colors hover:text-white">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="transition-colors hover:text-white">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint-light">상담</h3>
              <div className="mt-5 space-y-3 text-[13px] text-white/55">
                <p>
                  <a href={site.phoneHref} className="num transition-colors hover:text-white">
                    {site.phone}
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => openConsult()}
                  className="inline-flex items-center gap-2 text-left text-white/80 transition-colors hover:text-white"
                >
                  <ChatGlyph className="h-4 w-4" />
                  채널톡 1:1 상담
                </button>
                <p className="text-white/35">
                  {site.hoursNote} · {site.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-[11.5px] leading-relaxed text-white/40 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl">
              몬스터티켓은 상품권과 디지털 이용권의 구매·매입 절차와, 그 전에 확인해야 할 비교 정보를 안내하는
              사이트입니다. 실제 결제와 정산 조건은 통신사·카드사·발행사의 약관과 정책을 따르며, 과도한 결제는
              권하지 않습니다. 불법적인 목적의 이용은 엄격히 금지합니다.
            </p>
            <p className="shrink-0">
              © {site.year} {site.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* 우측 하단 고정 상담 버튼 · 맨 위로 */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex flex-col items-end gap-2.5 sm:inset-x-auto sm:bottom-6 sm:right-6">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center border border-line bg-white/90 text-ink-soft shadow-sm backdrop-blur transition-colors hover:border-mint hover:text-mint-deep"
            style={{ borderRadius: 5 }}
            aria-label="맨 위로"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 12V2M3 6l4-4 4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        )}

        <button
          type="button"
          onClick={() => openConsult()}
          aria-label="채널톡 1:1 상담 열기"
          className="group relative flex w-full items-center justify-between gap-4 overflow-hidden bg-gradient-to-r from-mint via-mint to-cyan-deep px-5 py-4 text-left text-white shadow-[0_22px_50px_-20px_rgba(16,185,129,0.95)] ring-1 ring-white/25 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto sm:min-w-[252px] sm:py-[14px]"
          style={{ borderRadius: 8 }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(circle at 88% 18%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 52%)",
            }}
          />
          <span className="relative flex items-center gap-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-white/15 ring-1 ring-white/30">
              <span aria-hidden="true" className="absolute inset-0 animate-ping bg-white/20" />
              <ChatGlyph className="relative h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="flex items-center gap-1.5 text-[14.5px] font-bold tracking-[-0.01em] sm:text-[15px]">
                24시간 1:1 상담
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan-light" />
              </span>
              <span className="mt-1 block text-[11px] font-medium text-white/75">바로 연결 · 상담 무료</span>
            </span>
          </span>
          <span
            aria-hidden="true"
            className="relative text-[18px] leading-none text-white/80 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default Layout;
