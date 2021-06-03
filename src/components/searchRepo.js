import React from 'react';
import styles from './searchRepo.module.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      repo:'',
      repos:[]
    }
  }

  handleChange = (e) => {
    this.props.searchRepo(e.target.value);
  }

  render() {
    return (
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search through Repositories..."
          className={styles.searchInput}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Search;
