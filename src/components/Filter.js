import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    Order {"  "}
                     {/* this.props.filterProducts is a method from the App.js class component */}
                     {/* we passed it to props so we can use it now */}
                    <select value={this.props.filter}  onChange={(e)=>{this.props.filterProducts(this.props.products,e.target.value)}}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter {"  "}
                    <select value={this.props.size} onChange={(e)=>{ this.props.sortProducts(this.props.products,e.target.value)}} >
                        <option value="">All</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
             
                    </select>
                </div>
            </div>
        )
    }
}
