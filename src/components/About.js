import React, { useContext } from 'react'
import movieContext from '../context/movies/movieContext'

const About = () => {
    const a = useContext(movieContext)
    return (
        <div>About {a.name} and {a.class}</div>
    )
}

export default About
// const url = "https://api.themoviedb.org/3/movie/popular?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

// const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`

// const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&page=1&with_origin_country=IN&include_video=true&append_to_response=videos,images"

// const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&page=1&with_origin_country=IN&include_video=true&append_to_response=videos,images"