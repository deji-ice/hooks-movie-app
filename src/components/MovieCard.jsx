
import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Movie = ({title, posterUrl, description, rating, id}) => {
    
    return (
        <div className='movie'>
              <img  src = {posterUrl} alt = {title} />
            <div className = 'movie-info'>
                <h3>{title}</h3>
            </div>
            
            <div className="movie-des">
            <StarRatingComponent value={rating}/>
                <h2>Description:</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Movie


