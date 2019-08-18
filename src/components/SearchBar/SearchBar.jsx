import React, { Component } from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = { term: this.props.term };

  onChangeHandler = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render(){
    return(
      <div data-test-id='search-bar-main-div' className='search-bar ui segment' style={ { marginTop: 10 } }>
        <form className="ui form" onSubmit={ this.onSubmitHandler }>
          <div className="field" data-test-id='search-bar-text-tag'>
            <input 
              type="text" 
              onChange={ this.onChangeHandler } 
              value={ this.state.term } 
              name="search-bar" 
              placeholder="Search Bar" 
            />
          </div>
        </form>
      </div>
    );
  };
};

SearchBar.propTypes = {
  term: PropTypes.string,
  onTermSubmit: PropTypes.func
}

SearchBar.defaultProps = {
  term: ''
}

export default SearchBar;
