import React from 'react';
import styles from './gridView.module.css'

class GridView extends React.Component {
  render() {
    return (
        <div className={styles.resultContainer}>
          {
            this.props.filteredRepos.map(repo=>
              <div className={styles.card} key={repo.id}>
                <div className={styles.cardContainer}>
                  <h3><b>{repo.name}</b></h3>
                  <h5>{repo.language}</h5>
                </div>
              </div>
            )
          }
        </div>
    )
  }
}

export default GridView;
