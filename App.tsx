/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import 'react-native-gesture-handler'
import React from "react";
import { Platform, StyleSheet } from "react-native";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from "react-native-splash-screen";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      android: Platform.OS === 'android' ? '#ff0000' : DefaultTheme.colors.primary,
      ios: Platform.OS === 'ios' ? '#0000ff' : DefaultTheme.colors.primary,
    },
  };
  React.useEffect(() => {
    setTimeout(() => {SplashScreen.hide()}, 1000)
  }, []);
  
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <MainStackNavigator/>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
