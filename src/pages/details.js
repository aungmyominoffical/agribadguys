import { useEffect, useState } from "react";
import {useParams} from "react-router"
import {reactLocalStorage} from 'reactjs-localstorage';
import {Container,Card,Col,Row,Image} from "react-bootstrap"
import StarRatings from 'react-star-ratings';
import Media_Type from "../player/typemedia"
import Spinner from 'react-bootstrap/Spinner'
import My_Navbar from "../component/navbar"
import MetaData from "../component/metadata"

function Details(props){
    let { id } = useParams();
    const [loading,setLoading]=useState(true)
    const [list,setList]=useState([])
    const [data,setData]=useState({})
    


    useEffect(()=>{
       
        // if(reactLocalStorage.getObject("list").length == undefined){

        // Call_Api();
            
        // }else{
        //     setList(reactLocalStorage.getObject("list"))
        //     Call_Api();
        // }

        Call_Api()
           
        
        function Call_Api(){
             var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://script.googleusercontent.com/macros/echo?user_content_key=FN1jGBSmB9fPUrKA_IhYqPiWnpYse4UcQgSB80vTGNKEXnDwPsElHDi2pMn2jDXl5MHGuxLoy6GO4EBQAly6PaadCAJn5el4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHJvzOegTTDj07GEXnvNLOMgzrjI4si5PLs2s1fm6qB0uXMPur0xw87adGfuJYZkSOr0SCefgG9cvJsw0wqpxiI&lib=MZv8Bbr30xPuV-u4Zd-6UJCp96-TN50by", requestOptions)
            .then(response => response.json())
            .then(result => {
             
                setList(result)
                setLoading(false)
               

            })
            .catch(error => console.log('error', error));

       
        }

        


       
    },[0])

    return (
        <div>
            {
                 list.map((item,index)=>{

                    if(item.parameter == id){
                        return <MetaData
                        title={item.name}
                        description={`${item.name} - ${item.position}`}
                        url={item.parameter}
                        image={item.profile}
                        />
                    }
                 })
            }
            
            <My_Navbar/>
        <Container  style={{marginTop:"90px"}}>
            {
                 loading?<Row className="justify-content-center" style={{marginTop:"120px"}}><Spinner animation="grow" variant="danger" /></Row>:
                 <Row className="justify-content-center">
            <Col xs={12} sm={12} md={8} lg={6}>
                {
                    list.map((item,index)=>{

                        if(item.parameter == id){
                            return <Card style={{padding:"10px",margin:"10px"}}>
                            <Row className="justify-content-center">
                                <Col style={{width:"100%"}} className="justify-content-center">
                                     <Container style={{width:"100%",flex:1,backgroundColor:"gold",borderRadius:"10px",padding:"10px"}}>
        <div style={{width:"100%",flex:1,backgroundColor:"gold",borderRadius:"10px",padding:"10px"}}>
           
           <Row>
               <Col sm={11} md={11} lg={4} className="justify-content-center" style={{width:"100%"}}>
                   <Image rounded src={item.profile} style={{height:"auto",width:"100%"}}/>
               </Col>
               <Col sm={11} md={11} lg={8} style={{marginTop:"10px"}}>
                   <Row>
                       <Col xs={4}>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>Name</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>Position</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>Degree</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>Score</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>Location</p>
                          
                       </Col>
                       <Col xs={8}>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>{item.name}</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>{item.position}</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white",fontSize:"14px"}}>{item.degree}</p>
                           <Row style={{height:"30px"}}>
                           <StarRatings
                           rating={item.score}
                           starDimension="20px"
                           starRatedColor="red"
                           starSpacing="5px"
                           />
                           </Row>
                           <p style={{fontWeight:"bold",color:"white",fontSize:"14px",marginTop:"20px"}}>{item.location}</p>
                           
                       </Col>
                   </Row>
                   
               </Col>
           </Row>
           

        </div>
    </Container>

    <div style={{marginTop:"10px"}}
  dangerouslySetInnerHTML={{
    __html: item.details
  }}></div>


  {
      item.proves.length == 0?<div></div>:
  

  <Col style={{marginTop:"20px"}}>
  <h5>သက်သေများ</h5>
  {
      item.proves.map((event)=>{
          if(event.type == "video"){
              return  <Media_Type 
              type="video"
              src={event.src}
              />
          }else if(event.type == "photo"){
              return   <Media_Type 
              type="photo"
              src={event.src}
              />
          }else if(event.type == "audio"){
              return     <Media_Type 
              type="audio"
              src={event.src}
              />
          }
      })
  }

  

  </Col>
                        }
   

                                </Col>
                            </Row>
                            
                        </Card>

                        }

                      
                    })
                }
            </Col>
            </Row>

            }
            
            
        </Container>
        </div>
        
    );
}


export default Details