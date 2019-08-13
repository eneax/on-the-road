// here we do a similar approach used for FeaturedTours
import React, { Component } from 'react'

import styles from './items.module.css'
import Tour from './tour'
import Title from './title'
import { node } from 'prop-types';

export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [], // if I want to implement a filter in the future
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title='our' subtitle='tours' />

        <div className={styles.center}>
          {this.state.tours.map(({node}) => {
            return (
              <Tour 
                key={node.contentful_id}
                tour={node}
              />
            )
          })}
        </div>
      </section>
    )
  }
}
