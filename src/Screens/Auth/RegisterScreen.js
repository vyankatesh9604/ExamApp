import React, { useContext } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    StatusBar,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Ion from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import { userContext } from '../../../App'
import url from '../../url';


export default function RegisterScreen({ navigation }) {

    const { state, dispatch } = useContext(userContext)
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })
    const [name, setName] = React.useState('')
    const [collegename, setCollegeName] = React.useState('')

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

    const getRegister = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)) {
            alert('invalid email')
            return
        }
        if(!isNaN(name)){
             alert('please enter character')
             return
        }
        if(!isNaN(collegename)){
             alert('please enter character')
             return
        }
        
        axios.post(`${url}/student/signup`, { name: name, email: data.email, password: data.password, collegeName: collegename })
            .then((res) => {
                if (res.data.status === "fail") {
                    Alert.alert(res.data.message)
                } else {
                    AsyncStorage.setItem('user', JSON.stringify(res.data.user))
                        .then(() => {
                            Alert.alert("Register sucessfully")
                            dispatch({ type: 'user', payload: res.data.user })
                            navigation.navigate('HomeDrawer')
                        })
                        .catch(err => console.log(err))
                }
            }).catch((err) => {
                console.log(err)
            })

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="dark-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register</Text>
            </View>



            < Animatable.View

                animation="fadeInUpBig"
                style={styles.footer}

            >
                {/*--------------- Name Text Input ---------------------------- */}
                <Text style={styles.text_footer}>Name</Text>
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
                        onChangeText={(name) => setName(name)}

                    />
                </View>
                {/*--------------- Email Text Input ---------------------------- */}
                <Text style={styles.text_footer}>Email</Text>
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

                {/*--------------- Password Input ---------------------------- */}

                <Text style={styles.text_footer}>Password</Text>
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



                <Text style={styles.text_footer}> college Name</Text>
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
                        onChangeText={(collegename) => setCollegeName(collegename)}

                    />
                </View>

                <View style={styles.button}>

                    {/*--------------- sign Up Button ---------------------------- */}


                    <TouchableOpacity style={styles.signIn} onPress={() => getRegister({ navigation })}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign, {
                                color: '#fff'
                            }}>Sign Up</Text>

                        </LinearGradient>
                    </TouchableOpacity>

                    {/*--------------- sign In  Button ---------------------------- */}

                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={styles.textSign, {
                            color: "#009387"
                        }}>Already Have Account </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
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
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
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
