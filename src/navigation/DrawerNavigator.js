import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import {screens} from './RouteItems';
import {useDrawerStatus} from '@react-navigation/drawer';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;

  const isDrawerOpen = useDrawerStatus() === 'open';

  const [nestedDrawerItem, setNestedDrawerItem] = useState(false);
  const [categoryFocus, setCategoryFocus] = useState(false);

  // perfume
  const [nestedPerfumeDrawerItem, setNestedPerfumeDrawerItem] = useState(false);
  const [perfumeFocus, setPerfumeFocus] = useState(false);

  useEffect(() => {
    if (isDrawerOpen === false) {
      setNestedDrawerItem(false);
    }
  }, [isDrawerOpen]);

  // Nested Focus
  const nestedDrawerItemFUN = () => {
    if (nestedDrawerItem === true) {
      setNestedDrawerItem(false);
    } else {
      setNestedDrawerItem(true);
    }
  };

  // PerfumeDrawer ===========================
  const handlePerfumeNestedDrawerItem = () => {
    if (nestedPerfumeDrawerItem === true) {
      setNestedPerfumeDrawerItem(false);
    } else {
      setNestedPerfumeDrawerItem(true);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      {/*Home*/}
      <DrawerItem
        key="Home"
        label={() => (
          <View style={{flexDirection: 'row'}}>
            <AntDesign name="leftcircleo" size={20} color="#FFF" />
            <Text style={styles.headerTitle}>Application Name</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Home')}
        style={styles.drawerItem2}
      />

      {/*Start Category*/}
      <DrawerItem
        key="Category"
        label={() => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  categoryFocus
                    ? styles.drawerLabelFocused
                    : styles.drawerLabel,
                  {color: '#FFF'},
                ]}>
                Category
              </Text>
              {nestedDrawerItem === true ? (
                <AntDesign
                  name="minus"
                  size={24}
                  color={categoryFocus ? '#FFF' : '#FFF'}
                />
              ) : (
                <AntDesign
                  name="plus"
                  size={24}
                  color={categoryFocus ? '#FFF' : '#FFF'}
                />
              )}
            </View>
          </View>
        )}
        onPress={() => {
          setCategoryFocus(true);
          nestedDrawerItemFUN();
        }}
        style={categoryFocus ? styles.drawerItemFocused : styles.drawerItem}
      />

      <View style={styles.drawerNestedItemContainer}>
        {nestedDrawerItem && (
          <DrawerItem
            key="SubCategory"
            label={() => <Text style={styles.drawerLabel}>Sub 1</Text>}
            onPress={() => props.navigation.navigate('SearchStack')}
          />
        )}
        {nestedDrawerItem && (
          <DrawerItem
            key="SubCategory1"
            label={() => <Text style={styles.drawerLabel}>Sub 2</Text>}
            onPress={() => props.navigation.navigate('SearchStack')}
          />
        )}
      </View>
      {/*/End Category*/}

      {/*Start perfume*/}
      <DrawerItem
        key="perfume"
        label={() => (
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  perfumeFocus ? styles.drawerLabelFocused : styles.drawerLabel,
                  {color: '#FFF'},
                ]}>
                Perfume
              </Text>
              {nestedPerfumeDrawerItem === true ? (
                <AntDesign
                  name="minus"
                  size={24}
                  color={perfumeFocus ? '#FFF' : '#FFF'}
                />
              ) : (
                <AntDesign
                  name="plus"
                  size={24}
                  color={perfumeFocus ? '#FFF' : '#FFF'}
                />
              )}
            </View>
          </View>
        )}
        onPress={() => {
          setPerfumeFocus(true);
          handlePerfumeNestedDrawerItem();
        }}
        style={categoryFocus ? styles.drawerItemFocused : styles.drawerItem}
      />

      <View style={styles.drawerNestedItemContainer}>
        {nestedPerfumeDrawerItem && (
          <DrawerItem
            key="Man"
            label={() => <Text style={styles.drawerLabel}>Man</Text>}
            onPress={() => props.navigation.navigate('SearchStack')}
          />
        )}
        {nestedPerfumeDrawerItem && (
          <DrawerItem
            key="Woman"
            label={() => <Text style={styles.drawerLabel}>Woman</Text>}
            onPress={() => props.navigation.navigate('SearchStack')}
          />
        )}
      </View>
      {/*/End Category*/}

      {/*About Us*/}
      <DrawerItem
        key="About"
        label={() => <Text style={styles.drawerLabel2}>About Us</Text>}
        onPress={() => props.navigation.navigate('AboutStack')}
        style={styles.drawerItem2}
      />
      {/*Contact*/}
      <DrawerItem
        key="Contact"
        label={() => <Text style={styles.drawerLabel2}>Contact Us</Text>}
        onPress={() => props.navigation.navigate('ContactStack')}
        style={styles.drawerItem2}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({nav}) => {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {
          backgroundColor: '#551E18',
          ...Platform.select({
            ios: {
              height: 50,
            },
            android: {
              height: 50,
            },
          }),
        },
        headerLeft: () => (
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
        swipeEdgeWidth: 0,
        drawerStyle: {flex: 1, width: '70%', paddingRight: 10},
        headerShown: false,
      })}
      drawerContent={props => <CustomDrawerContent {...props} nav={nav} />}>
      <Drawer.Screen name={screens.HomeTab} component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  // Troggle
  headerLeft: {
    marginLeft: 10,
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

  headerTitle: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#FFF',
  },

  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
    width: '100%',
  },
  drawerLabel2: {
    fontSize: 14,
    width: '100%',
    color: '#FFF',
    backgroundColor: '#551E18',
  },
  drawerLabelFocused: {
    fontSize: 14,
    fontWeight: '500',
    width: '100%',
    color: '#FFF',
  },
  drawerItem: {
    height: 50,
    justifyCenter: 'center',
    backgroundColor: '#551E18',
    color: '#FFF',
  },
  drawerItem2: {
    backgroundColor: '#551E18',
    color: '#FFF',
  },

  drawerItemFocused: {
    backgroundColor: '#551E18',
    color: '#FFF',
  },
  white: {
    color: 'white',
  },
  drawerNestedItemContainer: {
    marginLeft: 20,
  },
  touchableButton: {
    borderRadius: 50,
    backgroundColor: '#551E18',
    overflow: 'hidden',
  },
});

export default DrawerNavigator;
