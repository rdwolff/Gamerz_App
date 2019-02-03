var saveUser = undefined //hierheen verwijzen wanneer er user gegevens opgeslagen dienen te worden in local storage


//user new


function saveNewUser() {

    let user = {}
    user["userName"] = document.getElementById("userName").value;
    user["userEmail"] = document.getElementById("userEmail").value;
    user["userCountry"] = document.getElementById("userCountry").value;
    user["userCity"] = document.getElementById("userCity").value;
    saveUser = user;
    SaveToLocalStorage();

    document.getElementById("frm_userNew").reset("frm_userNew");
    document.location.href = "Settings.html";

}


//functie voor opslaan naar locale storage
function SaveToLocalStorage() {
    localStorage.setItem("user", JSON.stringify(saveUser));
    localStorage.setItem("userSaved", true);

};

//functie voor terughalen van locale storage


//page: user

function getUserInfo() {
    console.log("test");
		let user = localStorage.getItem("user")
		let user1 = JSON.parse(user);

		document.getElementById("userName").value 		= user1.userName
		document.getElementById("userEmail").value 		= user1.userEmail
		document.getElementById("userCountry").value 	= user1.userCountry
        document.getElementById("userCity").value 		= user1.userCity
        
	};


    function changeUser() {
  
      
       $('.readonly').prop('readonly', false);
       document.getElementById("userName").focus(); 
       document.getElementById("btn_saveUser").style.display = 'block';
       document.getElementById("btn_changeUser").style.display="none";
    }

    function saveUser() {

    }