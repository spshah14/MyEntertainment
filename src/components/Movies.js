import React, { useEffect, useState } from 'react'
// import Moviesmore from './Moviesmore';

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
    // MDBModal,
    // MDBModalDialog,
    // MDBModalContent,
    // MDBModalHeader,
    // MDBModalTitle,
    // MDBModalBody,
    // MDBModalFooter,
    // MDBContainer
} from 'mdb-react-ui-kit';


const Movies = () => {

    const [basicModal, setBasicModal] = useState(false);

    const [data, setData] = useState([])
    // const [data2, setData2] = useState([])
    // const [id, setId] = useState([])

    const toggleShow = async () => {
        setBasicModal(!basicModal);
        // setId(id);
    }



    const fetchData = async () => {

        const url = "https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

        let results = await fetch(url)
        let parsedresults = await results.json()
        setData(parsedresults.results)
        // console.log(parsedresults)
    }
    // const fetchVideos = async (id) => {

    //     const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c85a7220743f2e910ce5418be14ce8b8&language=en-US&include_video=true&append_to_response=videos,images`

    //     let results = await fetch(url)
    //     let parsedresults = await results.json()
    //     setData2(parsedresults.results)
    //     // console.log(parsedresults)
    // }

    //   
    useEffect(() => {

        fetchData()
        // fetchVideos()
    }, [])

    const image_path = "https://image.tmdb.org/t/p/original";
    // const video_url = "https://www.youtube.com/embed/"

    return (
        <div className='container my-4'>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {data.map((element) => {
                    return <MDBCol key={element.id}>
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
                                    className='img-fluid shadow-4 w-100'

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
                                <MDBBtn onClick={toggleShow}>
                                    LAUNCH DEMO MODAL

                                </MDBBtn>
                                {/* <MDBBtn onClick={fetchVideos(element.id)}>
                                    LAUNCH DEMO MODAL

                                </MDBBtn> */}

                            </MDBCardFooter>
                            {/* <MDBCardFooter>
                                <small className='text-muted text-center'>
                                    <Link to="/moviesmore">Know more</Link>

                                </small>
                            </MDBCardFooter> */}
                        </MDBCard>
                    </MDBCol>

                })}
            </MDBRow>

            {/* <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog size="lg" className='modal-full-height'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>.<div className="row">
                            {data2.map((element) => {
                                return <div key={element.key}>
                                    <MDBContainer fluid>
                                        <div className="ratio ratio-21x9">
                                            <iframe
                                                src={`${video_url}${element.key}`}
                                                title="YouTube video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
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
            </MDBModal> */}
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