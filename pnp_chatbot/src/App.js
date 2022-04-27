import React from "react"
import TargetX from "./Components/TargetX.js"
import SymphonyX from "./Components/SymphonyX.js"
import LSNetX from "./Components/LSNetX.js"

let key = [0, 1, 2];
let component = [<TargetX />, <SymphonyX />, <LSNetX/>];
function App() {

  let id = 2;
  return (

    key.map((key, index) => {
      if (key === id) {
        return component[id];
      }
    })
  );
}

export default App;
























{/* <div>
{
(function({id}){
switch({id})
{
  case 1: <Route path="/Components/Libsys" exact element={ <Libsys/> } />;
  break;
  case 2: return <Myntra/>;
  break;
  default : return null;
}})
}
</div> */}