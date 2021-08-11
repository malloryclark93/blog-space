let postsArray = []

function renderPosts(){
  let text = ''
    for(let post of postsArray){
      text += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
    }
    document.getElementById('blog-container').innerHTML = text

  }

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    postsArray = data.slice(0, 4)
    renderPosts()
  })
  
    // console.log(posts)
  //   let text = ''

  //   for(let post of posts){
  //     text += `
  //       <h3>${post.title}</h3>
  //       <p>${post.body}</p>
  //       <hr />
  //       `
  //   }
  //   console.log(posts)
  //   document.getElementById('blog-container').innerHTML = text

  // })
 
document.getElementById('new-post').addEventListener('submit', function(e){
    e.preventDefault()
   const postTitle = document.getElementById('post-title').value

   const postBody =  document.getElementById('post-body').value

  const data = {
    title: postTitle,
    body : postBody
  }
    
  fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
    .then(response => response.json())
    .then(post => {
      postsArray.unshift(post)
      renderPosts()

      // document.getElementById('blog-container').innerHTML = 
      // // `${post.title}${post.body}`
      // `
      //     <h3>${post.title}</h3>
      //     <p>${post.body}</p>
      //     <hr />
      //     ${document.getElementById('blog-container').innerHTML}
      //     ` 
    })
  })



// 'text' could be a coding error