import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useState } from "react";

function App(props) {
    return(
      <div>
        <Header/>
          <div>
            {props.children}
          </div>
        <Footer/>
      </div>
    )
}

export default App;
