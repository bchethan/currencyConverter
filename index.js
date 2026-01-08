const currencySlot1 = document.getElementById("currency-slot1")
const currencySlot2 = document.getElementById("currency-slot2")

let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")

currencySlot1.addEventListener('change',changedValue)
currencySlot2.addEventListener('change',changedValue)

number1.oninput = (e)=>{
    const [currency1, currency2] = fetchCurrencyValue(jsonTemp)
    const x = (e.target.value)*(currency2/currency1)
    number2.value = x
}
number2.oninput = (e)=>{
    const [currency1, currency2] = fetchCurrencyValue(jsonTemp)
    const x = (e.target.value)*(currency1/currency2)
    number1.value = x
}

function changedValue(){
    fetchCurrencyValue(jsonTemp)
}

function swap(){
    let temp = currencySlot1.value
    currencySlot1.value = currencySlot2.value
    currencySlot2.value = temp
}
function fetchCurrencyValue(jsonData){
    const currency1 = jsonData.data[currencySlot1.value]
    const currency2 = jsonData.data[currencySlot2.value]
    
    return [currency1, currency2]
}

async function fetchData(){
    const response = await fetch('http://localhost:8000')
    const jsonData = await response.json()

    jsonTemp = jsonData
}
fetchData()