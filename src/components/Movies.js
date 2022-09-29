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
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol,
    MDBRipple,
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
    // MDBContainer
} from 'mdb-react-ui-kit';


const Movies = () => {

    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);


    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    // const [data5, setData5] = useState({})
    const [title, setTitle] = useState('')
    const [backdrop_path, setbackdrop_path] = useState(null)
    const [poster_path, setPoster_path] = useState(null)
    const [overview, setOverview] = useState('')
    const [geners, setGeners] = useState([])
    const [production, setProduction] = useState([])
    const [tagline, setTagline] = useState('')
    const [release_date, setRelease_date] = useState('')
    // const [id, setId] = useState(256040)



    let parsedresults = [];
    // let parsedresults5 = [];
    const fetchData = async () => {

        const url = "https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

        let results = await fetch(url)
        parsedresults = await results.json()
        setData(parsedresults.results)

        // console.log(parsedresults)

    }

    // const fetchpopular = async () => {

    //     const url = "https://api.themoviedb.org/3/movie/popular?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

    //     let results = await fetch(url)
    //     let parsedresults5 = await results.json()
    //     setData5(parsedresults5.results)

    //     console.log(parsedresults5)
    // }


    const fetchItems = async (id) => {


        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`

        let results = await fetch(url)
        let parsedresults2 = await results.json()
        setData2(parsedresults2.results)
        // console.log(parsedresults2)
        // eslint-disable-next-lin


        const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        let cast = await fetch(url2)
        let parsedresults3 = await cast.json()
        setData3(parsedresults3.cast)
        // console.log(parsedresults3)

        const url3 = `https://api.themoviedb.org/3/movie/${id}/images?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        let backdrops = await fetch(url3)
        let parsedresults4 = await backdrops.json()
        setData4(parsedresults4.backdrops)
        // console.log(parsedresults4)

        const url4 = `https://api.themoviedb.org/3/movie/${id}?api_key=c85a7220743f2e910ce5418be14ce8b8&include_video=true&append_to_response=videos,images`
        let results5 = await fetch(url4)
        let parsedresults5 = await results5.json()
        // setData5(parsedresults5.results5)
        setTitle(parsedresults5.title)
        setbackdrop_path(parsedresults5.backdrop_path)
        setPoster_path(parsedresults5.poster_path)
        setOverview(parsedresults5.overview)
        setGeners(parsedresults5.genres)
        setProduction(parsedresults5.production_companies)
        setTagline(parsedresults5.tagline)
        setRelease_date(parsedresults5.release_date)
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

    useEffect(() => {

        fetchData()
        // fetchVideos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const image_path = "https://image.tmdb.org/t/p/original";
    const video_url = "https://www.youtube.com/embed/"

    return (
        <div className='container my-4'>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {data.map((element) => {
                    return <MDBCol key={element.id}>
                        {/* <Routes>
                            <Route path="/moviesmore" element={<Moviesmore id={element.id} />} />
                        </Routes> */}
                        <MDBCard className='h-100 mb-3' alignment="start" background='light' shadow="1"  >
                            <MDBRipple
                                className='bg-image hover-overlay shadow-1-strong rounded'
                                rippleTag='div'
                                rippleColor='light'
                            >
                                <MDBCardImage
                                    src={`${image_path}${element.poster_path}`}
                                    // src={`${image_path}${element.backdrop_path}`}
                                    alt='...'
                                    position='top'
                                    className='img-fluid shadow-4 '
                                // style={{ maxHeight: '300px' }}

                                />
                                <a href='#!'>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                </a>
                            </MDBRipple>
                            {/* <MDBCardImage
                                src={`${image_path}${element.poster_path}`}
                                // src={`${image_path}${element.backdrop_path}`}
                                alt='...'
                                position='top'
                                className='img-fluid shadow-4'
                            /> */}
                            <MDBCardBody>
                                <MDBCardTitle className='text-center'>{element.title}</MDBCardTitle>
                                <MDBCardTitle className='text-center' id='123'>{element.id}</MDBCardTitle>
                                <MDBCardText >
                                    {element.overview}
                                </MDBCardText>
                                <MDBCardText>
                                    <i className="fa-solid fa-star">{element.vote_average}</i>
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>Release date: {element.release_date}</small>
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>

                                <MDBBtn onClick={toggleShow} >
                                    <MDBBtn onClick={() => fetchItems(element.id)}>
                                        LAUNCH DEMO MODAL
                                    </MDBBtn>
                                </MDBBtn>

                            </MDBCardFooter>


                        </MDBCard>
                    </MDBCol>

                })}
            </MDBRow>




            <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                <MDBModalDialog size='xl'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className="row">
                                <div className="card mb-3">
                                    {(backdrop_path !== null)
                                        ? <img src={`${image_path}${backdrop_path}`} className="card-img-top rounded mx-auto d-block my-2" alt='' style={{ maxHeight: '700px', maxWidth: '700px' }} />
                                        : <img src={`${image_path}${poster_path}`} className="card-img-top rounded mx-auto d-block my-2" alt='' style={{ maxHeight: '500px', maxWidth: '500px' }} />}
                                    <div className="card-body">
                                        <h5 className="card-title text-center
                                        ">{`${title}`}</h5>
                                        {(`${tagline}` !== '') && <><b>Tagline:</b><span className="card-text">{` ${tagline}`}</span></>}
                                        <br />
                                        <b>Overview:</b><span className="card-text">{`${overview}`}</span>
                                        <br />
                                        <b>Release Date:</b><span className="card-text">{`${release_date}`}</span>
                                        <br />
                                        <b>Genres:</b>
                                        {geners.map((element) => {
                                            return <span className="card-text">{` ${element.name} `}</span>
                                        })}
                                        <br />
                                        <br />

                                        <b>Production House:</b>
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

                                        <b>Videos:</b>
                                        <div className="horizontal">
                                            {data2.map((element) => {
                                                return <div key={element.key} className="slide1">
                                                    {/* <div className="ratio ratio-16x9"> */}
                                                    <iframe
                                                        src={`${video_url}${element.key}`}
                                                        title="YouTube video"
                                                        allowFullScreen
                                                        style={{ maxHeight: '300px', maxWidth: '300px' }}
                                                    ></iframe>
                                                    {/* </div> */}
                                                </div>
                                            })}
                                        </div>


                                        <br />
                                        <b>Cast</b>
                                        <div className="horizontal">
                                            {data3.map((element) => {
                                                return <div key={element.id} className="card slide1 text-center" style={{ width: '15rem' }}>

                                                    <img src={`${image_path}${element.profile_path}`} className="card-img-top my-1" alt={`${element.name}`} style={{ maxHeight: '150px', maxWidth: '150px' }} />
                                                    <div className="card-body">
                                                        <p className="card-text">Name<br /> {element.name}</p>
                                                        <p className="card-text">Character<br /> {element.character}</p>
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
                                                            <img src={`${image_path}${element.file_path}`} alt='...' className='img-fluid' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                                                        </a>
                                                        {/* <a href='#!'>
                                                            <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                                                        </a> */}
                                                        {/* <img src={`${image_path}${element.file_path}`} alt='...' style={{ maxHeight: '200px', maxWidth: '200px' }} /> */}
                                                    </div>

                                                </div>
                                            })}
                                        </div>


                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>

                            </div>
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