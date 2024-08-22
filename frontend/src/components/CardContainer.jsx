import HomeCard from './HomeCard'

const CardContainer = ({posts}) => {
  return (
    <div className="container">
        <h3 className='text-center mb-4'>Blogs</h3>
        <div className="row">
          {posts.map(post => <HomeCard post={post} key={post.id} /> )}
           
           
        </div>
    </div>
  )
}

export default CardContainer