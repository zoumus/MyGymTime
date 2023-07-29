import Navbar from "@/scenes/navbar"
import { useState } from "react";
import { SelectedPage } from "@/shared/types";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="ap ">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
  </div>
  );
}
export default App;