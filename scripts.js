console.log('labas')

// Uzduotis 1 NEVEIKIA
// Sukurk formą, kuri leis įrašyti vardą - jis bus išsaugojamas į cookies. Jei vardas jau egzistuoja -
// išmeta tik vardą ir mygtuką, su kuriuo cookies ištrinamas. Jei neegzistuoja - formą.

// Šiame atsakyme nenaudojam Cookie Store API. 
// Funckijos paimtos iš https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  const form = document.querySelector('form');
  const output = document.getElementById('output');
  const name = getCookie('name');
  
  // Jeigu puslapis būtų perkraunamas
  if (getCookie(name)) {
    form.classList.add('hidden');
    output.classList.remove('hidden');
  } else {
    form.classList.remove('hidden');
    output.classList.add('hidden');
  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    setCookie('name', name, 1);
    document.getElementById('name').innerText = name;
    form.classList.add('hidden');
    output.classList.remove('hidden');
  });
  
  document.getElementById('erase').addEventListener('click', (event) => {
    document.cookie = '';
    document.getElementById('name').innerText = '';
    output.classList.add('hidden');
    form.classList.remove('hidden');
  });
  



// Uzduotis 2
// Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją
// įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.

// const profileInfo = {
//     firstName: 'Johny',
//     lastName: 'Depp',
//     description: 'Johny Depp is is an American actor and musician. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for three Academy Awards and two BAFTA awards.',
//     picture: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/HAN4BLGNP5GORJDYEST2YN2XY4.jpg'
// }
// localStorage.setItem('profile', JSON.stringify(profileInfo))

// const renderProfileCard = (profile) => {
//     const img = document.createElement('img')
//     img.width = '200'
//     img.src = profile.picture
//     img.alt = `${profile.firstName} ${profile.lastName} profile picture`

//     const name = document.createElement('h4')
//     name.innerText = `${profile.firstName} ${profile.lastName}`

//     const description = document.createElement('div')
//     description.innerText = profile.description

//     const card = document.createElement('div')
//     card.append(img, name, description)
//     document.body.appendChild(card)
// }
// const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem('profile'))
// renderProfileCard(profileInfoFromLocalStorage)


// Uzduotis 3
// Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina
// į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo
// localStorage. Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.

// const localStorageItemKey = 'users'

// const renderUsersTable = () => {
//     const users = JSON.parse(localStorage.getItem(localStorageItemKey))
//     const tbody = document.querySelector('tbody')
//     tbody.innerHTML = ''
//     users && users.forEach(user => {
//         const name = document.createElement('td')
//         name.innerText = user.name

//         const surname = document.createElement('td')
//         surname.innerText = user.surname

//         const tr = document.createElement('tr')
//         tr.append(name, surname)
//         tbody.append(tr)
//     })
// }

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     const fullName = document.querySelector('input[name=name]').value
//     const [name, surname] = fullName.split(' ')

//     const usersInLocalStorage = JSON.parse(localStorage.getItem(localStorageItemKey))
//     if (usersInLocalStorage && usersInLocalStorage.length) {
//         localStorage.setItem(localStorageItemKey, JSON.stringify([...usersInLocalStorage, {name, surname}]))
//     } else {
//         localStorage.setItem(localStorageItemKey, JSON.stringify([{name, surname}]))
//     }
//     renderUsersTable()
// })
// renderUsersTable()