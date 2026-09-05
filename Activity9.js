// Function for Card 1 (Name Input)
function clickMe() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        document.getElementById("displayName").innerText = "Please enter a valid name!";
    } else {
        document.getElementById("displayName").innerText = "Hello, " + name + "!";
    }
}

// Function for Card 3 (Subject Input)
function displaySubject() {
    var subject = document.getElementById("subjectInput").value;
    if (subject.trim() === "") {
        document.getElementById("subjectOutput").innerText = "Please enter a subject!";
    } else {
        document.getElementById("subjectOutput").innerText = "Your favorite subject is: " + subject;
    }
}

// Function for Card 4 (Change Text Section)
function changeText() {
    document.getElementById("sentence").innerHTML = "The text has been dynamically changed!";
}

// Function for Card 5 (Age Input Section)
function submitForm() {
    var ageValue = document.getElementById("age").value;
    if (ageValue === "") {
        document.getElementById("output").innerText = "Please enter your age.";
    } else {
        document.getElementById("output").innerText = "Age successfully recorded: " + ageValue + " years old.";
        console.log("Recorded Age: " + ageValue);
    }
}