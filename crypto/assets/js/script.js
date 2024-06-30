let loginForm  = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

window.onscroll = () =>{
  loginForm.classList.remove('active');
}


/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);


var bitcoin = document.getElementById("bit");
var Ethereum = document.getElementById("Ethereum");
var Tether = document.getElementById("Tether");
var ada = document.getElementById("ada");
var btcfall = document.getElementById("btcfall");
var ethfall = document.getElementById("ethfall");
var tetfall = document.getElementById("tetfall");
var adafall = document.getElementById("adafall");
var btcG = document.getElementById("btcG");



var liveprice = {
  "async" : true,
  "scroosDomain" : true,
  "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2CEthereum%2CTether%2CBNB%2CSolana%2CXRP%2CCardano%2CAvalanche&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true&precision=3",
  "method" : "GET",
  "headers" : { }
}

$.ajax(liveprice).done(function (response){
  bitcoin.innerHTML = response.bitcoin.usd;
  Ethereum.innerHTML = response.ethereum.usd;
  Tether.innerHTML = response.tether.usd;
  ada.innerHTML = response.cardano.usd;

  var btcfall1 = response.bitcoin.usd_24h_change;
  var bprice =  Math.round(btcfall1 * 100) / 100;
  var ethfall1 = response.ethereum.usd_24h_change;
  var eprice = Math.round(ethfall1 * 100) / 100;
  var tetfall1 = response.tether.usd_24h_change;
  var tprice = Math.round(tetfall1 * 100) / 100;
  var adafall1 = response.cardano.usd_24h_change;
  var aprice = Math.round(adafall1 * 100) / 100;
  var solfall1 = response.solana.usd_24h_change;
  var sprice = Math.round(solfall1 * 100) / 100;


  btcfall.innerHTML = bprice;
  ethfall.innerHTML = eprice;
  tetfall.innerHTML = tprice;
  adafall.innerHTML = aprice;




  var btcpr = document.getElementById("btcpr")
  var b = document.getElementById("b");
  var btcv = document.getElementById("btcv")
  var bcap = document.getElementById("bcap");
  b.innerHTML = bprice;
  btcpr.innerHTML = "$" + response.bitcoin.usd;
  bcap.innerHTML = "$" + response.bitcoin.usd_market_cap;
  btcv.innerHTML = response.bitcoin.usd_market_cap;
  var btcc = document.querySelector(".btcc")
  if(bprice < 0){
    b.style.color='red';
    btcc.innerHTML = ('<img src="./assets/images/chart-2.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }else{
    b.style.color= 'lightgreen';
    btcc.innerHTML = ('<img src="./assets/images/chart-1.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }


  var ethpr = document.getElementById("ethpr")
  var e = document.getElementById("e");
  var ecap = document.getElementById("ecap");
  var ethv = document.getElementById("ethv");
  var ethc = document.querySelector(".ethc");
  e.innerHTML = eprice;
  ethpr.innerHTML = "$" + response.ethereum.usd;
  ethv.innerHTML = response.ethereum.usd_market_cap;
  ecap.innerHTML = "$" + response.ethereum.usd_market_cap;
  if(eprice < 0){
    e.style.color='red';
    ethc.innerHTML = ('<img src="./assets/images/chart-2.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }else{
    e.style.color= 'lightgreen';
    ethc.innerHTML = ('<img src="./assets/images/chart-1.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }



  var tetpr = document.getElementById("tetpr")
  var t = document.getElementById("t");
  var tcap = document.getElementById("tcap");
  var tetv = document.querySelector("#tetv");
  var usdtc = document.querySelector(".usdtc")
  t.innerHTML = tprice;
  tetpr.innerHTML = "$" + response.tether.usd;
  tetv.innerHTML = response.tether.usd_market_cap;
  tcap.innerHTML = "$ " + response.tether.usd_market_cap;
  if(tprice < 0){
    t.style.color='red';
    usdtc.innerHTML = ('<img src="./assets/images/chart-2.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }else{
    t.style.color= 'lightgreen';
    usdtc.innerHTML = ('<img src="./assets/images/chart-1.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }


  var solpr = document.getElementById("solpr")
  var s = document.getElementById("s");
  var solcap = document.getElementById("solcap");
  var solc = document.querySelector(".solc")
  s.innerHTML = sprice
  solpr.innerHTML = "$" + response.solana.usd;
  solcap.innerHTML = "$" + response.solana.usd_market_cap;
  if(sprice < 0){
    s.style.color='red';
    solc.innerHTML = ('<img src="./assets/images/chart-2.svg" width="100" height="40" alt="Bitcoin logo" class="img">')
  }else{
    s.style.color= 'lightgreen';
    solc.innerHTML = ('<img src="./assets/images/chart-1.svg" width="100" height="40" alt="Bitcoin logo" class="img">')
  }


  var adapr = document.getElementById("adapr")
  var a = document.getElementById("a");
  var adacap = document.getElementById("adacap");
  var adac = document.querySelector(".adac")
  var adav = document.getElementById("adav")
  a.innerHTML = aprice
  adapr.innerHTML = "$" + response.cardano.usd;
  adav.innerHTML = response.cardano.usd_market_cap;
  adacap.innerHTML = "$" + response.cardano.usd_market_cap;
  if(aprice < 0){
    a.style.color='red';
    adac.innerHTML = ('<img src="./assets/images/chart-2.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }else{
    a.style.color= 'lightgreen';
    adac.innerHTML = ('<img src="./assets/images/chart-1.svg" width="100" height="40" alt="Bitcoin logo" class="img">')

  }
});