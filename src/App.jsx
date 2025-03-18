import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={FilmPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};