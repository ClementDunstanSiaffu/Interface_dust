

import React from  'react';
import {Table} from 'reactstrap';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';


function First ({data}){

  return(
    <div>
        <Head>
           <title>Smart dustbin</title>
           <meta charSet="utf-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="theme-color" content="#000000" />
        </Head>
        
        <div className = "outer-container">
           <div className = "inner-container">
             <h1 className = "title-text">The Garbage Collection Fair Billing System</h1>
               <Table dark className = "table-container">
                 <thead>
                     <tr>
                       <th>ID No</th>
                       <th>WEIGHT (Kg)</th>
                       <th>BILL</th>
                      
                     </tr>
                 </thead>
                 <tbody>
                   
                    {data.map((one)=><tr>
                        <th>{one.id}</th>
                        <th>{one.weight}</th>
                        <th>{one.bill}</th>
                        
                    </tr>)}
                    
                 </tbody>
               </Table>
           </div>
        </div>


    </div>
  )
}

First.getInitialProps = async ()=>{
    const response = await fetch('https://mighty-reef-35459.herokuapp.com/take/hizo')
    const data = await response.json()
    return {data}
}


export default First;