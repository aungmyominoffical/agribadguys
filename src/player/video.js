import {Button,Modal } from "react-bootstrap"
import { Player } from 'video-react';
import "video-react/dist/video-react.css"

function VideoModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Player>
      <source src={props.src} />
    </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default VideoModel
  