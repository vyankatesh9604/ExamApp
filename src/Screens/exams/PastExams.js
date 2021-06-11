import React, { useState, useEffect, useContext } from 'react'
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import url from '../../url'
import moment from 'moment'
import { userContext } from '../../../App';

const PastExams = ({ navigation }) => {

    const [papers, setPapers] = useState([])
    const { state } = useContext(userContext)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            axios
                .post(`${url}/paper/pastPapers`, { classId: state.ActiveclassId }).then((res) => {
                    if (res.data.status === 'sucess') {
                        setPapers(res.data.Papers)
                    } else {
                        Alert.alert(res.data.message)
                    }
                }).catch((err) => {
                    console.log(err)
                })
        })
        return unsubscribe;
    }, [navigation])

    return (
        <>
            <ScrollView>
                {papers.length > 0 ? papers.map((paper, index) => {

                    return <Card mode='outlined' style={{ marginVertical: 8, marginHorizontal: 8 }} key={index}>
                        <Card.Title title={paper.subjectName} style={{ paddingLeft: '30%' }} />
                        {/* <Card.Content style={{ flexDirection: 'row' }}>
                            <Title>Teacher Name :</Title>
                            <Title style={{ paddingLeft: '2%' }}>{paper.facultyName}</Title>
                        </Card.Content> */}
                        <Card.Content style={{ flexDirection: 'row' }}>
                            <Title>Start Time:</Title>
                            <Title style={{ paddingLeft: '2%' }}>{moment(paper.startTime).format("Do MMM YYYY hh:mma")}</Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row' }}>
                            <Title>End Time: </Title>
                            <Title style={{ paddingLeft: '2%' }}>{moment(paper.endTime).format("Do MMM YYYY hh:mma")}</Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row' }}>
                            <Title>Total Marks :</Title>
                            <Title style={{ paddingLeft: '2%' }}>{paper.totalmarks}</Title>
                        </Card.Content>
                        <Card.Content style={{ flexDirection: 'row' }}>
                            <Title>Obtained Marks :</Title>
                            <Title style={{ paddingLeft: '2%' }}> {paper.submissions.filter((item) => item.student === state._id)[0].obtainedMarks}</Title>
                        </Card.Content>
                    </Card>
                }) : <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 18 }}>No exams available ...! 🙂</Text>
                }
            </ScrollView>
        </>
    )
}

export default PastExams

const styles = StyleSheet.create({})
