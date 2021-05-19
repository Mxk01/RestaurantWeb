import React, { Component } from 'react'
import formatCurrency from '../util.js'
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

// rcc for class based components
export default class Products extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            product:null
        }
    }
   
    openModal =  (product) => { 
      this.setState({product});
    }
    
     closeModal = (product) => {
         this.setState({product:null})
     }
      
    render() {
        const {product} = this.state; // we reintroduce him b/c we make the modal out of the  products ul ;
        return (
            <div>
                <Fade bottom cascade> 
                <ul className="products">
                    {/* Looping through the products */}
                    {this.props.products.map(product=>(
                      <li key={product._id}>
                          <div className="product"> 
                       {/* When clicking this a modal pops up  */}
                      <a href={`#${product._id}`} onClick={() => this.openModal(product)}>
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
                </Fade>
                {/* If  product exist show modal */}
                {/* We set is open to true when product exists */}
                { product && (
                <Modal isOpen onRequestClose={this.closeModal}>
                 <Zoom>
                     {/* So what happens is product will be null and this condition will no longer be satisfied 
                      meaning this will be null */}
                     <button className="close-modal" onClick={()=>{this.closeModal(product)}}>x</button>
                     <div className="product-details">
                         <img src={product.image} alt={product.title} />
                         <div className="product-details-description">
                             <p>
                                 <strong> {product.title}</strong>
                             </p>
                             <p> {product.description} </p>
                             <p>
                                 Available sizes : { "  "}
                                 {
                                     product.availableSizes.map((x)=> (
                                        <span>
                                        {" "}
                                         <button className="button">{x}</button>
                                         </span>
                                     ))
                                 }
                             </p>
                             <div className="product-price">
                              <div>{formatCurrency(product.price)}</div>
                               {/* on click close modal and add to cart product */}
                              <button className="button primary" onClick={()=>{
                                  this.props.addToCart(product)
                                  this.closeModal()}} 
                              >Add to cart</button>
                             </div>
                         </div>
                     </div>
                 </Zoom>
                </Modal>
                )}
            </div>
        )
    }
}
