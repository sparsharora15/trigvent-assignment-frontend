import "./App.css";
import Header from "./Components/Header";
import SidderNav from "./Components/SidderNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTable from "./Components/Pages/DataTable";
import BarChart from "./Components/Pages/BarChart";
import About from "./Components/Pages/About";
import { useEffect } from "react";
import { getTableData } from "./Config/API";
function App() {
  async function getMenuData() {
    const response = await getTableData("/api/getMenu");
    localStorage.setItem("menuData", JSON.stringify(response.data));
  }
  useEffect(() => {
    getMenuData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SidderNav />}>
            <Route path="/" element={<DataTable />} />
            <Route path="/chart" element={<BarChart />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
