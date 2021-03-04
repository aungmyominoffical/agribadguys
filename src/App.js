import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home"
import Details from "./pages/details"
import Report from "./pages/report"
import Test_Page from "./pages/test"
import Thank_You from "./pages/thankyou"



function App() {
  return (
   <BrowserRouter>
   <Route path="/" exact component={Home}></Route>
   <Route path="/report" exact component={Report}></Route>
   <Route path="/thank" exact component={Thank_You}></Route>
   <Route path="/test" exact component={Test_Page}></Route>
   <Route path="/details/:id" component={Details}></Route>
   </BrowserRouter>
  );
}

export default App;
