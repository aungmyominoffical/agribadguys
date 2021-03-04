import {Button,Modal,Image,Row } from "react-bootstrap"


function PhotoModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Row className="justify-content-center">
          <Image rounded src={props.src} style={{width:"50%",height:"auto"}}/>

          </Row>
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default PhotoModel
  