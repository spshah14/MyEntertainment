import React, { useEffect, useState } from 'react'
import Movies from './Movies'

const Home = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {

        const url = "https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images"
        let results = await fetch(url)
        let parsedresults = await results.json()
        setData(parsedresults.results)
        console.log(parsedresults)
    }
    useEffect(() => {

        fetchData()

    }, [])

    return (
        <div>
            <div className="container">

                <div className="row" >
                    {data.map((element) => {
                        return <div key={element.id}>

                            <Movies title={element.title} imgUrl={element.poster_path
                            } newsUrl={element.url} overview={element.overview} release_date={element.release_date} />

                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home