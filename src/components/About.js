import React, { useContext } from 'react'
import movieContext from '../context/movies/movieContext'

const About = () => {
    const a = useContext(movieContext)
    return (
        <div>About {a.name} and {a.class}</div>
    )
}

export default About