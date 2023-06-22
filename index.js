const fetchAPI = fetch('https://api.github.com/users')
let a = []
fetchAPI.then((response) => response.json()).then((data) => {
  console.log(data);
  showdata(data)
})

let searchBtn = document.getElementById("search-btn");
let Inp = document.getElementById("inp");
searchBtn.addEventListener("click", () => {
  console.log(Inp.value)
  let Name = Inp.value;
  let finalURL = `https://api.github.com/users/${Name}`
  if (finalURL.length == 0) {
    result.innerHTML = `<h1>Oops! No data found</h1>`;
  }
  const rmv = document.getElementById('inp');
  rmv.value = ''
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      let a = []
      a.push(data)
      showdata(a)

    })
});

function showdata(data) {
let html = ''
  
data.forEach(data => {
    let htmlSegment = `
      <div class="main-profile">
      <div class="imgs">
      <img src=${data.avatar_url}></img>
      </div>
      <p class="login"><a href="${data.html_url}">@${data.login}</p>
      <div class="follow">
      <p class="name"><a href="${data.followers_url}">Followers </a></p>
      <p class="name"><a href="${data.following_url}">Following </a></p>
      </div>
  <div class="innerDiv">
  <p><b>Email</b> :</br>${data.email}</p>
  <p><b>ID</b> :
  ${data.id}</p>
  <p><b>Twitter Username</b> :</br>${data.twitter_username}</p>
  </div>
  </div>`;
  
    html += htmlSegment;
    
  })
  let container = document.querySelector('#result');

  container.innerHTML = html;

}





