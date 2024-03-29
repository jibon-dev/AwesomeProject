import React, {useContext} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes, screens} from './RouteItems';

/*==================================================================
                    Added stack-navigators
===================================================================*/
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import AboutStackNavigator from './stack-navigators/AboutStackNavigator';
import ContactStackNavigator from './stack-navigators/ContactStackNavigator';
import SearchStackNavigator from './stack-navigators/SearchStackNavigator';
import UserProfileStackNavigator from './stack-navigators/UserProfileStackNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = ({route}) => {
  const item = routes.find(routeItem => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{width: 0}} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({focused}) => item.icon(focused),
    tabBarLabel: ({focused}) => (
      <Text style={focused ? styles.tabBarLabel : styles.tabBarLabelTwo}>
        {item.title || ''}
      </Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  };
};

const BottomTabNavigator = ({route, navigation}) => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name={screens.HomeStack}
        component={HomeStackNavigator}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen name={screens.AboutStack} component={AboutStackNavigator} />
      <Tab.Screen
        name={screens.ContactStack}
        component={ContactStackNavigator}
      />
      <Tab.Screen name={screens.SearchStack} component={SearchStackNavigator} />
      <Tab.Screen
        name={screens.UserProfileStack}
        component={UserProfileStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#0C0C0C',
    fontSize: 12,
  },
  tabBarLabelTwo: {
    color: '#969696',
    fontSize: 12,
  },
  tabContainer: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 55,
    backgroundColor: '#FFF',
    paddingBottom: 4,
  },
});

export default BottomTabNavigator;
