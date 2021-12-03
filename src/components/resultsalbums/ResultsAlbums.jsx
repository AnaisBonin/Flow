// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Helmet } from 'react-helmet';
// import { Carousel } from 'react-responsive-carousel';

// import './ResultsAlbums.css';

// const ResultsAlbums = ({ artist, album }) => {
//   const [results, setResults] = useState([]);

//   useEffect(getAlbums, []);

//   const getAlbums = () => {
//     axios
//       .get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=7f8f8f5d046ed8eb2174ac55fadb58ae&format=json`)
//       .then(response => {
//         console.log(response.data.topalbums.album)
//         setResults(response.data.topalbums.album)
//       })
//   }

//   const filteredResults = [];

//   results.filter((album, index) => {
//     if (index < 10){
//       filteredResults.push(album)
//     }
//   })

//   return (
//     <main className='slider'>
//       <section className='sliderside'>
//         <Helmet>
//           <title>Albums</title>
//         </Helmet>
//         <div className='albumName'>
//           <h3>{artist}</h3>
//         </div>
//         <Carousel
//           autoPlay
//           interval={6000}
//           infiniteLoop
//           centerMode
//         >
//           {
//             filteredResults.slice(0, 9).map((slide) => (
//                <div key={slide.name}>
//                      <img
//                          className='imgslide'
//                          src={slide.image[3]['#text']}
//                          alt={`Couverture de l'album ${slide.name}`}
//                      />
//                </div>
//             )})
//         </Carousel>
//       </section>
//     </main>
//   )
// }

// export default ResultsAlbums;
