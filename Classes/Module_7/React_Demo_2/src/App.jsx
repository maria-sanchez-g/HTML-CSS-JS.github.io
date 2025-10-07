import { useState } from 'react'
// import Clock from "./Components/Clock";
import ClockDisplay from './Components/ClockDisplay';
import ActivityFinder from './Components/ActivityFinder';
import RefCounter from './Components/RefCounter';
import VideoPlayer from './Components/VideoPlayer';
import ReducerCounter from './Components/ReducerCounter';
import PostListReducer from './Components/PostListReducer';
import './App.css'
import SubscribeForm from './Components/SubscribeForm';
import { UserProvider, useUserContext } from './Context/UserContext';
import { Activity } from 'react';
import { MyThemeContext } from './Context/ThemeContext';

function App() {
  const [count, setCount] = useState(0)
  return(
    <>
  {/* <ClockDisplay/>
  <ActivityFinder></ActivityFinder>
  <RefCounter></RefCounter>
  <VideoPlayer></VideoPlayer>
  <ReducerCounter></ReducerCounter>
  <PostListReducer></PostListReducer>
  <SubscribeForm></SubscribeForm>
  <useformInput></useformInput>
  <userContext></userContext> */}
  <UserProvider>
    <MyThemeContext>
      <ActivityFinder></ActivityFinder>
      <SubscribeForm></SubscribeForm>
    </MyThemeContext>
  </UserProvider>
    </>
  )
}

export default App
