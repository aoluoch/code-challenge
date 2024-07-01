function speedCheck() {
    let speed = prompt("Enter the speed of the car")

    //in the problem we have the following variables
    const speedL = 70;
    const demeritKm = 5;
    const demeritMax = 12;

    //conditions for the speed checking
    if (speed <= speedL){
        alert("ok")
    } else {
        // Calculate the number of demerit points
        let demeritPoints = Math.floor((speed - speedL) / demeritKm);

        // Output the number of demerit points
        if (demeritKm > demeritMax) {
            alert("License suspended");
        } else {
            alert("Points: " + demeritKm);
        }
    }
}

//calling th function

speedCheck()