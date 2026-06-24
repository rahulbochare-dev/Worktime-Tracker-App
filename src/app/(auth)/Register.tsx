import { StyleSheet, Text, View } from 'react-native'
import TextInput from '@/components/TextInput'
import { useState } from 'react'
import Button from '@/components/Button'
import { useUserStore } from '../../store/user.store'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })
  
  const {firstName, lastName, createUser} = useUserStore()
  
  const onChange = (name: string, text: string) => {
    setFormData({...formData, [name]: text})
  }
  
  const onSubmit = async () => {
    const response = await createUser(formData.firstName, formData.lastName)
  }

  return (
    <View >
      <TextInput placeholder='Enter Firstname' label='First Name:' name='firstName' func={onChange}/>
      <TextInput placeholder='Enter Lastname' label='Last Name:' name='lastName' func={onChange}/>
      <Button title={"Continue"} disabled={false} primary={true} func={onSubmit}/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})