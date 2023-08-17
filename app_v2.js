let getEl = (id) => { return document.querySelector(id) }
let stockBinance = getEl('#binance');
let stockLitecoin = getEl('#litecoin');
let stockDogecoin = getEl('#dogecoin');

let liquidezBinance = getEl('#liquidez-binance');
let liquidezLitecoin = getEl('#liquidez-litecoin');
let liquidezDogecoin = getEl('#liquidez-dogecoin');
let cantidadBinance = getEl('#cantidadBinance');
let cantidadLitecoin = getEl('#cantidadLitecoin');
let cantidadDogecoin = getEl('#cantidadDogecoin');

liquidezBinance.innerHTML = 0;
liquidezLitecoin.innerHTML = 0; 
liquidezDogecoin.innerHTML = 0;
cantidadBinance.innerHTML = 0;
cantidadLitecoin.innerHTML = 0;
cantidadDogecoin.innerHTML = 0;

let total = getEl('#total');
var times = 0;

function liquidez(){
    let getValue = (txt) => { return parseFloat(document.getElementById(txt).innerHTML)}
    let bnb = getValue("liquidez-binance");
    let ltc = getValue("liquidez-litecoin");
    let doge = getValue("liquidez-dogecoin");
    let total_liquidez = bnb + ltc + doge;
     return total_liquidez;
     
    
}

 //TOTAL
//BINANCE
let bnb = 0.344
createEventPrice(liquidezBinance, bnb, stockBinance, true, cantidadBinance, "bnbbusd")

//LITECOIN
let ltc  = 1.0200
createEventPrice(liquidezLitecoin, ltc, stockLitecoin, true, cantidadLitecoin, "ltcbusd")

//DOGE
let doge = 865
createEventPrice(liquidezDogecoin, doge, stockDogecoin, false, cantidadDogecoin, "dogebusd")

function createEventPrice(elem, price, stock, round, cant, txt) {
    cant.innerText = price
    let w = new WebSocket(`wss://stream.binance.com:9443/ws/${txt}@trade`);
    w.onmessage = (event) => {
        actualizar(event,elem, price, stock, round)
    };  
}

function actualizar(event, el, cant, stock, round) {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = round ? Math.round(stockPrice) : stockPrice;
    stock.innerText = "$" + StockPriceRound;
    let liquidez_var = Math.round(StockPriceRound * cant);
    el.innerText = liquidez_var;
    total.innerText = liquidez();
}