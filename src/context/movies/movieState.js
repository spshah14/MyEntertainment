// import React, { useState, useEffect } from 'react'
// import MovieContext from './movieContext'

// const MovieState = (props) => {
//     const [data, setData] = useState([])

//     const fetchData = async () => {

//         const url = "https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

//         let results = await fetch(url)
//         let parsedresults = await results.json()
//         setData(parsedresults.results)
//         console.log(parsedresults)
//     }
//     useEffect(() => {

//         fetchData()

//     }, [])

//     return (
//         <MovieContext.Provider fetchData={fetchData}>
//             {props.children}
//         </MovieContext.Provider>
//     )
// }

// export default MovieState;