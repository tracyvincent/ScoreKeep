import React from 'react';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subTitle) {
      return <h2>{this.props.subTitle}</h2>;
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string
};

// TitleBar.defaultProps = {
//   title: 'Default title'
// };
