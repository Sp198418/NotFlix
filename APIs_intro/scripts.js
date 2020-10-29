
//Sports
let body = document.querySelector('body');

function getReq(){
  let res = {
    "Soccer" : {name: "Soccer", numOfPlayers:22, ball: true, equipment:['boot', 'ball', 'goal', 'shin pad'], img:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDt6V.rPqgC0/v1/1000x-1.jpg' },
    "Tennis": {name: "Tennis", numOfPlayers:2, ball: true, equipment:['sneakers', 'ball', 'net', 'raquet'], img:'https://static01.nyt.com/images/2019/10/02/sports/02clarey-taylor1/merlin_160120506_35f89afd-e305-4b9f-92f9-193f58f2e71a-superJumbo.jpg' },
    "Footbal": {name: "Football", numOfPlayers:22, ball: true, equipment:['cleats', 'ball', 'field goal', 'helment', 'pads'], img:'https://cdn.vox-cdn.com/thumbor/38av6o6UoImI01e9IpD4grgD54o=/0x0:3000x2000/1400x1400/filters:focal(0x0:3000x2000):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55068453/GettyImages-76825875.0.jpg' },
    "Basketball": {name: "basketball", numOfPlayers:15, ball: true, equipment:['sneakers', 'ball', 'hoop', 'shorts'], img:'https://i.pinimg.com/originals/bb/5c/66/bb5c6667bc5662964936100f17694133.jpg' },
  }

  for(let key in res) {
    console.log(key)

    // first create the elements

    let banner = document.createElement('img');
    let newTitle = document.createElement('h1');
    let equipment = document.createElement('p');
    let card = document.createElement('div');

    //second set any attributes (not always needed)

    card.setAttribute('class','card' );

    // thrid add content to element (img, text,numbers)

    banner.src = res[key].img
    newTitle.innerText = res[key].name;
    equipment.innerText = res[key].equipment;

    //fourth append data to the website 

    card.appendChild(banner);
    card.appendChild(newTitle);
    card.appendChild(equipment);

    //always append everything to the body or existing element

    body.appendChild(card);


  }
}

 