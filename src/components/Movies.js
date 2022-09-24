import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const Movies = () => {


    const [data, setData] = useState([])

    const fetchData = async () => {

        const url = "https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"

        let results = await fetch(url)
        let parsedresults = await results.json()
        setData(parsedresults.results)
        console.log(parsedresults)
    }
    useEffect(() => {

        fetchData()

    }, [])

    const image_path = "https://image.tmdb.org/t/p/original";

    return (
        <div className='container my-4'>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {data.map((element) => {
                    return <MDBCol key={element.id}>
                        <MDBCard className='h-100 mb-3' alignment="start" background='light' shadow="1"  >
                            <MDBCardImage
                                src={`${image_path}${element.poster_path}`}
                                // src={`${image_path}${element.backdrop_path}`}
                                alt='...'
                                position='top'
                                fluid
                            />
                            <MDBCardBody>
                                <MDBCardTitle className='text-center'>{element.title}</MDBCardTitle>
                                <MDBCardText >
                                    {element.overview}
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>Rating: {element.vote_average} by {element.vote_count} people</small>

                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>Release date: {element.release_date}</small>
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted'><Link to="/moviesmore">Go somewhere</Link></small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                })}
            </MDBRow>

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