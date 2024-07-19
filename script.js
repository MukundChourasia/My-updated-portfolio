var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');
});

    function opentab(tabname) {
      for (tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }
    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
      sidemenu.style.right = "0";
    }

    function closemenu() {
      sidemenu.style.right = "-200px";
    }

const proxyUrl = 'https://my-updated-portfolio-delta.vercel.app//';
const targetUrl = 'https://script.google.com/macros/s/AKfycbxXUHb8Fi5t6V84QdXWmfwnPnwpupbzdaBPxLlN5nnkbIVKWXhghW1C4IcNqjBkt-kSMQ/exec'; // Replace this with API URL

fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxXUHb8Fi5t6V84QdXWmfwnPnwpupbzdaBPxLlN5nnkbIVKWXhghW1C4IcNqjBkt-kSMQ/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          msg.innerHTML = "Message sent succesfully";
          setTimeout(function () {
            msg.innerHTML = "";
          }, 5000);
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    });
