import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from '../TabNavigation/TopTabNavigation';
import ExamScreen from '../../Screens/ExamScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import QuizPage from '../../Screens/exams/QuizPage/QuizPage';

const ExamStack = createStackNavigator();

const ExamStackScreen = ({ navigation }) => {
    return (
        <ExamStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2e64e5'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <ExamStack.Screen name="Exams" component={MyTabs} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor='#2e64e5' onPress={() => navigation.openDrawer()}></Icon.Button>
                },
            }} />
            {/* <ExamStack.Screen name="QuizPage" component={QuizPage} options={{
                headerLeft: () => {
                    return <Icon.Button name='md-menu' size={25} backgroundColor='#2e64e5' onPress={() => navigation.openDrawer()}></Icon.Button>
                },
            }} /> */}
        </ExamStack.Navigator>
    )
}

export default ExamStackScreen