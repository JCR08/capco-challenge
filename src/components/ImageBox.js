import React, { Component } from 'react';

class ImageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      columnStart: '',
    }
  }

  setColumnStart() {
    if(this.props.index === 0 || this.props.index === 5 || this.props.index === 9 || this.props.index === 14) {
      this.setState({columnStart: 1})
    } else if (this.props.index === 1 || this.props.index === 6 || this.props.index === 10 || this.props.index === 15) {
      this.setState({columnStart: 2})
    } else if (this.props.index === 2 || this.props.index === 7 || this.props.index === 11 || this.props.index === 16) {
      this.setState({columnStart: 3})
    } else if (this.props.index === 3 || this.props.index === 12) {
      this.setState({columnStart: 4})
    } else {
      this.setState({columnStart: 5})
    }
  }

  componentDidMount() {
    const colors = ['magenta', 'blue', 'yellow', 'green', 'turquoise'];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    this.setState({color: randomColor});
    this.setColumnStart();
  }

  render() {
    let style = {
      backgroundImage: `url(${this.props.image.imageUrl})`,

      backgroundColor: (this.props.bigBox === this.props.index) ? `${this.state.color}` : '#eee',

      gridRow: (this.props.bigBox === this.props.index) && (this.props.index<9) ? '1 / span 2' : (this.props.bigBox === this.props.index) && (this.props.index>8) ? '3 / span 2' : 'auto',

      gridColumn: (this.props.bigBox === this.props.index) ? `${this.state.columnStart} / span 2` : 'auto',
    }
    return (
      <div className={`box ${this.props.bigBox ? 'bigBox' : ''}`} style={style} onClick={this.props.toggleBig.bind(this, this.props.index)}></div>
    );
  }
}

export default ImageBox;
