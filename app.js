var student1 = {
    name: "ali",
    fathername: "ahmed",
    class: "10th",
    rollno: 4252,
    result: "80%",
    age: 16,
}
var student2 = {
    name: "bilal",
    fathername: "ali",
    class: "10th",
    rollno: 4235,
    result: "70%",
    age: 15,
}
var student3 = {
    name: "ibrar",
    fathername: "naeem",
    class: "10th",
    rollno: 3626,
    result: "60%",
    age: 14,
}
var student4 = {
    name: "noman",
    fathername: "talha",
    class: "10th",
    rollno: 2845,
    result: "80%",
    age: 17,
}
var student5 = {
    name: "sameer",
    fathername: "zia",
    class: "10th",
    rollno: 1348,
    result: "70%",
    age: 15,
}

var studentlist = [student1, student2, student3, student4, student5]

var studentD = document.getElementById('StudentData')

for (i = 0; i < studentlist.length; i++) {
    var obj = studentlist[i];
    console.log(obj)
    studentD.innerHTML += "<tr><td>" + obj.name + "</td><td>" + obj.fathername + "</td><td>" + obj.class + "</td><td>" + obj.rollno + "</td><td>" + obj.result + "</td><td>" + obj.age + "</td></tr>"
}


var sName = document.getElementById('showName')
var sfName = document.getElementById('showFathername')
var sClass = document.getElementById('showClass')
var sRoll = document.getElementById('showRollnum')
var sResult = document.getElementById('showResult')
var sAge = document.getElementById('showAge')
var inp = document.getElementById('inpval')

function resulT(){
    for(i=0; i<studentlist.length; i++){
        var stud = studentlist[i]
        if(inp.value == stud.rollno){
         sName.innerHTML= stud.name   
         sfName.innerHTML= stud.fathername  
         sClass.innerHTML= stud.class  
         sRoll.innerHTML = stud.rollno
         sResult.innerHTML= stud.result  
         sAge.innerHTML= stud.age  
        }
    }
    inp.value= "";
}
// console.log(student1,student2,student3,student4,student5)

