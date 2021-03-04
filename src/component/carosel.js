import { useState } from "react";
import {Container,Row} from "react-bootstrap"
import My_Why from "../component/reasonmodel"
import Reason_Data from "../component/reasondata"


function My_Carosel(){
    const [reason1,setReason1]=useState(false)
    const [reason2,setReason2]=useState(false)

    return(
        <Container style={{borderRadius:"2px",width:"100hw",backgroundColor:"#BB0A21",height:"35px"}}>
            <My_Why 
            show={reason1}
            title="ရည်ရွယ်ချက်"
            reason={<Reason_Data index="aim"/>}
            onHide={()=>{
                setReason1(false)

            }}/>
            
            <My_Why 
            show={reason2}
            title="My Why"
            reason={<Reason_Data index="why"/>}
            onHide={()=>{
                setReason2(false)

            }}/>
            <Row >
                <div 
                style={{color:"white",fontWeight:"bold",padding:"5px"}}
                onClick={()=>{
                    setReason1(true)
                }}
                >
                ရည်ရွယ်ချက်
                </div>
                <div style={{width:"1px",backgroundColor:"white"}}></div>
                {/* <div 
                style={{color:"white",fontWeight:"bold",padding:"5px"}}
                onClick={()=>{
                    setReason2(true)
                }}
                >
                ဘာကြောင့်လဲ ?
                </div>
                <div style={{width:"1px",backgroundColor:"white"}}></div> */}

            </Row>
        </Container>

       

    );
}

export default My_Carosel