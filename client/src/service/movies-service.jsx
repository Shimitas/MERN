import React from 'react'

let PORT=process.env.PORT || 8080;

export default async function getAllMovies() {

    try{
        return await fetch(`http://localhost:${PORT}/movies/all`)
        .then((res)=>{return res.json()})
        .then(results=>{return results.data})
    }catch(err){
console.log(err);
    }
    return (
        <div>
            
        </div>
    )
}
