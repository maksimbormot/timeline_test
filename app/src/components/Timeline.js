import React, { PureComponent } from 'react';
import propType from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {circleDiametr} from '../mockData'

import TimelineItem from './TimelineItem';

class Timeline extends PureComponent{
	calculateHeight = (movies) => {
		let heights = [];
		for(let i = 0; i < movies.length; i++){
			if(movies[i + 1]){
				const height = Math.ceil(moment(movies[i + 1].release, "YYYY-MM-DD").diff(moment(movies[i].release, "YYYY-MM-DD"), 'months', true));
				heights.push( (height < circleDiametr) ?  height + circleDiametr : height)
			}
		}
		return heights;
	}
	render() {
    const { filteredMovies, movies } = this.props;
		const heightsArr = this.calculateHeight(movies)
		return (
        <ul className="list">
          {
            filteredMovies.map((movie, index)=> {
              return <TimelineItem key={movie.id} movie={movie} height={heightsArr[index]} show={movie.show}/>
            })
          }
        </ul>
		);
	}
};

Timeline.propType = {
  movies: propType.obj
}

const getMovies = (state) => {
  if(!state.movies.filteredMovies.length) {
    return state.movies.movies
  }
  return state.movies.filteredMovies
}


const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    filteredMovies: getMovies(state),
  }
}

export default connect(mapStateToProps)(Timeline)
