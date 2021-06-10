import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'
import { Headline, Title, Button, ActivityIndicator } from 'react-native-paper';
import moment from 'moment'
import axios from 'axios';
import url from '../../../url';

const QuizPage = ({ route, navigation }) => {

    const paperId = route.params.paperId

    const [paper, setPaper] = useState(null)
    // const [questions, setQuestions] = useState(paper.questions)
    const [currentQuestion, setcurrentQuestion] = useState(1)
    const [totalmarks, setTotalmarks] = useState(0)
    let interval;

    const [currenttime, setCurrentTime] = useState(moment())
    let dur = moment.duration(moment(paper.endTime).diff(moment(currenttime)));

    useEffect(() => {
        interval = setInterval(() => {
            if (moment(currenttime).isBefore(moment(paper.endTime))) {
                setCurrentTime(moment())
            } else {
                TestSubmitted()
            }
        }, 1000)
    }, [])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    useEffect(() => {
        axios
            .get(`${url}/paper/getPaper/${paperId}`)
            .then((res) => {
                setPaper(res.data.Paper)
            })
            .catch((err) => { console.log(err) })
    }, [paperId])

    const selectedOption = (index) => {
        if (!('selected' in paper.questions[currentQuestion - 1])) {
            let arr = paper.questions
            arr[currentQuestion - 1].selected = true
            arr[currentQuestion - 1].selectedOption = `o${index}`
            if (paper.questions[currentQuestion - 1].correctoption === `o${index}`) {
                setTotalmarks(totalmarks + 1)
            }
            setPaper({ ...paper, questions: arr })
        } else {
            alert('You have already submitted answer')
        }
    }
    const TestSubmitted = () => {
        setcurrentQuestion(1)
        clearInterval(interval)
        alert('You have sucessfully submitted Test thank you! ')
        navigation.navigate('Past Exams')
    }

    return (
        <>
            {
                !paper
                    ?
                    <View>
                        <ActivityIndicator style={{ marginTop: 310 }} animating={true} size={'large'} />
                    </View>
                    :
                    <View>
                        {/* <Text>{JSON.stringify(paper._id)}</Text> */}
                        <Headline style={styles.subjectName}>{paper.subjectName}</Headline>
                        <Text style={{ textAlign: 'center', marginVertical: 4, fontSize: 25 }}>{`${dur.hours()} hrs ${dur.minutes()} min ${dur.seconds()} sec remaining.`}</Text>

                        <Text style={styles.questionNum}>Question {currentQuestion}/{paper.questions.length}</Text>

                        {/* current question */}
                        <View style={styles.question}>
                            <Text style={{ fontSize: 30, marginTop: 50 }}>
                                {`Q. ${paper.questions[currentQuestion - 1].question}`}
                            </Text>
                        </View>

                        <View style={styles.optionContainer}>
                            {
                                Object.keys(paper.questions[currentQuestion - 1].options).map((opKey, index) => {
                                    return (
                                        'selected' in paper.questions[currentQuestion - 1] &&
                                            opKey === paper.questions[currentQuestion - 1].selectedOption
                                            ? <Button mode="contained" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                                {`${index + 1}] ${paper.questions[currentQuestion - 1].options[opKey]}`}
                                            </Button> : <Button mode="outlined" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                                {`${index + 1}] ${paper.questions[currentQuestion - 1].options[opKey]}`}
                                            </Button>)
                                })
                            }
                        </View>
                        {
                            currentQuestion < paper.questions.length ?
                                <View style={styles.btnRow}>
                                    {/* <Button mode="contained" style={styles.Btn}>
                                        Quit
                                    </Button> */}
                                    <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion + 1)}>
                                        Next
                                    </Button>
                                </View>
                                :
                                <View style={styles.btnRow}>
                                    {paper.questions.length !== 1 && <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion - 1)}>
                                        Back
                                    </Button>}
                                    <Button mode="contained" style={styles.submitBtn} onPress={() => TestSubmitted()}>
                                        Submit Test
                                    </Button>
                                </View>

                        }
                    </View>
            }
        </>
    )

    // return (
    //     <>
    //         <Headline style={styles.subjectName}>{paper.subjectName}</Headline>
    //         <Text style={styles.questionNum}>Question {currentQuestion}/{questions.length}</Text>
    //         <Text style={{ textAlign: 'center', marginVertical: 4, fontSize: 25 }}>{`${dur.hours()} hrs ${dur.minutes()} min ${dur.seconds()} sec remaining.`}</Text>

    //         {/* current question */}
    //         <View style={styles.question}>
    //             <Text style={{ fontSize: 30, marginTop: 50 }}>
    //                 {`Q. ${questions[currentQuestion - 1].question}`}
    //             </Text>
    //         </View>
    //         <View style={styles.optionContainer}>
    //             {
    //                 Object.keys(questions[currentQuestion - 1].options).map((opKey, index) => {
    //                     return (
    //                         'selected' in questions[currentQuestion - 1] &&
    //                             opKey === questions[currentQuestion - 1].selectedOption
    //                             ? <Button mode="contained" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
    //                                 {`${index + 1}] ${questions[currentQuestion - 1].options[opKey]}`}
    //                             </Button> : <Button mode="outlined" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
    //                                 {`${index + 1}] ${questions[currentQuestion - 1].options[opKey]}`}
    //                             </Button>)
    //                 })
    //             }
    //         </View>

    //         {
    //             currentQuestion < questions.length ?
    //                 <View style={styles.btnRow}>
    //                     {/* <Button mode="contained" style={styles.Btn}>
    //                         Quit
    //                     </Button> */}
    //                     <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion + 1)}>
    //                         Next
    //                     </Button>
    //                 </View>
    //                 :
    //                 <View style={styles.btnRow}>
    //                     {questions.length !== 1 && <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion - 1)}>
    //                         Back
    //                     </Button>}
    //                     <Button mode="contained" style={styles.submitBtn} onPress={() => TestSubmitted()}>
    //                         Submit Test
    //                     </Button>
    //                 </View>

    //         }
    //     </>
    // )

}

export default QuizPage

const styles = StyleSheet.create({
    Btn: {
        width: '40%',
        padding: 8
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    submitBtn: {
        width: '45%',
        padding: 8
    },
    optionContainer: {
        padding: 18,
        marginTop: 'auto',
        marginBottom: 70
    },
    optionBtn: {
        padding: 10,
        marginVertical: 5,
    },
    question: {
        margin: 16,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    subjectName: {
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold'
    },
    questionNum: {
        fontSize: 30,
        textAlign: 'center'
    }
})