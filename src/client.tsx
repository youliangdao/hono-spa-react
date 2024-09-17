import ReactDOMClient from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
ReactDOMClient.hydrateRoot(rootElement, <App />);
