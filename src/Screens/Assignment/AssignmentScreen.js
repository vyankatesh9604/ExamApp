import React, { useState, useEffect, useContext } from 'react'
import { View, Text } from 'react-native-animatable'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import { userContext } from '../../../App'

import url from '../../url';

const AssignmentScreen = ({ navigation }) => {

    const { state, dispatch } = useContext(userContext)
    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            axios
                .post(`${url}/assignment/getAssignments`, { classId: state.ActiveclassId })
                .then((res) => {
                    // console.log(res.data)
                    setAssignments(res.data.assignments)
                })
                .catch((err) => { console.log(err) })
        })
        return unsubscribe;
    }, [navigation])

    return (
        <View>
            {
                assignments.map((oneclass, index) => {
                    return <Card mode='outlined' style={{ marginVertical: 8, marginHorizontal: 8 }} key={index}>
                        <Card.Title title={oneclass.assignmentName} />
                        <Card.Content>
                            {/* <Title>created by {oneclass.teacher.name}</Title> */}
                            <Paragraph>Assignment is about this subject and Due date is 30 may</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button
                                style={{ width: '100%', backgroundColor: '#009387' }}
                                onPress={() => { navigation.navigate('AssignmentDetails') }}>
                                <Text style={{ color: 'white' }} >View</Text>
                            </Button>
                        </Card.Actions>
                    </Card>

                })
            }
        </View>
    )
}

export default AssignmentScreen