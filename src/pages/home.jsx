import React from 'react'
import HomeTop from '../components/homeTop'
import HomeBottom from '../components/homeBottom'
import Workflow from '../components/OldPages/Workflow'
export default function home() {
  return (
    <div>
      <HomeTop/>
      <HomeBottom/>
      <div>
      <Workflow/>
      </div>
    </div>
  )
}
