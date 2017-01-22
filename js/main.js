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

var ourRequest = new XMLHttpRequest();
/****
 * If you want to send data use POST
 * else use GET to receive data*
 */
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload =function(){
   // var ourData = ourRequest.responseText;
   var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};
ourRequest.send();

/*
Asynchronous => in the background, no requiring page refresh
Javascript
And
Xml => data format similaire to JSON  */

