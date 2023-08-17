let getEl = (id) => { return document.querySelector(id)}
let stockBinance = getEl('#binance');
let stockBitcoin = getEl('#bitcoin');
let stockDogecoin = getEl('#dogecoin');
let stockEthereum = getEl('#ethereum');
let stockSandbox = getEl('#sandbox');


let precioBnb = getEl('#precioBinance');
let precioBtc = getEl('#precioBitcoin');
let precioDoge = getEl('#precioDogecoin');
let precioEth = getEl('#precioEthereum');
let precioSand = getEl('#precioSandbox');

let liquidezBinance = getEl('#liquidez-binance');
let liquidezBitcoin = getEl('#liquidez-bitcoin');
let liquidezDogecoin = getEl('#liquidez-dogecoin');
let liquidezEthereum = getEl('#liquidez-ethereum');
let liquidezSandbox = getEl('#liquidez-sandbox');

let cantidadBinance = getEl('#cantidadBinance');
let cantidadBitcoin = getEl('#cantidadBitcoin');
let cantidadDogecoin = getEl('#cantidadDogecoin');
let cantidadEthereum = getEl('#cantidadEthereum');
let cantidadSandbox = getEl('#cantidadSandbox');

let balanceBinance = getEl('#balance-binance');
let balanceBitcoin = getEl('#balance-bitcoin');
let balanceDogecoin = getEl('#balance-dogecoin')
let balanceEthereum = getEl('#balance-ethereum')
let balanceSandbox = getEl('#balance-sandbox')

let capitalBinance = getEl('#bnbCapital');
let capitalBitcoin = getEl('#btcCapital');
let capitalDogecoin = getEl('#dogeCapital');
let capitalEthereum = getEl('#ethCapital');
let capitalSandbox = getEl('#sandCapital');




liquidezBinance.innerHTML = 0;
liquidezBitcoin.innerHTML = 0; 
liquidezDogecoin.innerHTML = 0;
liquidezEthereum.innerHTML = 0;
liquidezSandbox.innerHTML = 0;

cantidadBinance.innerHTML = 0;
cantidadBitcoin.innerHTML = 0;
cantidadDogecoin.innerHTML = 0;
cantidadEthereum.innerHTML = 0;
cantidadSandbox.innerHTML = 0;


let inversion = getEl('#inversion')
let total = getEl('#total');
let balanceTotal = getEl('#balanace-total');
let times = 0;

let totalEl = getEl('#total').innerHTML;



// let balance =  (StockPriceRound / bnbPrecio)*100;
//     balanceBinance.innerText = balance.toFixed(2) + "%";



function liquidez(){
    total_liquidez = 0;
     var bnb = document.getElementById("liquidez-binance").innerHTML;
    
     var btc = document.getElementById("liquidez-bitcoin").innerHTML;
    
     var doge = document.getElementById("liquidez-dogecoin").innerHTML;
     
     var eth = document.getElementById("liquidez-ethereum").innerHTML;

     var sand = document.getElementById("liquidez-sandbox").innerHTML;
     
     
     

     
     var total_liquidez = parseFloat(bnb) + parseFloat(btc) + parseFloat(doge) + parseFloat(eth) + parseFloat(sand) ;
     return "$" + (total_liquidez);
     
    
}



 //TOTAL


//BINANCE
let bnb = 0.4268
cantidadBinance.innerText = bnb

let bnbCapital = 262.90
capitalBinance.innerText = bnbCapital

let bnbPrecio = 518.55
precioBnb.innerText = bnbPrecio




let ws = new WebSocket('wss://stream.binance.com:9443/ws/bnbbusd@trade');
ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice =  stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockBinance.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * bnb);
    liquidezBinance.innerText = liquidez_var;
    total.innerText = liquidez();

    let balance =  (StockPriceRound / bnbPrecio)*100;
    balanceBinance.innerText = balance.toFixed(2) + "%";
    
};



//BITCOIN
let  btc = 0.0019
cantidadBitcoin.innerText = btc

let btcCapital = 100
capitalBitcoin.innerText = btcCapital

let btcPrecio = 53650.39
precioBtc.innerText = btcPrecio


let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');

ws2.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockBitcoin.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * btc);
    liquidezBitcoin.innerText = liquidez_var;
    total.innerText = liquidez();

    let balance =  (StockPriceRound / btcPrecio)*100;
    balanceBitcoin.innerText = balance.toFixed(2) + "%";
};

//DOGE
let doge = 358.58
cantidadDogecoin.innerText = doge

let dogeCapital = 100
capitalDogecoin.innerText = dogeCapital

let dogePrecio = 0.2789
precioDoge.innerText = dogePrecio

let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/dogebusd@trade');

ws3.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = stockPrice;
   stockDogecoin.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * doge);
    liquidezDogecoin.innerText = liquidez_var;    
    total.innerText = liquidez();

    
    let balance =  (StockPriceRound / dogePrecio)*100;
    balanceDogecoin.innerText = balance.toFixed(2) + "%";
};

//ETHEREUM
let  eth = 0.232
cantidadEthereum.innerText = eth

let ethCapital = 100
capitalEthereum.innerText = ethCapital

let ethPrecio = 4308
precioEth.innerText = ethPrecio


let ws4 = new WebSocket('wss://stream.binance.com:9443/ws/ethbusd@trade');

ws4.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockEthereum.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * eth);
    liquidezEthereum.innerText = liquidez_var;
    total.innerText = liquidez();
     

    let balance =  (StockPriceRound / ethPrecio)*100;
    balanceEthereum.innerText = balance.toFixed(2) + "%";
};


// SANDBOX

let  sand = 22
cantidadSandbox.innerText = sand

let sandCapital = 141  
capitalSandbox.innerText = sandCapital

let sandPrecio = 6.35
precioSand.innerText = sandPrecio


let ws5 = new WebSocket('wss://stream.binance.com:9443/ws/sand@trade');

ws5.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let stockPrice = stockObject.p;
    let StockPriceRound = Math.round(stockPrice);
    stockSandbox.innerText = "$" + StockPriceRound;

    let liquidez_var = Math.round(StockPriceRound * sand);
    liquidezSandbox.innerText = liquidez_var;
    total.innerText = liquidez();
     

    let balance =  (StockPriceRound / sandPrecio)*100;
    balanceSandbox.innerText = balance.toFixed(2) + "%";
};



inversion.innerText = (bnbCapital + btcCapital + dogeCapital + ethCapital + sandCapital) .toFixed(2)

