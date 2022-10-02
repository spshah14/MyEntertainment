import React from 'react'

const Spinner = () => {
    return (
        <div>
            <div className="text-center">
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner