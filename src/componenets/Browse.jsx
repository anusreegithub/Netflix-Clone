import React from 'react'
import { useUserAuth } from '../utils/userContext'
import Header from './Header';



const Browse = () => {
  const {user} = useUserAuth();
  console.log(user)
  return (
    <div>

      <Header/>
    </div>
  )
}

export default Browse