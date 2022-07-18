import { StyleSheet, TextInput, Button, Text, View } from 'react-native'

export default function LoginForm(){
    return(
        <View>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password" secureTextEntry={true}/>
            <Button title="Send" onPress={()=>console.log('Send')}/>
        </View>        
    );
}