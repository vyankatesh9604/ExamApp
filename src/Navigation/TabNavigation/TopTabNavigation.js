import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CurrentExams from '../../Screens/exams/CurrentExams';
import PastExams from '../../Screens/exams/PastExams';
import React from 'react'

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Current Exams" component={CurrentExams} />
            <Tab.Screen name="Past Exams" component={PastExams} />
        </Tab.Navigator>
    );
}