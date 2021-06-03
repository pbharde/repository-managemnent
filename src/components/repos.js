import React from 'react';
import styles from './repos.module.css'
import SearchRepo from './searchRepo';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchRepo:''
    }
  }

  handleChange = (searchRepo) => {
    this.setState({searchRepo})
  }

  render() {
    let searchRepo = this.state.searchRepo;
    let filteredRepos = this.props.repos;
    if(searchRepo){
      filteredRepos = this.props.repos.filter(eachRepo=>eachRepo.name.toLowerCase().indexOf(searchRepo.toLowerCase())!== -1);
    }

    return (
      <div className={styles.repoContainer}>
        <h1 className={styles.user}>Repositories for - {this.props.user}</h1>
        <SearchRepo repos={this.props.repo} searchRepo={this.handleChange}/>
        <div className={styles.resultContainer}>
          {
            filteredRepos.map(repo=>
              <div className={styles.card} key={repo.id}>
                <div className={styles.cardContainer}>
                  <h3><b>{repo.name}</b></h3>
                  <h5>{repo.language}</h5>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Search;
