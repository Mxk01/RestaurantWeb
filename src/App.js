// feature-1 branch 
import React,{Component} from 'react';
import data  from './data.json';
import Products from './components/Products.js';
class App  extends  Component{

  constructor()
  {
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:""

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
           <Products products={this.state.products}/>
         </div>
         {/* Showing cart items */}
         <div className="sidebar">
          Cart Items
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
