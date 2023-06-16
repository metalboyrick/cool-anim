import { css } from "@emotion/react";

function LoadingSection() {
  return (
    <div
      css={css`
        background: red;
        width: 10px;
        height: 10px;
      `}
    />
  );
}

export default LoadingSection;
