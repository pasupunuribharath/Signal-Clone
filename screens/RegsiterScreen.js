import React from 'react'
import { View,StyleSheet } from 'react-native'
import {KeyboardAvoidingView} from 'react-native'
import {StatusBar}  from "expo-status-bar"
import { useState } from 'react'
import { Button,Input,Text } from 'react-native-elements'
import { useLayoutEffect } from 'react'

const RegsiterScreen = ({navigation}) => {

    const [name,setName]=useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [imageUrl,setImageUrl]=useState("");

    useLayoutEffect(()=>{
        navigation.setOptions({
           headerBackTitle:"Back to Login",
        })
    },[navigation]);


   const register=() =>{
       
   }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style='light'/>
            <Text h3 style={{marginBottom:50}}>
                Creat a Signal account</Text>
                <View style={styles.inputContainer}>

                    <Input placeholder="Full name" autofocus type="text" value={name}
                      onChangeText={(text)=> setName(text)}/>

                    <Input placeholder="Email"  type="email" value={email}
                      onChangeText={(text)=> setEmail(text)}/>

                    <Input placeholder="Password" secureTextEntry type="password" value={password}
                      onChangeText={(text)=> setPassword(text)}/>

                    <Input placeholder="Profile Picture URL (optional)"  type="text" value={imageUrl}
                      onChangeText={(text)=> setImageUrl(text)}
                      onSubmitEditing={register}
                      
                      />
                          

                </View>

                <Button
                style= {styles.button} 
                raised title="Register" 
                onPress={register}/>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        padding: 10,
        backgroundColor:"white"
    },
    inputContainer:{
        width:300,
    },
    button:{
        marginTop: 10,
        width:200,
    },
});
export default RegsiterScreen
