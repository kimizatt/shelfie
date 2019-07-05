import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Product from './Components/Product/Product'
import Header from './Components/Header/Header'
import axios from 'axios';


class App extends Component {
  constructor() {
  super()
  this.state = {
    inventory: [],
    name: '',
    price: 0,
    imgurl: ''
  }

}
  componentDidMount() {
    axios.get('/api/inventory')
    .then(res => {
      console.log('got inventory')
      this.setState({inventory: res.data})
    })
    .catch(err => console.log('err', err))
  }
  


  render() {
  return (
    <div className="App">
      
      <Header />
      <Dashboard productList={this.state.inventory}/>
      
      <Product eachProduct={this.state.inventory}/>
      <Form />
      

    </div>
  );
}
}
export default App;
