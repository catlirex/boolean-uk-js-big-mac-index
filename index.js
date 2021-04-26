/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

let usPrice = 5.66

function bigMacIndex (country, price, exchangeRate){
    
    impliedPurchasingPower = usPrice/ price
    let index = ((exchangeRate - impliedPurchasingPower)/impliedPurchasingPower *100 ).toFixed(2)
    
   console.log("Big Mac index of "+ country + ":" + index + "%")
   return parseFloat(index);
}

let ukIndex =bigMacIndex("UK", 1.39, 3.79);
let hongkongIndex = bigMacIndex("Hong Kong", 0.13, 7.76);
let japanIndex = bigMacIndex("Japan", 0.0092, 490);
let spainIndex = bigMacIndex("Spain", 1.21, 4.75);
let auIndex = bigMacIndex("Australia", 0.78, 7.35);

function ukcompare(country, i){
    if (ukIndex > i){
        console.log("UK BigMac index is greater than " + country)
    }
    else {
        console.log("UK BigMac index is smaller than " + country)
    }
}

ukcompare("Hong Kong", hongkongIndex)
ukcompare("Japan", japanIndex)
ukcompare("Spain", spainIndex)
ukcompare("Australia", auIndex)














