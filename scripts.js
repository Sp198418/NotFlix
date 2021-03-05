
let query = document.getElementById('search').value;
let container = document.getElementById('container');
let page = 1;


  function search(finder){
      let url = `https://www.omdbapi.com/?apikey=9f075407&s=${finder}&page=${page}`
      
      container.innerHTML= ''// location where card is be filled with information 
    // fetches the data from websites api 
      fetch(url)
    // promised response
    .then(res =>  res.json()) 
    .then(res=> { //object looks like an array or object
      let films = res.Search
      movies(films)})
    .catch(err => {// handles all information I don't expect to get
      console.log(err);
      

    })
  }


function movies(films){
   // loop through each item in the res
  for(let i =0; i < films.length; i++) {
  
        console.log(films)
       // step creates each element to API requests 
        let card = document.createElement('div');
        let Poster = document.createElement('div');
        let type = document.createElement('div');
        let title = document.createElement('div');
        
         //adding content to elements
        Poster.setAttribute('class', 'poster')
        Poster.setAttribute("style", `background-image:url('${films[i].Poster}')`)
        title.innerHTML = films[i].Title;
        type.innerHTML = films[i].Type;

        
        card.className = 'card'
        
         // if statement that handles cases where there is no images for searched movies 
        if ( films[i].Poster == "N/A") {
          Poster.setAttribute("style", `background-image:url('./assets/placeholder.jpg')`)  
        }
       // append data to the website
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
        // invoke the button and creating click button to previous search results
document.querySelector("#previousButton").addEventListener("click", function() {
  page--
  
  let newOutput = document.getElementById("search").value 
  search(newOutput)
    
});
  
  //invoke the button and creating click button to search for next page of results 
document.querySelector("#nextButton").addEventListener("click", function() {
  page++
  let newOutput = document.getElementById("search").value 
  search(newOutput)
    
});