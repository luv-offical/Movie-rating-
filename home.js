import React, { useEffect, useState } from "react";

 import "react-responsive-carousel/lib/styles/carousel.min.css";
 import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

 const Home = () =>{
    const [  popularMovies, setpopularMovies ] = useState([])

    useEffect(() => {
         fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setpopularMovies(data.results))

    }, )
    return(
        <>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}>
                {
                      popularMovies.map(movie => (
                        <Link style={{textDecoration: "none",color: "white"}} to={`/movie/${movie.id}`} >
                        <div style={{height:'340px'}}>
                       <img style={{margin:'auto', display:'block',width:'100%'}} src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}` } alt="props"/>
                       </div>
                       <div style={{marginBottom:'40px'}}>
                        <div style={{fontSize:'70px',fontWeight:'bolde', }}>{movie ?  movie.original_title : ""}</div>
                        <div style={{display:'inline',padding:'5rem',height:'70%', flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start',opacity:'1'
                ,transition:'opacity . 3s', }}>

                            {movie ? movie.release_date : ""}
                            <span style={{color:'blue', marginLeft:'1rem',fontSize:"2rem"}}>
                            {movie ? movie.vote_average : ""}
                            <i className="fas fa-star" />{" "}
                            </span>
                        </div>
                        <div style={{fontWeight:'100px', fontSize:'20px', fontStyle:'italic'}}>{movie ? movie.overview : ""}</div>
    
                       </div>
                          </Link>
                    ))
                }
            </Carousel>
        </div>
 
        </>
    )
 }

 export default Home ;