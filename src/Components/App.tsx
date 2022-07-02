import { Route, Routes } from "react-router-dom";
import ShowDetailsPage from "./ShowDetailsPage";
import ShowsList from "./ShowsList";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ShowsList />} />
        <Route path="/shows/:id" element={<ShowDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
