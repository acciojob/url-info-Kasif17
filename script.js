//your JS code here. If required.
function showUrlLength() {
   
    let userUrl = prompt("Enter your URL:");

    if (userUrl) {
        let urlLength = userUrl.length;
        alert("The length of the URL is: " + urlLength);
    } else {
        alert("No URL entered!");
    }
}

showUrlLength();
