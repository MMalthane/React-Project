var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/Search.jsx');
var Result = require('./components/Result.jsx');
var products = require('./products.js')



  
ReactDOM.render(<Search  products={products} />, document.getElementById('app'));