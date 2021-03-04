import {Navbar,Row} from "react-bootstrap"
import Logo from "../assets/logo.png"
import TextLogo from "../assets/text.png"

function My_Navbar(){

    return(
        <Navbar style={{backgroundColor:"#BB0A21",height:"90px"}} fixed="top">
        <Navbar.Brand href="/" style={{color:"white",fontWeight:"bold"}}>
          <Row>
          <img
            alt=""
            src={Logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
          <img
            alt=""
            src={TextLogo}
            width="180"
            height="70"
            style={{marginTop:"5px"}}
            className="d-inline-block align-top"
          />
        

          </Row>
        
        </Navbar.Brand>
      </Navbar>
    );
}

export default My_Navbar
