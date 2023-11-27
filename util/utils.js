const postsURL = 'https://jsonplaceholder.typicode.com/posts'
const commentsURL = 'https://jsonplaceholder.typicode.com/comments'
const getElementById = (selection) => {
  const element = document.querySelector(`#${selection}`)
  if (element) return element
  throw new Error(`Please check "${selection}" selector, no such element exist`)
}

export { postsURL, getElementById, commentsURL }
