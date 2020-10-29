let body = document.querySelector('body');
let url = 'https://dog.ceo/api/breeds/image/random/50'


fetch(url)
  .then(res =>  res.json())
  .then(res=> {
    console.log(res.message)
    for (let i = 0; i < res.message.length; i++){
        
        let banner = document.createElement('img');
        
        banner.src = res.message[i];

        body.appendChild(banner);
    }
  })
  .catch(err => console.log(err))