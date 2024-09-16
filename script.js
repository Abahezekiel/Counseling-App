let myFormm = document.getElementById('myFormm')


function myFunction(event) {
  event.preventDefault(); 

  let name = document.getElementById('name').value;
  let age = document.getElementById('age').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  let counsel = document.getElementById('counsel').value;
  let session = document.getElementById('Session').value;
  let doctor = document.getElementById('doctor').value;
  let summary = document.getElementById('summary');

  let nowSlots = {
    "Dr. Ahmad": ["09:00", "12:30", ],
    "Dr. Esther": ["11:00", "14:30"],
    "Dr. Nas": ["10:30", "08:30"]
  };

  let valid = true;

  let aErr = document.getElementById('aErr');
  let bErr = document.getElementById('bErr');
  let cErr = document.getElementById('cErr');
  let dErr = document.getElementById('dErr');
  let eErr = document.getElementById('eErr');
  let fErr = document.getElementById('fErr');
  let gErr = document.getElementById('gErr');
  let hErr = document.getElementById('hErr');
  let iErr = document.getElementById('iErr');

  if (name === "") {
    aErr.innerHTML = "Required";
    valid = false;
  } else {
    aErr.innerHTML = "";
  }

  if (age === "") {
    bErr.innerHTML = "Required";
    valid = false;
  } else {
    bErr.innerHTML = "";
  }

  if (phone === "") {
    cErr.innerHTML = "Required";
    valid = false;
  } else {
    cErr.innerHTML = "";
  }

  if (email === "") {
    dErr.innerHTML = "Required";
    valid = false;
  } else {
    dErr.innerHTML = "";
  }

  if (date === "") {
    eErr.innerHTML = "Required";
    valid = false;
  } else {
    eErr.innerHTML = "";
  }

  if (time === "") {
    fErr.innerHTML = "Required";
    valid = false;
  } else {
    fErr.innerHTML = "";
  }

  if (counsel === "") {
    gErr.innerHTML = "Required";
    valid = false;
  } else {
    gErr.innerHTML = "";
  }

  if (session === "") {
    hErr.textContent = "Required";
    valid = false;
  } else {
    hErr.textContent = "";
  }

  if (doctor === "") {
    iErr.innerHTML = "Required";
    valid = false;
  } else {
    iErr.innerHTML = "";
  }

  if (!valid) {
    console.log("Form not submitted due to validation errors");
    return false; 
  }

  if (!nowSlots[doctor].includes(time)) {
    summary.innerHTML = `Sorry ${name}, no slots available for ${session} with ${doctor}. Please choose another session and doctor.`;
    return false; 

  } else {
    summary.innerHTML = `
    <P>Summary</p> 
    <p>NAME: ${name}</p>
    <p>AGE: ${age} (${age < 18 ? "Minor" : "Adult"})</p>
    <p>PHONE: ${phone}</p>
    <p>EMAIL: ${email}</p>
    <p>DATE: ${date}</p>
    <p>TIME: ${time}</p>
    <p>CLIENT: ${counsel}</p>
    <p>SESSION: ${session}</p>
    <p>DOCTOR: ${doctor}</p>
    <p>Cost: $100</p> 
    `
    ;


    return true; 



  }
  document.getElementById('myFormm').style.display = "none";
    console.log(myFormm)

}