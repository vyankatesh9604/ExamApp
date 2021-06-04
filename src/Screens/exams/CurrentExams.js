import React, { useState, useEffect, useContext } from 'react'
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios'
import url from '../../url'
import moment from 'moment'
import QuizModal from './QuizPage/QuizModal'
import { userContext } from '../../../App';

const CurrentExams = ({ navigation }) => {
    const [papers, setPapers] = useState([])
    const [currenttime, setCurrentTime] = useState(moment())

    const { state, dispatch } = useContext(userContext)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            axios
                .post(`${url}/paper/getAllPaper`, { classId: state.ActiveclassId }).then((res) => {
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

    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(moment()), 5000)
        return () => {
            clearInterval(interval)
        }
    }, [])



    return (
        <>
            <ScrollView>
                {papers.length > 0 ? papers.map((paper, index) => {

                    return <Card mode='outlined' style={{ marginVertical: 8, marginHorizontal: 8 }} key={index}>
                        <Card.Title title={paper.subjectName} style={{ paddingLeft: '30%' }} />
                        <Card.Content style={{ flexDirection: 'row' }}>
                            <Title>Teacher Name :</Title>
                            <Title style={{ paddingLeft: '2%' }}>{paper.facultyName}</Title>
                        </Card.Content>
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

                        <Card.Actions style={{ justifyContent: 'center' }}>
                            {
                                currenttime.diff(paper.startTime) > 0 &&
                                moment(paper.endTime).diff(currenttime) > 0 &&
                                <QuizModal
                                    papers={papers}
                                    i={index}
                                    setPapers={setPapers}
                                    navigation={navigation}
                                />
                            }
                        </Card.Actions>
                    </Card>
                }) : <Text>you have no current Exam</Text>
                }
            </ScrollView>
        </>)
}

export default CurrentExams

const styles = StyleSheet.create({})
