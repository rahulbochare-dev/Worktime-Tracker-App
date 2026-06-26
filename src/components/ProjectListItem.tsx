import Lucide from '@react-native-vector-icons/lucide'
import { StyleSheet, Text, View } from 'react-native'
import Menu from './Menu'
import { useState } from 'react'
import { useProjectStore } from '@/store/projects.store'

type props = {
  title: String,
  totalTime: String | Number,
  timeAgo: String | Number,
  id: number
}

const Project = ({ title = "Not Available", totalTime, timeAgo, id }: props) => {
  let projectInitial = ""
  const [visible, setVisible] = useState(false)
  const {deleteProjects} = useProjectStore()

  if (title == "Not Available") {
    projectInitial = "N/A"
  } else {
    projectInitial = title.charAt(0)
  }

  const handleDeleteProject = async () => {
    const response = await deleteProjects(id)
    console.log(response)
  }

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.projectDeatils}>
        <View style={styles.projectDeatilsIcon}>
          <Text style={styles.projectDeatilsIconText}>{projectInitial}</Text>
        </View>
        <View>
          <Text style={styles.projectDeatilsHeadings}>{title || "Title not Available"}</Text>
          <Text style={styles.projectDeatilsHeadings}>Total time: {totalTime || "N/A"}</Text>
          <Text style={styles.projectDeatilsAgo}>{timeAgo || "N/A"}</Text>
        </View>
      </View>
      <Lucide name='more-vertical' size={24} color={"white"} onPress={() => setVisible(!visible)} />
        <Menu visible={visible} onClose={() => setVisible(!visible)} onDelete={handleDeleteProject}/>
    </View>
  )
}

export default Project

const styles = StyleSheet.create({
  listItemContainer: {
    width: "100%",
    height: 95,
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646",
    flexDirection: "row",
    alignItems: "center"
  },
  projectDeatils: {
    height: '100%',
    width: "88%",
    flexDirection: "row",
    alignItems: "center",
    gap: 16
  },
  projectDeatilsIcon: {
    height: 48,
    width: 48,
    backgroundColor: "#8282FF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  projectDeatilsIconText: {
    fontSize: 18,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
  },
  projectDeatilsHeadings: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
  },
  projectDeatilsAgo: {
    fontSize: 14,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  },
})