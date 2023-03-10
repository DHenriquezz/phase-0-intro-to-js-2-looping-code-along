// Code your solutions in this file

function writeCards(array, eventName)
{
const array1 = ["Guadalupe", "Ollie", "Aki"];
 for (let i = 0; i < array.length; i++)
{
array1[i] = (`Thank you, ${array1[i]}, for the wonderful ${eventName} gift!`);
}
    return array1; 
}
function countDown(num){
    let count = num;
    while (count >= 0){
        console.log(count)
        count--;
    }
}