import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper';
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
                    navigation.replace('HomeDrawer')
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
                <ActivityIndicator style={{ marginTop: 310 }} animating={true} size={'large'} />
            </View>
        </>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})