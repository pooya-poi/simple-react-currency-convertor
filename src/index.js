import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';
import Currency from './Currency'

// function Test() {
//   const [movieRating, setMovieRating]=useState(0)
//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} />
//       <p>This movie rated {movieRating} stars.</p>
//     </div>)
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Currency />
    {/* <StarRating maxRating={5} message={['Terrible', 'Bad', 'Ok', 'Good', "Amazing"]} defaultRating={3} /> */}
    {/* <StarRating maxRating={15} color='#85e89d' size={30} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

