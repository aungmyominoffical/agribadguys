import My_Navbar from "../component/navbar"
import {Container,Col,Row,Form,Card,Button} from "react-bootstrap"
import { useEffect, useState } from "react";
import { MdAttachment } from "react-icons/md";
import uuid from 'react-uuid'
import Spinner from 'react-bootstrap/Spinner'

function Report(){
    var FormData = require('form-data');
    var fs = require('fs');
   

    const [file,setFile]=useState([])
    const [fileName,setFileName]=useState([])
    const [index,setIndex]=useState(0)
    const [response,setResponse]=useState([])
    const [id,setId]=useState(`${uuid()}`)
    const [loading,setLoading]=useState(false)



    const [degree,setDegree]=useState("စိုက်ပျိုးရေးတက္ကသိုလ်")


    function fileUpload(){
       if(file.length !== 0){
        setLoading(true)
        file.forEach((item)=>{


            var formdata = new FormData();
formdata.append("email", "goagrimyanmar@gmail.com");
formdata.append("file", item);
formdata.append("tags", id);


var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://srv-store3.gofile.io/uploadFile", requestOptions)
  .then(response => response.json())
  .then(result => {
      var list=response;
      list.push(result.data.code)
      setResponse(list)
      checkLoading()
      
    })
  .catch(error => console.log('error', error));


        }) 
           



       }

    }    

    function checkLoading(){
        if(response.length == file.length){
            console.log(":Done")
            addData()
            setLoading(false)
            
        }

    }

    function addData(){
        var officerName=document.getElementById("officerName").value;
        var officerPosition=document.getElementById("officerPosition").value;
        var officerBlacher=degree;
        var officerCentury=document.getElementById("officerCentury").value;
        var officerCity=document.getElementById("officerCity").value;
        var officerDetails=document.getElementById("officerDetails").value;
        var proveLocation=document.getElementById("proveLocation").value;

        var profile={
            name:officerName,
            position:officerPosition,
            blacher:officerBlacher,
            century:officerCentury,
            city:officerCity,
            details:officerDetails,
            proveLocation:proveLocation,
            proves:response
        };


        var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=dbb6d7cc7f4a720d83e833674fb3e7f2b1614244379");

var formdata = new FormData();
formdata.append("data", JSON.stringify(profile));

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://gab.goagrimyanmar.com/post.php", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result)
    window.open("/thank","_self")
  })
  .catch(error => console.log('error', error));

        

    }




    return(
        <div>
            <My_Navbar/>

            <Container style={{marginTop:"100px"}}>
                <Row className="justify-content-center">
                  
                <Col xs={11} sm={11} md={8} lg={6} >
                  
                  <Col  xs={12} sm={12} md={12} lg={12} style={{marginBottom:"10px"}}>
                    <Card >
                      <p style={{padding:"10px",fontWeight:"bold"}}>ဖိအားပေးသောဝန်ထမ်း၏အချက်အလက်များသာဖြည့်ရန်ဖြစ်ပါသည်</p>
                    </Card>


</Col>

                 
                 
                <Col xs={12} sm={12} md={12} lg={12} >
                    <Card style={{padding:"30px"}}>
                    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>ဝန်ထမ်းအမည်</Form.Label>
    <Form.Control id="officerName" placeholder="ဝန်ထမ်းအမည်"  required/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>ရာထူး</Form.Label>
    <Form.Control id="officerPosition" placeholder="ရာထူး"  required />
  </Form.Group>


  <Form.Group  controlId="formGridState">
      <Form.Label>စိုက်ပျိုးရေး ကျောင်းဆင်း</Form.Label>
      <Form.Control as="select" defaultValue="စိုက်ပျိုးရေးတက္ကသိုလ်"
      onChange={(value)=>{
          setDegree(value.target.value)
          
      }}
      >
        <option>စိုက်ပျိုးရေးတက္ကသိုလ်</option>
        <option>စိုက်ပျိုးရေးသိပ္ပံ</option>
      </Form.Control>
    </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>ကျောင်းဆင်း ခုနှစ်</Form.Label>
    <Form.Control id="officerCentury" placeholder="ကျောင်းဆင်း ခုနှစ်"  required />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>တာဝန်ကျတည်နေရာ</Form.Label>
    <Form.Control id="officerCity" placeholder="တာဝန်ကျတည်နေရာ"  required/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>အကြောင်းအရာအပြည့်အစုံ</Form.Label>
    <Form.Control id="officerDetails" as="textarea" rows={3}  required />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>သက်သေ ရယူသည့်နေရာ- တည်နေရာ တစ်ခုခု (မြို့/ရွာ/ရပ်ကွက်)</Form.Label>
    <Form.Control id="proveLocation" type="bposition" placeholder="သက်သေ ရယူသည့်နေရာ"  required/>
  </Form.Group>

  <Form>
  <Form.Group>
      <Form.File id="exampleFormControlFile1" label="သက်သေများ" multiple onChange={(event)=>{

var i;
var files=event.target.files;
var list=[];
var filelist=[];
for (i = 0; i < files.length; i++) {
    list.push(files[i].name);
    filelist.push(files[i])
    
   setFileName(list)
   setFile(filelist)
}
       
      }}/>  
  </Form.Group>
  <Form.Group>
      <Col>{
          fileName.map((name)=>{
              return <Row>
                  <MdAttachment></MdAttachment>
                  <p>{name}</p>
              </Row>
          })
      }
      </Col>
  </Form.Group>
</Form>
{
    loading?<Row className="justify-content-center"><Spinner animation="border" variant="danger" /></Row>:
    <Button 
    variant="danger" 
    style={{width:"100%"}}
    onClick={()=>{
    fileUpload()
    
    }}
    >Report</Button>
}

  


  </Form>


                    </Card>
                
                </Col>




                </Col>

                
                </Row>
                
            </Container>
        </div>
    );
}

export default Report