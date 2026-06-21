import Lucide from '@react-native-vector-icons/lucide'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/Button'
import ProjectListItem from '../../components/ProjectListItem'

const Projects = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.todaysSummaryText}>My Projects</Text>
          <Text style={styles.totalProjectText}>12 Projects</Text>
        </View>
        <Lucide name="search" color={"white"} size={24}/>
      </View>
      <ScrollView>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
        <ProjectListItem title={"Practice Kanji"} totalTime={"4hr 34min"} timeAgo={"4 Days ago"}/>
      </ScrollView>
      <Button title={"Create New Project"} primary={true} width={220} disabled={false}/>
    </SafeAreaView>
  )
}

export default Projects

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#13131A",
    paddingHorizontal: 16,
  },
  headingContainer: {
    width: "100%",
    height: 74,
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingRight: 14
  },
  todaysSummaryText: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
  totalProjectText: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  }
})