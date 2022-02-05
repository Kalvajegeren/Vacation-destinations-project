  console.log (6 % 2)
  
  var detailForm = document.querySelector('#destinasjon');
    detailForm.addEventListener("submit", handleFormSubmit);
    

function handleFormSubmit (event){
    event.preventDefault();


    var destinationName = event.target.elements["name"].value;
    var destinationLocation = event.target.elements["location"].value;
    var destinationPhoto = event.target.elements["photo"].value;
    var destinationDescription = event.target.elements["description"].value;

    for(var i = 0; i < detailForm.length; i++){
        detailForm.elements[i].value = "";
    }


const destCard = createDestinationCard(destinationName, destinationLocation, destinationPhoto, destinationDescription);


var wishListContainer = document.getElementById("destinationscontainer");
if (wishListContainer.length === 0)
document.getElementById("title").innerHTML = "My wishlist"

}

document.querySelector("#destinationscontainer").appendChild(destCard)



function createDestinationCard (name, location, photo, description){

var card = document.createElement("div");
card.className = "card";

var image = document.createElement("img");
image.setAttribute ("alt", name);

var constatntPhotoUrl = "images/signpost.jpg";

if (photo.length === 0) {
    image.setAttribute("src", constatntPhotoUrl);
}
else{
    image.setAttribute ("src", photo)

}

card.appendChild ("image")

var cardBody = document.createElement ("h3");
cardBody.className = "card_body"

var cardTitle = document.createElement ("h3");
cardTitle.innerText = name;
cardBody.appendChild(cardTitle);

var cardSubTitle = document.createElement ("h4");
cardSubTitle.innerText = location;
cardBody.appendChild(cardSubTitle);

if(description.length !== 0 ){
    var cardText = document.createElement("p")
    cardText.className = "Card-text";
    cardText.innerHTML = "description";
    cardBody.appendChild("cardText");
}

var cardDeleteButton = document.createElement("button");
cardDeleteButton.innerText = "remove";

cardDeleteButton.addEventListener("click", removeDestination);
cardBody.appendChild(cardDeleteButton);

card.appendChild (cardBody);

return card;


function removeDestination(event){
    var card = event.target.parentelement.parentelement;
    card.remove();
}

} 



