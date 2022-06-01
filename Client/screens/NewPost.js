import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SafeViewAndroid from '../components/SafeViewAndroid'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPost = ({navigation}) => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}

export default NewPost