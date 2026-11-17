import type React from "react";
import SEO from "../components/SEO";
import { LegalList, LegalSection, LegalShell } from "../components/Legal";
import { site } from "../data/site";

const sections = [
  { id: "p1", title: "1. 개인정보의 처리 목적" },
  { id: "p2", title: "2. 처리 항목 및 보유기간" },
  { id: "p3", title: "3. 개인정보의 제3자 제공" },
  { id: "p4", title: "4. 개인정보 처리의 위탁" },
  { id: "p5", title: "5. 정보주체의 권리·의무" },
  { id: "p6", title: "6. 개인정보의 파기" },
  { id: "p7", title: "7. 안전성 확보조치" },
  { id: "p8", title: "8. 쿠키의 운영 및 거부" },
  { id: "p9", title: "9. 개인정보 보호책임자" },
  { id: "p10", title: "10. 고충처리 및 구제방법" },
  { id: "p11", title: "11. 처리방침의 변경" },
];

const Privacy: React.FC = () => (
  <>
    <SEO
      title="개인정보처리방침"
      description="몬스터티켓 개인정보처리방침. 상담 시 수집하는 개인정보의 항목과 목적, 보유기간, 파기 방법, 정보주체의 권리를 안내합니다."
      keywords="몬스터티켓 개인정보처리방침, 개인정보 수집, 상담 정보"
    />
    <LegalShell
      eyebrow="Privacy policy"
      title="개인정보처리방침"
      lead="몬스터티켓은 상담에 필요한 최소한의 정보만 수집하고, 수집한 목적 범위 안에서만 이용합니다."
      effective="2024. 12. 01"
      updated="2026. 11. 17"
      sections={sections}
    >
      <p className="border border-line bg-frost p-5 text-[13px] leading-[1.9] text-ink-soft">
        몬스터티켓(이하 "회사")은 「개인정보 보호법」 등 관련 법령에 따라 이용자의 개인정보를 보호하고, 이와 관련한
        고충을 신속하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
      </p>

      <LegalSection id="p1" title="1. 개인정보의 처리 목적">
        <p>회사는 다음 목적을 위해 개인정보를 처리하며, 다음 목적 이외의 용도로는 이용하지 않습니다.</p>
        <LegalList
          items={[
            <><strong className="font-semibold text-ink">상담 응대</strong> — 상품권 매입·구매 가능 여부 확인, 조건 안내, 진행 상황 안내</>,
            <><strong className="font-semibold text-ink">고객 식별</strong> — 채널톡 상담에서 동일 고객의 이전 상담 내용 확인</>,
            <><strong className="font-semibold text-ink">문의·불만 처리</strong> — 접수된 문의의 처리와 결과 안내</>,
            <><strong className="font-semibold text-ink">부정이용 방지</strong> — 타인 명의 이용 등 비정상적인 이용의 확인</>,
            <><strong className="font-semibold text-ink">서비스 개선</strong> — 방문 기록을 활용한 이용 현황 분석(개인을 식별하지 않는 형태)</>,
          ]}
        />
      </LegalSection>

      <LegalSection id="p2" title="2. 처리 항목 및 보유기간">
        <div className="divide-y divide-line border-y border-line">
          <div className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-6">
            <p className="text-[12.5px] font-semibold text-ink">필수 항목</p>
            <p>성함, 휴대폰 번호 (상담 시작 시 1회 입력)</p>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-6">
            <p className="text-[12.5px] font-semibold text-ink">자동 수집 항목</p>
            <p>접속 IP, 브라우저·기기 정보, 방문 일시, 접속 기록, 쿠키</p>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-6">
            <p className="text-[12.5px] font-semibold text-ink">보유기간</p>
            <p>
              상담 종료 후 1년, 또는 이용자가 삭제를 요청한 때까지. 관계 법령에서 보존을 요구하는 경우 해당 기간 동안
              보관합니다.
            </p>
          </div>
        </div>
        <p>
          회사는 주민등록번호, 비밀번호, 인증번호 전체 등 상담에 필요하지 않은 정보는 수집하지 않습니다. 상담 정보는
          이용자의 브라우저에 저장되어 다음 상담 시 자동으로 연결되며, 브라우저 저장 데이터를 삭제하면 함께
          삭제됩니다.
        </p>
      </LegalSection>

      <LegalSection id="p3" title="3. 개인정보의 제3자 제공">
        <p>
          회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 다음의 경우에는 관련 법령에 따라 제공할 수
          있습니다.
        </p>
        <LegalList
          items={[
            "이용자가 사전에 동의한 경우",
            "법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관이 요구하는 경우",
          ]}
        />
      </LegalSection>

      <LegalSection id="p4" title="4. 개인정보 처리의 위탁">
        <p>회사는 서비스 운영을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border border-line text-left text-[12.5px]">
            <thead className="bg-frost text-ink-soft">
              <tr>
                <th className="border-b border-line px-4 py-3 font-semibold">수탁자</th>
                <th className="border-b border-line px-4 py-3 font-semibold">위탁 업무</th>
                <th className="border-b border-line px-4 py-3 font-semibold">보유 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-line px-4 py-3">채널코퍼레이션(채널톡)</td>
                <td className="border-b border-line px-4 py-3">1:1 채팅 상담 채널 운영 및 상담 기록 보관</td>
                <td className="border-b border-line px-4 py-3">위탁 계약 종료 시까지</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Google LLC</td>
                <td className="px-4 py-3">웹 로그 분석 및 광고 전환 측정</td>
                <td className="px-4 py-3">서비스 이용 기간</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          위탁 업무의 내용이나 수탁자가 변경되는 경우 이 방침을 통해 공개합니다.
        </p>
      </LegalSection>

      <LegalSection id="p5" title="5. 정보주체의 권리·의무">
        <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
        <LegalList
          items={[
            "개인정보 처리 현황의 통지 요구",
            "개인정보의 열람 요구",
            "개인정보의 정정·삭제 요구",
            "개인정보 처리의 정지 요구",
          ]}
        />
        <p>
          권리 행사는 고객센터(
          <a href={site.phoneHref} className="num text-mint-deep underline underline-offset-2">
            {site.phone}
          </a>
          ) 또는 사이트 내 1:1 상담으로 요청할 수 있으며, 회사는 지체 없이(10일 이내) 처리합니다. 법령에서 열람을
          제한하거나 다른 사람의 권리를 침해할 우려가 있는 경우에는 요청이 제한될 수 있습니다.
        </p>
      </LegalSection>

      <LegalSection id="p6" title="6. 개인정보의 파기">
        <p>보유기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.</p>
        <LegalList
          items={[
            "전자적 파일 형태: 복구할 수 없는 방법으로 삭제",
            "종이 문서 형태: 분쇄하거나 소각",
          ]}
        />
        <p>
          법령에 따라 보존해야 하는 정보는 별도의 저장 공간에 분리 보관하며, 보존 목적 이외의 용도로는 이용하지
          않습니다.
        </p>
      </LegalSection>

      <LegalSection id="p7" title="7. 안전성 확보조치">
        <LegalList
          items={[
            "개인정보에 접근할 수 있는 담당자를 최소한으로 지정하고 접근 권한을 관리합니다.",
            "상담 정보는 채널톡을 통해 전송 구간이 암호화된 상태로 처리됩니다.",
            "사이트는 HTTPS로 운영되어 입력 정보가 암호화되어 전송됩니다.",
            "개인정보 처리 시스템의 접속 기록을 보관하고 위조·변조를 방지합니다.",
          ]}
        />
      </LegalSection>

      <LegalSection id="p8" title="8. 쿠키의 운영 및 거부">
        <p>
          회사는 이용 환경을 기억하고 방문 통계를 확인하기 위해 쿠키를 사용합니다. 이용자는 브라우저 설정에서 쿠키
          저장을 거부하거나 삭제할 수 있습니다. 다만 상담 정보를 기억하는 기능은 쿠키와 브라우저 저장소를 사용하므로,
          삭제하면 다음 상담 시 성함과 휴대폰 번호를 다시 입력해야 합니다.
        </p>
      </LegalSection>

      <LegalSection id="p9" title="9. 개인정보 보호책임자">
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄하고 관련 문의와 불만을 처리하기 위해 아래와 같이 개인정보
          보호책임자를 지정하고 있습니다.
        </p>
        <LegalList
          items={[
            "개인정보 보호책임자: 몬스터티켓 운영팀",
            <>
              연락처:{" "}
              <a href={site.phoneHref} className="num text-mint-deep underline underline-offset-2">
                {site.phone}
              </a>{" "}
              · 사이트 내 1:1 상담(채널톡)
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="p10" title="10. 고충처리 및 구제방법">
        <p>
          개인정보와 관련한 문의는 고객센터로 접수해 주시면 확인 후 안내드립니다. 개인정보 침해에 대한 신고나 상담이
          필요한 경우 아래 기관에 문의할 수 있습니다.
        </p>
        <LegalList
          items={[
            "개인정보침해 신고센터 — privacy.kisa.or.kr / 국번 없이 118",
            "개인정보 분쟁조정위원회 — www.kopico.go.kr / 1833-6972",
            "대검찰청 사이버수사과 — www.spo.go.kr / 국번 없이 1301",
          ]}
        />
      </LegalSection>

      <LegalSection id="p11" title="11. 처리방침의 변경">
        <p>
          이 방침의 내용이 추가·삭제·수정되는 경우 시행 전에 사이트를 통해 공지합니다. 이 방침은 2024년 12월 1일부터
          시행하며, 2026년 11월 17일 개정되었습니다.
        </p>
      </LegalSection>
    </LegalShell>
  </>
);

export default Privacy;
