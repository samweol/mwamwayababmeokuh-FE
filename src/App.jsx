import { useEffect } from "react";
import BottomTab from "./components/BottomTab/BottomTab";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import useNavigatePage from "./hooks/useNavigatePage";

function App() {
  const { navigatePage } = useNavigatePage();
  const isLogined = localStorage.getItem("recoil-persist");
  useEffect(() => {
    if (isLogined) {
      navigatePage("/home");
    } else {
      navigatePage("/signin");
    }
  }, []);
  return (
    <Layout>
      <Navbar />
      <BottomTab />
    </Layout>
  );
}

export default App;
