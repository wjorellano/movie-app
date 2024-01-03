import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import {GET} from '../Services/Api';
import {SliderBox} from 'react-native-image-slider-box';
import {IMAGE_POSTER_URL} from '../config';

const DiscoverMovies = (props) =>{
  
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

   useEffect(() => {
      const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results);


      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
      );

      let backImages = [];
      for (let i = 0; i < 10; ++i) {
        backImages = [...backImages, images[i]];
      }

      setImages(backImages);
    };

    getMovies();
  }, []);
   
   return(
    <View>
      <SliderBox
        images={images}
        loop
        autoplay
        // autoplayInterval={3000}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)"
        }}
        ImageComponentStyle={{borderRadius: 15}}
        imageLoadingColor="#2196F3"
        // onCurrentImagePressed={index =>
        //   props.navigation.push('movieDetails', {movieId: movies[index].id})
        // }
        sliderBoxHeight={250}
      />
    </View>
   )
}

export default DiscoverMovies;