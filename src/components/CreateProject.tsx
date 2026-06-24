import { Modal, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import TextInputField from "./TextInput";
import Button from "./Button";

type props = {
  visible: boolean,
  createFunc: Function,
  cancelFunc: Function
};

const CreateProject = ({ visible, createFunc, cancelFunc }: props) => {
  const [projectName, setProjectName] = useState("")
    
  const onChange = (name: string, text: string) => {
    setProjectName(text)
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>Create new Project</Text>
          <TextInputField name="projectname" placeholder="Project name" func={onChange}/>
          <Button title={"Create Project"} primary={true} disabled={false} width={"100%"} func={createFunc}/>
          <Button title={"Cancel"} primary={false} disabled={false} width={"100%"} func={cancelFunc}/>
        </View>
      </View>
    </Modal>
  )
}

export default CreateProject

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
    maxWidth: 380,
    backgroundColor: "#090913",
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: "#464646",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 16
  },
  titleText: {
    fontSize: 20,
    fontFamily: "GeistMedium",
    color: "white",
  },
  projectPlaceholder: {
    color: "#8A8A8A",
    fontSize: 16,
    fontFamily: "GeistRegular",
  }
})