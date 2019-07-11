
let movieList = [
  "Eraserhead", "Night of the Living Dead", "El Topo", "The Holy Mountain", "Santa Sangre", "A Clockwork Orange", "The Harder They Come", "Pink Flamingos", "Pink Floyd: The Wall", "The Warriors", "Liquid Sky", "Dawn of the Dead", "Day of the Dead", "Gone With the Pope", "Frankenhooker", "Harold and Maude", "The Rocky Horror Picture Show", "Cruising", "Mulholland Drive", "Blue Velvet", "Heavy Metal", "Henry: Portrait of a Serial Killer", "Salo, or the 120 Days of Sodom", "The Room", "Repo Man", "The Devils", "Miami Connection", "Taxi Driver", "Dr. Strangelove Or: How I Learned to Stop Worrying and Love the Bomb", "Switchblade Sisters", "Blacula", "Easy Rider", "Akira", "2001: A Space Odyssey", "House", "Urgh! a Music War", "Motel Hell", "After Hours", "Attack of the Killer Tomatoes!", "Blade Runner", "Dark City", "Beyond the Valley of the Dolls", "Boondock Saints", "Flesh Gordon", "Death Race 2000", "Donnie Darko", "Eating Raoul", "Possession", "Forbidden Zone", "Terrorvision", "Gummo", "Plan 9 From Outer Space", "Blood Feast", "Hardware", "Tetsuo: The Iron Man", "Equinox", "The Honeymoon Killers", "The Human Centipede (First Sequence)", "The Human Centipede 2 (Full Sequence)", "Ichi the Killer", "Soylent Green", "Clerks", "Mad Max", "Ms. 45", "I Spit on Your Grave", "Mystery Train", "Roadside Prophets", "The Brother From Another Planet", "Tales From the Gimli Hospital", "Napoleon Dynamite", "Nekromantik", "Office Space", "Oldboy", "The Party", "Phantasm", "The Princess Bride", "Reservoir Dogs", "Requiem for a Dream", "Polyester", "The Toxic Avenger", "Two-Lane Blacktop", "Vanishing Point", "Supervixens", "Faster, Pussycat! Kill! Kill!", "Videodrome", "Shivers", "The Wanderers", "Hey Good Lookin'", "Fritz the Cat", "The Wicker Man", "Zardoz", "THX 1138", "Fahrenheit 451", "1941", "Empire of the Ants", "Food of the Gods", "Wizards", "The Adventures of Buckaroo Banzai Across the 8th Dimension", "Basket Case", "Barbarella"];

console.log(movieList);
console.log(movieList[0]);

const createUrls =()=> {
  //  let myApiKey = "fec9d571";
  for (i=0; i<movieList.length; i++){
    console.log("www.omdbapi.com/?t=" + '"' +(movieList[i]) + '"' + "&apikey=fec9d571");
  }
  }

console.log(createUrls);



let list = document.getElementById("list");
let movies = Object.values();

list.innerHTML = '';
      movies.forEach(movie => {
         list.innerHTML += " " +
     `
         <div class="flip-card">
         <div class="flip-card-inner">
           <div class="flip-card-front">
             <img id="cardPic" src="${movie.poster}" height="450" width="350">
           </div>
           <div class="flip-card-back">
             <h1>${movie.title}</h1> 
             <h3>${movie.director}</h3>
             <p>${movie.country}</p>
             <p>${movie.year}</p>
             <p>${movie.sinopsis}</p>
             <button class="modalB" id="${movie.title}">Where to watch</button>
           </div>
         </div>
       </div>
       <div id="${movie.title}myModal" class="modal">
       <div class="modal-content">
         <span class="close" id="${movie.title}close">&times;</span>
          <p id="links">${title.links}</p>
       </div>
     </div>
       `
 });

//Funcionalidad de botones iterados para abrir y cerrar modal con links para ver la película
        //Declarar variable de botón y dar funcionalidad para abrir modal
        let modalButtons = document.querySelectorAll(".modalB");
        modalButtons.forEach(modalButton => {
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

