import MyComponentContainer from "./MyComponentContainer";
import { createRoot } from "react-dom/client";

const initialize = () => {
  const element = document.getElementById("root");
  if (element) {
    const root = createRoot(element);
    root.render(<MyComponentContainer title="My Custom Component" />);
  }
};

if (process.env.NODE_ENV === "development") {
  initialize();
}

export default MyComponentContainer;
