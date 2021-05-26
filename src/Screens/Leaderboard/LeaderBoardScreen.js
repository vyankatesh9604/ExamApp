import React, { useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
// import Header from '../Component/Header/TopHeader'
import { Avatar, Button, Card, Title, Paragraph, Headline, IconButton } from 'react-native-paper';
import { userContext } from '../../../App'
// import pic from '../../assets/smile_big.png'
// import { View ,Dimensions} from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";



export default function LeaderBoardScreen() {
  const { state } = useContext(userContext)
  const data = {
    labels: ["Math", "Science"],
    datasets: [
      {
        data: [80, 100]
      }
    ]
  };
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#2e64e5`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const screenWidth = Dimensions.get("window").width;
  const piedata = [
    {
      name: "Math",
      percentage: 50,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Science",
      percentage: 50,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },

  ];






  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.headerText}>Hello,{state.name}</Text>
          <Avatar.Text size={80} label="VG"

            style={{ marginLeft: 60 }}
          />
        </View>
      </View>


      <View style={{ flexDirection: 'row', position: 'absolute' }}>
        <Card mode='outlined' style={{ marginHorizontal: 8, marginTop: '35%', width: '45%', height: 120 }}>
          <Card.Title title="overAll Rank" />
          <Card.Content >
            <Headline size={20} style={{ textAlign: 'center', marginTop: '20%' }}>#5</Headline>
          </Card.Content>
        </Card>
        <Card mode='outlined' style={{ marginHorizontal: 8, width: '45%', marginTop: '35%', height: 120 }}>
          <Card.Title title="Last Test Rank" />
          <Headline size={20} style={{ textAlign: 'center', marginTop: '20%' }}>#5</Headline>
        </Card>
      </View>

      <View style={styles.footer}>
        <ScrollView>
          <BarChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            style={{ marginTop: '20%' }}
            fromZero='true'
          />
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Test Performance(%)</Text>
          <PieChart
            data={piedata}
            width={screenWidth}
            height={200}
            accessor={"percentage"}
            chartConfig={chartConfig}
            backgroundColor={"transparent"}
            absolute
          />
          <Text style={{ textAlign: 'center', fontSize: 20 }}>Subject Analysis(%)</Text>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e64e5'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 50,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    paddingVertical: 30
  },
  headerText: {
    color: 'white',
    marginBottom: '5%',
    fontSize: 25,
    padding: 0,
  },
  subText: {
    fontSize: 15,
  }
})