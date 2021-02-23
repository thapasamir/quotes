// Getting the dom
const quote = document.getElementById('quotes')
const aurthor = document.getElementById('aurthor');

//Function that refresh page
function refreshPage(){
    window.location.reload();
} 

//Using aync function to call api
async function GetData(){
    const poxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const api_source = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

    try {
        const response = await fetch(poxyUrl + api_source);
        const data = await response.json();
        quote.innerText = data.quoteText;
        aurthor.innerText = data.quoteAurthor;
        
    } catch (error) {
        GetData()
        console.log("Something went wrong bitch",error)
        
    }
}

GetData()

