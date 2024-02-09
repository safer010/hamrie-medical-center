let form2 = document.getElementById ("form2");

let button5 = document.getElementById ("button5");
let fname = document.getElementById ("fname");
let mname = document.getElementById ("mname");
let lname = document.getElementById ("lname");
let address = document.getElementById ("address");
let mobile = document.getElementById ("mobile");
let bdate = document.getElementById ("bdate");

let genderAnswer = document.getElementById ("genderAnswer")
let genders = document.getElementsByName ("gender"); 
//let gender = document.getElementsByName ("gender");
//let female = document.getElementById ("Female");

let medicalHAnswer = document.getElementById ("medicalHAnswer");
let medicalH = document.getElementsByClassName ("medicalH");
// let asthma = document.getElementById ("asthma");
// let cancer = document.getElementById ("cancer");
// let cardiacdisease = document.getElementById ("cardiac disease");
// let diabetes = document.getElementById ("diabetes");
// let hypertension = document.getElementById ("hypertension");
// let psychiatricdisorder = document.getElementById ("psychiatricdisorder");
// let epilepsy = document.getElementById ("epilepsy");
// let others = document.getElementById ("others");
// let none = document.getElementById ("none");

let symptoms = document.getElementById ("symptoms");
// let chestpain = document.getElementById ("chestpain");
// let respiratory = document.getElementById ("respiratory");
// let hematological = document.getElementById ("hematological");
// let lymphatic = document.getElementById ("lymphatic");
// let gastrointestinal = document.getElementById ("gastrointestinal");
// let neurological = document.getElementById ("neurological");
// let weightloss = document.getElementById ("weightloss");

let medicationAnswer = document.getElementsByName ("medicationAnswer");
let medications = document.getElementsByName ("medication");
let yes = document.getElementById ("yes");
//let no = document.getElementById ("no");
let comment = document.getElementsByName ("comment");
let medicationData = document.getElementById ("medicationData")


let button3 = document.getElementById ("button3");
let button4 = document.getElementById ("button4");

//use para ma store yung data sa local storage yung mga previews data na nilagay saka kahit yung bago
let patientDatas = localStorage.getItem ("MedicalCenterForm");
let datas = (patientDatas) ? JSON.parse (patientDatas): [];
console.log (patientDatas);

//let formdata=[];
function getData(event)
    {
        event.preventDefault();
        
        genders.forEach((gender) =>
                            {
                                if (gender.checked)
                                {
                                    genderAnswer = gender.value
                                    //console.log (`gender:${genderAnswer}`)
                                    //alert (`You selected ${gender.value}.`);
                                }
                            }
                       );
        
        medications.forEach((medication) =>
                        {
                            if (medication.checked)
                            {
                                medicationAnswer = medication.value
                                //alert (`You selected ${medication.value}.`);
                                comment.disabled = false;
                            }

                            else
                            {
                                comment.disabled = true;
                            }
                        }
                    );
        
        function medicalhistory ()
        {
            let checked = [];
            let i = 0;
                for (i; i <medicalH.length; i++)
                {
                    let checkbox = medicalH [i]
                    if (checkbox.checked) checked.push(checkbox.value);
                }
                return medicalHAnswer = checked;
        }medicalhistory()
            
        
        let personalInfo = {firstname: fname.value, 
                            middlename: mname.value,
                            lastname: lname.value,
                            addressData: address.value,
                            mobileData: mobile.value,
                            bdateData: bdate.value,
                            genderData: genderAnswer,
                            medicationData:medicationAnswer,
                            medicalHData: medicalHAnswer,
                            symptomsData: symptoms.value
                            };

        datas.push(personalInfo);
        console.table(personalInfo);
        

        localStorage.setItem("MedicalCenterForm", JSON.stringify(datas));
    }  

form2.addEventListener ("submit", getData);

