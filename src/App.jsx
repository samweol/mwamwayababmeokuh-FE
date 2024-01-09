import { useEffect } from "react";
import BottomTab from "./components/BottomTab/BottomTab";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import useNavigatePage from "./hooks/useNavigatePage";

function App() {
  const { navigatePage } = useNavigatePage();
  useEffect(() => {
    navigatePage("/home");
  }, []);
  return (
    <Layout>
      <Navbar />
      <BottomTab />
    </Layout>
  );
}

export default App;
