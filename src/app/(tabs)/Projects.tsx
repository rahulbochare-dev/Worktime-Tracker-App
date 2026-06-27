import Lucide from '@react-native-vector-icons/lucide'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/Button'
import ProjectListItem from '../../components/ProjectListItem'
import EmptyState from '../../components/EmptyState'
import CreateProject from '../../components/CreateProject'
import { getProjects, useProjectStore } from '../../store/projects.store'
import { useState, useEffect } from 'react'

const Projects = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { projects, getProjects } = useProjectStore()

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getProjects()
    }
    fetchProjects()
  }, [modalVisible])


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.todaysSummaryText}>My Projects</Text>
          <Text style={styles.totalProjectText}>{projects?.length} Projects</Text>
        </View>
        <Lucide name="search" color={"white"} size={24} />
      </View>
      <ScrollView>
        {!projects || projects.length === 0 ? (
          <EmptyState
            icon="package"
            title="You have no projects"
            description="Once you create projects, they will appear here." />) : null}
        {projects?.map((items) => {
          return <ProjectListItem title={items?.name} description={items?.description} id={items?.id} key={items?.id} />
        })}
      </ScrollView>
      <Button title={"Create New Project"} primary={true} width={220} disabled={false} func={() => setModalVisible(!modalVisible)} />
      <CreateProject visible={modalVisible} cancelFunc={() => setModalVisible(!modalVisible)} toggleModal={setModalVisible} />
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