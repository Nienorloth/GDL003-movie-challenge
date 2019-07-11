

let total_pagina=0
let titles=[]
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=141f21974ee7323456723a5832b7f01d')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
	    console.log(data)
        console.log(data.total_pages)
        total_pagina=data.total_pages

	    let datos
        for(i=1;i<=total_pagina;i++){
            let toFetch='https://api.themoviedb.org/3/movie/top_rated?api_key=141f21974ee7323456723a5832b7f01d&page='+i

		   return fetch(toFetch)
    }).then(response => {
      return response.json()
            })
    .then(data => {
            // Work with JSON data here
        let results=data.results
        results.forEach(element => {
          titles.push(element.title)
        })
    })
    .catch(err => {
        // Do something for an error here
    })

    console.log(titles)
