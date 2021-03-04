import {Button} from "react-bootstrap"

function Test_Page(){
    const fetch = require("node-fetch");

// 3. Declare spreadsheet and values to append
const spreadsheetId = '1elY_dGVZAlc07t4nkjFSBHSSvQmoPqcI_ygmc9qrAaA'
const data = [["firstname", "lastname"], ["John", "Doe"]]

// 4. Send data with a POST request
const baseUrl = "https://pushtogsheet.herokuapp.com";
const query = `valueInputOption=RAW&pizzly_pkey=pope8Qy8qfYyppnHRMgLMpQ8MuEUKDGeyhfGCj`;
const url = new URL(`/proxy/google-sheets/spreadsheets/${spreadsheetId}/values/A1:append?${query}`, baseUrl);

function submit(){
    fetch(url.href, {
        method: "POST",
        body: JSON.stringify({ values: data }),
        headers: { 'Pizzly-Auth-Id': 'CONNECT_FIRST' }
      })
      .then((res) => res.text())
      .then(console.log)
      .catch(console.error);
}

    return <div>
        <Button
        onClick={()=>{
            submit()

        }}
        >Submit</Button>


    </div>
}

export default Test_Page