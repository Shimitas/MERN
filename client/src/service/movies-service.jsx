

let PORT=process.env.PORT || 3000;

// const API=process.env.NODE_ENV === 'production' ? `https://movies124.herokuapp.com` : `http://localhost:3000`;

export default async function getAllMovies() {

    try{
        return await fetch(`${PORT}/movies/all`)
        .then((res)=>{return res.json()})
        .then(results=>{return results.data})
    }catch(err){
    console.log(err);
    }
    
}
