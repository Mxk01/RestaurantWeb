// feature-1 branch 
import React,{Component} from 'react';
import data  from './data.json';
import Products from './components/Products.js';
import Filter from './components/Filter.js';
import Cart from './components/Cart.js'
class App  extends  Component{

  constructor(props)
  {
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:"",
      cartItems:[]

    }
  }
   
  removeFromCart = (product) => {
  const cartItems = this.state.cartItems.slice();
   // Filtering item who has id different than clicked item
    
    this.setState({cartItems: cartItems.filter(x=> x._id !== product._id )})
  }
  addToCart = (product) =>  
  {
    let alreadyInCart = false;
     let cartItems = this.state.cartItems.slice(); // empty array which holds all cart items
     cartItems.forEach((item)=>{
       
       // checking if item already exists
      if(item._id===product._id)
       {
         item.count++;  //  update number of items 
         alreadyInCart = true; // if product already exists in cart set it to true 
       }
     })
     

     // at first item._id won't exist (empty array)
     // the second if will run;
     // then the product clicked will have its contents taken and pushed in an array;
     // checking if product isn't in the cart
     if(!alreadyInCart)
     {
        cartItems.push({...product,count:1})
     }

     this.setState({ cartItems });

  }

    filterProducts = (products,filter) => 
    {
       
     this.setState((state) => ({
      filter,
      products: this.state.products
        .slice()
        // ascending order  a's price is higher than b 
        // descending order b'price is higher than a 
        .sort((a, b) =>
        filter === "lowest" ? a.price > b.price ? 1 : -1  : filter === "highest"
        ? a.price < b.price ? 1 : -1 
        /*  greater id image appears first */
        : a._id < b._id ? 1 : -1
        ),
    }));
    }

    sortProducts  = (products,size) => 
    {

      console.log(size);

     if(size==='')
     {
      this.setState({ size:size,products:data.products })
     }
     else {
     this.setState({
       size,
       /* Checking if the size exists in available sizes 
          then getting all items with that size 
       */
       products:data.products.filter(product=>product.availableSizes.indexOf(size)>=0)
     })
    }


    }
  
  render () {
  return (
   <div className="grid-container">
     <header>
       <a href="/">Shopping Cart </a>
     </header>

     <main>
       <div className="content">
         {/* Showing products */}
         <div className="main">
           <Filter 
           count={this.state.products.length}
           size={this.state.size} 
           sort={this.state.sort}
           filterProducts={this.filterProducts}
           sortProducts={this.sortProducts}
           />

           <Products 
           products={this.state.products} 
           addToCart={this.addToCart}
            
           />
         </div>
         {/* Showing cart items */}
         <div className="sidebar">
           {/* Number of items in cart */}
          <Cart cartItems={this.state.cartItems}  removeFromCart={this.removeFromCart}/>
         </div>
       </div>

     </main>

     <footer>
        All Rights Reserved 
     </footer>
   </div>
  );
  }
}

export default App;
