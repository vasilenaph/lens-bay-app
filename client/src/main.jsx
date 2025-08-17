import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import { CameraProvider } from "./context/CameraContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <CameraProvider>
        <App />
      </CameraProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
