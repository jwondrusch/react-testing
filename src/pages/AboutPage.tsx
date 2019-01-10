import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

interface AboutPageProps {}

export class AboutPage extends Component<AboutPageProps> {
  static propTypes = {};

  render() {
    return (
      <div className="page page--about">
        <h1 className="title">About</h1>

        <p>
          This is just a sample page that has been setup to explore route tests.
        </p>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export const ConnectedAboutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
