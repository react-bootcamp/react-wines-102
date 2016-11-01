import React, { PropTypes } from 'react';

export const WineApp = React.createClass({
  contextTypes: {
    router: PropTypes.object
  },
  goBack(e) {
    e.preventDefault();
    this.context.router.goBack();
  },
  render() {
    const displayButton = window.location.pathname === '/' || window.location.pathname === '/react-wines-102/'
      ? false
      : true;
    return (
      <div className="container">
        <h1 className="center-align">Open Wine Database</h1>
        <div className="center-align">
          You can read the Wines API documentation at <a href="https://wines-api.herokuapp.com" target="_blank">https://wines-api.herokuapp.com</a> and try it <a href="http://petstore.swagger.io/?url=https://react-bootcamp.github.io/react-wines/swagger.json" target="_blank">here</a>
        </div>
        {displayButton && (<div className="center-align" style={{ marginTop: 20 }}>
          <button className="btn waves-effect waves-light" onClick={this.goBack} type="button">
            <i className="material-icons left">fast_rewind</i>
            Back
          </button>
        </div>)}
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
});
