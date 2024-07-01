//function for getting the grade
function grade(){
    //this part prompts the user to enter marks the prompt looks similar to the "alert()" but it's a prompt
    let marks = prompt("Enter marks (between 0-100)")

// introduce the conditions for grading 
    let grade;
    if (marks > 79){
        grade = 'A';
    } else if (marks >=60){
        grade = 'B'
    }else if (marks >=50){
        grade = 'C'
    }else if (marks >=40){
        grade = 'D'
    } else{
        grade = 'E'
    }
//this will print the output in the console
    console.log(grade)
}

//the last part is involved in calling the function
grade()