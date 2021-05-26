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


// import React from 'react'

// import { 
//         View, 
//         Text,
//         StyleSheet ,
//         TextInput,
//         Dimensions,
//         TouchableOpacity
//     } from 'react-native';
// import Ion from 'react-native-vector-icons/Ionicons'
// import Icon from 'react-native-vector-icons/Fontisto';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import {Avatar} from 'react-native-paper'

// const {height} = Dimensions.get("window")
// export default function ProfileScreen() {
//     return (
//      <View style={styles.container}>
//          <View style={styles.header}>
//          <Avatar.Icon  style={styles.text_header} size={100} icon="account" />
//          </View>
//          <Animatable.View 

//             animation="fadeInUpBig" style={styles.footer}>
//             <View style={{ ...StyleSheet.absoluteFillObject,backgroundColor:'#CBC3E3'}}/>
//             <View style={{flex:1,backgroundColor:"white",borderTopLeftRadius:75}}>

//                 <Text  style={styles.text_footer}>Name</Text>
//                 <View style={styles.action}>
//                     <Ion 
//                         style={{marginTop:'5%',marginLeft:'3%'}}
//                          name="md-person"
//                          color="#05375a"
//                         size={20}
//                     />
//                     <TextInput 
//                                     placeholder="Your Full Name"
//                                     placeholderTextColor="#000"
//                                      textAlign="center"
//                                      style={styles.textInput}
//                                      color="#000"
//                                      borderBottomColor="#fff"
//                                      pointerEvents="box-none"
                                   
                          
            
//                      />
//                 </View>
//                 <Text  style={styles.text_footer}>Email</Text>
//                 <View style={styles.action}>
//                     <Icon 
//                         style={{marginTop:'5%',marginLeft:'3%'}}
//                         name="email"
//                         color="#05375a"
//                         size={20}
//                     />
//                     <TextInput 
//                                     placeholder="Your Email"
//                                     placeholderTextColor="#000"
//                                      textAlign="center"
//                                      style={styles.textInput}
//                                      color="#000"
//                                      borderBottomColor="#fff"

                                   
                          
            
//                      />
//                 </View>
//                 <View style={styles.button}>
//                 <TouchableOpacity style={styles.signIn} >
//                     <LinearGradient
//                                                 colors={['#694fad','#694fad']}
//                                                 style={styles.signIn}
//                                             >
//                                             <Text style={styles.textSign,{
//                                                     color:'#fff'
//                                             }}>Update Profile</Text>

//                     </LinearGradient>
//                 </TouchableOpacity>
//                 </View>
//             </View>
//          </Animatable.View>
//      </View>  
//     )
// }

// const styles =StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'white'
//     },
//     header:{
//         height:0.32*height,
//         backgroundColor:'#CBC3E3',
//         borderBottomRightRadius:75
//     },
//     footer:{
//         flex:1,
//     },
//     text_header: {
//               color: '#fff',
//               fontWeight: 'bold',
//               fontSize: 30,
//               textAlign:'center',
//               marginTop:'20%',
//               marginLeft:'38%',
//               backgroundColor:'#000080'
//           },
//     text_footer: {
//                 color: 'black',
//                 fontSize: 18,
//                 marginLeft:'5%',
//                 marginTop:'10%',
//                 textAlign:'center'
//     },
//     action: {
//             flexDirection: 'row',
//             marginTop: 10,
//             borderBottomWidth: 1,
//             borderBottomColor: '#f2f2f2',
//             paddingBottom: 5
//     },
//     textInput: {
//               flex: 1,
//               marginTop: Platform.OS === 'ios' ? 0 : -12,
//               paddingLeft: 10,
//               marginTop:'1%'
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
        
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 80
//     },

// })

import React,{ useState,useContext } from 'react'
import { View,Text, StyleSheet, TouchableOpacity, Alert,TouchableHighlight,Image,TextInput,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import Ion from 'react-native-vector-icons/Ionicons';
import {userContext} from '../../App'
import axios from 'axios'
import {Avatar} from 'react-native-paper'
import pic from '../assets/smile_big.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const {height} = Dimensions.get("window")

export default function ProfileScreen() {
    const {state,dispatch} = useContext(userContext)
    const [email, setEmail] = React.useState(state.email);
    const [name, setName] = React.useState(state.name);
    const [cname, setCName] = React.useState(state.cname);
    const getUpdate = () =>{
        axios.post('http://192.168.43.247:5000/student/profileupdate',{id:state._id,email:email,name:name,collegeName:cname}).then((res)=>{
            if(res.data.status === 'sucess'){
                Alert.alert('updated sucessfully')
                dispatch({type:'user',payload:res.data.user})
            }
            else{
                Alert.alert('something went wrong')
            }
        })
    }
    return (
        <View style={styles.container}>
           {/* <View>
               <Text style={{paddingLeft:'40%',fontSize:20,marginVertical:4,paddingTop:'15%'}}>Email</Text>
            <TextInput
                mode='outlined' 
                label=" your Email"
                value={email}
                onChangeText={email => setEmail(email)}
                style={styles.input}
                />
           </View>
           <View>
                <Text style={{paddingLeft:'40%',fontSize:20,marginVertical:4}}>Name</Text>
            <TextInput
                mode='outlined' 
                label=" your Name"
                value={name}
                onChangeText={name => setName(name)}
                style={styles.input}
                />
           </View>
           <View>
                <Text style={{paddingLeft:'30%',fontSize:20,marginVertical:4}}>College Name</Text>
            <TextInput
                mode='outlined' 
                label=" your college Name"
                value={cname}
                onChangeText={cname => setCName(cname)}
                style={styles.input}
                />
           </View>
           <TouchableOpacity style={styles.signIn} onPress={()=>getUpdate()}>
           <LinearGradient
                colors={['blue','blue']}
                style={styles.signIn}
            >
                 <Text style={styles.textSign,{
                                                color:'#fff'
                                        }}>Save</Text>
            </LinearGradient>
           </TouchableOpacity> */}
              <View style={styles.header}>
                
              </View>
             <View style={{position:'absolute',marginLeft:'33%',marginVertical:6}}>
             <TouchableHighlight
                        style={styles.profileImgContainer}>
                        <Image source={pic} style={styles.profileImg} />
                        
                </TouchableHighlight>
            
             </View>
        
             
              <View style={styles.footer}>
                    <Text style={[styles.text_footer,{marginVertical:12}]}>Email</Text>
                        <View style={styles.action}>
                            <Icon
                                name="email"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                style={styles.textInput}
                                autoCapitalize="none"
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <Text style={[styles.text_footer,{marginTop:8}]}>Name</Text>
                            <View style={styles.action}>
                                <Ion 
                                    name="md-person"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput 
                                    placeholder="Your Full Name"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    value={name}
                                    onChangeText={(name)=>setName(name)}
            
                                />
                            </View>
                            <Text style={[styles.text_footer,{marginVertical:20}]}> college Name</Text>
                            <View style={styles.action}>
                                <MaterialCommunityIcons
                                    name="school"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput 
                                    placeholder="Your Full Name"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    value={cname}
                                    onChangeText={(cname)=>setCName(cname)}
            
                                />
                            </View>
                            <TouchableOpacity style={styles.signIn} onPress={()=>getUpdate()}>
                                <LinearGradient
                                        colors={['#2e64e5','#2e64e5']}
                                        style={styles.signIn}
                                    >
                                        <Text style={styles.textSign,{
                                                                        color:'#fff'
                                                                }}>Save</Text>
                                    </LinearGradient>
                            </TouchableOpacity>
            </View>
        
        </View>
    )
}
const styles =StyleSheet.create({
    // input:{
    //     marginVertical:8
    // },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical:50,
        
    },
    // textSign: {
    //     fontSize:30,
    //     fontWeight: 'bold'
    // }
    container: {
        flex: 1,
        backgroundColor: '#2e64e5'
    },
    header: {
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingBottom: 50,
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
       
       
      },
      profileImg: {
        height: 100,
        width: 100,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black",
       
        
      },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginVertical:4
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
        color: '#05375a',
    },
})