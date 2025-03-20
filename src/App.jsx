import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import GlobalContext from "./contexts/globalContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/movies/:id" Component={FilmPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
};