/* ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।   */

const loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))

}
const displayComments = (comment) => {
  comment.forEach(comments => {
    const commentDiv = document.getElementById('comments');
    const div = document.createElement('div');
    div.classList.add('comment')
    div.innerHTML = `
      <p>Name: ${comments.name}</p>
      <p>Email: ${comments.email}</p>
      <p> Body: ${comments.body}</p>
      <button onclick="loadCommentInfo('${comments.id}')" class="info-btn">detils</button>
    `
    commentDiv.appendChild(div)

  });
}

const loadCommentInfo = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json())
    .then(data => setCommentInfo(data))
}

const setCommentInfo = (comment) => {
  console.log(comment)
  const commentINfo = document.getElementById('comment-info');
  commentINfo.innerText = "";
  window.scrollTo(0, 0);
  const div = document.createElement('div');
  div.classList.add('comment-info')
  div.innerHTML = `
      <p>Id: ${comment.id}</p>
      <p>Name: ${comment.name}</p>
      <p>Email: ${comment.email}</p>
      <p> Body: ${comment.body}</p>
    `
  commentINfo.appendChild(div)

}

