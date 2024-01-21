import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  // const headerShow = (route) => {
  //     if (route === 'Welcome') {
  //         return false
  //     } else {
  //         return true
  //     }
  // };

  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        // headerShown: headerShow(route.name),
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#551E18',
          height: 50,
        },
        headerLeft: () =>
          route.name === 'Home' ? (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.headerLeft}>
              <FontAwesome
                name="bars"
                size={25}
                color="#fff"
                style={{padding: 5}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.headerLeft}>
              <FontAwesome
                name="bars"
                size={25}
                color="#fff"
                style={{padding: 5}}
              />
            </TouchableOpacity>
          ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <View style={styles.headerContent}>
              <Text style={styles.headerSearchIcon}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SearchStack')}
                  style={styles.touchableButton}>
                  <FontAwesome name="search" size={20} color="#fff" />
                </TouchableOpacity>
              </Text>
              <Text style={styles.headerSearchIcon}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserProfileStack')}
                  style={styles.touchableButton}>
                  <FontAwesome name="user" size={20} color="#fff" />
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        ),
      })}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   title: (
        //     <View>
        //       {/*<Image source={require('../../assets/adaptive-icon.png')} style={styles.headerImage}/>*/}
        //       <Text style={styles.mainHeaderTitle}>Application Name</Text>
        //     </View>,
        //   }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  // Troggle
  headerLeft: {
    marginLeft: 10,
  },
  // User Icon & Search
  headerRight: {
    marginRight: 15,
  },
  headerContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerSearchIcon: {
    marginLeft: 20,
  },
  headerUserIcon: {
    marginLeft: 20,
  },
  touchableButton: {
    backgroundColor: '#551E18',
    overflow: 'hidden',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    padding: 3,
    borderRadius: 50,
  },
  headerImage: {
    ...Platform.select({
      ios: {
        width: 150,
        height: 20,
      },
      android: {
        width: 150,
        height: 20,
      },
    }),
  },
  mainHeaderTitle: {
    fontWeight: 'bold',
    marginLeft: 70,
    color: '#FFF',
  },
});

export default HomeStackNavigator;
