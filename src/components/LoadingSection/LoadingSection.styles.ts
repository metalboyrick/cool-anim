import { colors } from "@/config/theme";
import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.gray.dark};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  z-index: 0;
`;

export const progressText = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const powerUpText = css`
  @keyframes blinkingText {
    from {
      opacity: 0.2;
    }

    to {
      opacity: 1;
    }
  }

  font-weight: 400;
  line-height: 16px;
  margin-top: 16px;

  animation-name: blinkingText;
  animation-duration: 750ms;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
`;

export const tipText = css`
  position: absolute;
  bottom: 3rem;
  font-size: 1rem;
`;

export const ballContainer = css`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export const ball = (props: {
  index: number;
  x: number;
  y: number;
  delay: number;
}) => css`
  @keyframes ballFly_${props.index} {
    0% {
      width: 10px;
      height: 10px;
      transform: translate(0, 0);
      opacity: 0;
    }

    1% {
      opacity: 0.2;
    }

    100% {
      width: 100px;
      height: 100px;
      transform: translate(${props.x}px, ${props.y}px);
      opacity: 1;
    }
  }

  background-color: ${colors.blue.medium};
  border-radius: 9999px;
  position: absolute;

  animation-name: ${"ballFly_" + props.index};
  animation-duration: 3s;
  animation-delay: ${props.delay}s;
  animation-iteration-count: infinite;
`;

export const centralCircle = (progress: number) => {
  if (typeof window !== "undefined") {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const maxValue = width > height ? width : height;

    return css`
      background-color: ${colors.blue.medium};
      border-radius: 99999px;
      width: ${`${maxValue}px`};
      height: ${`${maxValue}px`};
      transform: scale(${progress * 1.2});

      transition: transform 0.3s;
    `;
  }

  return css`
    background-color: ${colors.blue.medium};
    border-radius: 9999px;
  `;
};
