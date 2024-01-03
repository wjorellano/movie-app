import React from 'react';
import { View } from 'react-native';
import DiscoverMovies from '../Components/DiscoverMovies';
import TrendingPeople from '../Components/TrendingPeople';
import TrendingMovies from '../Components/TrendingMovies';
import Styles from "../Styles"

const Home = (props)=>{
   return(
      <View style={Styles.sectionBg}>
         <DiscoverMovies/>
         <TrendingPeople 
            title="Trending People"
            url="/trending/person/week"
         />
         <TrendingMovies
            title="Trending Movies"
            url="/movie/top_rated"
            navigation={props.navigation}  
         />
      </View>
   )
}

export default Home;