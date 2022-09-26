import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom';

const Tvshow = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {

        // const url = "https://api.themoviedb.org/3/discover/movie?api_key=c85a7220743f2e910ce5418be14ce8b8&with_origin_country=IN&include_video=true&append_to_response=videos,images"
        const url = "https://api.themoviedb.org/3/discover/tv?api_key=c85a7220743f2e910ce5418be14ce8b8&page=5&language=hi-IN&sort_by=popularity.desc&page=5&with_origin_country=IN&include_video=true&append_to_response=videos,images"

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
                                <MDBCardTitle className='text-center'>{element.original_name}</MDBCardTitle>
                                <MDBCardText >
                                    {element.overview}
                                </MDBCardText>
                                <MDBCardText>
                                    <i className="fa-solid fa-star">{element.popularity}</i>
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>First air date: {element.first_air_date}</small>
                                </MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <small className='text-muted text-center'><Link to="/moviesmore">Know more</Link></small>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                })}
            </MDBRow>

        </div>
    )
}

export default Tvshow