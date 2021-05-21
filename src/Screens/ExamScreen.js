
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CurrentExams from './exams/CurrentExams'
import MyTabs from '../Navigation/TabNavigation/TopTabNavigation'

const ExamScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <CurrentExams /> */}
      <MyTabs />
    </View>
  )
}

export default ExamScreen

const styles = StyleSheet.create({})
