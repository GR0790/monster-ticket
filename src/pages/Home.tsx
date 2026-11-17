import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ConsultTicket from "../components/ConsultTicket";
import { Accordion, ArrowLink, CTABand, ConsultButton, SectionHead } from "../components/ui";
import { ArrowGlyph, CheckGlyph, ServiceGlyph } from "../components/icons";
import {
  checklistItems,
  feeRows,
  guides,
  heroValues,
  homeFaq,
  moments,
  services,
  site,
  steps,
} from "../data/site";
import { openConsult } from "../lib/consult";

/* ─────────────────────────── 히어로 ─────────────────────────── */
const Hero: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-white text-ink">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-frost via-white to-white"
    />
    <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-80" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 top-[-12%] h-[560px] w-[560px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(16,185,129,0.14) 0%, rgba(255,255,255,0) 68%)" }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 bottom-[-22%] h-[520px] w-[520px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(255,255,255,0) 70%)" }}
    />

    <div className="wrap relative pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="animate-rise">
          <p className="eyebrow mb-6 inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-mint/60" />
            Voucher · Billing · Card · Digital
          </p>
          <h1 className="display-hero text-balance text-ink">
            상품권 매입부터
            <br />
            결제 구매까지,
            <br />
            <span className="bg-gradient-to-r from-mint-deep via-mint to-cyan-deep bg-clip-text text-transparent">
              기준부터 확인합니다.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-[15.5px] leading-[1.95] text-ink-soft">
            결제 금액과 실제 수령액 사이에는 지급률과 수수료가 있습니다.
            <br className="hidden sm:block" />
            같은 조건도 어느 숫자를 먼저 말하는지에 따라 다르게 보입니다. 계산식을 먼저 보이고, 확인된 숫자로만 안내합니다.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ConsultButton variant="primary" size="lg" label="채널톡 1:1 상담 시작" />
            <Link
              to="/fee-guide"
              className="btn-outline min-h-[54px] px-7 text-[14px] font-semibold whitespace-nowrap"
            >
              수수료 비교 가이드 보기
              <span aria-hidden="true">
                <ArrowGlyph className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-medium text-ink-muted">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1 w-1 bg-mint" />
              상담 무료
            </div>
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1 w-1 bg-mint" />
              {site.hours}
            </div>
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1 w-1 bg-mint" />
              <span className="num">전화 {site.phone}</span>
            </div>
          </dl>
        </div>

        <div className="flex justify-start lg:justify-end">
          <ConsultTicket className="animate-rise" />
        </div>
      </div>

      {/* 핵심 수치 */}
      <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-line pt-8 md:mt-16 md:grid-cols-4 md:pt-10">
        {heroValues.map((v) => (
          <div key={v.label} className="border-line md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">{v.label}</dt>
            <dd className="mt-2 flex items-baseline gap-1.5">
              <span className="display-sub text-ink">{v.value}</span>
              <span className="text-[12.5px] font-medium text-ink-muted">{v.unit}</span>
            </dd>
            <dd className="mt-1 text-[12px] text-ink-soft">{v.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

/* ─────────────────────────── 4대 이용 안내 ─────────────────────────── */
const ServicesSection: React.FC = () => (
  <section className="border-b border-line bg-white py-20 md:py-24">
    <div className="wrap">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="What we guide"
          title={
            <>
              어떤 결제든
              <br />
              구조는 네 갈래입니다.
            </>
          }
          lead="휴대폰 결제, 카드 결제, 정보이용료, 상품권 매입. 갈래마다 돈이 오가는 구조가 달라서, 먼저 확인할 숫자도 다릅니다."
        />
        <ArrowLink to="/how-to-use" className="shrink-0">
          전체 이용 방법 보기
        </ArrowLink>
      </div>

      <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
        {services.map((s) => (
          <article id={s.anchor} key={s.no} className="group bg-white p-7 transition-colors hover:bg-frost md:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="num text-[11px] font-semibold uppercase tracking-[0.24em] text-mint-deep">{s.no}</span>
              <span className="text-ink-muted transition-colors group-hover:text-mint-deep">
                <ServiceGlyph name={s.icon} className="h-7 w-7" />
              </span>
            </div>
            <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">{s.kicker}</p>
            <h3 className="mt-2 text-[1.14rem] font-bold leading-snug tracking-[-0.02em] text-ink">{s.title}</h3>
            <p className="mt-3 text-[13.5px] leading-[1.85] text-ink-soft">{s.body}</p>
            <p className="mt-5 flex items-start gap-2 border-t border-line pt-4 text-[12px] text-ink-muted">
              <span className="mt-[3px] text-mint">
                <CheckGlyph />
              </span>
              {s.check}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────── 비교 가이드 (몬스터티켓 차별점) ─────────────────────────── */
const GuidesSection: React.FC = () => (
  <section className="border-b border-line bg-frost py-20 md:py-24">
    <div className="wrap">
      <SectionHead
        eyebrow="Before the consult"
        title={
          <>
            상담 전에, 이것만은
            <br />
            꼭 확인하세요.
          </>
        }
        lead="업체마다 수수료·지급률·응대 방식이 크게 다릅니다. 몬스터티켓이 정리한 비교 자료로 먼저 기준을 잡아보세요."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.to}
            to={g.to}
            className="group card card-lift flex flex-col justify-between p-7"
          >
            <div>
              <p className="num text-[10.5px] font-semibold uppercase tracking-[0.24em] text-mint-deep">{g.kicker}</p>
              <h3 className="mt-5 text-[1.08rem] font-bold leading-snug tracking-[-0.02em] text-ink">{g.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.85] text-ink-soft">{g.body}</p>
            </div>
            <p className="mt-7 flex items-center justify-between border-t border-line pt-4 text-[12.5px] font-semibold text-mint-deep">
              {g.label}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowGlyph className="h-3.5 w-3.5" />
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────── 수수료 계산 ─────────────────────────── */
const FeeSection: React.FC = () => (
  <section className="border-b border-line bg-white py-20 md:py-24">
    <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div>
        <SectionHead
          eyebrow="Fee & rate"
          title={
            <>
              지급률을 알면,
              <br />
              조건이 보입니다.
            </>
          }
          lead="지급률은 결제 금액 대비 실제로 돌려받는 금액의 비율입니다. 업체가 '지급률'만 강조하는지 '수수료율'만 강조하는지에 따라 같은 조건도 다르게 보입니다."
        />

        <div className="mt-8 border border-line bg-frost p-6" style={{ borderRadius: 4 }}>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-muted">계산식</p>
          <p className="mt-3 text-[1.05rem] font-bold text-ink">
            실수령액 = 결제 금액 <span className="text-mint">×</span> 지급률
          </p>
          <p className="mt-2 text-[12.5px] text-ink-soft">예) 30만원 결제 · 지급률 78% → 234,000원</p>
          <p className="mt-4 border-t border-line pt-4 text-[12.5px] leading-relaxed text-ink-soft">
            수수료율은 <strong className="font-semibold text-ink">100% − 지급률</strong>입니다. 같은 조건을 두 표현으로
            확인하면 실제 금액을 계산할 수 있습니다.
          </p>
        </div>

        <ArrowLink to="/fee-guide" className="mt-7">
          계산법과 비교 순서 전체 보기
        </ArrowLink>
      </div>

      <div className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-line bg-frost px-6 py-4">
          <p className="text-[13px] font-semibold text-ink">결제수단별 참고 구간</p>
          <span className="chip border-mint/30 bg-mint-soft/40 text-mint-ink">상담 확인</span>
        </div>
        <ul className="divide-y divide-line">
          {feeRows.map((row) => (
            <li key={row.method} className="flex items-start justify-between gap-6 px-6 py-5">
              <div className="min-w-0">
                <p className="text-[13.5px] font-semibold text-ink">{row.method}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{row.note}</p>
              </div>
              <p className="num shrink-0 text-[13.5px] font-semibold text-mint-deep">{row.range}</p>
            </li>
          ))}
        </ul>
        <p className="border-t border-line bg-frost px-6 py-4 text-[11.5px] leading-relaxed text-ink-muted">
          표시된 구간은 일반적인 참고 범위이며, 확정 금액이 아닙니다. 통신사·카드사·발행사 정책과 결제 상태에 따라
          달라지므로 상담에서 확인한 조건을 기준으로 판단하세요.
        </p>
      </div>
    </div>
  </section>
);

/* ─────────────────────────── 안전 체크리스트 ─────────────────────────── */
const ChecklistSection: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-frost py-20 text-ink md:py-24">
    <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
    <div className="wrap relative">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="Safety checklist"
          title={
            <>
              거래 전, 이 6가지만
              <br />
              확인하세요.
            </>
          }
          lead="급한 마음에 놓치기 쉬운 부분들을 미리 점검할 수 있게 정리했습니다."
        />
        <ArrowLink to="/checklist" className="shrink-0">
          체크리스트 전체 보기
        </ArrowLink>
      </div>

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {checklistItems.map((item, i) => (
          <li
            key={item.title}
            className="card card-lift border-line bg-white p-6 md:p-7"
          >
            <span className="num text-[11px] font-semibold tracking-[0.24em] text-mint-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-[14.5px] font-semibold leading-snug text-ink">{item.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.8] text-ink-soft">{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* ─────────────────────────── 진행 절차 ─────────────────────────── */
const ProcessSection: React.FC = () => (
  <section className="border-b border-line bg-white py-20 md:py-24">
    <div className="wrap">
      <SectionHead
        eyebrow="How it works"
        title={
          <>
            진행은 네 단계,
            <br />
            숫자 확인이 먼저입니다.
          </>
        }
        lead="접수하자마자 조건을 말하지 않습니다. 결제수단을 확인하고 계산식을 맞춰 본 뒤 숫자로 안내합니다."
      />

      <ol className="mt-12 grid gap-px border border-line bg-line md:grid-cols-4">
        {steps.map((s) => (
          <li key={s.no} className="bg-white p-6 md:p-7">
            <span className="num text-[11px] font-semibold tracking-[0.24em] text-mint-deep">{s.no}</span>
            <h3 className="mt-4 text-[15px] font-bold tracking-[-0.01em] text-ink">{s.title}</h3>
            <p className="mt-2 text-[12.5px] leading-[1.85] text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-line bg-frost px-6 py-5">
        <p className="text-[13px] text-ink-soft">
          어디서부터 확인해야 할지 모르겠다면, 상담창에 상황만 남겨주세요.
        </p>
        <button
          type="button"
          onClick={() => openConsult()}
          className="btn-primary"
        >
          상담으로 문의하기
        </button>
      </div>
    </div>
  </section>
);

/* ─────────────────────────── 이런 때 ─────────────────────────── */
const MomentsSection: React.FC = () => (
  <section className="border-b border-line bg-frost py-20 md:py-24">
    <div className="wrap">
      <SectionHead
        eyebrow="For these moments"
        title="이런 때 함께합니다."
        lead="상품권이 남았는지, 한도가 얼마인지, 할부가 나은지. 판단이 서지 않을 때 숫자부터 같이 맞춰 봅니다."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {moments.map((m) => (
          <div key={m.title} className="card card-lift flex items-start gap-4 p-6">
            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gradient-to-br from-mint to-cyan" />
            <div>
              <h3 className="text-[14.5px] font-semibold text-ink">{m.title}</h3>
              <p className="mt-1.5 text-[13px] leading-[1.8] text-ink-soft">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────────── FAQ ─────────────────────────── */
const FaqSection: React.FC = () => (
  <section className="border-b border-line bg-white py-20 md:py-24">
    <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div>
        <SectionHead eyebrow="FAQ" title="자주 묻는 질문" lead="상담 전에 미리 확인하면 더 빠릅니다." />
        <ArrowLink to="/faq" className="mt-7">
          전체 질문 보기
        </ArrowLink>
      </div>
      <Accordion items={homeFaq} />
    </div>
  </section>
);

const Home: React.FC = () => (
  <>
    <SEO
      title="휴대폰 소액결제·정보이용료 구조와 수수료 계산"
      description="결제한 금액에서 실제로 돌려받는 금액이 어떻게 정해지는지, 지급률과 수수료율 계산식으로 먼저 확인합니다. 거래 전 점검할 6가지와 후기 판별 기준도 함께 정리했습니다. 조건은 상담에서 확인한 숫자로 안내합니다."
      ogDescription="지급률·수수료율 계산법과 거래 전 점검 6가지로 조건을 먼저 확인합니다. 상담에서 확인한 숫자로만 조건을 안내합니다."
      keywords="휴대폰 소액결제 구조,정보이용료 게임재화,지급률 계산,수수료율 비교,상품권 매입,안전 체크리스트"
      faqItems={homeFaq.map((f) => ({ question: f.q, answer: f.a }))}
    />
    <Hero />
    <ServicesSection />
    <GuidesSection />
    <FeeSection />
    <ChecklistSection />
    <ProcessSection />
    <MomentsSection />
    <FaqSection />
    <CTABand
      title={
        <>
          확인할 것을 정리했다면,
          <br />
          상담으로 이어가세요.
        </>
      }
      body="결제수단과 금액만 알려주시면 계산에 필요한 숫자를 함께 맞춰 봅니다. 조건은 확인한 뒤 안내합니다."
    />
  </>
);

export default Home;
