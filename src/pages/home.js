import React, { useEffect, useState } from "react"
import {Container,Col,Row,Image, ListGroup, ListGroupItem,Modal,Button,InputGroup,FormControl} from "react-bootstrap"
import {Link} from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import Venom_Card from "../component/venomcard"
import report from "../assets/report.png"
import My_Navbar from "../component/navbar"
import My_Carosel from "../component/carosel";
import Marquee from "react-double-marquee";


function Home(){

    const [list,setList]=useState([]) 
    const [searchList,setSearchList]=useState([])
    const [loading,setLoading]=useState(true)
    const [filter,setFilter]=useState(false) 
    const [filterIndex,setFilterIndex]=useState("")
    const [byLocation,setbyLocation]=useState(false)
    const [search,setSearch]=useState(false)
    
    var division=[]

    

    useEffect(()=>{
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

    function Find_Index(props){

        if(props.index == filterIndex){
            return true
        }else{

            return false
        }
    }


    
  

    return(
        <div>
            <My_Navbar/>
             <Container style={{marginTop:"90px"}}>
                
            <Row >
                <Col xs={12} style={{marginBottom:"10px"}}>
                <div
      style={{
        width: '100%',
        whiteSpace: 'nowrap',
      }}
    >
      <Marquee speed={0.08}>
      အရေးတော်ပုံ အောင်ရမည် 💪💪💪          အရေးတော်ပုံ အောင်ရမည် 💪💪💪            အရေးတော်ပုံ အောင်ရမည် 💪💪💪            အရေးတော်ပုံ အောင်ရမည် 💪💪💪
      </Marquee>
    </div>
                </Col>
                <Col xs={12}>
                <My_Carosel/>

                </Col>
                <Col sm={4} style={{marginTop:"20px"}}>

                <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Profile..."
      aria-label="Search Profile..."
      aria-describedby="basic-addon2"
      onChange={(event)=>{
          if(event.target.value == ""){
             setSearch(false)
          }
          
          var searchList=[];
        setbyLocation(false)
          setSearch(true)
        
         list.map((item)=>{
             var small=item.name.toLowerCase();
             var name=small.trim()
            if(name.includes(event.target.value)){
                searchList.push(item)
            }
         })
         
         setSearchList(searchList)

      }}
    />
    {/* <InputGroup.Append>
      <Button variant="outline-danger">Search</Button>
    </InputGroup.Append> */}
  </InputGroup>

                    <Col style={{height:"100px",width:"100%",backgroundColor:"#BB0A21",borderRadius:"10px"}}
                    // onClick={()=>{
                    //     window.open("https://forms.gle/Eb8KFBA2bVpsgisQA","_blank")
                    // }}
                    >
                      
                        <Link to="/report"><Image src={report} style={{height:"100px",width:"100%"}} /></Link>
                    </Col>
                    <div style={{marginTop:"10px"}}>
                       
                       < ListGroup>
                            <ListGroupItem 
                            style={{fontWeight:"bold"}}
                            onClick={()=>{
                                setSearch(false)
                                setbyLocation (true)
                               
                            }}
                            >Search By Location</ListGroupItem>
                            

                        </ListGroup>
                        <Modal
      show={byLocation}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View By Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <ListGroup>
        <ListGroupItem 
                            style={{fontWeight:"bold"}}
                            onClick={()=>{
                                setbyLocation(false)
                                 setFilter(false)
                            }}
                            >All</ListGroupItem>
            {
                              
                                   
                                   list.map((e)=>{
                                    if(division.includes(e.division) == false){
                                        division.push(e.division)
                                    }

                                    
                                   })
                                   
                                  
                            
                                
                            } 
                            { 
                                division.map((item,index)=>{
                                    return <ListGroupItem 
                                    style={{fontWeight:"bold"}}
                                    onClick={()=>{
                                        setFilter(true)
                                        setFilterIndex(item)
                                        setbyLocation(false)
                                    }}
                                    >
                                        {item}
                                    </ListGroupItem>
                                })
                            }

        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={()=>{
            setbyLocation(false)
        }}>Close</Button>
      </Modal.Footer>
    </Modal>


                        
                    
                    </div>
                </Col>
                <Col sm={8} style={{marginTop:"20px"}}>
                    {
                        loading?<Row className="justify-content-center"><Spinner animation="grow" variant="danger" /></Row>:<div></div>
                    }
                   {
                       filter? <Container style={{margin:"3px"}}>
                           <Row style={{borderRadius:"5px",padding:"5px",backgroundColor:"gold",height:"40px",}}>
                           <p style={{color:"white",fontWeight:"bold"}} >Find By Division -</p>
                           <p style={{color:"red",fontWeight:"bold"}}>{filterIndex}</p>

                           </Row>
                          
                       
                   </Container>:<div></div>
                   }
                
                    {
                        filter?<div>
                            {
                                list.map((item)=>{
                                    if(item.division == filterIndex){
                                    return  <Venom_Card 
                                    profile={item.profile}
                                    name={item.name}
                                    position={item.position}
                                    degree={item.degree}
                                    location={item.location}
                                    score={item.score}
                                    parameter={item.parameter}
                                    />
                                    }
                                })
                            }
                        </div>:
                        <div>{

                            search?<div>{
                                
                                searchList.map((item)=>{
                                    return  <Venom_Card 
                                    profile={item.profile}
                                    name={item.name}
                                    position={item.position}
                                    degree={item.degree}
                                    location={item.location}
                                    score={item.score}
                                    parameter={item.parameter}
                                    />
        
                                })}</div>:<div>
                                    {
                                           
                            list.map((item)=>{
                                return  <Venom_Card 
                                profile={item.profile}
                                name={item.name}
                                position={item.position}
                                degree={item.degree}
                                location={item.location}
                                score={item.score}
                                parameter={item.parameter}
                                />
                            })

                                    }
                                </div>
                            
                         
                            
                            
                            }</div>
                    }

                  
                    
                </Col>
            </Row>
        </Container>

        </div>
       
    );
}

export default Home