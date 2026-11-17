import type React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ConsultButton } from "../components/ui";

const NotFound: React.FC = () => (
  <>
    <SEO
      noindex
      title="페이지를 찾을 수 없습니다"
      description="요청하신 페이지를 찾을 수 없습니다. 몬스터티켓 홈에서 상품권 매입과 결제 구매 안내를 확인하세요."
    />
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="wrap relative flex min-h-[68vh] flex-col justify-center py-20">
        <p className="eyebrow mb-5">Error 404</p>
        <h1 className="display-hero text-ink">
          페이지를
          <br />
          찾을 수 없습니다.
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-ink-soft">
          요청하신 주소가 변경되었거나 존재하지 않습니다. 홈에서 수수료 비교 가이드와 안전 체크리스트를 확인하시거나,
          상담으로 바로 문의하세요.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary min-h-[54px] px-7 text-[15px]">
            홈으로 돌아가기
          </Link>
          <ConsultButton variant="outline" size="lg" label="채널톡 1:1 상담" />
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
