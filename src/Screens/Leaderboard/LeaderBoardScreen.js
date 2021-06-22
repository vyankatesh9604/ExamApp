import React, { useEffect,useContext } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
// import Header from '../Component/Header/TopHeader'
import { Avatar, Button, Card, Title, Paragraph, Headline, IconButton } from 'react-native-paper';
import { userContext } from '../../../App'
// import pic from '../../assets/smile_big.png'
// import { View ,Dimensions} from "react-native";
import { BarChart, PieChart } from "react-native-chart-kit";
import axios from 'axios';



export default function LeaderBoardScreen() {
  const { state } = useContext(userContext)
  const [students,setStudents] = useState([])

  // const data = {
  //   labels: ["Math", "Science"],
  //   datasets: [
  //     {
  //       data: [80, 100]
  //     }
  //   ]
  // };
  // const chartConfig = {
  //   backgroundGradientFrom: "#fff",
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientTo: "#fff",
  //   backgroundGradientToOpacity: 0.5,
  //   color: (opacity = 1) => `#2e64e5`,
  //   strokeWidth: 2, // optional, default 3
  //   barPercentage: 0.5,
  //   useShadowColorFromDataset: false // optional
  // };
  // const screenWidth = Dimensions.get("window").width;
  // const piedata = [
  //   {
  //     name: "Math",
  //     percentage: 50,
  //     color: "rgba(131, 167, 234, 1)",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15
  //   },
  //   {
  //     name: "Science",
  //     percentage: 50,
  //     color: "#F00",
  //     legendFontColor: "#7F7F7F",
  //     legendFontSize: 15 
  //   },

  // ];


  var smile

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        axios
            .post(`${url}/class/getLeaderboard`, { cid: state.ActiveclassId })
            .then((res) => {
                // console.log(res.data)
                setStudents(res.data.students)
            })
            .catch((err) => { console.log(err) })
    })
    return unsubscribe;
}, [navigation])


  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <View style={{ marginHorizontal: 8 }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center', marginVertical: 6 }}>#2</Text>
          <Avatar.Text size={75} label="RB" />
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, marginVertical: 6 }}>Rohan</Text>
        </View>
        {students.length > 0 && <View style={{ marginHorizontal: 8, marginVertical: 16 }}>
          <Text style={{ fontSize: 32, textAlign: 'center', marginVertical: 6 }}>👑</Text>
          <Avatar.Text size={100} label={'VG'} style={{ elevation: 30 }} />
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, marginVertical: 6 }}>{students[0].student.name}</Text>
        </View>}
        <View style={{ marginHorizontal: 8 }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center', marginVertical: 6 }}>#3</Text>
          <Avatar.Text size={75} label="RC" />
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, marginVertical: 6 }}>Raghuveer</Text>
        </View>
      </View>



      {/* <View style={{ flexDirection: 'row', position: 'absolute' }}>
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
      </View> */}

      {/* <BarChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            style={{ marginTop: '20%' }}
            fromZero='true'
          /> */}

      {/* <Text style={{ textAlign: 'center', fontSize: 20 }}>Test Performance(%)</Text>
          <PieChart
          data={piedata}
          width={screenWidth}
          height={200}
          accessor={"percentage"}
          chartConfig={chartConfig}
          backgroundColor={"transparent"}
          absolute
          />
        <Text style={{ textAlign: 'center', fontSize: 20 }}>Subject Analysis(%)</Text> */}
      <View style={styles.footer}>
        <ScrollView>
          {
            [...Array(7).keys()].map((v, i) => {
              return (
                <Card mode='outlined' style={styles.card} key={i}>
                  <Card.Content style={{ flexDirection: 'row' }}>
                    <Title>vyankatesh</Title>
                    <Title style={{ marginLeft: '30%' }}>Rank #{v + 4}</Title>
                  </Card.Content>
                </Card>
              )
            })
          }
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    // flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingTop: 10,
    // paddingBottom: 50,
    backgroundColor: '#2e64e5',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  footer: {
    flex: 2,
    paddingVertical: 8
  },
  headerText: {
    color: 'white',
    marginBottom: '5%',
    fontSize: 25,
    padding: 0,
  },
  subText: {
    fontSize: 15,
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 12,
    marginTop: '1%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 4,
  },
})