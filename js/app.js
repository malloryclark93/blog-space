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
 

