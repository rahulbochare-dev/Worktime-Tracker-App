import { StyleSheet, Text, View } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'

const WeekLineChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Worked this Week</Text>
      <Text style={styles.dataNo}>10.5 <Text style={styles.dataNoHrs}>Hours</Text></Text>
      <Text style={styles.secondaryData}>3.5 hrs average per day</Text>
      <View style={styles.chartContainer}>
      <LineChart/>
      </View>
    </View>
  )
}

export default WeekLineChart

const styles = StyleSheet.create({
  container: {
    height: 404,
    width: 352,
    backgroundColor: "#151515",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  chartContainer: {
    height: "68%",
    marginTop: "5%",
    width: "100%",
    backgroundColor: "red",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  heading: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "white",
  },
  dataNo: {
    fontSize: 36,
    fontFamily: "GeistMedium",
    color: "white",
    marginTop: 8
  },
  dataNoHrs: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    color: "#828282",
  },
  secondaryData: {
    fontSize: 12,
    fontFamily: "GeistMedium",
    color: "#828282",
  },

})