import { StatusBar } from 'expo-status-bar';
import * as React from "react"
import {gql, useMutation} from '@apollo/client'
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCredential, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult} from 'firebase/auth'
import {useNavigation} from '@react-navigation/native'
const {width,height} = Dimensions.get("window")

const mutationUsers = gql`
mutation nuevoUsuario($input: UsuarioInput){
  nuevoUsuario(input: $input){
        id
        name
        email
        role
        img
        created_at
    }
}
`;

export function LoginScreen(){

  const auth = getAuth();

    const [ nuevoUsuario ] = useMutation(mutationUsers)
  
    const [email, setEmail] = React.useState('');
    const [Name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    type Nav = {
      navigate: (value: string) => void;
    }
    const navigation = useNavigation<Nav>()
  
    const handleCreateAccount =  () => {
      createUserWithEmailAndPassword(auth,email,password)
      .then ( async (userCredential) =>{
        console.log('Account created!')
        const user = userCredential.user
        console.log(user)
  
        try{
          const dataRes= await nuevoUsuario({
            variables:{
              input:{
                googleId:user.uid,
                name:Name,
                email:user.email,
                google:"false"
              }
            }
          })
          console.log(dataRes)
        }catch(error){
          console.log(error)
        }

        navigation.navigate('Home')
      })
      .catch(error=>{
        console.log(error)
        Alert.alert(error.message)
      })
    }
  
    const handleSignIn = () => {
      console.log(email)
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        console.log(auth.currentUser)
        console.log('Signed in!')
        const user = userCredential.user
        console.log(user)
        navigation.navigate('Home')
      })
      .catch(error=>{
        console.log(error)
        Alert.alert(error.message)
      })
    }
    return (
      <View style={styles.mainContainer}>
        
        <View style={styles.containerImg}>
        
        
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>
  
          <TextInput onChangeText={(text)=>setName(text)} style={styles.textInput} placeholder='Name'/>
  
          <TextInput onChangeText={(text)=>setEmail(text)} style={styles.textInput} placeholder='example@gmail.com'/>
  
          <TextInput onChangeText={(text)=>setPassword(text)} style={styles.textInput} secureTextEntry={true} placeholder='********'/>
  
          <Text style={styles.forgot}>Forgot your password?</Text>
          
          <TouchableOpacity onPress={handleSignIn} style={styles.containerButton}>
          <LinearGradient
            // Button Linear Gradient
            colors={['#FFB677', '#FF3CBD']}
            start={{x:0, y:0}}
            end={{x:1, y:1}}
            style={styles.button}
            >
            <Text style={styles.text}>SIGN IN</Text>
          </LinearGradient>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={handleCreateAccount} style={styles.containerButton}>
          <LinearGradient
            // Button Linear Gradient
            colors={['#FFB677', '#FF3CBD']}
            start={{x:0, y:0}}
            end={{x:1, y:1}}
            style={styles.button}
            >
            <Text style={styles.text}>Create Account</Text>
          </LinearGradient>
          </TouchableOpacity>
  
          
  
          
  
  
          <Text style={styles.forgot}>Don't have an account?</Text>
          
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    containerButton:{
      
      alignItems:"center",
      width:200,
      marginTop:60
    },
    mainContainer:{
      backgroundColor: '#f1f1f1',
      flex:1,
    },
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    containerImg:{
      width:width,
      justifyContent:"flex-start",
      alignItems:'center'
    },
    title:{
      fontSize:80,
      color:'#34434D',
      fontWeight:'bold',
    },
    subtitle:{
      fontSize:22,
      color:'gray'
    },
    forgot:{
      fontSize:14,
      color:'gray',
      marginTop:10
    },
    textInput:{
      borderWidth:1,
      borderColor:'gray',
      padding:10,
      paddingStart:30,
      width:'80%',
      height:50,
      marginTop:20,
      borderRadius:30,
    },
    button:{
      width:"80%",
      height:50,
      borderRadius:25,
      padding:10,
      alignItems:'center',
      justifyContent:'center'
    },
    background:{
  
    },
    text:{
      fontSize:14,
      color:"#fff",
      fontWeight:"bold"
    },
    tinyLogo:{
      width: width,
      height: 100,
    }
  });
