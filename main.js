

function submit(){
    list_of_students=[];
var display_students_lists=[];
for(var j=1; j<=4;j++){

var name_of_student=document.getElementById("name_of_the_student_"+j).value;
list_of_students.push(name_of_student);
}
document.getElementById("display_name_with_commas").innerHTML=list_of_students;
var remove_commas= list_of_students.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    list_of_students.sort();
    document.getElementById("display_name_with_commas").innerHTML=list_of_students;   
}
