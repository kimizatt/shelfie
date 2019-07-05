import React from 'react'
import Product from '../Product/Product'
function Dashboard (props) {

    
        let productDisplay=props.productList.map(products => {
            return (
                <div>
                <div className="product-container">Product
                    < Product
                    key={props.id}
                    name={props.name}
                    price={props.price}
                    imgurl={props.imgurl} />
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                </div>
            )
        })
            return(
            <div className='dashboard-container'>
                <div>{productDisplay}</div>
            
            </div>
        )
    

}
export default Dashboard