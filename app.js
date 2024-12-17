// Open modal
function openModal(value) {
    if (value === 'sign') {
        document.getElementById("myModal").style.display = "flex";
    } else {
        document.getElementById('loginModal').style.display = 'flex';
    }
}

// Close modal
function closeModal(value) {
    if (value === 'sign') {
        document.getElementById("myModal").style.display = "none";
    } else if (value === 'log') {
        document.getElementById("loginModal").style.display = "none";
    }
}

// Background color change
let bgChange = (value) => {
    let body = document.getElementsByTagName('body')[0];
    if (value === 'white') {
        body.style.backgroundColor = "#fff";
        body.style.color = "#333333";
    } else {
        body.style.backgroundColor = "#333333";
        body.style.color = "white";
    }
}

// Initialize user data
let userDataList = JSON.parse(localStorage.getItem('users')) || [];


//___________________________________________________________________________________________________________________________________


// Sign-Up Functionality
function saveData(e) {
    e.preventDefault();

    let userName = document.getElementById('name').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    if (userName === '' || userEmail === '' || userPassword === '') {
        alert("Kindly fill all fields");
        return;
    }

    // Check if the email already exists
    for (let i = 0; i < userDataList.length; i++) {
        if (userDataList[i].Email === userEmail) {
            alert("Email already exists!");
            return;
        }
    }

    // Add new user to the list
    userDataList.push({
        Name: userName,
        Email: userEmail,
        Password: userPassword,
    });

    // Save updated data to localStorage
    localStorage.setItem("users", JSON.stringify(userDataList));
    localStorage.setItem('login',JSON.stringify(userDataList));
    alert("Sign-Up Successful");
    window.location.replace('./dashboard.html');
}
//__________________________________________________________________________________________________________________________________________________


// Login Functionality
let checkInfo = (e) => {
    e.preventDefault();

    let userEmail = document.getElementById('log-email').value;
    let userPassword = document.getElementById('log-password').value;
    console.log(userEmail, userPassword);

    let emailErr = document.getElementById("errorName");
    let passErr = document.getElementById("error");

    let emailFound = false;
    let passwordMatch = false;

    for (let i = 0; i < userDataList.length; i++) {
        if (userDataList[i].Email === userEmail) {
            emailFound = true; 
            if (userDataList[i].Password === userPassword) {
                passwordMatch = true; 
                break; 
            }
        }
    }

    // Check results after the loop
    if (!emailFound) {
        emailErr.innerText = 'Invalid Email';
        emailErr.style.display = 'block';
    } else {
        emailErr.style.display = 'none';
    }
    
    if (emailFound && !passwordMatch) {
        passErr.innerText = 'Invalid Password';
        passErr.style.display = 'block';
    } else {
        passErr.style.display = 'none';
    }

    //after both true conditions

    if (emailFound && passwordMatch) {
        let isLogin = searchData({
            Email: userEmail,
            Password: userPassword
        });

        if (isLogin) {
            localStorage.setItem("login", JSON.stringify(isLogin));
            window.location.replace('./dashboard.html');
        }
    }
};

var searchData = (value) => {
    for (let i = 0; i < userDataList.length; i++) {
        if (userDataList[i].Email === value.Email && userDataList[i].Password === value.Password) {
            return userDataList[i];
        }
    }
};
