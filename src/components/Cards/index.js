import { Rating,Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React from 'react'
import {CardWrapper,ImgWrapper,CardAction,CardImage,CardTitle,CardDate,CardItems,CardInfo,CardButton} from './styled'
import { useTranslation } from 'react-i18next';


const Cards=({data})=>{
    const navigate = useNavigate();
    const IMG_API = 'https://image.tmdb.org/t/p/w1280';
    const {t} =useTranslation();
    
    const movieDetail=(id)=>{
        navigate(`/movie-detail/${id}`)
    }
     
    return(
        <CardWrapper>
            <ImgWrapper >
            <CardImage src={data?.poster_path? IMG_API+data?.poster_path 
                : 'https://dummyimage.com/250x250/303030/eeeeee.png&text=Movie+Image+empty'} alt={data?.title}/>
            </ImgWrapper>
            <CardAction>
            <CardTitle>
                {data?.title}
            </CardTitle>
            <CardItems>
            <Rating name="read-only" value={(data?.vote_average)/2} precision={0.5}  readOnly />
          
            </CardItems>
            <CardInfo>
            <CardDate>{data?.release_date} </CardDate>
         <CardButton as={Button} variant="outlined" color="primary"   onClick={() => movieDetail(data?.id)}>{t('detail')}</CardButton>
            </CardInfo>


        </CardAction>
        </CardWrapper>
    )
}
export default Cards