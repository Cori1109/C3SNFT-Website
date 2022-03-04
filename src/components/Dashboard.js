import React from "react";
import Clock from "src/components/Clock";
import BGImage from "src/components/slider.js";

export default function Dashboard() {
  const class_name = "launch-board";
  return (
    <div className="dashboard">
      <BGImage src={"images/website.jpg"}>
        <Clock class_name={class_name} />
      </BGImage>
    </div>
  );
}
