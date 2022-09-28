// import React, { useEffect, useState } from 'react'
// import {
//     // MDBCard,
//     // MDBCardBody,
//     // MDBCardTitle,
//     // MDBCardText,
//     // MDBRow,
//     // MDBCol,
//     // MDBBtn,
//     // MDBCardImage,
//     MDBContainer
// } from 'mdb-react-ui-kit';
// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBModalFooter,
//     // MDBContainer
// } from 'mdb-react-ui-kit';




// const Moviesmore = (props) => {

//     const [basicModal, setBasicModal] = useState(false);

//     const [data2, setData2] = useState([])

//     // const fetchData = async () => {

//     //     const url = "https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

//     //     let results = await fetch(url)
//     //     let parsedresults = await results.json()
//     //     setData(parsedresults.results)
//     //     console.log(parsedresults)
//     // }
//     const fetchVideos = async () => {

//         const url = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=c85a7220743f2e910ce5418be14ce8b8&language=en-US&include_video=true&append_to_response=videos,images`

//         let results = await fetch(url)
//         let parsedresults = await results.json()
//         setData2(parsedresults.results)
//         console.log(parsedresults)
//     }
//     useEffect(() => {

//         // fetchData()

//         fetchVideos()
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [])

//     // console.log(fetchData());
//     // console.log(data);
//     // const image_path = "https://image.tmdb.org/t/p/original";
//     const video_url = "https://www.youtube.com/embed/"
//     const toggleShow = async () => {
//         setBasicModal(!basicModal);
//         // setId(id);
//     }

//     return (
//         <div>
//             <div className="container my-4 justify-content">

//                 <div className="row">
//                     {data2.map((element) => {
//                         return <div key={element.key}>
//                             <MDBContainer fluid>
//                                 <div className="ratio ratio-21x9">
//                                     <iframe
//                                         src={`${video_url}${element.key}`}
//                                         title="YouTube video"
//                                         allowFullScreen
//                                     ></iframe>
//                                 </div>
//                             </MDBContainer>
//                             <br />
//                         </div>
//                     })}
//                 </div>
//             </div>



//             <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
//                 <MDBModalDialog size="lg" className='modal-full-height'>
//                     <MDBModalContent>
//                         <MDBModalHeader>
//                             <MDBModalTitle>Modal title</MDBModalTitle>
//                             <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
//                         </MDBModalHeader>
//                         <MDBModalBody>.<div className="row">
//                             {data2.map((element) => {
//                                 return <div key={element.key}>
//                                     <MDBContainer fluid>
//                                         <div className="ratio ratio-21x9">
//                                             <iframe
//                                                 src={`${video_url}${element.key}`}
//                                                 title="YouTube video"
//                                                 allowFullScreen
//                                             ></iframe>
//                                         </div>
//                                     </MDBContainer>
//                                     <br />
//                                 </div>
//                             })}
//                         </div>.</MDBModalBody>

//                         <MDBModalFooter>
//                             <MDBBtn color='secondary' onClick={toggleShow}>
//                                 Close
//                             </MDBBtn>
//                             <MDBBtn>Save changes</MDBBtn>
//                         </MDBModalFooter>
//                     </MDBModalContent>
//                 </MDBModalDialog>
//             </MDBModal>

//         </div>
//     )
// }

// export default Moviesmore