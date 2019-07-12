let list = document.getElementById("list");
let btnList = document.getElementById("btnList");
let showList = document.getElementById("showList");
let home = document.getElementById("home");
let btnHome = document.getElementById("btnHome");
let btnRandom = document.getElementById("btnRandom");



let movieList = [
  "Eraserhead", "Night of the Living Dead", "El Topo", "The Holy Mountain", "Santa Sangre", "A Clockwork Orange", "The Harder They Come", "Pink Flamingos", "Pink Floyd: The Wall", "The Warriors", "Liquid Sky", "Dawn of the Dead", "Day of the Dead", "Gone With the Pope", "Frankenhooker", "Harold and Maude", "The Rocky Horror Picture Show", "Cruising", "Mulholland Drive", "Blue Velvet", "Heavy Metal", "Henry: Portrait of a Serial Killer", "Salo, or the 120 Days of Sodom", "The Room", "Repo Man", "The Devils", "Miami Connection", "Taxi Driver", "Dr. Strangelove Or: How I Learned to Stop Worrying and Love the Bomb", "Casablanca", "Blacula", "Easy Rider", "Akira", "2001: A Space Odyssey", "Death Proof", "Urgh! a Music War", "Motel Hell", "After Hours", "Attack of the Killer Tomatoes!", "Blade Runner", "Dark City", "Beyond the Valley of the Dolls", "Boondock Saints", "Flesh Gordon", "Death Race 2000", "Donnie Darko", "Eating Raoul", "Possession", "Forbidden Zone", "Terrorvision", "Gummo", "Plan 9 From Outer Space", "Blood Feast", "Hardware", "Tetsuo: The Iron Man", "Equinox", "The Honeymoon Killers", "The Human Centipede (First Sequence)", "Monty Python", "Ichi the Killer", "Soylent Green", "Clerks", "Mad Max", "Ms. 45", "I Spit on Your Grave", "Mystery Train", "Roadside Prophets", "The Brother From Another Planet", "Tales From the Gimli Hospital", "Napoleon Dynamite", "Nekromantik", "Office Space", "Oldboy", "The Party", "Phantasm", "The Princess Bride", "Reservoir Dogs", "Requiem for a Dream", "Polyester", "The Toxic Avenger", "Two-Lane Blacktop", "Vanishing Point", "Supervixens", "Faster, Pussycat! Kill! Kill!", "Videodrome", "Shivers", "The Wanderers", "Hey Good Lookin'", "Fritz the Cat", "The Wicker Man", "Zardoz", "THX 1138", "Fahrenheit 451", "1941", "Empire of the Ants", "Food of the Gods", "Wizards", "The Adventures of Buckaroo Banzai Across the 8th Dimension", "Basket Case", "Barbarella"];
  let randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  
  let randomUrl = ("https://www.omdbapi.com/?t=" + (movieList[randomNumber]) + "&apikey=fec9d571");
  
  const showRandomMovies = () => {
   fetch (randomUrl).then(rawApi => {
       console.log(randomUrl);
       return rawApi.json();
     })
      .then(movie => {
        home.style.display="none";
        showList.style.display="inline-block";
        list.innerHTML += `
        <div class="flip-card">
          <div class="flip-card-front">
            <img id="cardPic" src="${movie.Poster}" height="450" width="350">
            <button class="modalB" id="${movie.Title}">More</button>
          </div>
      </div>
      <div id="${movie.Title}myModal" class="modal">
      <div class="modal-content">
        <span class="close" id="${movie.Title}close">&times;</span>
        <h1 id="cardTitle">${movie.Title}</h1> 
        <p>Genre: ${movie.Genre}</p>
        <p>Director: ${movie.Director}</p>
        <p>Actors: ${movie.Actors}</p>
        <p>Country: ${movie.Country}</p>
        <p>Year: ${movie.Year}</p>
        <p>Sinopsis: ${movie.Plot}</p>
        <p>You can watch it on...</p>
         <a href="https://getpopcorntime.is/"><img src="https://banner2.kisspng.com/20180402/gzq/kisspng-flappy-popcorn-time-computer-icons-android-popcorn-5ac1da586bb504.1932154615226537844412.jpg" height="80" width="80" alt="Watch at popcorn time"></a>
      </div>
    </div>
      `
      });
  }
  
  //Funcionalidad de botones iterados para abrir y cerrar modal con links para ver la película
  //Declarar variable de botón y dar funcionalidad para abrir modal
  let btnMore = document.querySelectorAll(".modalB");

  btnMore.forEach(modalButton => {
    modalButton.addEventListener("click", () => {

      //Declarar variables de modal y botón X para cerrar modal
      let modal = document.getElementById(modalButton.id + "myModal");
      let spanX = document.getElementById(modalButton.id + "close");

      //Abrir modal
      modal.style.display = "block";

      //Funcionalidad para cerrar modal
      spanX.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });
  });



let createUrls = async () => {
  list.innerHTML = "";
  let output = ""
  for (i = 0; i < movieList.length; i++) {

    await fetch("https://www.omdbapi.com/?t=" + (movieList[i]) + "&apikey=fec9d571")
      .then(response => {
        return response.json();
      })
      .then(movie => {
        home.style.display="none";
        showList.style.display="inline-block";
        list.innerHTML += `
        <div class="flip-card">
          <div class="flip-card-front">
            <img id="cardPic" src="${movie.Poster}">
            <button class="modalB" id="${movie.Title}">More</button>
          </div>
      </div>
      <div id="${movie.Title}myModal" class="modal">
      <div class="modal-content">
        <span class="close" id="${movie.Title}close">&times;</span>
        <h1 id="cardTitle">${movie.Title}</h1>
        <p>Genre: ${movie.Genre}</p>
        <p>Director: ${movie.Director}</p>
        <p>Actors: ${movie.Actors}</p>
        <p>Country: ${movie.Country}</p>
        <p>Year: ${movie.Year}</p>
        <p>Sinopsis: ${movie.Plot}</p>
        <p>You can watch it on...</p>
         <a href="https://getpopcorntime.is/"  target="_blank"><img src="https://banner2.kisspng.com/20180402/gzq/kisspng-flappy-popcorn-time-computer-icons-android-popcorn-5ac1da586bb504.1932154615226537844412.jpg" height="80" width="80" alt="Watch at popcorn time"></a>
      </div>
    </div>
      `
      });
  }

  //Funcionalidad de botones iterados para abrir y cerrar modal con links para ver la película
  //Declarar variable de botón y dar funcionalidad para abrir modal
  let btnMore = document.querySelectorAll(".modalB");

  btnMore.forEach(modalButton => {
    modalButton.addEventListener("click", () => {

      //Declarar variables de modal y botón X para cerrar modal
      let modal = document.getElementById(modalButton.id + "myModal");
      let spanX = document.getElementById(modalButton.id + "close");

      //Abrir modal
      modal.style.display = "block";

      //Funcionalidad para cerrar modal
      spanX.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });
  });

}

const homeScreen = () => {
  location.reload();
}

btnList.addEventListener("click", createUrls);
btnHome.addEventListener("click", homeScreen);
btnRandom.addEventListener("click", showRandomMovies);
