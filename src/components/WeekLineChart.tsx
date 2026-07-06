import { StyleSheet, Text, View } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'

const WeekLineChart = () => {
  const data = [
    { value: 30, label: "Mon" },
    { value: 45, label: "Tue" },
    { value: 28, label: "Wed" },
    { value: 80, label: "Thu" },
    { value: 99, label: "Fri" },
    { value: 43, label: "Sat" },
    { value: 65, label: "Sun" },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Worked this Week</Text>
      <Text style={styles.dataNo}>10.5 <Text style={styles.dataNoHrs}>Hours</Text></Text>
      <Text style={styles.secondaryData}>3.5 hrs average per day</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          curved
          xAxisLabelTextStyle={{
            fontSize: 9,
            color: "#828282"
          }}
          yAxisTextStyle={{
            fontSize: 9,
            color: "#828282"
          }}
          areaChart
          startFillColor='#f64c18'
          endFillColor='#ee9539'
          startOpacity={0.4}
          endOpacity={0.02}
          color="#f64c18"
          thickness={1}
          hideDataPoints={false}
          dataPointsColor="#ff2323"
          dataPointsRadius={0}
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules={true}
          horizontalRulesStyle="solid"
          rulesThickness={1}
          rulesColor="#464646"
          rulesType="solid"
          disableScroll
          spacing={45}
          initialSpacing={10}
          endSpacing={10}
          noOfSections={4}
          maxValue={100}
          isAnimated
          animationDuration={800}
          />
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
    paddingLeft: 18,
    paddingVertical: 16
  },
  chartContainer: {
    height: "68%",
    marginTop: "5%",
    width: "100%",
    borderRadius: 16,
    paddingVertical: 10,
    marginLeft: -7
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