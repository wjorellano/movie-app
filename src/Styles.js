import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
   sectionBg:{
      backgroundColor: Colors.baseColor,
      height: deviceHeight,
   },
   trendingPeopleImage: {
      height: 70,
      width: 70,
      borderRadius: 500,
      borderWidth: 2,
      borderColor: Colors.Blue,
   },
   trendingPeopleName: {
      width: 60,
      color: Colors.textColor,
      fontSize: 12,
      textAlign: 'center',
      marginTop: 10,
   },
   trendingPeopleContainer: {
      margin: 10,
   },
   heading: {
      fontSize: 19,
      color: Colors.fadedColor,
      margin: 10,
   },
   posterImage: {
      height: 250,
      width: 150,
      borderRadius: 10,
   },
   movieTitle: {
      color: Colors.textColor,
      width: 150,
      textAlign: 'center',
      marginTop: 5,
      fontSize: 16,
   },
   imageBg: {
      width: deviceWidth,
      height: 250,
      borderRadius: 5,
   },
   detailsMovieTitle: {
      fontSize: 28,
      color: Colors.textColor,
      textAlign: 'center',
      marginTop: -40,
   },
   linkContainer: {
      backgroundColor: Colors.secondaryColor,
      borderRadius: 100,
      padding: 10,
      width: 45,
      marginLeft: 20,
      marginTop: -20,
   },
   overview: {
      color: Colors.textColor,
      marginHorizontal: 10,
      textAlign: 'justify',
      fontSize: 16,
   },
   details: {
      color: "#2196F3",
      fontSize: 15,
      marginLeft: 10,
      fontWeight: 'bold',
   },
   detailsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20,
   },
   genreContainer: {
      borderWidth: 1,
      borderRadius: 20,
      borderColor: Colors.textColor,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginHorizontal: 10,
   },
   genre: {
      color: Colors.textColor,
      fontSize: 16,
   },
   input:{
      backgroundColor: "white",
      borderRadius:5,
      paddingHorizontal:2,
      paddingVertical:4,
      width:"95%",
      marginTop:20,
      margin:10,
   },
   searchContainer: {
      marginTop: 15,
      padding: 10,
      alignItems: 'center',
   },
});

export default Styles;