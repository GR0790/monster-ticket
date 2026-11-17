import type React from "react";
import { services } from "../data/site";
import { openConsult, useTicketBounce } from "../lib/consult";
import { ArrowGlyph, ChatGlyph } from "./icons";

/**
 * 브랜드 상담 카드.
 * 클릭하면 카드가 살짝 커졌다 돌아오는 반동(animate-ticket-bounce) 뒤
 * 채널톡 1:1 상담(index.html 의 startConsult)으로 이어집니다.
 * 카드 자체가 하나의 버튼이라 키보드(Enter/Space)로도 같은 동작을 합니다.
 */
const ConsultTicket: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { trigger, className: bounceClass } = useTicketBounce();

  const handleClick = () => {
    trigger();
    // 반동이 보이도록 한 박자 뒤에 상담창을 엽니다.
    window.setTimeout(() => openConsult(), 260);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="몬스터티켓 채널톡 1:1 상담 연결"
      className={`group relative block w-full max-w-[420px] overflow-hidden border border-line bg-white text-left shadow-[0_34px_70px_-40px_rgba(15,23,42,0.45)] ring-1 ring-white/70 transition-shadow duration-300 hover:shadow-[0_44px_80px_-38px_rgba(16,185,129,0.45)] ${bounceClass} ${className}`}
      style={{ borderRadius: 8, transformOrigin: "center" }}
    >
      {/* 글레어: 클릭 시 한 번 번지는 빛 */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-mint/0 via-mint/0 to-cyan/0 transition-opacity duration-500 group-hover:from-mint/5 group-hover:to-cyan/10"
      />

      {/* 상단 띠 */}
      <span className="relative flex items-center justify-between gap-3 bg-night px-5 py-4 text-white">
        <span className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center border border-white/20 text-mint-light">
            <ChatGlyph className="h-4 w-4" />
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.26em] text-mint-light/80">
              Monster Ticket
            </span>
            <span className="mt-0.5 block text-[14px] font-bold tracking-[-0.01em]">1:1 상담 연결</span>
          </span>
        </span>
        <span className="flex items-center gap-1.5 text-[10.5px] font-medium text-white/60">
          <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-mint" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          24시간 접수
        </span>
      </span>

      {/* 마스코트 */}
      <span className="relative flex items-center gap-3 px-5 pt-4">
        <span className="relative h-[96px] w-[96px] shrink-0 sm:h-[108px] sm:w-[108px]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ background: "radial-gradient(circle at 50% 46%, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0) 70%)" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 bottom-1 h-2.5 rounded-[100%] bg-ink/10 blur-[5px]"
          />
          <img
            src="/monster-mascot-cut.webp"
            alt="몬스터티켓 마스코트"
            width="108"
            height="109"
            loading="eager"
            className="relative h-full w-full object-contain animate-mascot-float drop-shadow-[0_12px_18px_rgba(11,17,23,0.18)]"
          />
        </span>
        <span className="min-w-0">
          <span className="block text-[15.5px] font-bold tracking-[-0.02em] text-ink">
            성함과 연락처만 남기면
            <br />
            바로 상담창으로 연결됩니다.
          </span>
          <span className="mt-1.5 block text-[11.5px] leading-relaxed text-ink-muted">
            최초 1회만 입력 · 다음부터는 자동 연결
          </span>
        </span>
      </span>

      {/* 안내 항목 */}
      <span className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 px-5">
        {services.map((s) => (
          <span key={s.no} className="flex items-center gap-2 text-[11.5px] text-ink-soft">
            <span aria-hidden="true" className="h-1 w-1 shrink-0 bg-mint" />
            <span className="truncate">{s.title}</span>
          </span>
        ))}
      </span>

      {/* 티켓 절취선 + 노치 */}
      <span aria-hidden="true" className="relative mt-5 block h-px">
        <span className="absolute inset-x-5 top-0 border-t border-dashed border-line" />
        <span className="absolute -left-[7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute -right-[7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-white" />
      </span>

      {/* 하단 액션 */}
      <span className="flex items-center justify-between gap-3 px-5 py-4">
        <span className="flex items-center gap-2">
          <span className="chip border-mint/30 bg-mint-soft/40 text-mint-ink">무료</span>
          <span className="num text-[10.5px] uppercase tracking-[0.18em] text-ink-muted">Consult ticket</span>
        </span>
        <span className="flex items-center gap-2 text-[12.5px] font-semibold text-mint-deep">
          클릭하여 상담 연결
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center bg-night text-white transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <ArrowGlyph className="h-3.5 w-3.5" />
          </span>
        </span>
      </span>
    </button>
  );
};

export default ConsultTicket;
