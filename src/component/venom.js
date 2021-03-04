import React, { useEffect, useState } from "react"
import {reactLocalStorage} from 'reactjs-localstorage';
import Venom_Card from "./venomcard"


function Venom(props){
    

    

    return(
       <div >
           {
               props.data.map((item,index)=>{

                return(
                    <Venom_Card 
                    profile={item.profile}
                    name={item.name}
                    position={item.position}
                    degree={item.degree}
                    location={item.location}
                    parameter={item.parameter}
                    />
                );
               })
           }
           
       </div>
    );


}

export default Venom