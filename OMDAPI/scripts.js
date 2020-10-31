
let query = document.getElementById('search').value ||"The Wolf of Wall Street";
let container = document.getElementById('container');


  function search(finder){
      let url = `http://www.omdbapi.com/?apikey=9f075407&s=${finder}`
      container.innerHTML= ''

      fetch(url)

    .then(res =>  res.json()) 
    .then(res=> movies(res))
    .catch(err=> console.log(err))
    
}
// window.onload = search


function movies(res){
  
        console.log(res.Search)

        let card = document.createElement('div');
        let Poster = document.createElement('img');


        Poster.src = res.Search[0].Poster
        
  

        
        card.appendChild(Poster);

      container.appendChild(card);
    }
   // invoke the button and creating click button to search for input value
    document.querySelector("button").addEventListener("click", function() {
      
      let newOutput = document.getElementById("search").value 
      search(newOutput)

    
       
    });



  //   function handleChange(e) {
  //     log.textContent = 
  //  ${e.target.value.length} 
  //   }