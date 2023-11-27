// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1
import { getElementById } from './util/utils.js'
import { fetchPosts, fetchComments } from './util/fetch.js'
const display = (fetchedObject, element) => {
  const posts = fetchedObject.posts

  const div = document.createElement('section')
  div.classList.add('posts')
  element.appendChild(div)

  div.innerHTML = posts
    .map((post) => {
      const { body, title } = post
      return `<div class="post">
      <h1>${title}</h1>
                        <p>${body}</p>}
                        </div>`
    })
    .join('')
}

const displayPostsWithComments = (fetchedObjects, element) => {
  const div = document.createElement('section')
  div.classList.add('posts')
  element.appendChild(div)
  //console.log(fetchedObjects)
  const posts = fetchedObjects.posts
  const comments = fetchedObjects.comments

  /**  let op = posts.map((e, i) => {
    let temp = comments.find((element) => element.id === e.id)
    if (temp.address) {
      e.comments = temp.comments
    }
    return { post: { ...e, temp } }
  })

  console.log(op) */

  div.innerHTML = posts
    .map((post, comments) => {
      const { body, title, temp } = post
      console.log(post)
      return `<div class="post">
      <h1>${title}</h1>
                        <p>${body}</p>
                        </br>
                       
                        </div>`
    })
    .join('')
}

const init = async () => {
  const posts = await fetchPosts()
  const comments = await fetchComments()
  // console.log(posts)
  // console.log(comments)

  display({ posts: posts }, getElementById('posts'))
  /** displayPostsWithComments(
    { posts: posts, comments: comments },
    getElementById('postsWithComments')
  )
   */
}

init()

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post

// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId
