import {Container,Row,Button,Alert} from "react-bootstrap"
import My_Navbar from "../component/navbar"
import {Link} from "react-router-dom"


function Thank_You(){

    return <div>
        <My_Navbar/>
        <Container style={{marginTop:"100px"}}>
            <Row className="justify-content-center" style={{height:"50px"}}>
            <Alert key={0} variant="success" style={{width:"70%"}}>
   Thank You For Your Submitting Data..
   <Link to="/"><Button style={{marginLeft:"100px"}} variant="outline-danger">Continue</Button></Link>
  </Alert>

            </Row>

</Container>
    </div>
}


export default Thank_You