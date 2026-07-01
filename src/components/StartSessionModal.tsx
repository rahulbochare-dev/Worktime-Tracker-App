import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import Button from "./Button";
import { useProjectStore } from "@/store/projects.store";

type props = {
  visible: boolean,
  startFunc: Function,
  cancelFunc: Function
};

const StartSessionModal = ({ visible, startFunc, cancelFunc }: props) => {
  const { projects, getProjects } = useProjectStore()

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getProjects()
    }
    fetchProjects()
  }, [visible])

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>Select Project</Text>
          <ScrollView style={styles.listItemContainerMain}>
            {projects?.map((items) => {
              return <Pressable style={styles.projectDeatils} key={items.id} onPress={()=> startFunc(items.id)}>
                <View style={styles.listItemContainer}>
                  <View style={styles.projectDeatilsIcon}>
                    <Text style={styles.projectDeatilsIconText}>{items.name.slice(0, 1).toUpperCase()}</Text>
                  </View>
                  <View>
                    <Text style={styles.projectDeatilsHeadings}>{items?.name}</Text>
                  </View>
                </View>
              </Pressable>
            })}
          </ScrollView>
          <Button title={"Cancel"} primary={false} disabled={false} width={"100%"} func={cancelFunc} />
        </View>
      </View>
    </Modal>
  );
};

export default StartSessionModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  modalContainer: {
    width: "90%",
    maxHeight: "70%",
    backgroundColor: "#0d0d0d",
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: "#464646",
    paddingHorizontal: 18,
    paddingVertical: 22,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  titleText: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    color: "white",
  },
  listItemContainerMain: {
    width: "100%",
    maxHeight: "80%",
  },
  listItemContainer: {
    width: "100%",
    height: 64,
    borderBottomWidth: 0.3,
    borderBottomColor: "#464646",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    gap: 14
  },
  projectDeatils: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  projectDeatilsIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#8282FF",
    justifyContent: "center",
    alignItems: "center",
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
  }
});