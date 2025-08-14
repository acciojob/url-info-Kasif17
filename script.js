//your JS code here. If required.
function UrlLength() {
    let currentUrl = location.href;
    let urlLength = currentUrl.length;
    return urlLength;
}

let lengthOfUrl = UrlLength(); 
alert("The length of the URL is: " + lengthOfUrl); 