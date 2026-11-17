import { useState } from "react";
import type React from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { openConsult } from "../lib/consult";
import { ArrowGlyph, ChatGlyph } from "./icons";

/* ─────────── 섹션 헤딩 ─────────── */
export const SectionHead: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}> = ({ eyebrow, title, lead, align = "left", light = false }) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
    {eyebrow && (
      <p className={`mb-4 inline-flex items-center gap-2.5 ${light ? "eyebrow-light" : "eyebrow"}`}>
        <span aria-hidden="true" className={`h-px w-6 ${light ? "bg-mint-light/60" : "bg-mint/50"}`} />
        {eyebrow}
      </p>
    )}
    <h2 className={`display-section ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    {lead && <p className={`lead mt-5 ${light ? "text-white/65" : ""}`}>{lead}</p>}
  </div>
);

/* ─────────── 화살표 링크 ─────────── */
export const ArrowLink: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({
  to,
  children,
  className = "",
}) => (
  <Link
    to={to}
    className={`group inline-flex items-center gap-2 text-sm font-semibold text-mint-deep transition-colors hover:text-mint ${className}`}
  >
    {children}
    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
      <ArrowGlyph className="h-3.5 w-3.5" />
    </span>
  </Link>
);

/* ─────────── 채널톡 상담 버튼 ─────────── */
export const ConsultButton: React.FC<{
  label?: string;
  variant?: "primary" | "outline" | "light" | "ghostLight";
  size?: "md" | "lg";
  className?: string;
}> = ({ label = "채널톡 1:1 상담", variant = "primary", size = "md", className = "" }) => {
  const styles = {
    primary: "btn-primary",
    outline: "btn-outline",
    light: "btn-light",
    ghostLight: "btn-ghost-light",
  }[variant];
  const sizing = size === "lg" ? "min-h-[54px] px-7 text-[15px] whitespace-nowrap" : "whitespace-nowrap";
  return (
    <button type="button" onClick={() => openConsult()} className={`${styles} ${sizing} ${className}`}>
      <ChatGlyph className={size === "lg" ? "h-[18px] w-[18px]" : "h-4 w-4"} />
      {label}
    </button>
  );
};

/* ─────────── 전화 링크 ─────────── */
export const PhoneLink: React.FC<{ className?: string; light?: boolean }> = ({ className = "", light = false }) => (
  <a
    href={site.phoneHref}
    className={`num text-[13px] transition-colors ${
      light ? "text-white/60 hover:text-white" : "text-ink-muted hover:text-mint-deep"
    } ${className}`}
  >
    {site.phone}
  </a>
);

/* ─────────── 내부 페이지 히어로 ─────────── */
export const PageHero: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: { label: string; to?: string }[];
  meta?: React.ReactNode;
}> = ({ eyebrow, title, lead, crumbs, meta }) => (
  <section className="relative overflow-hidden border-b border-line bg-white">
    <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full opacity-70"
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.16) 0%, rgba(255,255,255,0) 68%)" }}
    />
    <div className="wrap relative pb-14 pt-10 md:pb-20 md:pt-14">
      {crumbs && (
        <nav aria-label="현재 위치" className="mb-10 flex flex-wrap items-center gap-2 text-[12px] text-ink-muted">
          <Link to="/" className="hover:text-mint-deep">
            홈
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-steel">/</span>
              {c.to ? (
                <Link to={c.to} className="hover:text-mint-deep">
                  {c.label}
                </Link>
              ) : (
                <span className="text-ink-soft">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h1 className="display-hero max-w-4xl text-balance text-ink">{title}</h1>
      {lead && <p className="lead mt-7 max-w-2xl">{lead}</p>}
      {meta && <div className="mt-8">{meta}</div>}
    </div>
  </section>
);

/* ─────────── 아코디언 (FAQ) ─────────── */
type FaqLike = { q?: string; a?: string; question?: string; answer?: string };

export const Accordion: React.FC<{ items: FaqLike[]; className?: string }> = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const normalized = items.map((item) => ({
    q: item.q ?? item.question ?? "",
    a: item.a ?? item.answer ?? "",
  }));
  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {normalized.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-mint-deep"
            >
              <span className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-[3px] font-sans text-[12px] font-bold tracking-[0.08em] text-mint">
                  Q
                </span>
                <span className="text-[15px] font-semibold leading-relaxed text-ink">{item.q}</span>
              </span>
              <span
                aria-hidden="true"
                className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-line text-ink-muted transition-transform duration-300 ${
                  open ? "rotate-45 border-mint text-mint" : ""
                }`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-6 pr-10 text-[14px] leading-[1.9] text-ink-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ─────────── CTA 밴드 ─────────── */
export const CTABand: React.FC<{ title: React.ReactNode; body: React.ReactNode }> = ({ title, body }) => (
  <section className="relative overflow-hidden bg-night text-white">
    <div aria-hidden="true" className="grid-bg-dark pointer-events-none absolute inset-0 opacity-70" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-60"
      style={{ background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(11,17,23,0) 70%)" }}
    />
    <div className="wrap relative flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow-light mb-4">Channel talk · 1:1</p>
        <h2 className="display-section text-white">{title}</h2>
        <p className="mt-4 text-[14.5px] leading-[1.9] text-white/60">{body}</p>
      </div>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:shrink-0 sm:flex-row">
        <ConsultButton variant="light" size="lg" label="채널톡 1:1 상담 시작" />
        <a href={site.phoneHref} className="btn-ghost-light min-h-[54px] shrink-0 whitespace-nowrap px-7 text-[15px]">
          전화 {site.phone}
        </a>
      </div>
    </div>
  </section>
);
