import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Moodrating from '../screens/Moodrating';
import Negthought from '../screens/Negthought';
import Posthought from '../screens/Posthought';
import Learning from '../screens/Learning';
import Results2 from '../screens/Results2';
import { theme } from '../constants';
import Strategies from '../screens/Strategies';
import Emergency from '../screens/Emergency';
import Act from '../screens/Act';
import Reward from '../screens/Reward';
import Results3 from '../screens/Results3';
const screens = createStackNavigator({
  Login,
  Reward,
  Results2,
  Results3,
  Home,
  Act,
  Emergency,
  Strategies,
  Posthought,
  Learning,
  Negthought,
  Moodrating,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 4,
      backgroundColor: theme.colors.primary, 

      borderBottomColor: "transparent",
      elevation: 0, // for android
    },
    headerBackImage: <Image source={require('../assets/icons/back1.png')} style={{width: 33}}/>,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base * 2,
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
  }
});

export default createAppContainer(screens);