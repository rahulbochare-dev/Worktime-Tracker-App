import { Modal, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
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
    } else {
      showToast({
        message: response?.message,
        variant: "error",
      })
    }
  }

  return (
    <>
      {visible && (
         <Animated.View
         entering={FadeIn.duration(150)}
         exiting={FadeOut.duration(120)}
         style={styles.backdrop}
       >
         <Animated.View
           entering={FadeIn.duration(150)}
           exiting={FadeOut.duration(120)}
           style={[
             styles.modalContainer,
             {
               transform: [{ scale: 0.96 }],
             },
           ]}
         >
            <Text style={styles.titleText}>Create new Project</Text>
  
            <TextInputField
              name="projectName"
              placeholder="Project name"
              func={onChange}
            />
  
            <TextAreaField
              name="projectDescription"
              placeholder="Project Description"
              func={onChange}
            />
  
            <Button
              title="Create Project"
              primary={true}
              disabled={false}
              width="100%"
              func={onSubmit}
            />
  
            <Button
              title="Cancel"
              primary={false}
              disabled={false}
              width="100%"
              func={cancelFunc}
            />
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
}

export default CreateProject

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    elevation: 9999,
  },
  modalContainer: {
    width: "90%",
    maxWidth: 380,
    backgroundColor: "#0d0d0d",
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: "#464646",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    transform: [{ scale: 0.98 }],
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