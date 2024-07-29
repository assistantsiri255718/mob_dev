import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

const GettingStarted = ({ navigation }) => (
  <SafeAreaView style={styles.safeArea}>
    <ImageBackground
      source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/632c226bfa8a41f880774faf57cd1af9' }} // Replace with your actual image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Getting Started</Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GettingStarted;
