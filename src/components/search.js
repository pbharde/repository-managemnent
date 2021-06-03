import React from 'react';
import styles from './search.module.css';
import Repos from './repos';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      user:'',
      repos:[]
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({user:e.target.value})
  }

  searchRepos = () => {
    fetch(`https://api.github.com/users/${this.state.user}/repos`)
      .then(res=>res.json())
      .then(data=>{
        this.setState({repos:data})
      });
   }

  render() {
    return (
      <div className={styles.searchContainer}>
      <h1 className={styles.repos}>Github Repositories</h1>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search Repositories by git username..."
            value={this.state.user}
            className={styles.searchInput}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className={styles.searchButton}
            onClick={this.searchRepos}
          >
            Search
          </button>
        </div>
        <div>
          {
            this.state.repos.length>0 ? <Repos repos={this.state.repos} user={this.state.user}/> :null
          }
        </div>
      </div>
    )
  }
}

export default Search;
