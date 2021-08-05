fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    let posts = data.slice(0, 4)
    // console.log(posts)
    let text = ''

    for(let post of posts){
      text += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
    }
    console.log(posts)
    document.getElementById('blog-container').innerHTML = text

  })
 
document.getElementById('new-post').addEventListener('submit', function(e){
    e.preventDefault()
   const postTitle = document.getElementById('post-title').value

   const postBody =  document.getElementById('post-body').value

  const data = {
    title: postTitle,
    body : postBody
  }

  console.log(data)
})

// 'text' could be a coding error