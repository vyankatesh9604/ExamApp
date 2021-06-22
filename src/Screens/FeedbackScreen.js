import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-paper'
import { userContext } from '../../App';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import url from '../url';
import LinearGradient from 'react-native-linear-gradient';
const FeedbackScreen = () => {
    const [text, setText] = React.useState('');
    const { state } = useContext(userContext)
    const [stars, setStars] = React.useState()

    const sendFeedback = () => {
        axios.post(`${url}/feedback/createfeedback`, { classId: state.ActiveclassId, sname: state.name, feedback: text, rating: stars }).then(res => {
            alert(res.data.Message)
            setText('')
        })
    }
    return (
        <View style={{ marginVertical: 120 }} height={60}>
            <TextInput
                mode="outlined"
                label="Your Name"
                value={state.name}
                style={{ marginHorizontal: 50, marginVertical: 10 }}
            />
            <TextInput
                label="Enter your Feedback"
                mode="outlined"
                value={text}
                onChangeText={text => setText(text)}
                style={{ marginHorizontal: 50 }}
                multiline={true}
                numberOfLines={4}
            />
            <Text style={{ marginHorizontal: 70, fontSize: 25, marginVertical: 10 }}>Give your Ratings</Text>
            <Stars
                default={2.5}
                count={5}
                half={true}
                starSize={50}
                fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
                update={(val) => { setStars(val) }}
            />
            <TouchableOpacity style={styles.signIn} onPress={() => sendFeedback()}>
                <LinearGradient
                    colors={['#2e64e5', '#2e64e5']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign, {
                        color: '#fff',
                        fontSize: 20

                    }}>Send Feedback</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    myStarStyle: {
        color: '#FFD700',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontSize: 35,
        marginVertical: 10
    },
    myEmptyStarStyle: {
        color: 'lightgray',
    },
    signIn: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 30,
        marginHorizontal: 10


    },
});


export default FeedbackScreen
