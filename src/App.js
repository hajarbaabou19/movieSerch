// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import {Component} from 'react';
// import './App.css';
// import axios from 'axios';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     }
//   }


//   getData = async (e) => {
//     console.log(e.target.value)
//     const resp = await axios.get(`https://dummyjson.com/products/search?q=${e.target.value}`)
//     this.setState({
//       data: resp.data.products
//     })
//     console.log(resp.data.products)
//   }



//   render() {
//     return <div >

//       <div className='search'>
//         <input type='text' placeholder='Search product' onKeyUp={this.getData} />
//       </div>

//       <div className='container'>
//           {
//           this.state.data.map((product) => {
//             return <div className='product' key={product.id}  >
//               <div className='img'>
//                 <img src={product.images[0]} />
//               </div>
              
//               <h5>{product.title}</h5>
//             </div>
//           })

//           }
//       </div>
 
//     </div>
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//       filteredData: [],
//     };
//   }

//   filterProducts = (text) => {
//     const filteredProducts = this.state.data.filter((product) =>
//       product.title.toLowerCase().includes(text.toLowerCase())
//     );
//     this.setState({ filteredData: filteredProducts });
//   };

//   getData = async (e) => {
//     const searchText = e.target.value;
//     console.log(searchText);
//     const resp = await axios.get(`https://dummyjson.com/products/search?q=${searchText}`);
//     this.setState({
//       data: resp.data.products,
//     });
//     this.filterProducts(searchText);
//     console.log(resp.data.products);
//   };

  
//   deleteProduct = async (productId) => {
//     try {
//       await axios.delete(`https://dummyjson.com/products/${productId}`);
//       const updatedProducts = this.state.data.filter((product) => product.id !== productId);
//       this.setState({ data: updatedProducts });
//       this.filterProducts(""); 
//     } catch (error) {
//       console.error('Erreur lors de la suppression du produit:', error);
//     }
//   };

//   render() {
//     const productsToDisplay = this.state.filteredData.length
//       ? this.state.filteredData
//       : this.state.data;

//     return (
//       <div>
//         <div className='search'>
//           <input type='text' placeholder='Search product' onKeyUp={this.getData} />
//         </div>
//         <div className='container'>
//           {productsToDisplay.map((product) => (
//             <div className='product' key={product.id}>
//               <div className='img'>
//                 <img src={product.images[0]} alt={product.title} />
//               </div>
//               <h5>{product.title}</h5>
//               <button onClick={() => this.deleteProduct(product.id)}>Supprimer</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// q1:
// import React, { useState } from "react";

// const Personne = () => {
//   const [age, setAge] = useState(0);

//   const incrimente = () => {
//     if (age < 50) {
//       setAge(age + 1);
//     }
//   };

//   return (
//     <div>
//       <p>{age}</p>
//       <button onClick={incrimente}>Incrémenter</button>
//     </div>
//   );
// };

// export default Personne;

//tail" en utilisant l'api de detail /post/id  3/ ajouter la possibiliter de filtrer les posafficher la liste des post 2/afficher le detail de chaque post en cliquant sur le button "det  


// import React, { useState, useEffect } from 'react';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data => setPosts(data));
//   }, []);

//   return (
//     <div>
//       <h2>List of Posts</h2>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <a href={`https://jsonplaceholder.org/posts/`}>{post.title}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList;


import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MoviesSearch from './MoviesSerch';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies-search">Movies Search</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies-search" element={<MoviesSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to the Movie App!</h2>
    </div>
  );
}

export default App;








