function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}

//validation form

function validateForm(){

    var name=document.contactForm.name.value;
    var email=document.contactForm.email.value;
    var mobile=document.contactForm.mobile.value;
    var country=document.contactForm.country.value;
    var gender=document.contactForm.gender.value;
    var hobbies=[];
    var checkboxes=document.getElementsByName("hobbies[]");

    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameErr=emailErr=mobileErr=countryErr=genderErr=true;

    if(name == ""){  //mandatory logic check

        printError("nameErr","Please Enter Your Name");
    }
    else {    //type of value check
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(name)===false){
            printError("nameErr","Please Enter Valid Name");

        }
        else{
            printError("nameErr","");
            nameErr=false;
        }
    }

    if(email==""){
        printError("emailErr","Please Enter Email, It Is Mandatory");
    }
    else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","Please Enter Valid Email ID");
        }
        else{
            printError("emailErr","");
            emailErr=false;
        }
    }

    if(mobile==""){
        printError("mobileErr","Please Enter Mobile Number, It Is Mandatory");

    }
    else{
        var regex=/^[1-9]\d{9}$/;

        if(regex.test(mobile)===false){
            printError("mobileErr","Please Enter Valid Mobile Number");
        }
        else{
            printError("mobileErr","");
            mobileErr=false;
        }
    }

    if(country=="Select"){
        printError("countryErr","Please Enter Value,It Is Mandatory");

    }
    else{
        printError("countryErr","");
        countryErr=false;
    }

    if(gender==""){
        printError("genderErr","Please Select Gender Value:");
    }
    else{
        printError("genderErr","");
        genderErr=false;
    }

if((nameErr || emailErr || mobileErr || countryErr || genderErr)==true){
    return false;
}
else{
    var preview="You Have Entered Following Details Please Verify Before Submitting : \n" + 
    "Full Name : " + name + "\n"+ 
    "Email ID : " + email +  "\n"+
    "Mobile Number : " + mobile +  "\n"+ 
    "Country : " + country +  "\n"+
    "Gender : " + gender +  "\n";
    if(hobbies.length){
        preview += "Hobbies : " + hobbies.join(", ");
    } 

    alert(preview);
}
};