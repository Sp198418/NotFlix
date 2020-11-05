
let query = document.getElementById('search').value ;
let container = document.getElementById('container');
let page = 1;

  function search(finder){
      let url = `http://www.omdbapi.com/?apikey=9f075407&s=${finder}&page=${page}`
      container.innerHTML= ''

      fetch(url)

    .then(res =>  res.json()) 
    .then(res=> { 
      let flims = res.Search
      movies(flims)})
    .catch(err => {
      console.log(err);
      

  })
}
// window.onload = search


function movies(flims){
  for(let i =0; i < flims.length; i++) {
  
        console.log(flims)

        let card = document.createElement('div');
        let Poster = document.createElement('div');
        let type = document.createElement('div');
        let title = document.createElement('div');
        

        Poster.setAttribute('class', 'poster')
        Poster.setAttribute("style", `background-image:url('${flims[i].Poster}')`)
        title.innerHTML = flims[i].Title;
        type.innerHTML = flims[i].Type;

        
        card.className = 'card'
        
 
        if ( flims[i].Poster == "N/A") {
          Poster.setAttribute("style", `background-image:url('./assets/placeholder.jpg')`)  
  }

        container.appendChild(card);
        card.appendChild(Poster);
        card.appendChild(title);
        card.appendChild(type);

        
  }
}
   // invoke the button and creating click button to search for input value
    document.querySelector("button").addEventListener("click", function() {
      
      let newOutput = document.getElementById("search").value 
      search(newOutput)
       
    });

