import { Header, FormZod, Footer, ErrorPage, FormHook } from "./components";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FormProvider from "./context/formContext";

function App() {
  return (
    <>
      <FormProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<FormZod />} />
            <Route path="/hook-form" element={<FormHook />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </FormProvider>
    </>
  );
}

export default App;
