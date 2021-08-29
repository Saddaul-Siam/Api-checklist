/* ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে।  */

const loadUser = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUser(data))
}
loadUser()

const displayUser = data => {
  const users = data.results;
  const usersDive = document.getElementById('users')
  for (const user of users) {
    const div = document.createElement('div');
    div.classList.add('user')
    div.innerHTML = `
    <img src="${user.picture.large}">
    <h3>Name:${user.name.title} ${user.name.first} ${user.name.last} </h3>
    <h4>Location:</h4>
    <p>Street:${user.location.street.name} ${user.location.street.number}</p>
    <p>City: ${user.location.city} </p>
    <p>Country:${user.location.country}</p>
    <p>Timezone: offset : ${user.location.timezone.offset} description : ${user.location.timezone.description}</p>
    `
    usersDive.appendChild(div)
  }
}
