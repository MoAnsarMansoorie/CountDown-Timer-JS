const endDate = "23 June 2023 10:00 PM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end, now);

    const diff = (end - now)/1000               //milisecond to second - division by 1000
    console.log(diff);

    console.log(Math.floor(diff / 3600 / 24));

    if(diff < 0) return;

    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    
}

//initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
*/

setInterval( () => {
    clock()
},1000)