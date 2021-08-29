/* ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।  */

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
      
    `
    commentDiv.appendChild(div)

  });
}


