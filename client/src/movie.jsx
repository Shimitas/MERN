import React from 'react'

export default function movie(props) {
const {movieName, rating,createdAt} = props.myMovies;



    return (
        <div>

<h2>movie name: {movieName}</h2>
<h2>rating: {rating}</h2>
<h2>created At: {createdAt}</h2>

        </div>
    )
}
