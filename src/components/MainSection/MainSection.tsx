import { cloneElement, useState } from "react";
import ActionButton from "./components/ActionButton";

import { MAIN_SECTION_MENU } from "./MainSection.constants";
import * as sty from "./MainSection.styles";
import { CgMenu } from "react-icons/cg";

function MainSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div css={sty.container}>
      <div
        css={sty.menuContainer({ isMenuOpen })}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <h3 onMouseEnter={() => setIsMenuOpen(true)} css={sty.qubitHeader}>
          Qubit {!isMenuOpen && <CgMenu />}
        </h3>
        <div css={sty.subMenuContainer({ isMenuOpen })}>
          {MAIN_SECTION_MENU.map((item, index) => (
            <div css={sty.itemContainer} key={index}>
              <div>
                {" "}
                {cloneElement(item.icon, {
                  size: 36,
                })}
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div css={sty.ctaContainer}>
        <div>
          <div>Tell me your secrets</div>
          <textarea placeholder="Input your secrets here" css={sty.inputBox} />
        </div>
        <ActionButton
          onClick={() => {
            console.log("Secret saved");
          }}
          text={"Save Secret"}
        />
      </div>
    </div>
  );
}

export default MainSection;
