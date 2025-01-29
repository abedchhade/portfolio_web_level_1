// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Replace with your EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");
});

// Skills Data
const skillsData = [
    {
        name: "HTML",
        image: "images/html-logo.webp"
    },
    {
        name: "CSS",
        image: "images/css-logo.webp"
    },
    {
        name: "JavaScript",
        image: "images/javascript-logo.webp"
    },
    {
        name: "Node.js",
        image: "images/node-logo.webp"
    },
    {
        name: "React.js",
        image: "images/react-logo.webp"
    }
];
const lang = document.getElementById("languages");
skillsData.map(function(a) {
    const div2 = document.createElement("div");
    const img2 =document.createElement("img");
    img2.src =a.image;
    const name2= document.createElement("span");
    name2.innerHTML =a.name;
    div2.style.width= "150px" ;
    div2.style.height="30px";
    lang.appendChild(div2);
    div2.appendChild(img2);
    div2.appendChild(name2);
   
   
    console.log(div2);
});
// Projects Data
const projectsData = [
   /* {
        title: "Project One",
        image: "images/project1.webp",
        description: "Description of project one goes here.",
        tags: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/username/project1",
            demo: "https://demo-link.com"
        }
    },*/
    // Add more projects as needed
    {
        title: "To-do List",
        image: "images/todo.jpeg",
        description: "a sucsessful project after a hard time with javascript",
        tags: ["HTML", "CSS", "JavaScript"],
        links:{
            github:"https://github.com/abedchhade/to-do-list.git",
            demo:"https://to-do-list-3vow.onrender.com/todo.html"
        }
    },
    {
        title: "first portfolio",
        image: "images/portfolio1.jpeg",
        description: "My first project ,the begining of my journey",
        tags:["HTML","CSS" ,"JAVASCRIPT"],
        links: {
            github:"https://github.com/abedchhade/academy_portfolio_web_level_1_assessment.git",
            demo:"https://academy-portfolio.onrender.com"
        }
    }

];

// Initialize phone input
const phoneInput = document.querySelector("#phone");
if (phoneInput) {
    window.intlTelInput(phoneInput, {
        preferredCountries: ["us", "gb"],
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    });
}
 
const project = document.getElementById("container");
projectsData.map(
function (a){
 let div1 = document.createElement("div");
 let img = document.createElement("img");
 img.src = a.image;
 div1.appendChild(img);
 img.style.height=  "200px" ;
 img.style.width ="300px";
 img.style.borderRadius= "10px 10px 0px 0px";
 project.appendChild(div1);
 div1.style.backgroundColor="white";
 div1.style.borderRadius="10px";
 div1.style.width="300px";
 let head = document.createElement("p");
 head.style.padding="10px";
 head.innerHTML= "<h1>"+a.title+"</h1><p>"+a.description+"</p><p><span>"+a.tags[0]+"</span><span>"+a.tags[1]+"</span><span>"+a.tags[2]+"</span></br><a href="+a.links.github+"><img class=\"ram\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjNGE3NmVlIiBkPSJNOCAwYzQuNDIgMCA4IDMuNTggOCA4YTguMDEgOC4wMSAwIDAgMS01LjQ1IDcuNTljLS40LjA4LS41NS0uMTctLjU1LS4zOGMwLS4yNy4wMS0xLjEzLjAxLTIuMmMwLS43NS0uMjUtMS4yMy0uNTQtMS40OGMxLjc4LS4yIDMuNjUtLjg4IDMuNjUtMy45NWMwLS44OC0uMzEtMS41OS0uODItMi4xNWMuMDgtLjIuMzYtMS4wMi0uMDgtMi4xMmMwIDAtLjY3LS4yMi0yLjIuODJjLS42NC0uMTgtMS4zMi0uMjctMi0uMjdzLTEuMzYuMDktMiAuMjdjLTEuNTMtMS4wMy0yLjItLjgyLTIuMi0uODJjLS40NCAxLjEtLjE2IDEuOTItLjA4IDIuMTJjLS41MS41Ni0uODIgMS4yOC0uODIgMi4xNWMwIDMuMDYgMS44NiAzLjc1IDMuNjQgMy45NWMtLjIzLjItLjQ0LjU1LS41MSAxLjA3Yy0uNDYuMjEtMS42MS41NS0yLjMzLS42NmMtLjE1LS4yNC0uNi0uODMtMS4yMy0uODJjLS42Ny4wMS0uMjcuMzguMDEuNTNjLjM0LjE5LjczLjkuODIgMS4xM2MuMTYuNDUuNjggMS4zMSAyLjY5Ljk0YzAgLjY3LjAxIDEuMy4wMSAxLjQ5YzAgLjIxLS4xNS40NS0uNTUuMzhBNy45OTUgNy45OTUgMCAwIDEgMCA4YzAtNC40MiAzLjU4LTggOC04Ii8+PC9zdmc+\" > code</a>"+"<a href="+a.links.demo+"><img class=\"ram\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsPSIjNGE3NmVlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDhoNXYySDZ2OGg4di01aDJ2NWEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMnYtOGEyIDIgMCAwIDEgMi0ybTEwLjYxNC0ySDEyVjRoOHY4aC0yVjcuNDQybC01LjMzNiA1LjMzNmwtMS40MTQtMS40MTR6Ii8+PC9zdmc+\"> Livedemo</a></p>"  ;
 div1.appendChild(head);
 
});
const message = document.getElementById("message");
const counter = document.getElementById("counter");
function count(){
    var len = message.value;
     counter.innerText= len.length;
}
message.addEventListener("input",count);

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data after the form is submitted
    const params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value
    };

    // Validate inputs
    if (!params.name || !params.email || !params.message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    const service_id = 'service_t829qtd';
    const template_id = 'template_p99k6fo';
    const user_id = 'IVYAGipEG_H9Lzz00';

    // Send email using EmailJS
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: service_id,
            template_id: template_id,
            user_id: user_id,
            template_params: params
        })
    })
        .then(response => {
            if (response.ok) {
                console.log('SUCCESS!');
                alert('Your message was sent successfully!');
            } else {
                return response.json().then(err => {
                    console.log('FAILED...', err);
                    alert('Failed to send your message. Please try again later.');
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send your message. Please try again later.');
        });
});




// Form validation and submission will be added later 