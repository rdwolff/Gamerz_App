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

    
    account();//versturen naar services.
    SaveToLocalStorage();
}

function clearForm() {
    document.getElementById("frm_userNew").reset("frm_userNew");
}

// Page userNew / btn_saveNewUser
function saveNewUser() {
    console.log("functie saveNewUser")
    saveUser();
    
    
    //document.location.href = "index.html";
    
};

//functie voor opslaan naar locale storage, nog niet geheel stand alone
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




// functie voor opvragen serverID
function account() {
    console.log("fct_account");
            
    
            var url = "https://s9p7k0aywk.execute-api.eu-central-1.amazonaws.com/latest/account";
            var data = savedUser
            //{ screenname: "paul" };
    
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'sN3Fq24IrI92zfXBxCBxt1EN6IYHJpI0acqQhoQt',
                }
            })
                .then(res => res.json())
                //.then(response => console.log('Success:', JSON.stringify(response)))
                .then(response => window.localStorage.setItem("id", response))
                .catch(error => console.error('Error:', error));
          console.log("einde fct_account")     
        };



var grabUserInfor = undefined

// functie met serverID gebruikersnaam opvragen.
function getName() {

    console.log("getName");

    var id = window.localStorage.getItem("id");


    var url = "https://s9p7k0aywk.execute-api.eu-central-1.amazonaws.com/latest/account/" + id;
    console.log(url);


    fetch(url, {
        method: 'GET', // or 'PUT'

        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'sN3Fq24IrI92zfXBxCBxt1EN6IYHJpI0acqQhoQt',
        }
    })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        
        .catch(error => console.error('Error:', error));




};// end function getName
