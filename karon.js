




var roll = Math.round(Math.random());
//console.log(roll);

if (roll == 1) {
console.log("Karon djævelen med øjne så sorte som fyrkul hilser dig velkommen");
let filenames = ["226.png"];
let charonURLs = ["285", "599", "669"];


let rndCharonNo = Math.round(Math.random()*charonURLs.length);
let rndCharonURL = charonURLs[rndCharonNo];


var charonURL = "http://mikkelsonnenschein.dk/followcharon/" + rndCharonURL;
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
    
}

/*chrome.browserAction.setIcon({
  path : {
    "active": "pitchfork-active.png"
  }
});
*/


/*
        for (imgElt of imgs) {
            let file = 'img/' + filenames[0];
            let url = chrome.extension.getURL(file);
            imgElt.src = url;
            console.log(url);
        }
*/