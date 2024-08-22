import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'
import Error from '../components/Error'
import api from '../api'


const HomePage = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)


  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(function(){
  setLoading(true)
  api.get(`posts/?page=${currentPage}`)
  .then(res => {
    console.log(res.data.results)
    setPosts(res.data.results)
    setTotalPages(Math.ceil(res.data.count / 3))
    console.log(Math.ceil(res.data.count / 3))
    setLoading(false)
    setError("")
  })
  .catch(err => {
    console.log(err.message)
    setLoading(false)
    setError(err.message)
  })
  }, [currentPage])

  
  return (
    <>
    <Header /> 
    {error && <Error error={error} />}
    {loading && <Spinner loading={loading}/> }
   {loading || error !== "" ||  <CardContainer posts={posts}/> }
    {error !== "" || <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />}
    </>
  )
}

export default HomePage