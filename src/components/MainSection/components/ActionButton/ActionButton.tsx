import * as sty from "./ActionButton.styles";
import { ActionButtonProps } from "./ActionButton.types";

function ActionButton({ onClick, text }: ActionButtonProps) {
  return (
    <button onClick={onClick} css={sty.container}>
      <div css={sty.border}>
        <div css={sty.inner}>{text}</div>
      </div>
    </button>
  );
}

export default ActionButton;
