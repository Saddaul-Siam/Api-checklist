/* ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 
 */

const loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))

}
const displayComments = (comments) => {
  for (const comment of comments) {

    const commentDiv = document.getElementById('comments');
    const div = document.createElement('div');
    div.classList.add('comment')
    div.innerHTML = `
      <p>Name: ${comment.name}</p>
      <p>Email: ${comment.email}</p>
      <p> Body: ${comment.body}</p>
    `
    commentDiv.appendChild(div)

  }
}