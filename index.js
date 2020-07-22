let images = [ 

	{
		name:'cristiano', source:'images/cristiano.png'
	},
	{
		name:'cristiano', source:'images/cristiano.png'
	},
	{
		name:'dybala', source:'images/dybala.png'
	},
	{
		name:'dybala', source:'images/dybala.png'
	},
	{
		name:'kdb', source:'images/kdb.png'
	},
	{
		name:'kdb', source:'images/kdb.png'
	},
	{
		name:'pogba', source:'images/pogba.png'
	},
	{
		name:'pogba', source:'images/pogba.png'
	},
	{
		name:'bruno', source:'images/bruno.png'
	},
	{
		name:'bruno', source:'images/bruno.png'
	},
	{
		name:'kroos', source:'images/kroos.png'
	},
	{
		name:'kroos', source:'images/kroos.png'
	},
	{
		name:'messi', source:'images/messi.png'
	},
	{
		name:'messi', source:'images/messi.png'
	},
	{
		name:'ramos', source:'images/ramos.png'
	},
	{
		name:'ramos', source:'images/ramos.png'
	},
	{
		name:'sterling', source:'images/sterling.png'
	},
	{
		name:'sterling', source:'images/sterling.png'
	},
	{
		name:'tstegan', source:'images/tstegan.png'
	},
	{
		name:'tstegan', source:'images/tstegan.png'
	},
];


function shuffle(points){
	let i, j, k;
	for (i = points.length -1; i > 0; i--) {
    	j = Math.floor(Math.random() * i)
    	k = points[i]
    	points[i] = points[j]
    	points[j] = k
  	}
}

function isMember(value,array){
	for (let i = 0; i<array.length; i++){
		if (array[i] == value)
			return true;
	}
	return false;
} 


const grid = document.getElementById('grid');
const scoreDisplay=document.getElementById('result');

const timer=document.getElementById('timer');

let score=0;

shuffle(images);
let counter=100;
timer.innerText= counter+" Seconds";
let interval =  setInterval(function (){	
	counter--;
	timer.innerText= counter+" Seconds";
	if (counter<=0){
		clearInterval(interval);
		score=cardsWon.length;
		alert("TIME UP!!!! YOU SCORE IS "+score);
		window.location.reload();
	}
},1000);

function createGrid(){
	for(let i = 0; i < 20; i++){
		var card = document.createElement('img');
		card.setAttribute('src', 'download.png');
		card.setAttribute('data-id', i);
		card.addEventListener('click',flipCard);
		grid.appendChild(card);
	}
}

console.log("Creating Grid");
createGrid();


cardsChosen = [];
cardsChosenId = [];
cardsWon = [];

function checkCards(){
	let cards=document.querySelectorAll('img');
	card1 = cardsChosenId[0];
	card2 = cardsChosenId[1];
	if (cardsChosen[0] == cardsChosen[1]){
		//alert("Correct Match")
		cardsWon.push(parseInt(card1));
		cardsWon.push(parseInt(card2));
		cards[card1].setAttribute('src','images/white.png');
		cards[card2].setAttribute('src','images/white.png');
	}
	else{
		cards[card1].setAttribute('src','download.png');
		cards[card2].setAttribute('src','download.png');
		//alert("incorrect  Match");
	}
	cardsChosen.splice(0,cardsChosen.length);
	cardsChosenId.splice(0,cardsChosenId.length);
	if( cardsWon.length == images.length ){
		score=cardsWon.length+counter;
		alert("YOU WIN YOUR SCORE IS "+score);
		window.location.reload();
	}
}

function flipCard(){
	let cardid = this.getAttribute('data-id');
	//console.log(cardid)
	if(	isMember(cardid,cardsWon) === false ){
		cardsChosen.push(images[cardid].name);
		cardsChosenId.push(cardid);
		console.log(typeof(cardid));
		this.setAttribute('src',images[cardid].source);
		if ( cardsChosen.length == 2 ){
			setTimeout(checkCards,500);
		}
	}
}



