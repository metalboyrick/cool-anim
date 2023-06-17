import { useEffect, useState } from "react";

import { DIRECTIONALS } from "./LoadingSection.constants";
import * as sty from "./LoadingSection.styles";

function LoadingSection() {
  const [progress, setProgress] = useState(0.0);

  useEffect(() => {
    const incrementProgress = (newProgress: number) => {
      if (newProgress <= 1.0) {
        setTimeout(() => {
          setProgress(newProgress);
          incrementProgress(newProgress + 0.01);
        }, 120);
      }
    };

    incrementProgress(0.01);
  }, []);

  return (
    <div css={sty.container}>
      <div css={sty.ballContainer}>
        {/* flying circles */}
        {DIRECTIONALS.map((item, index) => {
          return <div css={sty.ball({ ...item, index })} key={index} />;
        })}

        {/* central circle */}
        <div css={sty.centralCircle(progress)} />
      </div>
      <div css={sty.progressText}>
        <h1>{Math.ceil(progress * 100)}%</h1>
        <h3 css={sty.powerUpText}>Powering Up Hadron Collider</h3>
      </div>
      <div css={sty.tipText}>
        Tip: Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quae.
      </div>
    </div>
  );
}

export default LoadingSection;
