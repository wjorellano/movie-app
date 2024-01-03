import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/Screens/Home';
import MovieDetails from './src/Screens/MovieDetails';
import Colors from './src/Colors'
import SearchMovie from './src/Screens/SearchMovie';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={headerStyle} />
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={headerStyle}
        />
        <Stack.Screen
          name='Search'
          component={SearchMovie}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title: 'Movie App',
  headerStyle: {backgroundColor: Colors.baseColor},
  headerTitleStyle: {color: Colors.textColor},
  headerRight: () => {
    const navigation = useNavigation();

    const goToSearch = () => {
      navigation.navigate('Search');
    };

    return (
      <Icon name="search" size={25} color={Colors.textColor} onPress={goToSearch} />
    );
  },
}

