
login=()=>{
    let username=uname.value
    let password=pswd.value

    if(!username || !password){
        alert("Invalid credentails!! Login failed!!!")
    }
    else{
        localStorage.setItem("username",username)
        console.log(`username:${username},Password:${password}`);
        window.location="dashboard.html"
    }
}