import {View, StyleSheet, Text, Platform} from 'react-native';

const About = () => {
  return (
    <View style={styles.contactContainer}>
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Hello, About </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
  },
  contact: {
    flex: 1,
    padding: 5,
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  contactTitle: {
    textAlign: 'center',
  },
});

export default About;
