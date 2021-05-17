import React, { Component } from 'react'
import formatCurrency from '../util.js'
// rcc for class based components
export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {/* Looping through the products */}
                    {this.props.products.map(product=>(
                      <li key={product._id}>
                          <div className="product"> 
                      <a href={`#${product._id}`}>
                          <img src={product.image} alt={'product image'}/>
                  
                      <p>
                          {product.title}
                      </p>
                      </a>
                      <div className="product-price">
                          <div>
                              {formatCurrency(product.price)}
                          </div>
                          <button  className="button primary " onClick={()=>{this.props.addToCart(product)}}>Add to cart</button>
                      </div>
                      </div>
                      </li>  
                    ))}
                </ul>
            </div>
        )
    }
}
