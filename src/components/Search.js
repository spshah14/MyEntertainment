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

const Search = () => {

    const [scrollableModal, setScrollableModal] = useState(false);


    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [data6, setData6] = useState(null)
    const [data7, setData7] = useState([])
    const [page, setPage] = useState(1)

    const [totalPages, setTotalPages] = useState(1)
    const [title, setTitle] = useState('')
    const [backdrop_path, setbackdrop_path] = useState(null)
    const [poster_path, setPoster_path] = useState(null)
    const [overview, setOverview] = useState('')
    const [geners, setGeners] = useState([])
    const [production, setProduction] = useState([])
    const [tagline, setTagline] = useState('')
    const [rating, setRating] = useState(0)
    const [release_date, setRelease_date] = useState('')
    // const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [textInput, setTextInput] = useState('')


    let parsedresults = [];
    const fetchData = async () => {

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=${page}`

        // setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setData(parsedresults.results)
        setTotalPages(parsedresults.total_pages)
        setPage(parsedresults.page)
        // setLoading(false)


    }




    useEffect(() => {

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        // setPage(page + 1)
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=${page + 1}`

        // setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        // setLoading(false)
        setData(data.concat(parsedresults.results))
        setPage(parsedresults.page)
    }


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

    const handleChange = async (event) => {
        setTextInput(event.target.value);
        if (event.target.value === "") {
            setData7([])
        } else {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&query=${event.target.value}&include_adult=false&with_origin_country=IN&include_video=true&append_to_response=videos,images`

            // setLoading(true);
            let results = await fetch(url)
            parsedresults = await results.json()
            // setLoading(false)
            setData7(parsedresults.results)
            setPage(parsedresults.page)
            // setLoading(false)
        }

        // setTextInput("");
        // let search = document.getElementById("searchTxt").value.toLocaleLowerCase();

        // event.target.value = '';
    }
    // const handleClick = async () => {

    //     const url = `https://api.themoviedb.org/3/search/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&query=${textInput}&with_origin_country=IN&include_adult=false&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=1`

    //     setLoading(true);
    //     let results = await fetch(url)
    //     parsedresults = await results.json()
    //     setLoading(false)
    //     setData7(parsedresults.results)
    //     setPage(parsedresults.page)
    //     setLoading(false)
    //     // setTextInput("");
    // }
    // const [submitted, setSubmitted] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        // setSubmitted(textInput);
        // setTextInput("");
    }


    // console.log(data7)
    const image_path = "https://image.tmdb.org/t/p/original";
    const video_url = "https://www.youtube.com/embed/"


    return (<>
        <div className='container my-4'>

            <h4 className='text-white'>Search Movies</h4>
            <form className="d-flex my-3 stick" role="search" onSubmit={handleSubmit}>
                <input className="inputbackground me-2" value={textInput} type="search" onChange={handleChange} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            {/* {loading && <Spinner key={1} />} */}

            <InfiniteScroll
                pageStart={0}
                loadMore={fetchMoreData}
                hasMore={totalPages > page}
            // loader={<Spinner key={2} />}
            >
                {(data7 !== []) && <div className=" c5 text-center my-50">
                    <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                        {data7.map((element) => {
                            return <div className="col my-3" key={element.id} onClick={() => fetchItems(element.id)} >
                                <div className="card bg-image hover-overlay mx-2 bcolor h-100" onClick={() => setScrollableModal(!scrollableModal)} >
                                    {
                                        (element.poster_path !== null)
                                            ? <img src={`${image_path}${element.poster_path}`} alt="" style={{ height: '14rem', width: 'auto' }} />
                                            : ((element.backdrop_path !== null) ? <img src={`${image_path}${element.backdrop_path}`} alt="" style={{ height: '14rem', width: 'auto' }} />
                                                : <div className='container text-center text-wrap' style={{ height: '14rem', width: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center' }}><b>{element.title}</b></div>)
                                    }
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>
                                    {/* <div className="card-title my-4"> <b>{element.title}</b></div> */}
                                </div>
                            </div>
                        })}
                    </div>
                </div>}
            </InfiniteScroll>

            <MDBModal show={scrollableModal} tabIndex='-1' setShow={setScrollableModal}>
                <MDBModalDialog size='lg' scrollable >
                    <MDBModalContent className="bodycolor" style={{ border: "1px solid white", borderRadius: '15px' }}>
                        {/* <MDBModalHeader>
                <MDBModalTitle className='container text-center'>{`${title}`}</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={() => setScrollableModal(!scrollableModal)}></MDBBtn>
            </MDBModalHeader> */}
                        <MDBModalBody>
                            {loading2 && <Spinner key={3} />}
                            {!loading2 && <div className="row">
                                <div className="card mb-3 bodycolor" >
                                    <div className='bg-image hover-zoom'>
                                        {(backdrop_path !== null)
                                            ? <img src={`${image_path}${backdrop_path}`} className="card-img-top mx-auto d-block my-2" alt='' style={{ maxHeight: '500px', maxWidth: '500px', border: "1px solid white", borderRadius: '15px' }} />
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
                                        {(rating !== 0) &&
                                            <><br />
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
                                                                {(element.character) && <div className="card-text text-wrap">Character<br /> {element.character}</div>}
                                                            </div>
                                                        </div>
                                                    })}
                                                </div></div>}

                                    </div>
                                </div>

                            </div>}
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='primary' onClick={() => setScrollableModal(!scrollableModal)}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

        </div>

    </>

    )
}

export default Search