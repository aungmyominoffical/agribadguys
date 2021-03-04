import {Button,Modal } from "react-bootstrap"
import ReactAudioPlayer from 'react-audio-player';


function AudioModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Audio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ReactAudioPlayer
  src={props.src}
  controls
/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default AudioModel
  