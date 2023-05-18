import { useEffect, useState } from "react"
import StadiumCard from "./StadiumCard";

function StadiumList() { 
    const [stadiums, setStadiums]=useState([]);

    useEffect(() => {
        
        async function getStadiums() {
            const response = await fetch(`http://localhost:5050/record/`);
        
            if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              window.alert(message);
              return;
            }
        
            const records = await response.json();
            setStadiums(records)
          }
        
          getStadiums();


    }, [])
    return (<div><h1>stadiums</h1>
    {
        stadiums.map((s)=> (<StadiumCard stadium={s}/>))
    }
    </div>)
}

export default StadiumList