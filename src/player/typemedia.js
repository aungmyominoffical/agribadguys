import VideoModel from "../player/video"
import PhotoModel from "../player/photo"
import AudioModel from "../player/audio"
import {Card,Row} from "react-bootstrap"
import {MdVideocam,MdPlayArrow} from "react-icons/md"
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillAudio } from "react-icons/ai";
import { useState } from "react"



function Media_Type(props){
    const [video,setVideo]=useState(false)
    const [photo,setPhoto]=useState(false)
    const [audio,setAudio]=useState(false)

    if(props.type == "video"){
        return <Card style={{marginTop:"10px"}}>
            <Row style={{margin:"10px"}}>
        <MdVideocam style={{fontSize:"30px"}}></MdVideocam>
        <p style={{marginLeft:"5px"}}>Video</p>
        <MdPlayArrow 
            style={{fontSize:"30px",marginLeft:"20px"}}
            onClick={()=>{
                setVideo(true)

            }}
            ></MdPlayArrow>
        
    </Row>
    <VideoModel
    show={video}
    src={props.src}
    onHide={() => setVideo(false)}
    />
        </Card>
        
    }
    if(props.type == "photo"){
        return <Card style={{marginTop:"10px"}}>
            <Row style={{margin:"10px"}}>
        <HiOutlinePhotograph style={{fontSize:"30px"}}></HiOutlinePhotograph>
        <p style={{marginLeft:"5px"}}>Photo</p>
        <MdPlayArrow 
            style={{fontSize:"30px",marginLeft:"20px"}}
            onClick={()=>{
                setPhoto(true)

            }}
            ></MdPlayArrow>
        
    </Row>
    <PhotoModel
    src={props.src}
    show={photo}
    onHide={() => setPhoto(false)}
    />
        </Card>
        
    }
    if(props.type == "audio"){
        return <Card style={{marginTop:"10px"}}>
            <Row style={{margin:"10px"}}>
        <AiFillAudio style={{fontSize:"30px"}}></AiFillAudio>
        <p style={{marginLeft:"5px"}}>Audio</p>
        <MdPlayArrow 
            style={{fontSize:"30px",marginLeft:"20px"}}
            onClick={()=>{
                setAudio(true)

            }}
            ></MdPlayArrow>
        
    </Row>
    <AudioModel
    src={props.src}
    show={audio}
    onHide={() => setAudio(false)}
    />
        </Card>
        
    }

}

export default Media_Type