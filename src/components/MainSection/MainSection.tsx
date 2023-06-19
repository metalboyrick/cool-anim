import ActionButton from "./components/ActionButton";
import * as sty from "./MainSection.styles";

function MainSection() {
  return (
    <div>
      <ActionButton
        onClick={() => {
          console.log("Secret saved");
        }}
        text={"Save Secret"}
      />
    </div>
  );
}

export default MainSection;
