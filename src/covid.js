import React, {useEffect, useState} from 'react'
import "./covid.css";

const Covid = () => {
   const [state, setstate] = useState([]);

   const getCovidData =async()=>{
    try{
        const res= await fetch('https://api.covid19india.org/data.json');
const ActualData = await res.json();
console.log(ActualData.statewise[0]);
setstate(ActualData.statewise[0]);
    } catch(err){
        console.log(err); 
    }  
    

   }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
          
          <section className="mainbody">
          <h2>Live</h2>
          <h1>Coronavirus Tracker India</h1>
              <ul>
                  <li className='card'>
                      <div className="card_main">
                          <div className="card_inner">
                              <p className="card_name">Our Country</p>
                              <p className="card_total">India</p>

                            </div>
                     </div>
                  </li>
                  <li className='card'>
                      <div className="card_main">
                          <div className="card_inner">
                              <p className="card_name">Total Active</p>
                              <p className="card_total">{state.active}</p>

                            </div>
                     </div>
                  </li>
                  <li className='card'>
                      <div className="card_main">
                          <div className="card_inner">
                              <p className="card_name">Total Confirmed</p>
                              <p className="card_total">{state.confirmed}</p>

                            </div>
                     </div>
                  </li>
                  <li className='card'>
                      <div className="card_main">
                          <div className="card_inner">
                              <p className="card_name">Total Deaths</p>
                              <p className="card_total">{state.deaths}</p>

                            </div>
                     </div>
                  </li>
                  <li className='card'>
                      <div className="card_main">
                          <div className="card_inner">
                              <p className="card_name">Total Recovered</p>
                              <p className="card_total">{state.recovered}</p>

                            </div>
                     </div>
                  </li>
                  <li className='card'>
                      <div className="card_main">
                          <div className="card_inner">
                              <p className="card_name">Last Updated Time</p>
                              <p className="card_total">{state.lastupdatedtime}</p>

                            </div>
                     </div>
                  </li>
              </ul>

          </section>
        </>
    )
}

export default Covid
