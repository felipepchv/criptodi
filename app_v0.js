let stockBinance = document.querySelector('#binance');
let stockLitecoin = document.querySelector('#litecoin');
let stockDogecoin = document.querySelector('#dogecoin');

let liquidezBinance = document.querySelector('#liquidez-binance');
let liquidezLitecoin = document.querySelector('#liquidez-litecoin');
let liquidezDogecoin = document.querySelector('#liquidez-dogecoin');

let cantidadBinance = document.querySelector('#cantidadBinance');
let cantidadLitecoin = document.querySelector('#cantidadLitecoin');
let cantidadDogecoin = document.querySelector('#cantidadDogecoin');

let total = document.querySelector('#total');
 total.innerText = liquidez();

 function liquidez(){
     var bnb = document.getElementById("liquidez-binance").innerHTML;
     var ltc = document.getElementById("liquidez-litecoin").innerHTML;
     var doge = document.getElementById("liquidez-dogecoin").innerHTML;

     var total_liquidez = parseFloat(bnb) + parseFloat(ltc) + parseFloat(doge);

     return (total_liquidez);
     
    console.log(total_liquidez);
 }
 console.log(typeof liquidez);



 //TOTAL


//BINANCE
let bnb = 0.344
cantidadBinance.innerText =bnb

let ws = new WebSocket('wss://stream.binance.com:9443/ws/bnbbusd@trade');
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice =  stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockBinance.innerText = "$" + StockPriceRound;

    let liquidez = Math.round(StockPriceRound * bnb);
    liquidezBinance.innerText = liquidez;
};





//LITECOIN
let ltc  = 1.0200
cantidadLitecoin.innerText = ltc

let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ltcbusd@trade');


ws2.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockLitecoin.innerText = "$" + StockPriceRound;

    let liquidez = Math.round(StockPriceRound * ltc);
    liquidezLitecoin.innerText = liquidez;
};




//DOGE
let doge = 865
cantidadDogecoin.innerText = doge

let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/dogebusd@trade');

ws3.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = stockPrice;
   stockDogecoin.innerText = "$" + StockPriceRound;

    let liquidez = Math.round(StockPriceRound * doge);
    liquidezDogecoin.innerText = liquidez;


};




