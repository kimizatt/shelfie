import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    this.addProduct = this.addProduct.bind(this)

    }
    
    handleChange = (e) => {
        let {name, value}= e.target
        this.setState ({[name]: value})
    }

    cancelAdd = () => {
        this.setState ({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    addProduct = (e) => {
        let {name, price, imgurl} = this.state
        axios.post('/api/product', {name, price, imgurl})
        .then(res => {
            this.setState({[name]: res.data})
        })
        .catch(err=> console.log('err', err))
            
    }
    
    
    render () {
        
        return(
            <div id='form-container'>
                <p>Image URL:</p>
                <input onChange={(e)=> {this.handleChange(e)}} name="imgurl" className='addData'></input>
                <p>Product Name:</p>
                <input onChange={(e)=> {this.handleChange(e)}} name="name" className='addData'></input>
                <p>Price:</p>
                <input onChange={(e)=> {this.handleChange(e)}} name="price" className='addData'></input>
                <div id='button-container'>
                <button className='buttons' onClick={this.cancelAdd}>Cancel</button>
                <button className='buttons' onClick={this.addProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    }

}
export default Form 