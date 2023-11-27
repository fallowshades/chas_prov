import { postsURL, commentsURL } from './utils.js'

export const fetchPosts = async () => {
  const response = await fetch(postsURL).catch((err) => console.log(err))
  if (response) {
    return response.json()
  }

  return response
}

export const fetchComments = async () => {
  const response = await fetch(commentsURL).catch((err) => console.log(err))
  if (response) {
    return response.json()
  }

  return response
}

export default fetchPosts
