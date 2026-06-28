import Lucide from '@react-native-vector-icons/lucide'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSessionStore } from '../../store/session.store'
import SessionHistoryListItem from '@/components/SessionHistoryListItem'
import EmptyState from '@/components/EmptyState'

const SessionHistory = () => {
  const { sessions, getAllSessions } = useSessionStore()

  useEffect(() => {
    const getSessions = async () => {
      const response = await getAllSessions()
    }
    getSessions()
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headingContainer}>
        <View>
          <Text style={styles.heading}>Session History</Text>
          <Text style={styles.headingSecond}>{sessions?.length} Sessions</Text>
        </View>
      </View>
      <ScrollView style={styles.listScrollContainer}>
        {!sessions || sessions?.length === 0 ?
          <EmptyState
            icon='package'
            title={`You don't have any sessions.`}
            description='Once you start sessions, they will appear here.' /> : null}
        {sessions?.map((item) => {
          return <SessionHistoryListItem projectName={item?.project.name} totalTime={item?.totalTime} key={item?.id} timeAgo={item?.createdAt}/>
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default SessionHistory

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
  heading: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "white",
    marginTop: 8
  },
  headingSecond: {
    fontSize: 16,
    fontFamily: "GeistMedium",
    fontWeight: "100",
    color: "#828282",
  },
  listScrollContainer: {
    width: "100%",
    height: "auto",
  }
})