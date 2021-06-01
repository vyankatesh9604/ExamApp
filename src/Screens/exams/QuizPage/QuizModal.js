import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Modal, Portal, Text, Button } from 'react-native-paper';
import moment from 'moment'

const QuizModal = ({ papers, i, setPapers, navigation }) => {

    const [visible, setVisible] = React.useState(false);
    const [currentQuestion, setcurrentQuestion] = useState(1)
    const [totalmarks, setTotalmarks] = useState(0)

    const [currenttime, setCurrentTime] = useState(moment())
    let dur = moment.duration(moment(papers[i].endTime).diff(moment(currenttime)));

    let interval, timeout;
    const showModal = () => {
        setVisible(true)
        interval = setInterval(() => {
            if (moment(currenttime).isBefore(moment(papers[i].endTime))) {
                setCurrentTime(moment())
            } else {
                TestSubmitted()
            }
        }, 1000)
    }


    useEffect(() => {
    }, [])

    const hideModal = () => {
        setVisible(false)
        setcurrentQuestion(1)
        clearInterval(interval)
        clearTimeout(timeout)
    }

    const TestSubmitted = () => {
        alert('You have sucessfully submitted Test thank you! ')
        hideModal()
        navigation.navigate('Current Exams')
    }

    const selectedOption = (index) => {
        if (!('selected' in papers[i].questions[currentQuestion - 1])) {
            // let arr = papers[i].questions
            papers[i].questions[currentQuestion - 1].selected = true
            papers[i].questions[currentQuestion - 1].selectedOption = `o${index}`
            if (papers[i].questions[currentQuestion - 1].correctoption === `o${index}`) {
                setTotalmarks(totalmarks + 1)
            }
            // console.log(arr)
            setPapers(papers)
        } else {
            alert('You have already submitted answer')
        }
    }

    return (
        <>
            <Portal style={{ marginTop: 50 }}>
                <Modal visible={visible} dismissable={false} contentContainerStyle={{ backgroundColor: 'white', height: '250%' }}>
                    <Text style={styles.questionNum}>Question {currentQuestion}/{papers[i].questions.length}</Text>
                    <Text style={{ textAlign: 'center', marginVertical: 4, fontSize: 20 }}>{`${dur.hours()} hrs ${dur.minutes()} min ${dur.seconds()} sec remaining.`}</Text>

                    {/* current question */}
                    <View style={styles.question}>
                        <Text style={{ fontSize: 25 }}>
                            {`Q. ${papers[i].questions[currentQuestion - 1].question}`}
                        </Text>
                    </View>
                    <View style={styles.optionContainer}>
                        {
                            Object.keys(papers[i].questions[currentQuestion - 1].options).map((opKey, index) => {
                                return (
                                    'selected' in papers[i].questions[currentQuestion - 1] &&
                                        opKey === papers[i].questions[currentQuestion - 1].selectedOption
                                        ? <Button mode="contained" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                            {`${index + 1}] ${papers[i].questions[currentQuestion - 1].options[opKey]}`}
                                        </Button> : <Button mode="outlined" style={styles.optionBtn} key={index} onPress={() => selectedOption(index + 1)}>
                                            {`${index + 1}] ${papers[i].questions[currentQuestion - 1].options[opKey]}`}
                                        </Button>)
                            })
                        }
                    </View>

                    {/* question navigation buttons */}
                    {
                        currentQuestion < papers[i].questions.length ?
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
                                {papers[i].questions.length !== 1 && <Button mode="contained" style={styles.Btn} onPress={() => setcurrentQuestion(currentQuestion - 1)}>
                                    Back
                                </Button>}
                                <Button mode="contained" style={styles.submitBtn} onPress={() => TestSubmitted()}>
                                    Submit Test
                                </Button>
                            </View>

                    }
                </Modal>
            </Portal>
            <Button mode="contained" style={{ width: '100%', backgroundColor: '#2e64e5', color: '#fff' }} onPress={showModal}>
                Start test
            </Button>
        </>
    )
}

export default QuizModal

const styles = StyleSheet.create({
    Btn: {
        width: '40%',
        padding: 8
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    submitBtn: {
        width: '45%',
        padding: 8
    },
    optionContainer: {
        padding: 18,
        marginBottom: 20
    },
    optionBtn: {
        padding: 10,
        marginVertical: 10,
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