// import TimeApp from "./03_state/TimeApp";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StateApp from "./03_state/StateApp";

// 1초마다 다시 렌더링
setInterval(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <StateApp />
      {/* <TimeApp /> */}
    </StrictMode>
  )
}, 1000);