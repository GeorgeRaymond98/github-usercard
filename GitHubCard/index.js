/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const followersArray = [
  'dlhauer',
  'phil-mac',
  'leachcoding',
  'nasraaden',
  'reeceap124',
  'kristian-fulkerson'
];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(response => {
    const followersCard = createCard(response.data);
    card.appendChild(followersCard);
  })
})






axios.get("https://api.github.com/users/GeorgeRaymond98").then(response => {
  console.log(response);
  let yourInfo = response.data
  card.appendChild(createCard(yourInfo));
})


const card = document.querySelector('.cards');


function createCard(userInfo) {
  const newCard = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const userProfileName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userLink = document.createElement('a');
  const userfollowers = document.createElement('p');
  const userfollowing = document.createElement('p');
  const userBio = document.createElement('p');

  card.appendChild(newCard);
  newCard.appendChild(userImage);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userProfileName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  userProfile.appendChild(userLink);
  cardInfo.appendChild(userfollowers);
  cardInfo.appendChild(userfollowing);
  cardInfo.appendChild(userBio);

  newCard.classList.add('card');
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  userProfileName.classList.add('username');
  

  userImage.src = userInfo.avatar_url;
  userName.textContent = userInfo.name;
  userProfileName.textContent = userInfo.login;
  userLocation.textContent = `Location: ${userInfo.location}`;
  userLink.href = userInfo.html_url;
  userLink.textContent = userInfo.html_url;
  userfollowers.textContent = `Followers #: ${userInfo.followers}`;
  userfollowing.textContent = `Following #: ${userInfo.following}`;
  userBio.textContent = `Bio: ${userInfo.bio}`;

  return newCard;
}

console.log(createCard);


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card"> DONE
  <img src={image url of user} /> DONE
  <div class="card-info"> DONE
    <h3 class="name">{users name}</h3> DONE
    <p class="username">{users user name}</p> DONE
    <p>Location: {users location}</p> DONE
    <p>Profile:  DONE
      <a href={address to users github page}>{address to users github page}</a>DONE
    </p>DONE
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
