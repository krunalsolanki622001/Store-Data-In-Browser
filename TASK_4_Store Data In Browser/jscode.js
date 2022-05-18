function save() {

    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let mno = document.getElementById("mno").value;
    let cntry = document.getElementById("cntry").value;
    let st = document.getElementById("st");
    let sname = st.options[st.selectedIndex].text;
    let ct = document.getElementById("ct");
    let cname = ct.options[ct.selectedIndex].text;
    let add = document.getElementById("add").value;
    let flag = true;
    //validation for name
    let regExp = /^[a-zA-Z]+$/;
    let isvalid = regExp.test(name);
    if (name.length <= 0) {
        document.getElementById("er1").innerHTML = "Please Enter Name<br>";
        flag = false;
    }
    else if (name.length != 0) {
        if (isvalid) {
            document.getElementById("er1").innerHTML = "";
            flag = true;
        }
        else {
            document.getElementById("er1").innerHTML = "Please Enter Valid Name<br>";
            flag = false;
        }
    }
    //validation for email
    let rex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let isvalidmail = rex2.test(mail);
    if (mail.length <= 0) {
        document.getElementById("er2").innerHTML = "Please Enter Email<br>";
        flag = false;
    }
    else if (mail.length != 0) {
        if (isvalidmail) {
            document.getElementById("er2").innerHTML = "";
            flag = true;
        }

        else {
            document.getElementById("er2").innerHTML = "Please Enter Valid Email<br>";
            flag = false;
        }
    }
    //validation for mobile number
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let isvalidmo = phoneno.test(mno);
    if (mno.length <= 0) {
        document.getElementById("er3").innerHTML = "Please Enter Mobile Number<br>";
        flag = false;
    }
    else if (mno.length != 0) {
        if (isvalidmo) {
            document.getElementById("er3").innerHTML = "";
            flag = true;
        }
        else {
            document.getElementById("er3").innerHTML = "Please Enter Valid Mobile Number<br>";
            flag = false;
        }
    }
    //validation for state
    if (st.selectedIndex == 0) {
        document.getElementById("er4").innerHTML = "Please Select State<br>";
        flag = false;
    }
    else {
        document.getElementById("er4").innerHTML = "";
        flag = true;
    }

    //validation for add
    let rexadd = /^[A-Za-z-,0-9 ]+$/;
    let isvalidadd = rexadd.test(add);
    if (add.length <= 0) {
        document.getElementById("er7").innerHTML = "Please Enter Address<br>";
        flag = false;
    }
    else if (add.length != 0) {
        if (isvalidadd) {
            document.getElementById("er7").innerHTML = "";
            flag = true;
        }
        else {
            document.getElementById("er7").innerHTML = "Please Enter Valid Address<br>";
            flag = false;
        }
    }
    let data = {
        Name: name,
        Email: mail,
        MobileNumber: mno,
        State: sname,
        City: cname,
        Address: add

    }
    localStorage.setItem(name, JSON.stringify(data));
    return flag;
}
//for state
function state() {
    let st = document.getElementById("st").selectedIndex;
    let ct = document.getElementById("ct");
    document.getElementById("ct").disabled=false;
    if (st == 1) {
        ct[1].innerHTML = "Veraval";
        ct[2].innerHTML = "Somnath";
        ct[3].innerHTML = "Junagadh";
        ct[4].innerHTML = "Ahemdabad";
        ct[5].innerHTML = "Nadiad";
    }
    else if (st == 2) {
        ct[1].innerHTML = "Jaipur";
        ct[2].innerHTML = "Jodhpur";
        ct[3].innerHTML = "Udaipur";
        ct[4].innerHTML = "Ajmer";
        ct[5].innerHTML = "Jaisalmer";
    }
    else if (st == 3) {
        ct[1].innerHTML = "Patiala";
        ct[2].innerHTML = "Amritsar";
        ct[3].innerHTML = "Jalandhar";
        ct[4].innerHTML = "Ludhiana";
        ct[5].innerHTML = "RAjpura";
    }
    else if (st == 4) {
        ct[1].innerHTML = "Agra";
        ct[2].innerHTML = "Varanasi";
        ct[3].innerHTML = "Lucknow";
        ct[4].innerHTML = "Kanpur";
        ct[5].innerHTML = "Bareilly";
    }
    else if (st == 5) {
        ct[1].innerHTML = "Pune";
        ct[2].innerHTML = "Mumbai";
        ct[3].innerHTML = "Vapi";
        ct[4].innerHTML = "Nasik";
        ct[5].innerHTML = "Aurangabad";
    }
}

// search 
function search() {
    let k = document.getElementById("name").value;
    let data = JSON.parse(localStorage.getItem(k));
    let ct = document.getElementById("ct");
    let st = document.getElementById("st");
    
    if (k == "")
        document.getElementById("er1").innerHTML = "Please Enter Name";
    else {
        if (data != null) {
            document.getElementById("name").value = data.Name;
            document.getElementById("mail").value = data.Email;
            document.getElementById("mno").value = data.MobileNumber;
            document.getElementById("st").text = data.State;
            ct[0].innerHTML = data.City;
            for (let i = 1; i < ct.length; i++)
                ct[i].innerHTML = "";
            st[0].innerHTML = data.State;
            for (let i = 1; i < st.length; i++)
                st[i].innerHTML = "";

            document.getElementById("add").value = data.Address;
        }
        else
            alert("This Data Is Not Avilable At Local Storage");
    }
}