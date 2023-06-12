import Navbar from "@/scenes/navbar"
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return <div className="app bg-grey-20">
    <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  </div>;
}
export default App;
