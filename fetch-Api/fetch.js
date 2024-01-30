// const url = "https://cat-fact.herokuapp.com/facts";
// const fact = document.querySelector('#fact');
// const btn = document.querySelector('#btn');

// async await

// const getFacts = async () => {
//     let response = await fetch(url);
//     // console.log(response);
//     let data =  await response.json();
//     console.log(data[1].text);
//     fact.innerHTML = data[1].text
// }


// Promise chain 

// function getFacts() {
//     fetch(url)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data);
//             fact.innerHTML = data[3].text
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }







// btn.addEventListener('click', getFacts);
// getFacts()


// =========================================================================================================








// Currency Converter

const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns = document.querySelectorAll('.dropdown select')

const btn = document.querySelector('form button')

const msg = document.querySelector('.msg')

const fromcurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected"
        }
        select.append(newOption);
    }

    select.addEventListener('change', (evt) => {
        updateFlag(evt.target)
    })
}


const updateFlag = (element) => {
let currCode = element.value
let countryCode = countryList[currCode]
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
let img = element.parentElement.querySelector('img')
img.src = newSrc;
}



btn.addEventListener('click', async (evt)=> {
evt.preventDefault();
let amount = document.querySelector('.amount input')
let amval = amount.value;
if(amval === "" || amval < 1) {
    amval = 1 
    amount.value = "1";
}
// console.log(fromcurr.value,toCurr.value);
const URL = `${Base_URL}/${fromcurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
let response = await fetch(URL)
let data = await response.json()
let rate = data[toCurr.value.toLowerCase()]
let finalAmount = amval * rate
msg.innerText = `${amval} ${fromcurr.value} = ${finalAmount} ${toCurr.value}`
})







