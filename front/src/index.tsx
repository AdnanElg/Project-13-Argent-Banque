// Import modules:
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import store from "./services/store.tsx";

// Render React application in "root" element using React Router and user data context.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
