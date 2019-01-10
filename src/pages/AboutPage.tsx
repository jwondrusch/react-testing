import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

interface AboutPageProps {

}

export class AboutPage extends Component<AboutPageProps> {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <h1 className="title">About</h1>

      </div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {

}

export const ConnectedAboutPage = connect(mapStateToProps, mapDispatchToProps)(AboutPage)
