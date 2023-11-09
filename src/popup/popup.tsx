import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
const Test = (
  <div>
    <h1 className="text-[24px] text-green-100">안녕하세요</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic tempora
      iusto illum doloremque pariatur, amet molestias exercitationem sunt animi
      beatae laudantium vero magni ut consequuntur. Quae adipisci voluptas
      assumenda.
    </p>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Test);
