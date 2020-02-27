import React, {useState, useEffect} from 'react'

const People=()=>{
    return fetch()
    .then((Response)=>{
        return Response.json();
    })
    .then((data)=>{console.log(data);
    })
    
}

export default People;