import React, { useEffect, useState } from 'react'
// import Moviesmore from './Moviesmore';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     // Link,
//     // Router,
// } from "react-router-dom";

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    // MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    // MDBRipple,
    MDBIcon
} from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    // MDBContainer,
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroller';
import profile from '../Avtar.jpg';


const Movies = () => {

    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);


    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [page, setPage] = useState(1)

    const [totalPages, setTotalPages] = useState(1)
    // const [data5, setData5] = useState({})
    const [title, setTitle] = useState('')
    const [backdrop_path, setbackdrop_path] = useState(null)
    const [poster_path, setPoster_path] = useState(null)
    const [poster_path1, setPoster_path1] = useState(null)
    const [poster_path2, setPoster_path2] = useState(null)
    const [poster_path3, setPoster_path3] = useState(null)
    const [poster_path4, setPoster_path4] = useState(null)
    const [poster_path5, setPoster_path5] = useState(null)
    const [overview, setOverview] = useState('')
    const [geners, setGeners] = useState([])
    const [production, setProduction] = useState([])
    const [tagline, setTagline] = useState('')
    const [rating, setRating] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [id, setId] = useState(1)


    setTimeout(() => {
        setId(id + 1);
    }, 3000);

    let parsedresults = [];
    const fetchData = async () => {

        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=${page}`

        setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setData(parsedresults.results)
        setTotalPages(parsedresults.total_pages)
        setPage(parsedresults.page)
        // setPoster_path1(parsedresults.results[0].backdrop_path)
        // setPoster_path2(parsedresults.results[1].backdrop_path)
        // setPoster_path3(parsedresults.results[2].backdrop_path)
        // setPoster_path4(parsedresults.results[3].backdrop_path)
        // setPoster_path5(parsedresults.results[4].backdrop_path)
        console.log(poster_path1)
        console.log(poster_path2)
        console.log(poster_path3)
        setLoading(false)


    }


    const fetchupcoming = async () => {

        const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=c85a7220743f2e910ce5418be14ce8b8&language=hi-IN&page=1&with_origin_country=IN&include_video=true&append_to_response=videos,images"

        let results = await fetch(url)
        parsedresults = await results.json()
        // setData(parsedresults.results)
        setPoster_path1(parsedresults.results[0].poster_path)
        setPoster_path2(parsedresults.results[1].poster_path)
        setPoster_path3(parsedresults.results[2].poster_path)
        setPoster_path4(parsedresults.results[3].poster_path)
        setPoster_path5(parsedresults.results[4].poster_path)
        // console.log(parsedresults)


    }



    useEffect(() => {

        fetchData()
        fetchupcoming()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        // setPage(page + 1)
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images&page=${page + 1}`

        // setLoading(true);
        let results = await fetch(url)
        parsedresults = await results.json()
        setLoading(false)
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
        console.log(parsedresults2)
        console.log(data2);
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
        // console.log(parsedresults5)
        // console.log(geners)


    }


    // const fetchVideos = async (id) => {

    //     const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`

    //     let results = await fetch(url)
    //     let parsedresults2 = await results.json()
    //     setData2(parsedresults2.results)
    //     console.log(parsedresults2)
    //     // eslint-disable-next-lin


    // }

    // const fetchCast = async (id) => {
    //     const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
    //     let results = await fetch(url)
    //     let parsedresults3 = await results.json()
    //     setData3(parsedresults3.results)
    //     console.log(parsedresults3)
    // }



    const image_path = "https://image.tmdb.org/t/p/original";
    const video_url = "https://www.youtube.com/embed/"

    return (
        <div className='container my-4'>
            {loading && <Spinner />}
            <InfiniteScroll
                pageStart={0}
                loadMore={fetchMoreData}
                hasMore={totalPages > page}
                loader={<Spinner />}
            >

                <div id="carouselExampleFade" class="carousel slide carousel-fade my-3" data-bs-ride="carousel">
                    <>

                        <div class="carousel-inner2">
                            {(poster_path1) && <div class="carousel-item active c1" >
                                <img src={`${image_path}${poster_path1}`} class="d-block w-100 rounded-1 border border-dark" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>

                                </div>
                            </div>}
                            {(poster_path2) && <div class="carousel-item c1">
                                <img src={`${image_path}${poster_path2}`} class="d-block w-100 rounded-1 border border-dark" alt="..." />
                            </div>}
                            {(poster_path3) && <div class="carousel-item c1">
                                <img src={`${image_path}${poster_path3}`} class="d-block w-100 rounded-1 border border-dark" alt="..." />
                            </div>}
                            {(poster_path4) && <div class="carousel-item c1">
                                <img src={`${image_path}${poster_path4}`} class="d-block w-100 rounded-1 border border-dark" alt="..." />
                            </div>}
                            {(poster_path5) && <div class="carousel-item c1">
                                <img src={`${image_path}${poster_path5}`} class="d-block w-100 rounded-1 border border-dark" alt="..." />
                            </div>}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </>

                </div>


                <MDBRow className='row-cols-1 row-cols-md-6 g-4'>
                    {data.map((element) => {
                        return <MDBCol key={element.id} onClick={toggleShow}>
                            <MDBCard className='h-100' onClick={() => fetchItems(element.id)}>
                                <div className='bg-image hover-overlay rounded mx-auto d-block' >
                                    <MDBCardImage
                                        src={`${image_path}${element.poster_path}`}
                                        alt='...'
                                        position='top'
                                        // style={{ maxHeight: '250px', maxWidth: '250px' }}
                                        className='rounded mx-auto d-block '
                                    />
                                    <a href='#!'>
                                        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                    </a>
                                </div>

                                <MDBCardBody>
                                    <MDBCardTitle className='text-center'>{element.title}</MDBCardTitle>

                                </MDBCardBody>
                                <MDBCardFooter className='text-center'>
                                    <MDBBtn outline rounded className='text-center' onClick={toggleShow} >
                                        Watch
                                    </MDBBtn>
                                </MDBCardFooter>
                            </MDBCard>
                        </MDBCol>
                    })}
                </MDBRow>




                {/* <div class="row">
                    {data.map((element) => {
                        return <div class="col-sm-2" key={element.id} style={{ maxHeight: '250px', maxWidth: '200px' }}>
                            <div class="card">
                                <div class="card-body">
                                    <img src={`${image_path}${element.poster_path}`} class="img-fluid" alt="..." style={{ maxHeight: '200px', maxWidth: '200px' }} />
                                    <h5 class="card-title">{element.title}</h5>

                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div> */}


            </InfiniteScroll>




            <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                <MDBModalDialog size='xl'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {loading2 && <Spinner />}
                            {!loading2 && <div className="row">
                                <div className="card mb-3">
                                    {(backdrop_path !== null)
                                        ? <img src={`${image_path}${backdrop_path}`} className="card-img-top rounded mx-auto d-block my-2" alt='' style={{ maxHeight: '700px', maxWidth: '700px' }} />
                                        : <img src={`${image_path}${poster_path}`} className="card-img-top rounded mx-auto d-block my-2" alt='' style={{ maxHeight: '500px', maxWidth: '500px' }} />}
                                    <div className="card-body">
                                        {(`${title}` !== '') && <h5 className="card-title text-center my-1">{`${title}`}</h5>}
                                        {(`${tagline}` !== '') && <><b>Tagline:</b><span className="card-text mx-1 my-1">{` ${tagline}`}</span></>}
                                        <br />
                                        {(`${overview}` !== '') && <><b>Overview:</b><span className="card-text mx-1 my-1">{`${overview}`}</span></>}
                                        <br />
                                        {(`${release_date}` !== '') && <><b>Release Date:</b><span className="card-text mx-1 my-1">{`${release_date}`}</span></>}
                                        <br />
                                        {(`${rating}` !== '') && <><b>Rating:</b><span className="card-text mx-1 my-1">{` ${rating} `}<i class="fa-solid fa-star"></i></span></>}
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
                                                            : <div className='text-center' ><MDBIcon far icon="file-video" size='2x' /><div>{`${element.name}`}</div></div>
                                                        // : <MDBIcon far icon="file-video" size='2x' />
                                                    }
                                                </div>
                                            })}
                                        </div>
                                        <br />

                                        {
                                            (`${data2}` !== []) &&
                                            <>
                                                <b>Videos:</b>
                                                <div className="horizontal">
                                                    {data2.map((element) => {

                                                        return <div key={element.key} className="slide1">


                                                            <><iframe
                                                                src={`${video_url}${element.key}`}
                                                                title="YouTube video"
                                                                allowFullScreen
                                                                style={{ maxHeight: '300px', maxWidth: '300px' }}
                                                            ></iframe>
                                                                <div className='text-center'><b>{element.type}</b></div>
                                                            </>


                                                        </div>

                                                    })}
                                                </div>
                                            </>
                                        }


                                        <br />
                                        <b>Cast</b>
                                        <div className="horizontal">
                                            {data3.map((element) => {
                                                return <div key={element.id} className="card slide1 text-center" style={{ width: '15rem' }}>

                                                    {
                                                        (element.profile_path !== null)
                                                            ?
                                                            <a href={`${image_path}${element.profile_path}`} target='-blank' rel="noopener noreferrer">
                                                                <img src={`${image_path}${element.profile_path}`} className="card-img-top my-2 text-center" alt={`${element.name}`} style={{ maxHeight: '170px', maxWidth: 'auto' }} /></a>
                                                            : <img src={profile} alt="" className="card-img-top my-2 text-center" style={{ maxHeight: 'auto', maxWidth: '170px', minHeight: '170px' }} />
                                                        // : <MDBIcon far icon="file-video" size='2x' />
                                                    }
                                                    {/* <img src={`${image_path}${element.profile_path}`} className="card-img-top my-1 text-center" alt={`${element.name}`} style={{ maxHeight: 'auto', maxWidth: '170px' }} />
                                                        <i class="fa-solid fa-user"></i> */}

                                                    <div className="card-body">
                                                        <div className="card-text"> <b>{element.name}</b></div>
                                                        <div className="card-text text-wrap">Character<br /> {element.character}</div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>


                                        <br />
                                        <b>Photos</b>
                                        <div className="horizontal">
                                            {data4.map((element) => {
                                                return <div key={element.file_path} className="slide1">
                                                    <div className="slide bg-image hover-overlay">
                                                        <a href={`${image_path}${element.file_path}`} target='-blank' rel="noopener noreferrer">
                                                            <img src={`${image_path}${element.file_path}`} alt='...' className='img-fluid' style={{ maxHeight: '300px', maxWidth: '300px' }} />
                                                        </a>

                                                    </div>

                                                </div>
                                            })}
                                        </div>



                                    </div>
                                </div>

                            </div>}
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>




        </div>



    )





    // {/* <div className="container my-4">

    // <div className="row">
    //     {data.map((element) => {
    //         return <div key={element.id}>

    //             <MDBCard style={{ maxHeight: '440px' }}>
    //                 <MDBRow className='g-0'>
    //                     <MDBCol md='4'>
    //                         {/* <MDBCardImage src={`${image_path}${element.backdrop_path}`} fluid style={{ maxHeight: '440px', minWidth: "440px" }} /> */}
    //                         <MDBCardImage src={`${image_path}${element.poster_path}`} fluid style={{ maxHeight: '440px', minWidth: "440px" }} />

    //                     </MDBCol>
    //                     <MDBCol md='8'>
    //                         <MDBCardBody>
    //                             <MDBCardTitle>{element.title}</MDBCardTitle>
    //                             <MDBCardText>
    //                                 {element.overview}
    //                             </MDBCardText>
    //                             <MDBCardText>
    //                                 <small className='text-muted'>Release date: {element.release_date}</small>
    //                             </MDBCardText>
    //                             <Link to="/moviesmore">Go somewhere</Link>
    //                         </MDBCardBody>
    //                     </MDBCol>
    //                 </MDBRow>
    //             </MDBCard>
    //             <br />
    //         </div>
    //     })}
    // </div>
    // </div> */}










    // let { title, imgUrl, newsurl, overview, release_date } = props;
    // const image_path = "https://image.tmdb.org/t/p/original";
    // return (
    //     <MDBRow>
    //         <MDBCol sm='6'>
    //             <MDBCard>
    //                 <MDBCardImage position='top' src={`${image_path}${imgUrl}`} alt='...' />
    //                 <MDBCardBody>
    //                     <MDBCardTitle>{title}</MDBCardTitle>
    //                     <MDBCardText>
    //                         {overview}
    //                     </MDBCardText>
    //                     <MDBCardText>
    //                         Release date: {release_date}
    //                     </MDBCardText>
    //                     <MDBBtn href={newsurl}>Go somewhere</MDBBtn>
    //                 </MDBCardBody>
    //             </MDBCard>
    //         </MDBCol>
    //         <MDBCol sm='6'>
    //             <MDBCard>
    //                 <MDBCardImage position='top' src={`${image_path}${imgUrl}`} alt='...' />
    //                 <MDBCardBody>
    //                     <MDBCardTitle>{title}</MDBCardTitle>
    //                     <MDBCardText>
    //                         {overview}
    //                     </MDBCardText>
    //                     <MDBCardText>
    //                         Release date: {release_date}
    //                     </MDBCardText>
    //                     <MDBBtn href={newsurl}>Go somewhere</MDBBtn>
    //                 </MDBCardBody>
    //             </MDBCard>
    //         </MDBCol>
    //     </MDBRow>
    // )
}

export default Movies