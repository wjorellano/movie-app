import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE_POSTER_URL} from '../config';
import {GET} from '../Services/Api'
import Styles from '../Styles';
import Loader from '../Components/Loader';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../Colors';
import TrendingMovies from '../Components/TrendingMovies';
import TrendingPeople from '../Components/TrendingPeople';

const MovieDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await GET(`/movie/${props.route.params.movieId}`);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  const getGenre = () => {
    return details.genres.map(genre => (
      <View key={genre.id} style={Styles.genreContainer}>
        <Text style={Styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={Styles.sectionBg}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View>
            <Image
              source={{uri: `${IMAGE_POSTER_URL}${details.backdrop_path}`}}
              style={Styles.imageBg}
            />
          </View>
          <Text style={Styles.detailsMovieTitle}>{details.original_title}</Text>
          {details.homepage ? (
            <View style={Styles.linkContainer}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(details.homepage);
                }}>
                <Icon name="link" color={Colors.textColor} size={22} />
              </TouchableOpacity>
            </View>
          ) : null}

          <Text style={Styles.heading}>Description</Text>
          <Text style={Styles.overview}>{details.overview}</Text>

          <View style={Styles.detailsContainer}>
            <View>
              <Text style={Styles.heading}>Votes</Text>
              <Text style={Styles.details}> {details.vote_count}</Text>
            </View>
            <View>
              <Text style={Styles.heading}>Vote average</Text>
              <Text style={Styles.details}> {details.vote_average}</Text>
            </View>
            <View>
              <Text style={Styles.heading}>Duration</Text>
              <Text style={Styles.details}>{details.runtime} min.</Text>
            </View>

            <View>
              <Text style={Styles.heading}>Release Date</Text>
              <Text style={Styles.details}>{details.release_date}</Text>
            </View>
          </View>

          <Text style={Styles.heading}>Genre</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            {getGenre()}
          </View>

          <TrendingPeople
            title="Casting"
            url={`/movie/${props.route.params.movieId}/credits`}
            isForPage="details"
          />

          <TrendingMovies
            title="Similar Movies"
            navigation={props.navigation}
            url={`/movie/${props.route.params.movieId}/similar`}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetails;