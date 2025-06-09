loginBtn = document.getElementById("loginBtn");
username = document.getElementById("username");
password = document.getElementById("password");
loginNews = document.getElementById("clickTest");

loginBtn.onclick = function(){
    if(Object.keys(localStorage).includes(username.value)){
        if(localStorage[username.value] == password.value){
            loginNews.textContent = "Logined!"
            window.location.href = "portfolio/helpme.html"
        }else{
            loginNews.textContent = "Invalid Password..."
        }
    }else{
        loginNews.textContent = "Invalid Username"
    }
}

registerBtn.onclick = function(){
    if(!Object.keys(localStorage).includes(username.value)){
        if (localStorage.value !== ""){
            localStorage[username.value] = password.value;
            loginNews.textContent = "Account Created!"
        }else{
            loginNews.textContent = "Blank Password"
        }
    }else{
            loginNews.textContent = "Username Taken"
    }
}
    
