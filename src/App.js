import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main-page/MainPage";
import AddCTABtn from "./pages/add-cta-btn-page/AddCTABtn";
import PreviewPage from "./pages/preview-page/PreviewPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="AddCtaBtn" element={<AddCTABtn />} />
          <Route path="/previewpage" element={<PreviewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
