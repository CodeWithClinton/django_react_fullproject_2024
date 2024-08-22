import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'
import Error from '../components/Error'
import api from '../api'


const HomePage = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(function(){
  setLoading(true)
  api.get("posts/")
  .then(res => {
    console.log(res.data)
    setPosts(res.data)
    setLoading(false)
    setError("")
  })
  .catch(err => {
    console.log(err.message)
    setLoading(false)
    setError(err.message)
  })
  }, [])

  
  return (
    <>
    <Header /> 
    {error && <Error error={error} />}
    {loading && <Spinner loading={loading}/> }
   {loading || error !== "" ||  <CardContainer posts={posts}/> }
    {error !== "" || <Pagination />}
    </>
  )
}

export default HomePage