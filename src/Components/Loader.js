import React from 'react';
import {ActivityIndicator} from 'react-native';
import Colors from '../Colors';

const Loader = () => {
  return <ActivityIndicator size="large" color={Colors.Blue} />;
};

export default Loader;