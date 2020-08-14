
import Head from 'next/head';
import React from 'react';

function Login(){

  return(
   <div>
   <Head>
   <meta charset="utf-8" />
   <title>Login Page</title>
   <link rel="stylesheet" href="fabi.css" type="text/css" />
   </Head>
    
    <div className = "bg-dark">
    <p style= {{color:"aliceblue"}} className="m-4">
    Please enter your Id
    </p>

	<form className="form-inline m-4" action="https://mighty-reef-35459.herokuapp.com/hakiki" method = "POST">
  	
    <div className="form-group mr-3">
    <label for="email" style={{color:"aliceblue"}}>user ID:</label>
    <input type="number" className="form-control" placeholder="Enter your ID" id="email" autoComplete = "off"
    name = "id" />
  	</div>
		
  	<button type="submit" className="btn btn-primary">Submit</button>
	
    </form>
    </div>
    </div>

  )
}

export default Login;