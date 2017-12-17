import React from 'react';
import PropTypes from 'prop-types';

class NoImage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      colors : [
        '#2ECC71',
        '#2980B9',
        '#EF69D0',
        '#E74C3C',
        '#524DF0',
        '#F9851F',
        '#27AE60',
        '#7C4DF0',
        '#F36A6A',
        '#7F8C8D',
        '#34495E',
        '#FFA61A',
        '#1ABC9C',
        '#16A085',
        '#9B59B6',
        '#FFCC00',
        '#3498DB',
        '#8E44AD',
        '#C0392B'
      ],
      fontSize : '1px',
      randomIndex : 0
    };
    this.calculateFontSize = this.calculateFontSize.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  componentDidMount () {
    this.setState({
      randomIndex : this.getColor(this.props.text)
    });
  }

  componentWillReceiveProps (newProps) {
    if (newProps.text !== this.props.text) {
      this.setState({
        randomIndex : this.getColor(newProps.text)
      });
    }
  }

  calculateFontSize (node) {
    if (node) {
      this.setState({
        fontSize : ((Math.max(node.clientHeight,node.clientWidth))*0.8)+'px'
      });
    }
  }

  getColor (text) {
    if (text) {
      let value = 0;
      for (let i = 0; i < text.length; i++) {
        value += text.charCodeAt(i);
      }
      return value % this.state.colors.length;
    }
    return 0;
  }
  
  render () {
    let styles = {
      main : {
        backgroundColor : this.state.colors[this.state.randomIndex],
        height : '100%',
        width : '100%',
        color : '#FFFFFF',
        textAlign : 'center',
        fontSize : this.state.fontSize
      }
    };
    return (<div style={styles.main} ref={this.calculateFontSize}>
      {this.props.text?this.props.text[0]:' '}
    </div>);
  }
};

NoImage.propTypes = {
  text : PropTypes.string.isRequired
}

module.exports = NoImage;
