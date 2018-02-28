import React, { PureComponent } from 'react';
import propType from 'prop-types';
import { connect } from 'react-redux';

import { subGenre } from '../mockData';

// actions
import { filtersMovie } from '../actions/filters'

class FiltersContainer extends PureComponent{
  constructor(props) {
    super(props)
    this.state = this.initState();
  }
  initState = ()=> {
    return {
      producer: "", lead_actor: "", sub_genre: ""
    }
  }
  filterByGenre = (e) => {
    const sub_genre = e.target.value;
    this.setState({...this.initState(), sub_genre})
    this.props.dispatch(filtersMovie.FilterMoviesByGenre(sub_genre))
  }
  filterByActor = (e) => {
    const lead_actor = e.target.value;
    this.setState({...this.initState(), lead_actor})
    this.props.dispatch(filtersMovie.FilterMoviesByActor(lead_actor))
  }
  filterByProducer = (e) => {
    const producer = e.target.value;
    this.setState({...this.initState(), producer})
    this.props.dispatch(filtersMovie.FilterMoviesByProducer(producer))
  }

	render() {
		return (
        <div className="filters-panel">
          <select className="filters-panel-input genre" placeholder="Genre" value={this.state.sub_genre} onChange={this.filterByGenre}>
            <option value=""></option>
            {subGenre.map((genre)=>
              <option
                key={genre.value}
                value={genre.value}>{genre.title}
              </option>)
            }
          </select>
          <input className="filters-panel-input filter-by-producer" placeholder="Producer name" value={this.state.producer} onChange={this.filterByProducer} />
          <input className="filters-panel-input filter-by-actor" placeholder="Lead actor name" value={this.state.lead_actor} onChange={this.filterByActor} />
        </div>
		);
	}
};

FiltersContainer.propType = {
  FilterMoviesBy: propType.func,
  selectedGenre: propType.string

}



export default connect()(FiltersContainer)
