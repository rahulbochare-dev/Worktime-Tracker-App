import { Modal, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useProjectStore } from "../store/projects.store";
import { useToast } from "@/hooks/useToast";
import TextInputField from "./TextInput";
import TextAreaField from "./TextAreaField";
import Button from "./Button";

type props = {
  visible: boolean,
  toggleModal: Function,
  cancelFunc: Function
};

const CreateProject = ({ visible, toggleModal, cancelFunc }: props) => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectDescription: ""
  })

  const {createProject} = useProjectStore()
  const { showToast } = useToast();
    
  const onChange = (name: string, text: string) => {
    setProjectData({...projectData, [name]: text})
    
  }

  const onSubmit = async () => {
    const response = await createProject(projectData.projectName, projectData.projectDescription)
    console.log(response)
    if(response?.success){
      toggleModal(false)

      showToast({
        message: response?.message,
        messageSecondary: `Project ID: #${response?.response.lastInsertRowId}`,
        variant: "success",
      })

      setProjectData({
        projectName: "",
        projectDescription: "",
      })
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>Create new Project</Text>
          <TextInputField name="projectName" placeholder="Project name" func={onChange}/>
          <TextAreaField name="projectDescription" placeholder="Project Description" func={onChange}/>
          <Button title={"Create Project"} primary={true} disabled={false} width={"100%"} func={onSubmit}/>
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