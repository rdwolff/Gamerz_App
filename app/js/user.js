var savedUser = undefined //hierheen verwijzen wanneer er user gegevens opgeslagen dienen te worden in local storage


//user new


function saveUser() {
    console.log("fct_saveUser");
    let user = {}
    user["userName"] = document.getElementById("userName").value;
    user["userEmail"] = document.getElementById("userEmail").value;
    user["userCountry"] = document.getElementById("userCountry").value;
    user["userCity"] = document.getElementById("userCity").value;
    savedUser = user;
    
    SaveToLocalStorage();
}

function saveNewUser() {
    console.log("functie saveNewUser")
    saveUser();
    document.getElementById("frm_userNew").reset("frm_userNew");
    document.location.href = "index.html";

};







//functie voor opslaan naar locale storage
function SaveToLocalStorage() {
    console.log("fuctie SaveToLocalStorage")
    localStorage.setItem("user", JSON.stringify(savedUser));
    localStorage.setItem("userSaved", true);
    
};

//functie voor terughalen van locale storage


//page: user

function grabUserInfo() {
    console.log("fct_grabuser");
    let user2 = localStorage.getItem("user")
    let user1 = JSON.parse(user2);

    document.getElementById("userName").value = user1.userName
    document.getElementById("userEmail").value = user1.userEmail
    document.getElementById("userCountry").value = user1.userCountry
    document.getElementById("userCity").value = user1.userCity

    console.log(user1.userName)
};


function changeUser() {


    $('.readonly').prop('readonly', false);
    document.getElementById("userName").focus();
    document.getElementById("btn_saveUser").style.display = 'block';
    document.getElementById("btn_changeUser").style.display = "none";
}

function deleteUser() {
    console.log("functie deleteUser")
   localStorage.clear();
}