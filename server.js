function register(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    let cartProducts = [];

    if (name && email && password && confirmpassword) {
        if (password.length >= 5 && confirmpassword.length >= 5) {
            if (password == confirmpassword) {
                let strawberryArray = JSON.parse(localStorage.getItem("strawberryUsers")) || [];
                let flag = false;
                for (let i = 0; i < strawberryArray.length; i++) {
                    if (strawberryArray[i].email == email) {
                        flag = true;
                    }
                }
                if (flag == true) {
                    alert("Email already taken.")
                } else {
                    let strawberry = { name, email, password, cartProducts };
                    strawberryArray.push(strawberry);
                    localStorage.setItem("strawberryUsers", JSON.stringify(strawberryArray));
                    alert("registered successfully");
                    document.getElementById("name").value = '';
                    document.getElementById("email").value = '';
                    document.getElementById("password").value = '';
                    confirmpassword = document.getElementById("confirmpassword").value = '';
                    window.location.href = './login.html';
                }
            } else {
                console.log('Credentials are not equal.');

            }
        } else {
            console.log('Password and confirm PAssword should be more than and equal to 5 digits.');

        }
    } else {
        console.log('All fields are required.');
    }
}


function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let loginUser = {};

    if (email && password) {
        let users = JSON.parse(localStorage.getItem("strawberryUsers"));
        let flag = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email ==email && users[i].password==password) {
                flag = true;
                loginUser = users[i];
            }
        }
        if (flag == true) {
            localStorage.setItem("strawberryLogin", JSON.stringify(loginUser));
            alert("Login Successful!");
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';
            window.location.href='./home.html';
        }else{
            alert("Incorret Credentials");
        }
    } else {
        console.log('Both fields are required.');

    }
}

function addproduct(event){
    event.preventDefault();
    let id=document.getElementById("id").value;
    let name=document.getElementById("name").value;
    let price=document.getElementById("price").value;
    let image=document.getElementById("image").value;

    if(name&& price && image){
        let productsarray=JSON.parse(localStorage.getItem("strawberryProducts")) || [];
        let product={id,name,price,image};
        productsarray.push(product);
        localStorage.setItem("strawberryProducts",JSON.stringify(productsarray));
        alert("product Added Successfully.");
        document.getElementById("id").value='';
        document.getElementById("name").value='';
        document.getElementById("price").value='';
        document.getElementById("image").value='';
        
    }else{
        alert("All fileds are required.");
    }
}