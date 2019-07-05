import React from 'react'


function Product (props) {
    const {name, price, imgurl} = props
    
        return(
            <div className='product-container'>
                <img src= {imgurl} alt='product'/>
                <div className = 'name-price-container'>
                    <h3>{name}Name</h3>
                    <h3>{price}Price</h3>

                </div>
            </div>
        )
    

}
export default Product