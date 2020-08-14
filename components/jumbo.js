

import React from 'react';
const Image1 = require('../assets/image1.jpg')
const Image2 = require('../assets/image2.jpg')

function Jumbo(){

    return(
        <div>
           <div className="jumbotron">
  			<h1>Are you a registered user?</h1>
  			<h3 className="float-left mr-5 text-dark">login through this button!</h3>
			<a type="button" className="btn btn-primary btn-lg" href="https://garbage-collection.vercel.app/login" >Login</a>
		    </div>
            
            <div class="container">
			<div className="">
			<h3>About the system</h3>
			<p>
            This online system implements weight-based unit pricing. A system under which registered residents pay for municipal waste management services per unit of waste collected rather than through a fixed fee. Registration will be done using national ID's, email and mobile phone number. Payment will be through mobile money services and online bank money transfer services. 
			</p>
			<a href="#" className="btn btn-primary mb-2">Learn More</a>
			</div>
			<img className="mx-auto d-block rounded img-fluid" src={Image1} alt="home image" />
		    </div>
            
            <div class="container" >
  			
  		    <div className="">
			<h3>The technology we use</h3>
    		<p>The system employs internet based smart bins with multiple sensors for weight measurement, user identification, and wireless data transfer capability. The system includes a simple web-based UI for data observation. Each user will be issued a unique RFID card.
			</p>
    	    <a href="#" className="btn btn-primary mb-2">Learn More</a>
 		    </div>
			<img  className="mx-auto d-block rounded img-fluid" src={Image2} alt="techy image" />
		   </div>
	
	       <footer className="">
		   <div className="container bg-dark">
		   <p style={{color: "aliceblue"}} className="text-right"><i>designed at DIT</i></p>
		  </div>
	     </footer>	
    

        </div>
     )

 }

export default Jumbo;