import React, {Component} from 'react';
import './App.css';
import GenerateEmployee from './Component/GenerateEmployee';
import DisplayEmployee from './Component/DisplayEmployee';

const { default: axios } = require('axios');

const sampleEmployee = {
  gender: 'male',
  name: {
    title: 'mr',
    first: 'mathys',
    last: 'aubert'
  },
  location: {
    street: '9467 rue gasparin',
    city: 'perpignan',
    postcode: '90208'
  },
  email: 'mathys.aubert@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee:  sampleEmployee
    };
  }

  getEmployee() {
    axios("https://randomuser.me/api?nat=fr")
      .then(response => this.setState({employee: response.data.results[0]}))
      .catch(err => console.error)

  }

  render() {
    return (
      <>
        <GenerateEmployee selectEmployee={() => this.getEmployee()}  />
        <DisplayEmployee  employee={this.state.employee}  />
      </>
    );
  }
}

export default App;
