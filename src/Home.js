import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'faris', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'faris',
      id: 3,
    },
  ])

  const handleDelete = id => {
    const filteredBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(filteredBlogs)
  }

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'faris')}
        title='Faris Blogs'
      />
    </div>
  )
}

export default Home
