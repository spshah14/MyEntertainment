import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    // MDBModalHeader,
    // MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBIcon,
} from 'mdb-react-ui-kit';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroller';
import profile from '../Avtar.jpg';
import Movies from './Movies'
import Tvshow from './Tvshow'

const Home = () => {

    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);


    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [data6, setData6] = useState(null)
    const [page, setPage] = useState(1)

    const [totalPages, setTotalPages] = useState(1)
    const [title, setTitle] = useState('')
    const [backdrop_path, setbackdrop_path] = useState(null)
    const [poster_path, setPoster_path] = useState(null)
    const [overview, setOverview] = useState('')
    const [geners, setGeners] = useState([])
    const [production, setProduction] = useState([])
    const [tagline, setTagline] = useState('')
    const [rating, setRating] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)

    let parsedresults = [];
    const fetchData = async () => {

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=${page}`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setData(parsedresults.results)
        setTotalPages(parsedresults.total_pages)
        setPage(parsedresults.page)
        setLoading(false)

    }

    useEffect(() => {

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchItems = async (id) => {


        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`
        setLoading2(true)
        let results = await fetch(url)
        let parsedresults2 = await results.json()
        setData2(parsedresults2.results)
        setLoading2(false)
        // eslint-disable-next-lin


        const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        setLoading2(true)
        let cast = await fetch(url2)
        let parsedresults3 = await cast.json()
        setData3(parsedresults3.cast)
        setLoading2(false)
        // console.log(parsedresults3)

        const url3 = `https://api.themoviedb.org/3/movie/${id}/images?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        setLoading2(true)
        let backdrops = await fetch(url3)
        let parsedresults4 = await backdrops.json()
        setData4(parsedresults4.backdrops)
        setLoading2(false)
        // console.log(parsedresults4)

        const url4 = `https://api.themoviedb.org/3/movie/${id}?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`
        setLoading2(true)
        let results5 = await fetch(url4)
        let parsedresults5 = await results5.json()
        setLoading2(false)
        // setData5(parsedresults5.results5)
        setTitle(parsedresults5.title)
        setbackdrop_path(parsedresults5.backdrop_path)
        setPoster_path(parsedresults5.poster_path)
        setOverview(parsedresults5.overview)
        setGeners(parsedresults5.genres)
        setProduction(parsedresults5.production_companies)
        setTagline(parsedresults5.tagline)
        setRelease_date(parsedresults5.release_date)
        setRating(parsedresults5.vote_average)

        const url5 = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=c85a7220743f2e910ce5418be14ce8b8`
        setLoading2(true)
        let results6 = await fetch(url5)
        let parsedresults6 = await results6.json()
        setData6(parsedresults6.results.IN)
        setLoading2(false)
        // console.log(parsedresults6);


    }


    // console.log(data7)
    const image_path = "https://image.tmdb.org/t/p/original";
    const video_url = "https://www.youtube.com/embed/"

    return (
        <div className='container my-4'>
            <b>Movies</b>
            <div className="horizontal">
                {data.map((element) => {
                    return <div key={element.id} className="slide1 " style={{ width: '12rem' }} onClick={() => fetchItems(element.id)}>
                        <div className="card bg-image hover-overlay mx-2 bcolor moviecard h-100" onClick={toggleShow} >
                            {
                                (element.poster_path !== null)
                                    ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '14rem', width: 'auto', borderBottom: "0.1rem solid whitesmoke" }} />
                                    : <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '14rem', width: 'auto', borderBottom: "0.1rem solid whitesmoke" }} />
                            }
                            <a href='#!'>
                                <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                            </a>
                            <div className="card-title my-4" id='movieTitle'> <b>{element.title}</b></div>
                        </div>

                    </div>
                })}
            </div>
            <div className="horizontal">

                <Movies />
                <Tvshow />

            </div>
        </div>
    )
}

export default Home