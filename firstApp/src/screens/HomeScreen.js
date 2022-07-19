import { SafeAreaView, Text, Button } from 'react-native'

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = (page) => {
    navigation.navigate(page);
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button onPress={() => goToPage('Settings') } title="Go to Settings"/>
    </SafeAreaView>
  )
}