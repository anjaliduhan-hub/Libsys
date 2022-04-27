

function RollDice(props)
{

    setBtnDisabled(true);
    clearInterval(intrvl);
    let counter = Math.floor((Math.random() * maxRollTimes) + 1);
    setRollTimes(counter);
    const interval = setInterval(()=>{
      setDiceFace(Math.floor(Math.random() * faces) + 1);
      counter--;
      setRollTimes(counter);
    }, 200);
    setIntrvl(interval);
  
  
    const dice = (
        <div className="dice-container">
            <div className={`dice face-${diceFace}`}>
              <div className="face-1">
                <div className="dot-container">
                  <div className="dot"></div>
                </div>
              </div>
              <div className="face-3">
                <div className="dot-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="face-4">
                <div className="dot-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="face-2">
                <div className="dot-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="face-5">
                <div className="dot-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="face-6">
                <div className="dot-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
        </div>
      ); 
}



export default RollDice;