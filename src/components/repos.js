import React from 'react';
import styles from './repos.module.css'
import SearchRepo from './searchRepo';
import GridView from './gridView';
import ListView from './listView';


class Repos extends React.Component {
  constructor() {
    super();
    this.state = {
      searchRepo:'',
      listView: true,
      gridView:false,
      activeBtn:true
    }
  }

  handleChange = (searchRepo) => {
    this.setState({searchRepo})
  }

  toggleView = (searchRepo) => {
    this.setState(prevState => ({
          listView: !prevState.listView,
          gridView: !prevState.gridView,
        }))
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
        <div className={styles.btnContainer}>
          <button className={this.state.listView ? styles.active : styles.btn} onClick={this.toggleView}><i class="fa fa-bars"></i> List</button>
          <button className={this.state.gridView ? styles.active : styles.btn} onClick={this.toggleView}><i class="fa fa-th-large"></i> Grid</button>
        </div>
        <SearchRepo repos={this.props.repo} searchRepo={this.handleChange}/>
        {
          filteredRepos.length >0 ? (this.state.listView ? <ListView filteredRepos={filteredRepos}/> :<GridView filteredRepos={filteredRepos}/>) : null
        }
      </div>
    )
  }
}

export default Repos;
