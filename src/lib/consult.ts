import { useCallback, useRef, useState } from "react";

declare global {
  interface Window {
    /** index.html 에 정의된 상담 진입점 (이름·번호 모달 → ChannelIO boot → 전환 기록) */
    startConsult?: () => void;
  }
}

/**
 * 상담 버튼의 단일 진입점.
 * index.html 의 startConsult 를 그대로 호출합니다.
 * (저장된 이름·번호가 있으면 즉시 채널톡 연결, 없으면 정보 입력 모달 → 제출 시
 *  Google Ads 전환 이벤트와 ChannelIO boot 가 index.html 안에서 실행됩니다.)
 */
export function openConsult() {
  if (typeof window === "undefined") return;
  const start = window.startConsult;
  if (typeof start === "function") {
    try {
      start();
    } catch {
      /* index.html 이 아직 준비되지 않은 예외 상황은 무시합니다. */
    }
  }
}

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^0-9]/g, "")}`;
}

/**
 * 브랜드 상담 카드의 "커졌다 작아지는" 반동.
 * 클릭 → animate-ticket-bounce 1회 재생 → 애니메이션이 끝나면 클래스를 제거해
 * 다음 클릭에서도 같은 반동이 다시 재생됩니다.
 */
export function useTicketBounce() {
  const [bouncing, setBouncing] = useState(false);
  const timer = useRef<number | null>(null);

  const trigger = useCallback(() => {
    setBouncing(false);
    if (timer.current) window.clearTimeout(timer.current);
    // 같은 프레임에 클래스가 다시 붙도록 한 틱 미룹니다.
    window.setTimeout(() => {
      setBouncing(true);
      timer.current = window.setTimeout(() => setBouncing(false), 720);
    }, 16);
  }, []);

  return { bouncing, trigger, className: bouncing ? "animate-ticket-bounce" : "" };
}
