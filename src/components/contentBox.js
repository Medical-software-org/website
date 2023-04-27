import React from "react";

function contentBox({ color, header, text1, text2, image, reverse }) {
  if (reverse) {
    return (
      <div
        className="flex-container-reverse"
        style={{
          background: color,
          paddingTop: 50,
          paddingBottom: 50,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <div className="flex-item-left">
          <img src={image} className="image shadow" alt="" />
        </div>
        <div className="flex-item-right">
          <div className="pp shadow p-3 mb-5 bg rounded">
            <p style={{ fontSize: 36, fontWeight: "medium" }}>{header}</p>
            {text1}
            <br />
            <br />
            {text2}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex-container"
      style={{
        background: color,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <div className="flex-item-left">
        <img src={image} className="image shadow" alt="" />
      </div>
      <div className="flex-item-right">
        <div className="pp shadow p-3 mb-5 bg-white rounded">
          <p style={{ fontSize: 36, fontWeight: "medium" }}>{header}</p>
          {text1}
          <br />
          <br />
          {text2}
        </div>
      </div>
    </div>
  );
}

export default contentBox;
