import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
        display: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      colors: {
        /* 딥 슬레이트 차콜 */
        ink: {
          DEFAULT: "#0B1117",
          soft: "#3F4C5A",
          muted: "#6B7A8B",
        },
        night: {
          DEFAULT: "#0B1117",
          deep: "#070C11",
          soft: "#111827",
          line: "#1F2A37",
        },
        /* 쿨 화이트 */
        frost: {
          DEFAULT: "#F8FAFC",
          light: "#FFFFFF",
          deep: "#F1F5F9",
        },
        /* 에메랄드 민트 */
        mint: {
          DEFAULT: "#10B981",
          light: "#34D399",
          deep: "#059669",
          soft: "#D1FAE5",
          ink: "#064E3B",
        },
        /* 시안 */
        cyan: {
          DEFAULT: "#06B6D4",
          light: "#22D3EE",
          deep: "#0891B2",
          soft: "#CFFAFE",
        },
        steel: "#CBD5E1",
        line: "#E2E8F0",
      },
      letterSpacing: {
        widest2: "0.24em",
      },
      maxWidth: {
        wrap: "1200px",
        prose2: "68ch",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        /* 브랜드 상담 카드 클릭: 살짝 커졌다가 돌아오는 쫀득한 반동 */
        "ticket-bounce": {
          "0%": { transform: "scale(1)" },
          "26%": { transform: "scale(1.05)" },
          "55%": { transform: "scale(0.978)" },
          "78%": { transform: "scale(1.012)" },
          "100%": { transform: "scale(1)" },
        },
        "ticket-glow": {
          "0%": { opacity: "0" },
          "28%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "mascot-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(-1.5deg)" },
          "50%": { transform: "translateY(-10px) rotate(1.5deg)" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        fade: "fade 1.1s ease both",
        "ticket-bounce": "ticket-bounce 0.7s cubic-bezier(0.33, 1, 0.68, 1) both",
        "ticket-glow": "ticket-glow 0.9s ease-out both",
        "mascot-float": "mascot-float 4.5s ease-in-out infinite",
      },
      transitionProperty: {
        border: "border-color",
      },
    },
  },
  plugins: [animate, typography],
};
