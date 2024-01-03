import React, { useState, useEffect } from 'react';
import { View,
         Image,
         TextInput,
         FlatList,
         Text,
         TouchableOpacity } from 'react-native';
import {POSTER_IMAGE} from '../config';
import {BASE_URL, API_KEY } from '../config';
import Styles from '../Styles';

const SearchMovie = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);


  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchMovies();
    }
  }, [searchQuery]);

  const renderMovieItem = ({ item }) => (
   <View style={Styles.searchContainer}>
      <TouchableOpacity
         onPress={() => {
         props.navigation.push('movieDetails', {movieId: item.id});
         }}>
         <Image
         source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
         style={Styles.posterImage}
         />
      <Text style={Styles.movieTitle}>{item.original_title}</Text>
      </TouchableOpacity>
   </View>
  );

  return (
    <View style={Styles.sectionBg}>
      <TextInput
        style={Styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={movies}
        renderItem={renderMovieItem}        
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SearchMovie;
