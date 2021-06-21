import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import FeedbackScreen from '../../Screens/FeedbackScreen'

const FeedbackStack = createStackNavigator();

const FeedStackScreen = ({ navigation }) => {
    // console.log(navigation)
    return (
        <FeedbackStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2e64e5'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <FeedbackStack.Screen name="Feedback" component={FeedbackScreen} options={{
                headerLeft: () => {
                    return <Icon.Button name="md-chevron-back-sharp" size={25} backgroundColor='#2e64e5' onPress={() => navigation.goBack('home')}></Icon.Button>
                },

            }} />
        </FeedbackStack.Navigator>
    )

}


export default FeedStackScreen