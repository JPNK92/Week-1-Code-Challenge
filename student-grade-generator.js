
// let totalMarks=100;

function studentGrade(){
    let marks = prompt("Enter your marks:");
     if (marks >=80 && marks <=100) {
        return "A";  
    }else if (marks >=60 && marks <=79){
        return "B";
    }else if (marks >=50 && marks <=59){
        return "C";
    }else if (marks >=40 && marks <=49){
        return "D";
   }else if(marks >=0 && marks <=39){
        return "E"
   }else{
       return "Invalid input"
   }
   }

studentGrade();




// function test(a,b){
//     return a+b
// }

// let res = test(10,2)

// console.log(res);