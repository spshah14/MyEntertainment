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
    MDBRipple
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
    MDBContainer
} from 'mdb-react-ui-kit';

const Popular = () => {
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleShow = () => setOptSmModal(!optSmModal);


    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    // const [data5, setData5] = useState([])
    // const [id, setId] = useState(256040)



    let parsedresults = [];
    const fetchData = async () => {

        const url = "https://api.themoviedb.org/3/movie/popular?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

        let results = await fetch(url)
        parsedresults = await results.json()
        setData(parsedresults.results)

        console.log(parsedresults)
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
        console.log(parsedresults2)
        // eslint-disable-next-lin


        const url2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        let cast = await fetch(url2)
        let parsedresults3 = await cast.json()
        setData3(parsedresults3.cast)
        console.log(parsedresults3)

        const url3 = `https://api.themoviedb.org/3/movie/${id}/images?api_key=c85a7220743f2e910ce5418be14ce8b8&append_to_response=videos,images`
        let backdrops = await fetch(url3)
        let parsedresults4 = await backdrops.json()
        setData4(parsedresults4.backdrops)
        console.log(parsedresults4)





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

                                <MDBBtn onClick={() => fetchItems(element.id)}>
                                    <MDBBtn onClick={toggleShow} >
                                        {/* <MDBBtn onClick={() => fetchVideos(element.id)}>
                                        LAUNCH DEMO MODAL
                                    </MDBBtn> */}
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
                        <MDBModalBody>.<div className="row">
                            {data2.map((element) => {
                                return <div key={element.key}>
                                    <MDBContainer fluid>
                                        {/* <div className="ratio ratio-21x9">
                                            <iframe
                                                src={`${video_url}${element.key}`}
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
                                        </div> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe
                                                src={`${video_url}${element.key}`}
                                                title="YouTube video"
                                                allowFullScreen
                                                style={{ maxHeight: '400px', maxWidth: '400px' }}
                                            ></iframe>
                                        </div>
                                    </MDBContainer>
                                    <br />
                                </div>
                            })}
                            {data3.map((element) => {
                                return <div key={element.id}>
                                    <MDBContainer fluid>

                                        <MDBCardImage
                                            src={`${image_path}${element.profile_path}`}
                                            // src={`${image_path}${element.backdrop_path}`}
                                            alt='...'
                                            position='top'
                                            className='img-fluid shadow-4 '
                                            style={{ maxHeight: '200px', maxWidth: '200px' }}


                                        />
                                        <br />
                                        Name: {element.name}
                                        <br />
                                        Character name: {element.character}
                                    </MDBContainer>
                                    <br />
                                </div>
                            })}

                            {data4.map((element) => {
                                return <div key={element.file_path}>
                                    <MDBContainer fluid>

                                        <MDBCardImage
                                            src={`${image_path}${element.file_path}`}
                                            // src={`${image_path}${element.backdrop_path}`}
                                            alt='...'
                                            position='top'
                                            className='img-fluid shadow-4 '
                                            style={{ maxHeight: '200px', maxWidth: '200px' }}


                                        />
                                        {/* <br />
                                        Name: {element.name}
                                        <br />
                                        Character name: {element.character} */}
                                    </MDBContainer>
                                    <br />
                                </div>
                            })}

                        </div>.</MDBModalBody>

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

}

export default Popular