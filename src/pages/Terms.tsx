import type React from "react";
import SEO from "../components/SEO";
import { LegalList, LegalSection, LegalShell } from "../components/Legal";
import { site } from "../data/site";

const sections = [
  { id: "article1", title: "제1조 (목적)" },
  { id: "article2", title: "제2조 (용어의 정의)" },
  { id: "article3", title: "제3조 (약관의 효력 및 변경)" },
  { id: "article4", title: "제4조 (서비스의 내용)" },
  { id: "article5", title: "제5조 (이용계약의 성립)" },
  { id: "article6", title: "제6조 (이용자의 의무)" },
  { id: "article7", title: "제7조 (회사의 의무)" },
  { id: "article8", title: "제8조 (서비스 이용의 제한)" },
  { id: "article9", title: "제9조 (개인정보의 보호)" },
  { id: "article10", title: "제10조 (계약의 해지)" },
  { id: "article11", title: "제11조 (손해배상 및 면책)" },
  { id: "article12", title: "제12조 (분쟁의 해결)" },
  { id: "article13", title: "제13조 (기타)" },
];

const Terms: React.FC = () => (
  <>
    <SEO
      title="이용약관"
      description="몬스터티켓 서비스 이용약관입니다. 상품권 매입과 상품권 구매 절차 안내 서비스의 이용조건과 절차, 회사와 이용자의 권리·의무를 규정합니다."
      keywords="몬스터티켓 이용약관, 상품권 매입 약관"
    />
    <LegalShell
      eyebrow="Terms of service"
      title="이용약관"
      lead="몬스터티켓 서비스 이용에 관한 제반 사항과 기타 필요한 사항을 규정합니다."
      effective="2024. 12. 01"
      updated="2026. 11. 17"
      sections={sections}
    >
      <LegalSection id="article1" title="제1조 (목적)">
        <p>
          이 약관은 몬스터티켓(이하 "회사")이 제공하는 상품권 매입, 휴대폰 소액결제·신용카드 상품권 구매,
          정보이용료 게임재화 구매의 절차 안내 서비스(이하 "서비스")의 이용조건과 절차, 회사와 이용자 사이의
          권리·의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
        </p>
      </LegalSection>

      <LegalSection id="article2" title="제2조 (용어의 정의)">
        <LegalList
          items={[
            <><strong className="font-semibold text-ink">"회사"</strong>란 서비스를 제공하는 몬스터티켓을 의미합니다.</>,
            <><strong className="font-semibold text-ink">"이용자"</strong>란 회사의 서비스를 이용하는 개인 또는 법인을 의미합니다.</>,
            <><strong className="font-semibold text-ink">"서비스"</strong>란 상품권 매입과 상품권 구매, 정보이용료 게임재화 구매에 관해 확인 항목과 절차를 안내하고 상담을 제공하는 일체의 행위를 의미합니다.</>,
            <><strong className="font-semibold text-ink">"상담"</strong>이란 이용자가 채팅 또는 전화로 진행 가능 여부와 조건을 확인하는 과정을 의미합니다.</>,
          ]}
        />
      </LegalSection>

      <LegalSection id="article3" title="제3조 (약관의 효력 및 변경)">
        <p>
          이 약관은 회사의 웹사이트에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다. 회사는
          관련 법령에 위배되지 않는 범위에서 약관을 변경할 수 있으며, 변경된 경우 시행일과 변경 사유를 사전에
          공지합니다. 이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다.
        </p>
      </LegalSection>

      <LegalSection id="article4" title="제4조 (서비스의 내용)">
        <LegalList
          items={[
            "상품권의 종류·잔액·유효기간 확인과 매입 절차 안내",
            "휴대폰 소액결제로 상품권을 구매할 때의 한도·본인 인증·청구 시점 안내",
            "신용카드 결제·할부로 상품권을 구매할 때의 승인 조건·수수료 안내",
            "정보이용료 결제로 게임 재화·디지털 아이템을 구매할 때의 계정·한도·환불 기준 안내",
            "수수료·지급률 비교 가이드, 안전 체크리스트 등 비교 정보의 제공",
          ]}
        />
        <p>
          서비스는 구매·매입의 절차와 조건을 안내하는 것을 내용으로 하며, 실제 결제와 정산의 조건은 통신사·카드사·
          발행사의 약관과 정책을 따릅니다. 회사는 사이트에 확정 금액을 표시하지 않고 상담을 통해 조건을 안내합니다.
        </p>
      </LegalSection>

      <LegalSection id="article5" title="제5조 (이용계약의 성립)">
        <p>
          이용계약은 이용자가 상담을 신청하고 회사가 이를 승낙함으로써 성립합니다. 회사는 다음 각 호에 해당하는
          경우 승낙을 유보하거나 거절할 수 있습니다.
        </p>
        <LegalList
          items={[
            "타인 명의의 휴대폰 또는 카드를 이용하려는 경우",
            "출처가 확인되지 않은 상품권으로 상담을 요청하는 경우",
            "허위 정보를 입력하거나 본인 확인을 거부하는 경우",
            "법령 또는 통신사·카드사·발행사 정책상 처리가 제한되는 경우",
          ]}
        />
      </LegalSection>

      <LegalSection id="article6" title="제6조 (이용자의 의무)">
        <LegalList
          items={[
            "이용자는 상담에 필요한 정확한 정보를 제공해야 합니다.",
            "이용자는 본인 명의의 휴대폰과 카드만 이용할 수 있습니다.",
            "이용자는 서비스를 불법적인 목적으로 이용하거나 타인에게 이용하게 해서는 안 됩니다.",
            "이용자는 상담 과정에서 안내받은 조건과 절차를 확인한 뒤 진행 여부를 결정해야 합니다.",
          ]}
        />
      </LegalSection>

      <LegalSection id="article7" title="제7조 (회사의 의무)">
        <LegalList
          items={[
            "회사는 관련 법령과 이 약관에 따라 서비스를 제공합니다.",
            "회사는 상담에서 확인된 조건과 절차를 먼저 안내하고, 이용자의 동의 없이 결제를 요구하지 않습니다.",
            "회사는 이용자의 개인정보를 개인정보처리방침에 따라 안전하게 관리합니다.",
            "회사는 확인되지 않은 내용을 확정된 것처럼 안내하지 않습니다.",
          ]}
        />
      </LegalSection>

      <LegalSection id="article8" title="제8조 (서비스 이용의 제한)">
        <p>
          회사는 다음 각 호의 경우 서비스 제공을 일시적으로 제한하거나 중단할 수 있으며, 이 경우 가능한 범위에서
          사유와 기간을 사전에 안내합니다.
        </p>
        <LegalList
          items={[
            "시스템 점검, 통신 장애 등 불가피한 사유가 있는 경우",
            "이용자가 본인 확인을 거부하거나 허위 정보를 제공한 경우",
            "관련 법령 또는 통신사·카드사·발행사의 정책상 처리가 어려운 경우",
            "반복적인 상담 요청 등 정상적인 서비스 운영을 방해하는 경우",
          ]}
        />
      </LegalSection>

      <LegalSection id="article9" title="제9조 (개인정보의 보호)">
        <p>
          회사는 이용자의 개인정보를 관련 법령과 개인정보처리방침에 따라 처리합니다. 개인정보의 처리 목적, 항목,
          보유기간, 파기 방법 등 자세한 내용은 개인정보처리방침에서 확인할 수 있습니다.
        </p>
      </LegalSection>

      <LegalSection id="article10" title="제10조 (계약의 해지)">
        <p>
          이용자는 언제든지 상담을 중단하거나 진행을 취소할 수 있습니다. 다만 이미 결제가 완료되었거나 상품권이
          발행된 경우에는 발행사·카드사·통신사의 취소 기준이 적용되며, 회사는 가능한 범위를 안내합니다.
        </p>
      </LegalSection>

      <LegalSection id="article11" title="제11조 (손해배상 및 면책)">
        <p>
          회사는 고의 또는 과실로 이용자에게 손해를 입힌 경우 관련 법령에 따라 배상합니다. 다음 각 호의 사유로
          발생한 손해에 대해서는 회사의 책임이 제한됩니다.
        </p>
        <LegalList
          items={[
            "이용자가 제공한 정보가 사실과 달라 발생한 경우",
            "이용자가 안내된 조건과 절차를 확인하지 않고 진행한 경우",
            "통신사·카드사·발행사의 정책 변경 또는 시스템 장애로 발생한 경우",
            "천재지변, 통신 장애 등 회사가 통제할 수 없는 사유로 발생한 경우",
          ]}
        />
      </LegalSection>

      <LegalSection id="article12" title="제12조 (분쟁의 해결)">
        <p>
          회사와 이용자 사이에 분쟁이 발생한 경우 상호 협의로 해결합니다. 협의가 이루어지지 않는 경우 관련 법령에
          따른 절차에 따르며, 관할 법원은 민사소송법이 정한 바에 따릅니다.
        </p>
      </LegalSection>

      <LegalSection id="article13" title="제13조 (기타)">
        <p>
          이 약관에 명시되지 않은 사항은 관련 법령과 일반적인 상관례에 따릅니다. 문의는 고객센터(
          <a href={site.phoneHref} className="num text-mint-deep underline underline-offset-2">
            {site.phone}
          </a>
          ) 또는 사이트 내 1:1 상담으로 접수할 수 있습니다.
        </p>
        <p className="mt-4 text-[12.5px] text-ink-muted">부칙: 이 약관은 2024년 12월 1일부터 시행하며, 2026년 11월 17일 개정되었습니다.</p>
      </LegalSection>
    </LegalShell>
  </>
);

export default Terms;
