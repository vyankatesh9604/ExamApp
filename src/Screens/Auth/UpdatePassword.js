import React from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity, Alert} from 'react-native'
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Fontisto';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import url from '../../url';
import axios from 'axios';

const UpdatePassword = ({navigation}) => {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })
    console.log(navigation)
    const PostData = ({navigation})=>{
        


        // fetch(`${url}/student/updatepassword`,{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:{
        //         email,
        //         password
        //     }
        // }).then(res=>res.json())
        // .then(data=>{
        //    if(data.error){
        //      alert(data.error)
        //    }
        //    else{
        //    Alert.alert(data.message)
        //     navigation.navigate('LoginScreen')
              
        //    }
        // }).catch(err=>{
        //     console.log(err)
        // })
        axios.post(`${url}/student/updatepassword`,{email:data.email,password:data.password}).then(res =>{
            alert(res.data.message)
            navigation.navigate('LoginScreen')
        })
    }



    const textInputChnge = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            })
        }
    }

    
    const handlePasswordIcon = (val) => {
        setData({
            ...data,
            password: val
        })
    }
    const updateSecureEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    return (
        <Card mode='outlined' style={styles.cards}>
              <Card.Content>
                <Title style={{textAlign:'center'}}>Enter Details</Title>

                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <Icon
                        name="email"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder=" Enter Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChnge(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>


                <Text style={styles.text_footer, {
                    marginTop: 25
                }}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordIcon(val)}
                    />
                    <TouchableOpacity onPress={updateSecureEntry}>
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="green"
                                size={20}
                            /> :
                            <Feather
                                name="eye"
                                color="green"
                                size={20}
                            />}
                    </TouchableOpacity>
                </View>


              </Card.Content>
              <Card.Actions style={{ justifyContent: 'center' }}>
                <Button
                  style={{ width: '100%', backgroundColor: '#009387' }}
                  onPress={() =>PostData({navigation})} >
                  <Text style={{ color: 'white' }} >Update Password</Text>
                </Button>
              </Card.Actions>
        </Card>
    )
}

export default UpdatePassword

const styles = StyleSheet.create({
    cards :{
        marginTop:'50%'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});