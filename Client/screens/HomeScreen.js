import { SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import SafeViewAndroid from "../components/SafeViewAndroid";
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POST } from '../dummyData/Post';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Header navigation={navigation}/>
      <Stories />
    <ScrollView>
        {POST.map((post, index)=>(
             <Post post={post} key={index}/>
        ))}
    </ScrollView>
    <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}


export default HomeScreen