import { Header, FormZod, Footer, ErrorPage, FormHook } from "./components";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<FormZod />} />
          <Route path="/hook-form" element={<FormHook />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
