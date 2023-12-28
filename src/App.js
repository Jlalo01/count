import { useState } from 'react';
import bcrypt from "bcryptjs";
import './App.css';

function App() {
  const on = "January 12, 2024";
  const hash = '$2b$13$7K43NXoFtY.ZPzhaBTSTEe0CgLcXkQQ7hxzL1N9DOdRIJKoXjMnja';
  const [pass, setPass] = useState("");
  const [fin, setFin] = useState("");
  const [show, setShow] = useState(false)

  setTimeout(() => {
    const total = Date.parse(on) - Date.parse(new Date());
    let seconds = Math.floor( (total/1000) % 60 );
    if (seconds < 10){seconds = "0" + seconds.toString();}
    let minutes = Math.floor( (total/1000/60) % 60 );
    if (minutes < 10){minutes = "0" + minutes.toString();}
    let hours = Math.floor( (total/(1000*60*60)) % 24 );
    if (hours < 10){hours = "0" + hours.toString();}
    let days = Math.floor( total/(1000*60*60*24) );
    if (days < 10){days = "0" + days.toString();}
    setFin(days+":"+hours+":"+minutes+":"+seconds);
  },1000);

  async function handleClick(){
    if (bcrypt.compareSync(pass, hash)){setShow(true);}
    else{setFin("NO");}
    console.log(pass);
  }

  if (show){
    return <div className='App'><div className='timer'>{fin}</div></div>
  }
  else{
    return(
      <div className="App">
        <form>
          <label className="password">Password: </label>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        </form>
        <button onClick={handleClick}>Enter</button>
      </div>
    );
  }
  
}

export default App;
