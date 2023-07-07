import React from "react";
import { FadeInWrapper } from "./fade-in-wrapper/fade-in-wrapper";
import classNames from "classnames";

function contentBox({
  header,
  text,
  image,
  reverse = false,
  initialVisibility = true,
}) {
  return (
    <div
      className={classNames("columns mb-6 is-centered is-vcentered", {
        "is-reversed": reverse,
      })}
    >
      <FadeInWrapper initialVisibility={initialVisibility}>
        <div>
          <img src={image} alt="" className="column-content-size" />
        </div>
      </FadeInWrapper>
      <FadeInWrapper initialVisibility={initialVisibility}>
        <div className="px-6 pt-6-mobile">
          <h1 className="is-size-2 has-text-weight-semibold">{header}</h1>
          <p>{text}</p>
        </div>
      </FadeInWrapper>
    </div>
  );
}

export default contentBox;
