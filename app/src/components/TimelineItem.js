import React, { PureComponent } from 'react';
import propType from 'prop-types';
import classNames from 'classnames';

class TimelineItem extends PureComponent{
	constructor(props){
		super(props)
		this.state = {active:false}
	}
	circleMouseUp = () => {
		this.setState({active: true})
	}
	circleMouseOut = () => {
		this.setState({active: false})
	}
	render() {
    const {movie} = this.props
		return (
      <div>
        <div className="content-wrapper">
					<span className={classNames('circle', this.props.show ? null : 'circle-grey')} onMouseEnter={this.circleMouseUp} onMouseLeave={this.circleMouseOut}></span>
          <li className = {classNames(this.state.active ? 'active' : null, this.props.show ? null : 'hide-info')}>
                <div className="movie-content">
                  <h1 className="title">{movie.title}</h1>
                  <p className="info info-release">Release Date: {movie.release}</p>
                  <p className="info info-actor">Lead Actor: {movie.lead_actor}</p>
                  <p className="info info-genre">Sub Genre: {movie.sub_genre}</p>
                  <p className="info info-producer">Producer: {movie.producer}</p>
                </div>
            </li>
        </div>
				<div className="height" style={{height:`${this.props.height}px`}}></div>
      </div>
		);
	}
};

TimelineItem.propType = {
  movie: propType.obj
}

export default TimelineItem
