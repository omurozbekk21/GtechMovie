import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  DetailWrapper,
  PosterWrapper,
  DetailInfo,
  CardImage,
  CardTitle,
  RatingInfo,
  Description,
  Genres,
  CarouselWrapper,
  BackButton
} from "./styled";
import { Rating,Typography,Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MovieDetail = () => {
  let { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const api_key = "b88d2c99815f98160d7e7d60aba9664f";
  const Movie_Url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${i18n.language}&append_to_response=credits`;
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const [movieDetail, setMovieDetail] = useState("");

  useEffect(() => {
    axios.get(Movie_Url).then((response) => {
      console.log("response.data", response.data);
      setMovieDetail(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goBack=()=>{
    navigate(`/`)
}
  return (
    <DetailWrapper>
      <PosterWrapper>
        <CardImage
          src={
            movieDetail?.poster_path
              ? IMG_API + movieDetail?.poster_path
              : "https://dummyimage.com/250x250/303030/eeeeee.png&text=Movie+Image+empty"
          }
          alt={movieDetail?.title}
        />
      </PosterWrapper>
      <DetailInfo>
      <BackButton as={Button} color="primary" onClick={goBack}><ArrowBackIosIcon/> {t("go_back")}</BackButton>
        <CardTitle>
          {movieDetail.title} ( {movieDetail.release_date} ){" "}
        </CardTitle>
        <Description>
        {movieDetail?.genres?.length && movieDetail?.genres?.map((item,index)=>
                  <Genres as={Typography} key={index}>
                   {item.name},
                  </Genres>
                )} 
        </Description>
        <RatingInfo
          as={Rating}
          name="read-only"
          value={movieDetail?.vote_average / 2}
          precision={0.5}
          readOnly
        />
        <CardTitle>{t("summary")} </CardTitle>
        <Description>
         {movieDetail?.overview}
        </Description>
        <CarouselWrapper as={Carousel}>
      {movieDetail?.credits?.cast?.length && movieDetail?.credits?.cast?.map((item,index)=>
                                  <div style={{ height: "200px",width:"500px",marginLeft:"350px" }} key={index}>
                                 <img    
                                 style={{ maxWidth: '100%',maxHeight: '100%',display: 'block'}}
                                 src={
                                    item?.profile_path
                                    ? IMG_API + item?.profile_path
                                    : "https://dummyimage.com/250x250/303030/eeeeee.png&text=Movie+Image+empty"
                                    }
                                      alt={movieDetail?.name}
                                     />
                                 <p className="legend">{item.name}/{item.character}</p>
                             </div>
                )} 
            </CarouselWrapper>
      </DetailInfo>
    </DetailWrapper>
  );
};

export default MovieDetail;
