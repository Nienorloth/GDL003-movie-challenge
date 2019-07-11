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
