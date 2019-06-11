import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState({
      list: this.props.list,
    });
  }

  render() {
    return (
      <div className='saved-list'>
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, index) => (
          <span key={index} className='saved-movie'>
            {movie.title}
          </span>
        ))}
        <Link to={`/`}>
          <div className='home-button'>Home</div>
        </Link>
      </div>
    );
  }
}
