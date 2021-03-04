import {Helmet} from "react-helmet";



function MetaData(props){

    return <Helmet>

<title>G.A.B Myanmar</title>
<meta name="title" content={`G.A.B - ${props.title}`}/>
<meta name="description" content={props.description}/>


<meta property="og:type" content="website"/>
<meta property="og:url" content={props.url}/>
<meta property="og:title" content={`G.A.B - ${props.title}`}/>
<meta property="og:description" content={props.description}/>
<meta property="og:image" content={props.image}/>

</Helmet>
}


export default MetaData