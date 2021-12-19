import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

export default class Ratings extends React.Component {
    state = {
        rating: 1
      };
    
   
    onStarClick=(nextValue, prevValue, name) => {
      this.setState({rating: nextValue});
    };
   
    render() {
      return (                
        <div>
          <StarRatingComponent 
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
        </div>
      );
      }
    }