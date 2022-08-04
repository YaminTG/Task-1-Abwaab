"use strict";
const init = function(e){
  const postTemplate = document.querySelector("[data-post-template]")
  const cards = document.querySelector("[data-cards]")
  const searchInput = document.querySelector("[data-search]")

  let posts = []
  // this is how the search bar will filter out all the posts
  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    console.log(posts)
    // it will check if the value in the input matches any of the titles or bodies
    posts.forEach(post => {
      const isVisible = post.title.includes(value) || post.body.includes(value)
      if(isVisible == false){
        post.element.style.display='none';
      } else{
        post.element.style.display='flex';
      }
    })
  })

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    posts = data.map(post => {
      const card = postTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-title]")
      const text = card.querySelector("[data-body]")
      header.textContent = post.title
      text.textContent = post.body
      cards.append(card)
      let postClick = document.querySelectorAll(".post")
      for (let i=0; i < postClick.length; i++){
        postClick[i].addEventListener('click', function(){
          window.document.location = './specific-post.html' + '?postID=' + (i+1)
        })
      }
      return {title: post.title, body: post.body, element: card, id: post.id}
    })
  })
}


document.addEventListener('DOMContentLoaded', function(){
  init()
})
