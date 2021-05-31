import React, { useContext } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userContext } from '../App';

const Loading = ({ navigation }) => {

    const { state, dispatch } = useContext(userContext);

    const getUser = () => {
        AsyncStorage.getItem('user')
            .then(user => {
                if (user) {
                    user = JSON.parse(user)
                    dispatch({ type: 'user', payload: user })
                    console.log(user, 'found!')
                    navigation.replace('ClassScreen')
                }
                else {
                    navigation.replace('LoginScreen')
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <View style={styles.conatiner}>
                <Text>Loading...</Text>
            </View>
        </>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})