import React,{useEffect,useState} from 'react'
import {Grid,TextField,InputLabel,MenuItem,FormControl,Select,CircularProgress,Stack} from '@mui/material'
import {SearchWrapper,TextClasses,SideSearch,PageName,Loading,InfiniteScrollWrapper} from './styled';
import Cards from '../../components/Cards'
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';


const Home=()=>{
    const api_key='b88d2c99815f98160d7e7d60aba9664f';
    const {t,i18n} =useTranslation();
    const [select, setSelect] = useState('popularity.desc');
    const [movies,setMovies]=useState([]);
    const [searchText,setSearchText]=useState('');
    const [timer, setTimer] = useState(null);
    const [loading,setLoading] = useState(false)
    const [page,setPage]=useState(1);
    const FEATURED_API =`https://api.themoviedb.org/3/discover/movie?sort_by=${select}&api_key=${api_key}&page=${page}&language=${i18n.language}`;
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${i18n.language}&query=`;




    useEffect(()=>{
       console.log('movies',movies)
    },[movies])
     
    useEffect(()=>{
      let api = FEATURED_API
      if(searchText && searchText!=='')
       api=api+`&query=${searchText}`

      axios.get(api).then(response=>{
        console.log('response',response.data.results)
        setMovies(response.data.results)
       })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{
      setPage(1);
      let api = FEATURED_API
      if(searchText && searchText!=='')
       api=api+`&query=${searchText}`
      axios.get(api).then(response=>{
        setMovies(response.data.results);
       })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[select]); 

    const filterData=[
      {name:`${t('popularity_asc',)}`,id:1,code:'popularity.asc'},
      {name:`${t('popularity_desc')}`,id:2,code:'popularity.desc'},
      {name:`${t('rating_asc')}`,id:3 ,code:'vote_average.asc'},
      {name:`${t('rating_desc')}`,id:4,code:'vote_average.desc'},
      {name:`${t('release_date_asc')}`,id:5,code:'release_date.asc'},
      {name:`${t('release_date_desc')}`,id:6,code:'release_date.desc'},
    ]
   const fetchNextPage=()=> {
      setPage(page+1) 
      let api = FEATURED_API
      if(searchText && searchText !=='')
      api=api+`&query=${searchText}`
      axios.get(api)
      .then((response) => {
        setMovies(oldArray => [...oldArray, ...response.data.results]);
      })
    }  

    const handleChange = (event) => {
      console.log('event',event.target.value)
      setSelect(event.target.value);     
    };
    const handleTextChange=(event)=>{

      setSearchText(event.target.value)
      clearTimeout(timer);
      const newTimer = setTimeout(async () => {
        setLoading(true)
        const keywords = event.target.value
        if (keywords && keywords !== '') {
          let api =SEARCH_API+event.target.value
          if(select && select !=='')
          api = api+ `&sort_by=${select}`

          try {
            const response = await axios.get(api)
            console.log('response',response.data.results)
            if (response?.data?.results.length > 0) {
               setMovies(response.data.results)
               setLoading(false)
            }
          } catch (error) {
            console.error(error);
          } finally {
            // ...
          }
        } else{
          axios.get(FEATURED_API)
          .then((response) => {
            setMovies(response.data.results);
            setLoading(false);
          })
        }
      }, 1000);
      setTimer(newTimer);
    }

    return(
        <div>
                { loading ? 
                 ( <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
                    <Loading as={Stack}  sx={{ color: 'orange' }} spacing={2} direction="row">
                       <CircularProgress color="inherit" />
                 </Loading>
                 </Grid> )
                 :
                 <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
                 <PageName >
              {t('popular_films')}
              </PageName>
            <SearchWrapper>
                 <TextClasses as={TextField} InputLabelProps={{
                   style: { color: '#121858' },
                  }}
                 id="outlined-basic" value={searchText} label={t('search')} variant="outlined"  onChange={ handleTextChange }/>
              <SideSearch>
                <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{t('result_sorting')}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label={t('result_sorting')}
              onChange={handleChange}
            >
              {filterData.length && filterData.map(({id,name,code})=>
               <MenuItem key={id} value={code}>{name}</MenuItem>
               )}
            </Select>
          </FormControl>
                </SideSearch>
              </SearchWrapper>

              { <InfiniteScrollWrapper as={InfiniteScroll} dataLength={movies.length} hasMore={true} 
                next = {fetchNextPage}      loader={<h4>Loading ... </h4>}>
                {movies.length && movies.map((movie,index)=>
                  <div key={index}>
                  <Cards  data={movie}/>
                  </div>
                )} 
                </InfiniteScrollWrapper>}
                </Grid>
                }
        </div>
       
    )
}

export default Home
