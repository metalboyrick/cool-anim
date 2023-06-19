import { colors } from "@/config/theme";
import { css } from "@emotion/react";

export const container = css`
  width: 180px;
  background-color: transparent;
  border: none;
`;

export const border = css`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    @keyframes buttonGlitter {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    background-image: linear-gradient(
      0deg,
      rgba(65, 147, 254, 1) 0%,
      rgba(65, 147, 254, 1) 40%,
      rgba(255, 255, 255, 1) 50%,
      rgba(65, 147, 254, 1) 60%,
      rgba(65, 147, 254, 1) 100%
    );

    animation-name: buttonGlitter;
    animation-duration: 10000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: 0ms;

    position: absolute;
    width: 400%;
    height: 400%;
    top: -150%;
    left: -150%;
    z-index: -1;
  }

  padding: 1px;
  border-radius: 0.5rem;
`;

export const inner = css`
  background-color: ${colors.blue.medium};
  padding: 1rem 0;
  border-radius: 0.5rem;
  font-weight: bold;
`;
