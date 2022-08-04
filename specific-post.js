"use strict";

const init = function(e) {
  const postTemplate = document.querySelector("[data-post-template]")
  const cards = document.querySelector("[data-cards]")
  let postID = document.location.search.replace(/^.*?\=/,'')
  fetch("https://jsonplaceholder.typicode.com/posts" + '/' + postID)
    .then(res => res.json())
    .then(data => {
      const title = document.querySelector("[data-title]")
      const body = document.querySelector("[data-body]")
      title.textContent = data.title
      body.textContent = data.body
      console.log(data)
    })
    fetch("https://jsonplaceholder.typicode.com/comments" + '/' + postID)
    .then(res => res.json())
    .then(data => {
      const name = document.querySelector("[data-name]")
      const commentBody = document.querySelector("[data-comment-body]")
      name.textContent = data.name
      commentBody.textContent = data.body
      console.log(data)
    })
  }
document.addEventListener('DOMContentLoaded', function(){
  init()
})
