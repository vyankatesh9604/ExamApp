// import React from 'react'
// import { 
//     View, 
//     Text, 
//     TouchableOpacity, 
//     StyleSheet ,
//     TextInput,
//     StatusBar,
//     Alert
// } from 'react-native';
// import {useTheme} from '@react-navigation/native'
// import Ion from 'react-native-vector-icons/Ionicons';


//  export default function ProfileScreen() {
//   const {colors} =useTheme()
//   const theme =useTheme()
//     return (
//       <View style={styles.container}>
                
//                 <View style={styles.header}>
//                     <Text style={styles.text_header}>Profile</Text>
//                 </View>
//                 <View  style={styles.footer}>
//                   <Text  style={styles.text_footer}>Name</Text>
//                   <View style={styles.action}>
//                                 <Ion 
//                                     name="md-person"
//                                     color="#05375a"
//                                     size={20}
//                                 />
//                                 <TextInput 
//                                     placeholder="Your Full Name"
//                                     placeholderTextColor="#000"
//                                     textAlign="center"
//                                     style={styles.textInput}
//                                     color="#000"
//                                     borderBottomColor="#fff"
//                                     pointerEvents="box-none"
                                   
                          
            
//                                 />
//                   </View>
//                 </View>
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     backgroundColor:'#CBC3E3'
//   },
//   header: {
//       flex: 1,
//       justifyContent: 'flex-end',
//       paddingHorizontal: 20,
//       paddingBottom: 50
//   },
//   footer: {
//       flex: 2,
//       backgroundColor: '#fff',
//       borderTopLeftRadius: 30,
//       borderTopRightRadius: 30,
//       paddingHorizontal: 20,
//       paddingVertical: 30
//   },
//   text_header: {
//       color: '#fff',
//       fontWeight: 'bold',
//       fontSize: 30,
//       textAlign:'center',
//       marginBottom:30
//   },
//   text_footer: {
//       color: '#05375a',
//       fontSize: 18
//   },
 
//   textInput: {
//       flex: 1,
//       marginTop: Platform.OS === 'ios' ? 0 : -12,
//       paddingLeft: 10,
      
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5
// },
  
// });


import React from 'react'

import { 
        View, 
        Text,
        StyleSheet ,
        TextInput,
        Dimensions,
        TouchableOpacity
    } from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Fontisto';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-paper'

const {height} = Dimensions.get("window")
export default function ProfileScreen() {
    return (
     <View style={styles.container}>
         <View style={styles.header}>
         <Avatar.Icon  style={styles.text_header} size={100} icon="account" />
         </View>
         <Animatable.View 

            animation="fadeInUpBig" style={styles.footer}>
            <View style={{ ...StyleSheet.absoluteFillObject,backgroundColor:'#CBC3E3'}}/>
            <View style={{flex:1,backgroundColor:"white",borderTopLeftRadius:75}}>

                <Text  style={styles.text_footer}>Name</Text>
                <View style={styles.action}>
                    <Ion 
                        style={{marginTop:'5%',marginLeft:'3%'}}
                         name="md-person"
                         color="#05375a"
                        size={20}
                    />
                    <TextInput 
                                    placeholder="Your Full Name"
                                    placeholderTextColor="#000"
                                     textAlign="center"
                                     style={styles.textInput}
                                     color="#000"
                                     borderBottomColor="#fff"
                                     pointerEvents="box-none"
                                   
                          
            
                     />
                </View>
                <Text  style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <Icon 
                        style={{marginTop:'5%',marginLeft:'3%'}}
                        name="email"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                                    placeholder="Your Email"
                                    placeholderTextColor="#000"
                                     textAlign="center"
                                     style={styles.textInput}
                                     color="#000"
                                     borderBottomColor="#fff"

                                   
                          
            
                     />
                </View>
                <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} >
                    <LinearGradient
                                                colors={['#694fad','#694fad']}
                                                style={styles.signIn}
                                            >
                                            <Text style={styles.textSign,{
                                                    color:'#fff'
                                            }}>Update Profile</Text>

                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </View>
         </Animatable.View>
     </View>  
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        height:0.32*height,
        backgroundColor:'#CBC3E3',
        borderBottomRightRadius:75
    },
    footer:{
        flex:1,
    },
    text_header: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30,
              textAlign:'center',
              marginTop:'20%',
              marginLeft:'38%',
              backgroundColor:'#000080'
          },
    text_footer: {
                color: 'black',
                fontSize: 18,
                marginLeft:'5%',
                marginTop:'10%',
                textAlign:'center'
    },
    action: {
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f2f2f2',
            paddingBottom: 5
    },
    textInput: {
              flex: 1,
              marginTop: Platform.OS === 'ios' ? 0 : -12,
              paddingLeft: 10,
              marginTop:'1%'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    button: {
        alignItems: 'center',
        marginTop: 80
    },

})