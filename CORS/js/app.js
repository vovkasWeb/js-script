const url = "https://gmail.com";

function getGmail(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
   console.log(xhr.responseText);
  });
  xhr.addEventListener("error", () => {
    console.log("eror");
  });


  xhr.send();
}

getGmail();