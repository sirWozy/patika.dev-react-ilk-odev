import axios from 'axios'

const getData = async (id) => {
  let { data: users } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  let { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  )
  users.posts = posts
  return users
}

export default getData
