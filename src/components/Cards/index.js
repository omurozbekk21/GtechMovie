import { Rating,Button } from '@mui/material';
import React from 'react'
import {CardWrapper,ImgWrapper,CardAction,CardImage,CardTitle,CardDate,CardItems,CardInfo,CardButton} from './styled'
const Cards=({data})=>{
    const IMG_API = 'https://image.tmdb.org/t/p/w1280';
    return(
        <CardWrapper>
            <ImgWrapper >
            <CardImage src={IMG_API+data.poster_path} alt={data.title}/>
            </ImgWrapper>
            <CardAction>
            <CardTitle>
                {data.title}
            </CardTitle>
            <CardItems>
            <Rating name="read-only" value={(data.vote_average)/2} readOnly />
          
            </CardItems>
            <CardInfo>
            <CardDate>{data.release_date} </CardDate>
         <CardButton as={Button} variant="outlined" color="primary">Detail</CardButton>
            </CardInfo>


        </CardAction>
        </CardWrapper>
    )
}
export default Cards