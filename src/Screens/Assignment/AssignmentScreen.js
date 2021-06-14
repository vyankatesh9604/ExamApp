import React, { useState, useEffect, useContext } from 'react'
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native-animatable'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import { userContext } from '../../../App'
import moment from 'moment'

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
                assignments.length < 1
                    ?
                    <>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, marginTop: 265 }}>no assignments available yet</Text>
                        </View>
                    </>
                    :
                    <>
                        <ScrollView>
                            {
                                assignments.map((assignment, index) => {
                                    return (
                                        <Card mode='outlined' style={{ marginVertical: 8, marginHorizontal: 12 }} key={index}>
                                            <Card.Title title={assignment.assignmentName} />
                                            <View style={{ paddingHorizontal: 24 }}>
                                                <View style={{ flexDirection: 'row', marginVertical: 2, }}>
                                                    <Text style={{ fontSize: 16 }}>Due Date :</Text>
                                                    {/* <Text style={{ fontSize: 16 }}> 14th June, 2021</Text> */}
                                                    <Text>{moment(assignment.dueDate).format('Do MMMM, YYYY hh:mma')}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <View style={{ flexDirection: 'row', marginVertical: 2, }}>
                                                        <Text style={{ fontSize: 16 }}>Total Marks :</Text>
                                                        <Text style={{ fontSize: 16 }}> {assignment.totalMarks}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginVertical: 2, marginLeft: 8 }}>
                                                        <Text style={{ fontSize: 16 }}>Obtained Marks :</Text>
                                                        <Text style={{ fontSize: 16 }}> {JSON.stringify(assignment.submissions.filter((s)=>s.student === state._id)[0].obtainedMarks)}</Text>
                                                    </View>
                                                </View>
                                                {/* <Text style={{ fontSize: 18, fontWeight: '800' }}>Instructions</Text> */}
                                                <Paragraph>*Assignment should be submitted before due date {'\n'}*No submissions will be accpeted after due date</Paragraph>
                                            </View>
                                            <Card.Actions>
                                                <Button
                                                    style={{ width: '100%', backgroundColor: '#2e64e5' }}
                                                    onPress={() => {
                                                        navigation.navigate('AssignmentDetails', { assignment: assignment })
                                                    }}>
                                                    <Text style={{ color: '#fff' }} >View</Text>
                                                </Button>
                                            </Card.Actions>
                                        </Card>
                                    )

                                })
                            }
                        </ScrollView>
                    </>}
        </View>
    )
}

export default AssignmentScreen