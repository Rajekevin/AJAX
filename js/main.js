var myCat = {
    "name" : "Moumou",
    "specimen": "cat",
    "favFood" : "Dog"
}
var myFavColor = ["blue", "green", "purple"];

myFavColor[1];

/*JSON
* JAVASCRIPT
* SCRIPT
* OBJECT
* NOTATION
* */
var thePets =[
            {
                    "name" : "Moumou",
                    "specimen": "cat",
                    "favFood" : "Dog"
                },
                {
                    "name" : "Borkie",
                    "specimen": "dog",
                    "favFood" : "cat"
                }
            ]
thePets[1].favFood

/*
 Asynchronous => in the background, no requiring page refresh
 Javascript
 And
 Xml => data format similaire to JSON  */
var pageCounter =1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener("click",function(){

    var ourRequest = new XMLHttpRequest();
    /****
     * If you want to send data use POST
     * else use GET to receive data*
     */
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload =function(){
       // var ourData = ourRequest.responseText;
       var ourData = JSON.parse(ourRequest.responseText);
        // console.log(ourData[0]);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;

    if(pageCounter>3){
        btn.classList.add("hide-me"); //create a css class input : hidden
    }
});

function renderHTML(data){
    var htmlString = "";

    for(i=0; i<data.length; i++){
        htmlString += "<p>"+ data[i].name+ "is a " + data[i].species + ".</p>" ;
    }
    animalContainer.insertAdjacentHTML("beforeend", htmlString);
}






