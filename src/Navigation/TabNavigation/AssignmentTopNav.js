import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import AssignmentDetails from '../../Screens/Assignment/AssignmentDetails';
import AssignmentSubmit from '../../Screens/Assignment/AssignmentSubmit';

const Tab = createMaterialTopTabNavigator();

export default function AssignmentTopNav(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Assignment">
                {() => <AssignmentDetails {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Submission">
                {() => <AssignmentSubmit {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}