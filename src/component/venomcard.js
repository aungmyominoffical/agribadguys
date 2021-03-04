import {Card,Container,Col,Row,Image,FormGroup,Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import StarRatings from 'react-star-ratings';

function Venom_Card(props){

    return(
        <Container style={{width:"100%",flex:1,backgroundColor:"gold",borderRadius:"10px",padding:"10px",marginBottom:"20px"}}>
        <div style={{width:"100%",flex:1,backgroundColor:"gold",borderRadius:"10px",padding:"10px"}}>
           
           <Row>
               <Col sm={11} md={11} lg={4} className="justify-content-center" style={{width:"100%"}}>
                   <Image rounded src={props.profile} style={{height:"auto",width:"100%"}}/>
               </Col>
               <Col sm={11} md={11} lg={8} style={{marginTop:"10px"}}>
                   <Row>
                       <Col xs={4}>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>Name</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>Position</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>Degree</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>Score</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>Location</p>
                          
                       </Col>
                       <Col xs={8}>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>{props.name}</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>{props.position}</p>
                           <p style={{height:"30px",fontWeight:"bold",color:"white"}}>{props.degree}</p>
                           <Row style={{height:"30px"}}>
                           <StarRatings
                           rating={props.score}
                           starDimension="30px"
                           starRatedColor="red"
                           starSpacing="5px"
                           />
                           </Row>
                           <p style={{fontWeight:"bold",color:"white",marginTop:"20px"}}>{props.location}</p>
                           
                       </Col>
                   </Row>
                   <Link to={`/details/${props.parameter}`}><Button variant="danger" style={{width:"100%",fontWeight:"bold"}}>အပြည့်အစုံ</Button></Link>
               </Col>
           </Row>
           

        </div>
    </Container>
    );
}

export default Venom_Card