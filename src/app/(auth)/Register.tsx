import { StyleSheet, Text, View } from 'react-native'
import TextInput from '@/components/TextInput'
import { useState } from 'react'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })

  console.log(formData)

  const onChange = (name: string, text: string) => {
    setFormData({...formData, [name]: text})
  }

  return (
    <View >
      <TextInput placeholder='Enter Firstname' label='First Name:' name='firstName' func={onChange}/>
      <TextInput placeholder='Enter Lastname' label='Last Name:' name='lastName' func={onChange}/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})