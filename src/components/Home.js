import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalBody,
    MDBModalFooter,
    MDBIcon,
} from 'mdb-react-ui-kit';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

import Spinner from './Spinner';
import profile from '../Avtar.jpg';

const Home = () => {


    // eslint-disable-next-line
    const [varyingState, setVaryingState] = useState('');
    const [varyingModal, setVaryingModal] = useState(false);
    // eslint-disable-next-line
    const [varyingRecipient, setVaryingRecipient] = useState('');
    // eslint-disable-next-line
    const [varyingMessage, setVaryingMessage] = useState('');

    // eslint-disable-next-line
    const onChangeRecipient = (event) => {
        setVaryingRecipient(event.target.value);
    };

    // eslint-disable-next-line
    const onChangeMessage = (event) => {
        setVaryingMessage(event.target.value);
    };

    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);


    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [cast, setCast] = useState([])
    const [data4, setData4] = useState([])
    const [data6, setData6] = useState(null)
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
    const [topmovie, setTopmovie] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [reality, setReality] = useState([])
    const [documentary, setDocumentary] = useState([])
    const [talkShow, setTalkShow] = useState([])
    const [scripted, setScripted] = useState([])
    const [miniseries, setMiniseries] = useState([])
    const [tvshow, setTvshow] = useState([])
    const [seasons, setSeasons] = useState([])
    const [networks, setNetworks] = useState([])

    const [type, setType] = useState('')

    const [first_air_date, setFirst_air_date] = useState('')

    let parsedresults = [];
    const fetchData = async () => {

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setData(parsedresults.results)
        // setTotalPages(parsedresults.total_pages)
        // setPage(parsedresults.page)
        setLoading(false)

    }
    const fetchData2 = async () => {

        // const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=${page}`
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setTopmovie(parsedresults.results)
        // setTotalPages(parsedresults.total_pages)
        // setPage(parsedresults.page)
        setLoading(false)
    }

    const fetchData3 = async () => {

        // const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=${page}`
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&page=1&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setUpcoming(parsedresults.results)
        setLoading(false)


    }

    const fetchData4 = async () => {

        const url = `https://api.themoviedb.org/3/discover/tv?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&sort_by=popularity.desc&page=5&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setTvshow(parsedresults.results)
        setLoading(false)
    }

    const fetchData5 = async () => {

        const url = `https://api.themoviedb.org/3/discover/tv?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&sort_by=popularity.desc&with_type=3&page=5&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setReality(parsedresults.results)
        setLoading(false)
    }

    const fetchData6 = async () => {

        const url = `https://api.themoviedb.org/3/discover/tv?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&sort_by=popularity.desc&with_type=0&page=5&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setDocumentary(parsedresults.results)
        setLoading(false)
    }

    const fetchData7 = async () => {

        const url = `https://api.themoviedb.org/3/discover/tv?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&sort_by=popularity.desc&with_type=5&page=5&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setTalkShow(parsedresults.results)
        setLoading(false)
    }

    const fetchData8 = async () => {

        const url = `https://api.themoviedb.org/3/discover/tv?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&sort_by=popularity.desc&with_type=4&page=5&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setScripted(parsedresults.results)
        setLoading(false)
    }

    const fetchData9 = async () => {

        const url = `https://api.themoviedb.org/3/discover/tv?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&sort_by=popularity.desc&with_type=2&page=5&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setMiniseries(parsedresults.results)
        setLoading(false)
    }

    useEffect(() => {

        fetchData()
        fetchData2()
        fetchData3()
        fetchData4()
        fetchData5()
        fetchData6()
        fetchData7()
        fetchData8()
        fetchData9()
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
        setCast(parsedresults3.cast)
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

    const fetchItems2 = async (id) => {


        const url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`
        setLoading2(true)
        let results = await fetch(url)
        let parsedresults2 = await results.json()
        setData2(parsedresults2.results)
        setLoading2(false)
        // eslint-disable-next-lin


        const url2 = `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        setLoading2(true)
        let cast = await fetch(url2)
        let parsedresults3 = await cast.json()
        setData3(parsedresults3.cast)
        setLoading2(false)
        // console.log(parsedresults3)

        const url3 = `https://api.themoviedb.org/3/tv/${id}/images?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        setLoading2(true)
        let backdrops = await fetch(url3)
        let parsedresults4 = await backdrops.json()
        setData4(parsedresults4.backdrops)
        setLoading2(false)
        // console.log(parsedresults4)

        const url4 = `https://api.themoviedb.org/3/tv/${id}?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`
        setLoading2(true)
        let results5 = await fetch(url4)
        let parsedresults5 = await results5.json()
        setLoading2(false)
        // setData5(parsedresults5.results5)
        setTitle(parsedresults5.name)
        setbackdrop_path(parsedresults5.backdrop_path)
        setPoster_path(parsedresults5.poster_path)
        setOverview(parsedresults5.overview)
        setGeners(parsedresults5.genres)
        setProduction(parsedresults5.production_companies)
        setSeasons(parsedresults5.seasons)
        setNetworks(parsedresults5.networks)
        setTagline(parsedresults5.tagline)
        setType(parsedresults5.type)
        setFirst_air_date(parsedresults5.first_air_date)
        setRating(parsedresults5.vote_average)

        const url5 = `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=c85a7220743f2e910ce5418be14ce8b8`
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

    return (<>
        {loading && <Spinner key={1} />}
        {!loading && <div className='my-4' style={{ color: 'white' }}>
            <div className="container my-2">

                <MDBCarousel showControls fade>
                    {
                        (data[0].backdrop_path &&
                            <Link to="/movies"><MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src={`${image_path}${data[0].backdrop_path}`} style={{ height: '50vh', width: '100%', objectFit: "contain" }}
                                alt='...'
                            >
                                <h5>{`${data[0].title}`}</h5>
                            </MDBCarouselItem></Link>)
                    }
                    {
                        (data[1].backdrop_path &&
                            <Link to="/movies"><MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src={`${image_path}${data[1].backdrop_path}`} style={{ height: '50vh', width: '100%', objectFit: "contain" }}
                                alt='...'
                            >
                                <h5>{`${data[1].title}`}</h5>
                            </MDBCarouselItem></Link>)
                    }
                    {
                        (data[2].backdrop_path &&
                            <Link to="/movies"><MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={`${image_path}${data[2].backdrop_path}`} style={{ height: '50vh', width: '100%', objectFit: "contain" }}
                                alt='...'
                            >
                                <h5>{`${data[2].title}`}</h5>
                            </MDBCarouselItem></Link>)
                    }
                    {
                        (data[3].backdrop_path &&

                            <Link to="/movies"><MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={`${image_path}${data[3].backdrop_path}`} style={{ height: '50vh', width: '100%', objectFit: "contain" }}
                                alt='...'
                            >
                                <h5>{`${data[3].title}`}</h5>
                            </MDBCarouselItem></Link>)
                    }
                    {
                        (data[4].backdrop_path &&

                            <Link to="/movies"><MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={`${image_path}${data[4].backdrop_path}`} style={{ height: '50vh', width: '100%', objectFit: "contain" }}
                                alt='...'
                            >
                                <h5>{`${data[4].title}`}</h5>
                            </MDBCarouselItem></Link>)
                    }
                    {
                        (data[5].backdrop_path &&

                            <Link to="/movies"><MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={`${image_path}${data[5].backdrop_path}`} style={{ height: '50vh', width: '100%', objectFit: "contain" }}
                                alt='...'
                            >
                                <h5>{`${data[5].title}`}</h5>
                            </MDBCarouselItem></Link>)
                    }
                    {
                        (data[6].backdrop_path &&

                            <Link to="/movies"><MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={`${image_path}${data[6].backdrop_path}`} style={{ height: '50vh', width: '100%', objectFit: "contain" }}
                                alt='...'
                            >
                                <h5>{`${data[6].title}`}</h5>
                            </MDBCarouselItem></Link>)
                    }

                </MDBCarousel>

            </div>

            <div className="container">
                <Link to="/movies" className='linkcolor'><h4>Movies</h4></Link>
                {/* <Link to="/movies" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {data.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={() => {
                                    setVaryingState('@fat');
                                    setVaryingModal(!varyingModal);
                                    setVaryingRecipient('@fat');
                                }} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.title}</b></div>)

                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>


                        })}


                    </div>
                </div>
            </div>
            <div className="container my-4">
                <Link to="/topmovies" className='linkcolor'><h4>Top Movies</h4></Link>
                {/* <Link to="/topmovies" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {topmovie.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={() => {
                                    setVaryingState('@fat');
                                    setVaryingModal(!varyingModal);
                                    setVaryingRecipient('@fat');
                                }} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.title}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>
            <div className="container my-4">
                <Link to="/upcomingmovies" className='linkcolor'><h4>Upcoming Movies</h4></Link>
                {/* <Link to="/upcomingmovies" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {upcoming.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={() => {
                                    setVaryingState('@fat');
                                    setVaryingModal(!varyingModal);
                                    setVaryingRecipient('@fat');
                                }} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.title}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>
            <div className="container my-4">
                <Link to="/tvshows" className='linkcolor'><h4>TV Shows</h4></Link>
                {/* <Link to="/tvshows" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {tvshow.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems2(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={toggleShow} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.name}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>

            <div className="container my-4">
                <Link to="/Reality" className='linkcolor'><h4>Reality Shows</h4></Link>
                {/* <Link to="/Reality" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {reality.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems2(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={toggleShow} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.name}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>

            <div className="container my-4">
                <Link to="/Documentary" className='linkcolor'><h4>Documentary</h4></Link>
                {/* <Link to="/Documentary" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {documentary.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems2(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={toggleShow} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.name}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>
            <div className="container my-4">
                <Link to="/TalkShow" className='linkcolor'><h4>TalkShow</h4></Link>
                {/* <Link to="/TalkShow" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {talkShow.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems2(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={toggleShow} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.name}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>
            <div className="container my-4">
                <Link to="/Scripted" className='linkcolor'><h4>Scripted Shows</h4></Link>
                {/* <Link to="/Scripted" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {scripted.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems2(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={toggleShow} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.name}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>
            <div className="container my-4">
                <Link to="/Miniseries" className='linkcolor'><h4>Miniseries</h4></Link>
                {/* <Link to="/Miniseries" className="float-end linkcolor"><b>More</b></Link> */}
                <div>
                    <div className="horizontal my-1">

                        {miniseries.map((element) => {
                            return <div className="slide1" key={element.id} onClick={() => fetchItems2(element.id)} style={{ height: '13rem', width: '13rem' }}>
                                <div className="bg-image hover-zoom hover-overlay hbcolor " onClick={() => {
                                    setVaryingState('@mdo');
                                    setVaryingModal(!varyingModal);
                                    setVaryingRecipient('@mdo');
                                }} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '13rem', width: '13rem' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '13rem', width: '13rem', display: "flex", justifyContent: 'center', alignItems: 'center', margin: "auto", backgroundColor: 'darkblue' }}><b>{element.name}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>

                                </div>
                            </div>

                        })}


                    </div>
                </div>
            </div>

            {/* <MDBBtn
                onClick={() => {
                    setVaryingState('@fat');
                    setVaryingModal(!varyingModal);
                    setVaryingRecipient('@fat');
                }}
            >
                Open modal for @fat
            </MDBBtn> */}


            <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
                <MDBModalDialog size='lg'>
                    <MDBModalContent className="bodycolor" style={{ border: "1px solid white", borderRadius: '15px' }}>

                        <MDBModalBody>
                            {loading2 && <Spinner key={3} />}
                            {!loading2 && <div className="row">
                                <div className="card mb-3 bodycolor" >
                                    <div className='bg-image hover-zoom'>
                                        {(backdrop_path !== null)
                                            ? <img src={`${image_path}${backdrop_path}`} className="card-img-top mx-auto d-block my-2" alt='' style={{ maxHeight: '700px', maxWidth: '700px', border: "1px solid white", borderRadius: '15px' }} />
                                            : <img src={`${image_path}${poster_path}`} className="card-img-top mx-auto d-block my-2" alt='' style={{ maxHeight: '500px', maxWidth: '500px', border: "1px solid white", borderRadius: '15px' }} />}

                                    </div>
                                    <div className="card-body">
                                        {(`${title}` !== '') && <h5 className="card-title text-center my-1">{`${title}`}</h5>}
                                        {(data6 !== undefined) && <div className="container my-3 text-center" >
                                            <MDBBtn outline rounded tag='a' href={`${data6.link}`}>Watch Movie</MDBBtn>
                                        </div>}

                                        {(`${tagline}` !== '') && <><b>Tagline:</b><span className="card-text mx-1 my-1">{` ${tagline}`}</span></>}
                                        <br />

                                        {(`${overview}` !== '') && <><b>Overview:</b><span className="card-text mx-1 my-1">{`${overview}`}</span></>}
                                        <br />

                                        {(`${release_date}` !== '') && <><b>Release Date:</b><span className="card-text mx-1 my-1">{`${release_date}`}</span></>}
                                        <br />

                                        {(`${rating}` !== '') &&
                                            <>
                                                <b>Rating:</b><span className="card-text mx-1 my-1">{` ${rating} `}<i className="fa-solid fa-star"></i></span>
                                            </>}
                                        <br />

                                        <b>Genres:</b>
                                        {geners.map((element) => {
                                            return <span className="card-text generborder mx-1 my-1">{` ${element.name} `}</span>

                                        })}
                                        <br />
                                        <div className='my-1'><b>Production House:</b></div>
                                        <div className="horizontal">
                                            {production.map((element) => {
                                                return <div key={element.id} className="slide1">
                                                    {
                                                        (element.logo_path !== null)
                                                            ? <img src={`${image_path}${element.logo_path}`} alt='' style={{ maxHeight: '100px', maxWidth: '100px' }} />
                                                            : <div className='text-center card' ><div className="card-body"><MDBIcon far icon="file-video" size='2x' /><div>{`${element.name}`}</div></div></div>
                                                    }
                                                </div>
                                            })}
                                        </div>

                                        {(data2.length !== 0) &&
                                            <div className='my-2'><b>Videos: </b>
                                                <div className="horizontal">
                                                    {data2.map((element) => {

                                                        return <div key={element.key} className="slide1">
                                                            <><iframe
                                                                src={`${video_url}${element.key}`}
                                                                title="YouTube video"
                                                                allowFullScreen
                                                                style={{ maxHeight: '275px', maxWidth: '275px', borderRadius: '15px' }}
                                                            ></iframe>
                                                                <div className='text-center'><b>{element.type}</b></div>
                                                            </>
                                                        </div>
                                                    })}
                                                </div></div>}

                                        {(data4.length !== 0) &&
                                            <div className='my-3'><b>Cast</b>
                                                <div className="horizontal">
                                                    {data3.map((element) => {
                                                        return <div key={element.id} className="card slide1 text-center bcolor h-100 bg-image hover-zoom" style={{ width: '11rem' }}>
                                                            {

                                                                (element.profile_path !== null)
                                                                    ?
                                                                    <a href={`${image_path}${element.profile_path}`} target='-blank' rel="noopener noreferrer">
                                                                        <img src={`${image_path}${element.profile_path}`} alt="" className="card-img-top text-center" style={{ height: '150px', width: '11rem' }} /></a>
                                                                    : <img src={profile} alt="" className="card-img-top text-center" style={{ height: '150px', width: '11rem' }} />

                                                            }

                                                            <div className='text-center' style={{ borderTop: "1px solid white", padding: "10px 1px" }}>
                                                                <div className="card-text text-wrap"> <b>{element.name}</b></div>
                                                                {(element.character) && <div className="card-text text-wrap">Character<br /> {element.character}</div>}
                                                            </div>
                                                        </div>
                                                    })}
                                                </div></div>}

                                        <div className="horizontal">
                                            {cast.map((element) => {
                                                return <div key={element.id} className="card slide1 text-center bcolor h-100 bg-image hover-zoom" style={{ width: '11rem' }}>
                                                    {

                                                        (element.profile_path !== null)
                                                            ?
                                                            <a href={`${image_path}${element.profile_path}`} target='-blank' rel="noopener noreferrer">
                                                                <img src={`${image_path}${element.profile_path}`} alt="" className="card-img-top text-center" style={{ height: '150px', width: '11rem' }} /></a>
                                                            : <img src={profile} alt="" className="card-img-top text-center" style={{ height: '150px', width: '11rem' }} />

                                                    }

                                                    <div className='text-center' style={{ borderTop: "1px solid white", padding: "10px 1px" }}>
                                                        <div className="card-text text-wrap"> <b>{element.name}</b></div>
                                                        {(element.character) && <div className="card-text text-wrap">Character<br /> {element.character}</div>}
                                                    </div>
                                                </div>
                                            })}
                                        </div>

                                        {(data4.length !== 0) &&
                                            <div className='my-3'><b>Photos</b>
                                                <div className="horizontal">
                                                    {data4.map((element) => {
                                                        return <div key={element.file_path} className="slide1">
                                                            <div className="slide bg-image hover-zoom">
                                                                <a href={`${image_path}${element.file_path}`} target='-blank' rel="noopener noreferrer">
                                                                    <img src={`${image_path}${element.file_path}`} alt='...' className='img-fluid' style={{ maxHeight: '250px', maxWidth: '250px', borderRadius: '15px' }} />
                                                                </a>

                                                            </div>

                                                        </div>
                                                    })}
                                                </div></div>
                                        }

                                    </div>
                                </div>

                            </div>}
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color='primary' onClick={() => setVaryingModal(!varyingModal)}>
                                Close
                            </MDBBtn>

                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>


            <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                <MDBModalDialog size='lg' >
                    <MDBModalContent className="bodycolor" style={{ border: "1px solid white", borderRadius: '15px' }}>
                        {/* <MDBModalHeader>
                            <MDBModalTitle className='container text-center'>{`${title}`}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader> */}
                        <MDBModalBody>
                            {loading2 && <Spinner key={3} />}
                            {!loading2 && <div className="row">
                                <div className="card mb-3 bodycolor" >
                                    <div className='bg-image hover-zoom'>
                                        {(backdrop_path !== null)
                                            ? <img src={`${image_path}${backdrop_path}`} className="card-img-top mx-auto d-block my-2" alt='' style={{ maxHeight: '700px', maxWidth: '700px', border: "1px solid white", borderRadius: '15px' }} />
                                            : <img src={`${image_path}${poster_path}`} className="card-img-top mx-auto d-block my-2" alt='' style={{ maxHeight: '500px', maxWidth: '500px', border: "1px solid white", borderRadius: '15px' }} />}

                                    </div>
                                    <div className="card-body">
                                        {(`${title}` !== '') && <h5 className="card-title text-center my-1">{`${title}`}</h5>}
                                        {(data6 !== undefined) && <div className="container my-3 text-center" >
                                            <MDBBtn outline rounded tag='a' href={`${data6.link}`}>Watch</MDBBtn>
                                        </div>}

                                        {(`${tagline}` !== '') && <><b>Tagline:</b><span className="card-text mx-1 my-1">{` ${tagline}`}</span></>}
                                        <br />
                                        {(`${type}` !== '') && <><b>Type:</b><span className="card-text mx-1 my-1">{` ${type}`}</span></>}
                                        <br />

                                        {(`${overview}` !== '') && <><b>Overview:</b><span className="card-text mx-1 my-1">{`${overview}`}</span></>}
                                        <br />

                                        {(`${first_air_date}` !== '') && <><b>First Air Date:</b><span className="card-text mx-1 my-1">{`${first_air_date}`}</span></>}
                                        <br />

                                        {(`${rating}` !== '') &&
                                            <>
                                                <b>Rating:</b><span className="card-text mx-1 my-1">{` ${rating} `}<i className="fa-solid fa-star"></i></span>
                                            </>}
                                        <br />

                                        <b>Genres:</b>
                                        {geners.map((element) => {
                                            return <span className="card-text generborder mx-1 my-1">{` ${element.name} `}</span>

                                        })}
                                        <br />
                                        <div className='my-1'><b>Production House:</b></div>
                                        <div className="horizontal">
                                            {production.map((element) => {
                                                return <div key={element.id} className="slide1">
                                                    {
                                                        (element.logo_path !== null)
                                                            ? <img src={`${image_path}${element.logo_path}`} alt='' style={{ maxHeight: '100px', maxWidth: '100px' }} />
                                                            : <div className='text-center card' ><div className="card-body"><MDBIcon far icon="file-video" size='2x' /><div>{`${element.name}`}</div></div></div>
                                                    }
                                                </div>
                                            })}
                                        </div>
                                        <br />

                                        <br />
                                        <div className='my-1'><b>Networks:</b></div>
                                        <div className="horizontal">
                                            {networks.map((element) => {
                                                return <div key={element.id} className="slide1">
                                                    {
                                                        (element.logo_path !== null)
                                                            ?
                                                            <img src={`${image_path}${element.logo_path}`} alt='' style={{ maxHeight: '100px', maxWidth: '100px' }} />
                                                            : <div className='text-center card' ><div className="card-body"><MDBIcon far icon="file-video" size='2x' /><div>{`${element.name}`}</div></div></div>
                                                    }
                                                </div>
                                            })}
                                        </div>
                                        <br />

                                        <b>seasons</b>
                                        <div className="horizontal">
                                            {seasons.map((element) => {
                                                return <div key={element.id} className="card slide1 text-center bcolor h-100 bg-image hover-zoom" style={{ width: '11rem' }}>
                                                    {

                                                        (element.poster_path !== null)
                                                            ?
                                                            <a href={`${image_path}${element.profile_path}`} target='-blank' rel="noopener noreferrer">
                                                                <img src={`${image_path}${element.poster_path}`} alt="" className="card-img-top text-center" style={{ height: '11rem', width: '11rem' }} /></a>
                                                            : <a href={`${image_path}${poster_path}`} target='-blank' rel="noopener noreferrer"><img src={`${image_path}${poster_path}`} alt="" className="card-img-top text-center" style={{ height: '11rem', width: '11rem' }} /></a>

                                                    }
                                                    <div className='text-center' style={{ borderTop: "1px solid white", padding: "10px 1px" }}>
                                                        {(element.name) && <div className="card-text text-wrap"> <b>{element.name}</b></div>}
                                                        {(element.episode_count) && <div className="card-text text-wrap">Total episode: {element.episode_count}</div>}
                                                        {(element.air_date) && <div className="card-text text-wrap">First Air Date <br /> {element.air_date}</div>}
                                                    </div>
                                                </div>
                                            })}
                                        </div>

                                        {(data2.length !== 0) &&
                                            <div className='my-2'><b>Videos: </b>
                                                <div className="horizontal">
                                                    {data2.map((element) => {

                                                        return <div key={element.key} className="slide1">
                                                            <><iframe
                                                                src={`${video_url}${element.key}`}
                                                                title="YouTube video"
                                                                allowFullScreen
                                                                style={{ maxHeight: '275px', maxWidth: '275px', borderRadius: '15px' }}
                                                            ></iframe>
                                                                <div className='text-center'><b>{element.type}</b></div>
                                                            </>
                                                        </div>
                                                    })}
                                                </div></div>}

                                        {(data3.length !== 0) &&
                                            <div className='my-3'><b>Cast</b>
                                                <div className="horizontal">
                                                    {data3.map((element) => {
                                                        return <div key={element.id} className="card slide1 text-center bcolor h-100 bg-image hover-zoom" style={{ width: '11rem' }}>
                                                            {

                                                                (element.profile_path !== null)
                                                                    ?
                                                                    <a href={`${image_path}${element.profile_path}`} target='-blank' rel="noopener noreferrer">
                                                                        <img src={`${image_path}${element.profile_path}`} alt="" className="card-img-top text-center" style={{ height: '150px', width: '11rem' }} /></a>
                                                                    : <img src={profile} alt="" className="card-img-top text-center" style={{ height: '150px', width: '11rem' }} />

                                                            }

                                                            <div className='text-center' style={{ borderTop: "1px solid white", padding: "10px 1px" }}>
                                                                <div className="card-text text-wrap"> <b>{element.name}</b></div>
                                                                {(element.character) && <div className="card-text text-wrap">Character<br /> {element.roles[0].character}</div>}
                                                            </div>
                                                        </div>
                                                    })}
                                                </div></div>}


                                        {(data4.length !== 0) &&
                                            <div className='my-3'><b>Photos</b>
                                                <div className="horizontal">
                                                    {data4.map((element) => {
                                                        return <div key={element.file_path} className="slide1">
                                                            <div className="slide bg-image hover-zoom">
                                                                <a href={`${image_path}${element.file_path}`} target='-blank' rel="noopener noreferrer">
                                                                    <img src={`${image_path}${element.file_path}`} alt='...' className='img-fluid' style={{ maxHeight: '250px', maxWidth: '250px', borderRadius: '15px' }} />
                                                                </a>

                                                            </div>

                                                        </div>
                                                    })}
                                                </div></div>
                                        }

                                    </div>
                                </div>

                            </div>}
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='primary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>}</>
    )
}

export default Home