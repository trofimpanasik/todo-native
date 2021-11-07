import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Children from './components/index'

const App:React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Children/>
      </ScrollView>
      <StatusBar backgroundColor='#282C34' bar-style={'dark-content'}></StatusBar>
    </SafeAreaView>
  );
}

export default App;