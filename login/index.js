accounts = {"Water": "water",
            "Static": "re:static",
            "Supercuties7": "supercuties7"
};

loginBtn = document.getElementById("loginBtn");
username = document.getElementById("username");
password = document.getElementById("password");
loginNews = document.getElementById("clickTest");

loginBtn.onclick = function(){
    if(Object.keys(accounts).includes(username.value)){
        if(accounts[username.value] == password.value){
            loginNews.textContent = "Logined!"
            window.location.href = "../portfolio/helpme.html"
        }else{
            loginNews.textContent = "Invalid Password"
        }
    }else{
        loginNews.textContent = "Invalid Username"
    }
}

registerBtn.onclick = function(){
    if(!Object.keys(accounts).includes(username.value)){
        if (password.value !== ""){
            accounts[username.value] = password.value;
            loginNews.textContent = "Account Created!"
        }
    }
}
    