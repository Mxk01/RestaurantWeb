import React, { Component } from 'react'
import formatCurrency from '../util.js'
import Fade from 'react-reveal/Fade';
export default class Cart extends Component {
     constructor (props)
     {
        super(props)
        this.state = {
            // name , email and password are set by default to false
            name:'',
            email:'',
            password:'',
            showCheckout:false
        }
    
     }
     
     handleInput = (e) => {
        // state is set like this for example 
        //  e.target.name =  "email" 
        //  e.target.value = "abc@def.com"
        // this.setState({"email":"abc@def.com"})
        this.setState({[e.target.name]:e.target.value})
     }


     // Function that runs when submit button is pressed
     createOrder = (e) => {
        // preventing form from refreshing page 
        e.preventDefault();
          // then making an object called order with data from input 
         const order = { 
             name: this.state.name, 
             email: this.state.email, 
             address: this.state.address, 
             cartItems: this.props.cartItems, // all items in the cart 
         }
         // This createOrder is coming from App.js 
         this.props.createOrder(order);
     }
    render() {
        let {cartItems} = this.props; // getting cartItems array from this.props
        console.log(this.state.showCheckout);
        return (
            <div>
                {/* Checking if the cart is empty.Using conditional rendering to show it is empty 
                  or it has n products in the cart */}
            {cartItems.length === 0 ? (
              <div className="cart cart-header">Cart is empty</div>
            ) : (
              <div className="cart cart-header">
                You have {cartItems.length} products in the cart{" "}
              </div>
            )}

            <div>
                <div className="cart">
                  <Fade left cascade>
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
                    </Fade>
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
                       <button className="button primary" onClick={()=>{ this.setState({showCheckout:true})}}>Proceed</button>
                    </div>
                    {
                         
                    !this.state.showCheckout && (
                      <Fade right cascade>
                    <div className="cart">
                  <form onSubmit={this.createOrder}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
                </Fade>
              )
              }
                </div>
                
                )}
            </div>
            </div>
        )
    }
    
}
