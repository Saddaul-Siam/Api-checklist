
/* ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।  */
const loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))

}
loadComments()

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
