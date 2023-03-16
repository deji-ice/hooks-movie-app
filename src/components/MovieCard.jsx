
import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Tooltip from '@mui/material/Tooltip';

const Movie = ({ title, posterUrl, description, rating, id }) => {

const truncate = (str) => {
    return str.length >= 13 ? str.substring(0, 20) + "..." : str;
    }

    return (
        <div className='w-[11rem] overflow-hidden'>
            <Tooltip title={title} placement="bottom-end">
                <img className="rounded-3xl h-[15em] cursor-pointer" src={posterUrl} alt={title} />
            </Tooltip>
            <Tooltip title={title}>
                <p className='font-semibold pl-1 overflow-hidden cursor-pointer'>{truncate(title)}</p>
            </Tooltip>
            <div className="movie-des">
                <StarRatingComponent value={rating} />
                {/* <p>Description:</p>
                <p>{description}</p> */}
            </div>
        </div>
    )
}

export default Movie


