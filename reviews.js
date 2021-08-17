//create an array that has a lists that contain the name of a restuarant and its ratting
let restaurants = [["Thai Express",4],["Sansotei Ramen", 5],["World Burger", 3]];
//set info to restaurants
let info = restaurants;

createContainer();

function createContainer(){
    //create a for loop that goes through the number of restaurants in restaurants array
    for (let i = 0;  i < restaurants.length; i++){
        /*create a div element in js and make it equal to variable contain to hold other elements that will get created 
        let title equal to a p element to hold the name of the restaurant 
        let rate equal to another p element to hold the rating number from 1 to 5 of the restaurant*/
        let contain = document.createElement("div");
        let title = document.createElement("p");
        let rate = document.createElement("p");
        //set the class of the div and two other p elements to container in order to design them later
        contain.className = "container";
        title.className = "container";
        rate.className = "container";
        //call function setInfo to put information into each element 
        setInfo(contain, title, rate);
    }
}
//create setInfo to put information from resturants array into the elements I have created
function setInfo(contain,title, rate){
    console.log(info[0][0]);
    for (let num = 0; num < (info[0]).length; num++){
        //check if the first list of info is the first value
        if ((info[0][num]).indexOf == 0){
            //set the innerhtml of title to the first value 
            title.innerHtml = (info[0])[num];
        }else {
            /*if it is not a string then it must be the ratting number so
            add that value into rate*/ 
            rate.innerHtml = (info[0])[num];
        }
    }
    //remove the first list in info to add the next information to the next container
    info.shift();
    //put the title and rate element into the div element contain
    contain.appendChild(title);
    contain.appendChild(rate);
    //put div element into html body
    return document.body.appendChild(contain);

}