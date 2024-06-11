import Main from "./pages/main";
import Navbar from "./component/navbar";
import { useState } from "react";
import Detail from "./pages/detail";

function App() {
  const [detailPageToggle, setDetailPageToggle] = useState(false);
  return (
    <div className="">
      <Navbar />
      <Main setDetailPageToggle={setDetailPageToggle} detailPageToggle={detailPageToggle}/>
      {detailPageToggle && <Detail setDetailPageToggle={setDetailPageToggle}/>}
    </div>
  );
}

export default App;
