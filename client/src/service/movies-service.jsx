import React from 'react'

export default async function getAllMovies() {

    try{
        return await fetch('http://localhost:8080/movies/all')
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
