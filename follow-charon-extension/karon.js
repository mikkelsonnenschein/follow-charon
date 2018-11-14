


var roll = Math.floor((Math.random() * 10) + 1);

/*
if (roll == 1) {
    console.log("Karon djævelen med øjne så sorte som fyrkul hilser dig velkommen");
    let filenames = ["226.png"];
    let charonURLs = ["pitchfork-mirror-eye/", "pitchfork-mirror-dysphnea/", "pitchfork-mirror-lungs/"];


    let rndCharonNo = Math.round(Math.random()*charonURLs.length);
    let rndCharonURL = charonURLs[rndCharonNo];


    var charonURL = "https://mikkelsonnenschein.github.io/follow-charon/pages/" + rndCharonURL;
    //console.log(charonURL);

    let imgs = document.getElementsByTagName('img');
    let rndIndex = Math.floor(Math.random()*imgs.length);
    //console.log(rndIndex);
    let img = imgs[rndIndex];

    img.addEventListener("mouseover", hoverOn);
    img.addEventListener("mouseout", hoverOff);


    img.href = charonURL;

    let imgParent = img.parentElement;
    imgParent.href = charonURL;

    let originalURL = img.src;
    let charonImg = 'img/' + filenames[0];
    let imageURL = chrome.extension.getURL(charonImg);


    
    
function hoverOn() {
    img.src = imageURL;
    //console.log("hoverOn");
}


function hoverOff() {

    img.src = originalURL;
    //console.log("hover off");
}    
    
}*/


if (roll == 10) {
window.onload = setMoveCoin;

function setMoveCoin() {
    
    console.log("⋔⋔⋔ the demon charon stares at you ⋔⋔⋔")
    
    //create URL's
    let charonURLs = ["pitchfork-mirror-eye/", "pitchfork-mirror-dysphnea/", "pitchfork-mirror-lungs/"];
    let rndCharonNo = Math.round(Math.random()*charonURLs.length);
    let rndCharonURL = charonURLs[rndCharonNo];
    var charonURL = "https://mikkelsonnenschein.github.io/follow-charon/pages/" + rndCharonURL;
    
    //build HTML
    var coin = document.createElement("p");
    var node = document.createTextNode("⋔");
    document.body.appendChild(coin);
    var coinLink = document.createElement("a");
    coin.appendChild(coinLink);
    coinLink.appendChild(node);
    
    //build CSS
    coinLink.href = charonURL;
    coinLink.target = "_blank";
    coinLink.style.textDecoration = "none";
    coinLink.style.color = "#fff";
    coin.style.position = "fixed";
    coin.style.fontSize = "96px";
    coin.style.backgroundColor = "#000";
    coin.style.width = "80px";
    coin.style.height = "80px";
    coin.style.borderRadius = "50%";
    coin.style.textAlign = "center";
    coin.style.lineHeight = "56px";
    coin.style.margin = "0px";
    coin.style.opacity = 0.1;
    
    //moving the coin
    var coinXSpeed = 1;
    var wWidth = window.innerWidth;
    var coinYSpeed = 1;
    var wHeight = window.innerHeight;
    var id = setInterval(moveCoin, 20);
    coin.style.left = 0 + "px";
    coin.style.top = 0 + "px";

    function moveCoin() {
        
        var coinLeft = parseInt(coin.style.left);
        var coinTop = parseInt(coin.style.top);
        //console.log(coinLeft + "+" + coinTop);
        
            if (coinLeft > wWidth - 80) {
                coinXSpeed = -coinXSpeed;
            }
            else if (coinLeft < 0) {
                coinXSpeed = -coinXSpeed;
            }

            if (coinTop > wHeight - 80) {
                coinYSpeed = -coinYSpeed;
            }
            else if (coinTop < 0) {
                coinYSpeed = -coinYSpeed;
            }
        
        
        coin.style.left = coinLeft + coinXSpeed + "px";
        coin.style.top = coinTop + coinYSpeed + "px";
        //console.log(coinTop);
        //console.log(coinLeft);
    }
}
    
}





