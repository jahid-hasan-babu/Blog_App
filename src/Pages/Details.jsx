import { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { postDetails } from '../APIRequest/APIRequest'
import Loader from '../Component/Loader'
import BlogDetails from '../Component/BlogDetails'

const Details = () => {

  let {postID}= useParams()
  let[list,SetList] = useState(null)

  useEffect(()=>{
    (async()=>{
      let res = await postDetails(postID)
      SetList(res)
    })()
  },[postID])

  return (
    <Layout>
      {list===null?<Loader/>:<BlogDetails list={list} />}
    </Layout>
  )
}

export default Details
