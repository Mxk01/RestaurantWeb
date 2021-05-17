import React, { Component } from 'react'
import formatCurrency from '../util.js'

export default class Cart extends Component {
     
    render() {
        let {cartItems} = this.props; // getting cartItems array from this.props
        console.log(cartItems.length);
        return (
            <div>
            {cartItems.length === 0 ? (
              <div className="cart cart-header">Cart is empty</div>
            ) : (
              <div className="cart cart-header">
                You have {cartItems.length} products in the cart{" "}
              </div>
            )}

            <div>
                <div className="cart">
                    <ul className="cart-items">
                        {/*Loop through cart items */}
                        {cartItems.map((item)=>(
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <div>{item.title} </div>
                                    <div className="right">
                                     {formatCurrency(item.price)} x {item.count}   {" "}
                                    <button className="button" onClick={ () => this.props.removeFromCart(item)}>Remove</button>
                                    </div>
                                    
                                </div>
                                 
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Displaying total number and proceed button only when there are items in the cart */ }
                {cartItems.length!==0  &&  (
                <div className="cart">
                    <div className="total">
                        <div> 
                        {/* a is accumulator 
                         /* c.price is price of product */ 
                         /* c.count is the amount of that item E.g  3 pairs of shoes 
                         
                         So  c.price*c.count  =  3*15  = 45  assuming a pair costs 15 dollars 
                          
                         This accumulator calculates the total price for current item (like above 45) then add it to the next item
                         Second parameter is 0 so things get added to 0 
                        */ }
                       Total price: {formatCurrency(cartItems.reduce((a,c)=>  a+ (c.price*c.count) ,0))}
                       </div> 
                       <button className="button primary">Proceed</button>
                    </div>
                    
                </div>)}
            </div>
            </div>
        )
    }
    
}
