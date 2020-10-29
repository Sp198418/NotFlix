let body = document.querySelector('body');// appends to the body of html
let url = 'https://dog.ceo/api/breeds/image/random/50'// request 50 items

// takes in a url or fetch url
fetch(url)
// promised response
  .then(res =>  res.json()) //response convrted 
  .then(res=> {
    let pictures = res.message;
    // loop through each item in the res/img
        for (let i = 0; i < pictures.length; i++) {
            // first step create element
            let newImg = document.createElement('img');
             // variable appends to the body of html
             let body = document.querySelector('body');
            //adding content to element
            let element = pictures[i];
            newImg.src = element;
           

          // append data to the website(either directly to the )
            body.appendChild(newImg);
           
        }   
    })
    // handles all information I don't expect to get
    .catch(err => {
        console.log(err)
    });
  
   