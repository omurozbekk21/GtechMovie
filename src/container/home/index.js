import React,{useEffect,useState} from 'react'
import {Grid,TextField} from '@mui/material'
import {SearchWrapper,TextClasses} from './styled';
import Cards from '../../components/Cards'
import axios from 'axios'


const Home=()=>{
    const api_key='b88d2c99815f98160d7e7d60aba9664f';
    const FEATURED_API =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;
    const [movies,setMovies]=useState([]);
    const [searchText,setSearchText]=useState('');

//const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key= b88d2c99815f98160d7e7d60aba9664f&query=';

    useEffect(()=>{
      axios.get(FEATURED_API)
       .then(response=> {
           console.log('response',response.data.results)
           setMovies(response.data.results)
       })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
     
    return(
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
        <SearchWrapper>
             <TextClasses as={TextField} InputLabelProps={{
               style: { color: '#121858' },
              }}
             id="outlined-basic" value={searchText} label="Search" variant="outlined"  onChange={event => { setSearchText(event.target.value)}}/>
          </SearchWrapper>
            {movies.length && movies.map((movie)=>
              <Grid item xs={2} key={movie.id}>
              <Cards  data={movie}/>
              </Grid>
            )}
            </Grid>
    )
}

export default Home
