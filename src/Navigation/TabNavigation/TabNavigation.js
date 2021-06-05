import React from 'react'
import Ion from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExamStackScreen from '../StackNavigation/ExamStack';
import HomeStackScreen from '../StackNavigation/HomeStack';
import LeaderBoardStackScreen from '../StackNavigation/LeaderBoardStack.';
import AssignmentStack from '../StackNavigation/AssignmentStack';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Stream',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubbles-sharp" color={color} size={24} />
            // <MaterialCommunityIcons name="comment-multiple" color={color} size={26} />
            // <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Exam"
        component={ExamStackScreen}
        options={{
          tabBarLabel: 'Exams',
          tabBarColor: '#2e64e5',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="comment-multiple" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Assignment"
        component={AssignmentStack}
        options={{
          tabBarLabel: 'Assignments',
          tabBarColor: '#2e64e5',
          tabBarIcon: ({ color }) => (
            <Ion name="assignment" color={color} size={26} />
            // <MaterialCommunityIcons name="comment-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Leader"
        component={LeaderBoardStackScreen}
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarColor: '#2e64e5',
          tabBarIcon: ({ color }) => (
            <Ion name="leaderboard" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
