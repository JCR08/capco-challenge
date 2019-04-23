import React, { Component } from 'react';
import ImageBox from './components/ImageBox.js';
import './App.css';
import './styles/boxes.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      bigTop: 2,
      bigBottom: 9,
    }
    this.toggleBig = this.toggleBig.bind(this);
  }

  componentDidMount() {
    fetch('https://fathomless-reaches-65003.herokuapp.com/')
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  toggleBig(index) {
    if(index<9){
      this.setState({bigTop: index})
    } else {
      this.setState({bigBottom: index})
    }
  }

  render() {
    return (
      <div className="App">
        <div className="boxContainer">
          {this.state.images.map((image, index) =>
            <ImageBox key={image.name} image={image} index={index} toggleBig={this.toggleBig} bigBox={(index<9) ? this.state.bigTop : this.state.bigBottom}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
