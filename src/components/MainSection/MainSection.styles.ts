import { css } from "@emotion/react";

import { colors } from "@/config/theme";

export const container = css`
  width: 100vw;
  height: 100vh;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  background-color: ${colors.gray.dark};
`;

export const qubitHeader = css`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;

  cursor: default;
`;

export const menuContainer = ({ isMenuOpen }: { isMenuOpen: boolean }) => css`
  @keyframes introAnimMenuContainer {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 2rem;

  clip-path: inset(20px 80px 210px 80px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  animation-name: introAnimMenuContainer;
  animation-iteration-count: 1;
  animation-duration: 1000ms;
  animation-delay: 300ms;
  animation-fill-mode: forwards;

  ${isMenuOpen &&
  `
    background-color: ${colors.gray.medium};
    border-color: ${colors.gray.light};
    clip-path: inset(0px);
  `}

  transition: background-color 300ms, border 300ms, clip-path 200ms;
`;

export const subMenuContainer = ({
  isMenuOpen,
}: {
  isMenuOpen: boolean;
}) => css`
  opacity: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;

  ${isMenuOpen &&
  `
    opacity: 1;
  `}

  transition: opacity 300ms;
`;

export const itemContainer = css`
  &:hover {
    background-color: ${colors.gray.light};
    cursor: pointer;
    transform: translateY(-4px);
    box-shadow: -1px 6px 13px -1px ${colors.gray.dark};
  }

  padding: 0.5rem;
  border: 1px solid ${colors.gray.light};
  border-radius: 0.5rem;

  text-align: center;

  transition: background-color 200ms, transform 200ms, box-shadow 200ms;
`;

export const ctaContainer = css`
  @keyframes introAnimCtaContainer {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  opacity: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 2rem;

  animation-name: introAnimCtaContainer;
  animation-iteration-count: 1;
  animation-duration: 1000ms;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;
`;

export const inputBox = css`
  margin-top: 0.75rem;
  background-color: ${colors.black};
  width: 480px;
  height: 240px;
  padding: 1rem;

  border: none;
  border-radius: 0.5rem;

  resize: none;
`;
