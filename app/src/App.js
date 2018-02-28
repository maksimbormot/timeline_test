import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

import Timeline from './components/Timeline'
import FiltersContainer from './components/FiltersContainer'

class App extends Component{
	render() {
		 const {movies} = this.props
		return (
      <div className="main-container">
        <main className="content">
          <FiltersContainer />
					<div className="list-movies">
						{movies.map((movie) => {
							return (
								<div key={movie.id}>
	                <h1>{movie.title}</h1>
	                <p className="info info-release">Release Date: {movie.release}</p>
	                <p className="info info-actor">Lead Actor: {movie.lead_actor}</p>
	                <p className="info info-genre">Sub Genre: {movie.sub_genre}</p>
	                <p className="info info-producer">Producer: {movie.producer}</p>
		            </div>
							)
						})}
					</div>
        </main>
        <div className="box opened">
          <Timeline/>
        </div>
      </div>
		);
	}
};

const mapStateToProps = state => {
	return {
		movies: state.movies.movies
	}
}

export default connect(mapStateToProps)(App)
