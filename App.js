import React, {createRef} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './src/navigation/DrawerNavigator';

// store reference to navigation object
const navigationRef = createRef();
const nav = () => navigationRef.current;

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#551E18" barStyle="light-content" />
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigator nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default App;

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// const App = () => {
//   return (
//     <View>
//       <Text>
//         App <Icon name="rocket" size={30} color="#900" />;
//       </Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
