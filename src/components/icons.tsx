import type React from "react";

/* ─────────── 서비스 아이콘 (1px 라인) ─────────── */
export const ServiceGlyph: React.FC<{ name: "voucher" | "phone" | "card" | "game"; className?: string }> = ({
  name,
  className = "h-6 w-6",
}) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "voucher")
    return (
      <svg {...common}>
        <path d="M3 7.5h18v3a1.8 1.8 0 0 0 0 3.6v3H3v-3a1.8 1.8 0 0 0 0-3.6z" />
        <path d="M14.5 7.5v10" strokeDasharray="1.6 2.2" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...common}>
        <rect x="6.5" y="2.8" width="11" height="18.4" rx="2" />
        <path d="M10.5 18.4h3" />
        <path d="M9.8 8.4h4.4M9.8 11.4h4.4M9.8 14.4h2.6" />
      </svg>
    );
  if (name === "card")
    return (
      <svg {...common}>
        <rect x="2.8" y="5.4" width="18.4" height="13.2" rx="1.8" />
        <path d="M2.8 9.6h18.4" />
        <path d="M6.4 14.4h3.4" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="7.6" width="18" height="9.6" rx="4.8" />
      <path d="M8.2 11.2v3.2M6.6 12.8h3.2" />
      <circle cx="15.8" cy="11.9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="17.9" cy="13.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
};

/* ─────────── 채널톡 글리프 ─────────── */
export const ChatGlyph: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.5 11.6c0 4.2-3.8 7.6-8.5 7.6-.9 0-1.8-.1-2.6-.4L5 20.5l1.1-3.3C4.8 15.9 3.5 13.9 3.5 11.6c0-4.2 3.8-7.6 8.5-7.6s8.5 3.4 8.5 7.6Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="8.8" cy="11.6" r="0.95" fill="currentColor" />
    <circle cx="12" cy="11.6" r="0.95" fill="currentColor" />
    <circle cx="15.2" cy="11.6" r="0.95" fill="currentColor" />
  </svg>
);

/* ─────────── 체크 / 화살표 / 플러스 ─────────── */
export const CheckGlyph: React.FC<{ className?: string }> = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.6 7.4 5.6 10.3 11.4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowGlyph: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
