import { StyleSheet, Text, View } from 'react-native'
//import LoginForm from './src/components/LoginForm'
//import Saludar from './src/components/Saludar'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStack from './src/navigation/NavigationStack'
import NavigationTab from './src/navigation/NavigationTab'


export default function App() {
  return (
    <NavigationContainer>
      {/*<NavigationStack />*/}
      <NavigationTab />
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
