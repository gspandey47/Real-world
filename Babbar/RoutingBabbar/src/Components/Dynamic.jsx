import React from 'react'
import { useParams } from 'react-router-dom'
function Dynamic() {
    const {id}=useParams();
  return (
    <>
    i am Dynamic page pls write url /student/anything i am showing you which you write after student
    <div>Dynamic:{id}</div>
    </>
  )
}

export default Dynamic