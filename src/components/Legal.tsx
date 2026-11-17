import type React from "react";
import { PageHero } from "./ui";

/** 약관·정책 공통 레이아웃: 좌측 목차 + 우측 조문 */
export const LegalShell: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  updated: string;
  effective: string;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
}> = ({ eyebrow, title, lead, updated, effective, sections, children }) => (
  <>
    <PageHero
      eyebrow={eyebrow}
      title={title}
      lead={lead}
      meta={
        <dl className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] text-ink-muted">
          <div className="flex gap-2">
            <dt className="font-medium text-ink-soft">시행일자</dt>
            <dd className="num">{effective}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-ink-soft">최종 수정일</dt>
            <dd className="num">{updated}</dd>
          </div>
        </dl>
      }
    />
    <div className="wrap py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <nav aria-label="목차" className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow mb-4">Contents</p>
          <ol className="space-y-1 border-l border-line">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block border-l-2 border-transparent py-1.5 pl-4 text-[12.5px] leading-relaxed text-ink-soft transition-colors hover:border-mint hover:text-mint-deep"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-3xl">{children}</div>
      </div>
    </div>
  </>
);

export const LegalSection: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({
  id,
  title,
  children,
}) => (
  <section id={id} className="scroll-mt-24 border-t border-line py-9 first:border-t-0 first:pt-0">
    <h2 className="text-[1.1rem] font-bold tracking-[-0.02em] text-ink">{title}</h2>
    <div className="mt-4 space-y-3 text-[13.5px] leading-[1.95] text-ink-soft [&_li]:pl-0">{children}</div>
  </section>
);

export const LegalList: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2.5">
        <span aria-hidden="true" className="mt-[10px] h-1 w-1 shrink-0 bg-mint" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
