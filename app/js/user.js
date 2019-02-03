//user new
//document.getElementById("btn_saveNewUser").addEventListener("click", saveNewUser);
var saveNewUser = undefined
function saveNewUser() {

    let user = {}
    user["userName"] = document.getElementById("userName").value;
    user["userEmail"] = document.getElementById("userEmail").value;
    user["userCountry"] = document.getElementById("userCountry").value;
    user["userCity"] = document.getElementById("userCity").value;
    newUser = user;
    SaveToLocalStorage();

    document.getElementById("frm_userNew").reset("frm_userNew");
    document.location.href = "Settings.html";

}


//functie voor opslaan naar locale storage
function SaveToLocalStorage() {
    localStorage.setItem("user", JSON.stringify(saveNewUser));
    localStorage.setItem("userSaved", true);

}


//page: user
	{
		let user = localStorage.getItem("user")
		let user1 = JSON.parse(user);

		document.getElementById("userName").value 		= user1.userName
		document.getElementById("userEmail").value 		= user1.userEmail
		document.getElementById("userCountry").value 	= user1.userCountry
		document.getElementById("userCity").value 		= user1.userCity
	}

