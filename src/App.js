import "./css/App.css";
import React,{useState} from "react";
import Timer from "./components/Timer";
import Buttons from "./components/buttons" 

function App() {
  const [time,setTime] = useState({ms:0,s:0,m:0,h:0});
  const [interv,setInterv] = useState();
  const [status,setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run,1000));
  }
  var updatems = time.ms,updates = time.s,updatem = time.m,updateh = time.h;
  
  const run = () =>{
    if(updatem===60){
      updateh++;
      updatem=0;
    }
    if(updates===60){
      updatem++;
      updates=0;
    }
    updates++;
    return setTime({ms:updatems,s:updates,m:updatem,h:updateh});
  };

  const pause = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0,s:0,m:0,h:0});
  }

  const resume = () => start();
  return (
    <div className="main-section">
      <div class="clock-holder">
        <div className="stopwatch">
            <Timer time={time}/>
            <Buttons status={status} resume={resume} reset={reset} pause={pause} start={start}/>
        </div>
      </div>
    </div>
  );
}

export default App;
