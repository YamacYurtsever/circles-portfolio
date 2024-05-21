document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#index-container .coin").forEach(function(section) {
        section.addEventListener("click", function() {
            var id = section.id;
            switch (id) {
                case "about":
                    becomeAbout();
                    break;
                case "hobbies":
                    becomeHobbies();
                    break;
                case "projects":
                    becomeProjects();
                    break;
            }
        });
    });

    document.querySelector("#back").addEventListener("click", () => {
        becomeIndex();
    })

    const flipable = document.querySelectorAll(".flip");
    flipable.forEach((element) => {
        element.addEventListener("mouseover", () => {
            const coinFront = element.querySelector(".coin-front");
            coinFront.style.transform = "rotateY(180deg)";
            const coinBack = element.querySelector(".coin-back");
            coinBack.style.transform = "rotateY(0deg)";
        });

        element.addEventListener("mouseout", () => {
            const coinFront = element.querySelector(".coin-front");
            coinFront.style.transform = "rotateY(0deg)";
            const coinBack = element.querySelector(".coin-back");
            coinBack.style.transform = "rotateY(180deg)";
        });
    })
});

function becomeIndex() {
    document.querySelector("#title").innerHTML = "Yamac Yurtsever";
    document.querySelector("main").style.boxShadow = "0px 0px 30px 30px var(--color-index)";
    document.querySelector("html").style.backgroundImage = "linear-gradient(to bottom, var(--color-index-transparent), var(--color-index-transparent)), url('images/background.png')";
    
    document.querySelector("#index-container").style.display = "flex";
    document.querySelector("#about-container").style.display = "none";
    document.querySelector("#hobbies-container").style.display = "none";
    document.querySelector("#projects-container").style.display = "none";
    document.querySelector("#back").style.display = "none";
}

function becomeAbout() {
    document.querySelector("#title").innerHTML = "About";
    document.querySelector("main").style.boxShadow = "0px 0px 30px 30px var(--color-about)";
    document.querySelector("html").style.backgroundImage = "linear-gradient(to bottom, var(--color-about-transparent), var(--color-about-transparent)), url('images/background.png')";
    
    document.querySelector("#index-container").style.display = "none";
    document.querySelector("#about-container").style.display = "flex";
    document.querySelector("#hobbies-container").style.display = "none";
    document.querySelector("#projects-container").style.display = "none";
    document.querySelector("#back").style.display = "block";
}

function becomeHobbies() {
    document.querySelector("#title").innerHTML = "Hobbies";
    document.querySelector("main").style.boxShadow = "0px 0px 30px 30px var(--color-hobbies)";
    document.querySelector("html").style.backgroundImage = "linear-gradient(to bottom, var(--color-hobbies-transparent), var(--color-hobbies-transparent)), url('images/background.png')";
    
    document.querySelector("#index-container").style.display = "none";
    document.querySelector("#about-container").style.display = "none";
    document.querySelector("#hobbies-container").style.display = "flex";
    document.querySelector("#projects-container").style.display = "none";
    document.querySelector("#back").style.display = "block";
}

function becomeProjects() {
    document.querySelector("#title").innerHTML = "Projects";
    document.querySelector("main").style.boxShadow = "0px 0px 30px 30px var(--color-projects)";
    document.querySelector("html").style.backgroundImage = "linear-gradient(to bottom, var(--color-projects-transparent), var(--color-projects-transparent)), url('images/background.png')";
    
    document.querySelector("#index-container").style.display = "none";
    document.querySelector("#about-container").style.display = "none";
    document.querySelector("#hobbies-container").style.display = "none";
    document.querySelector("#projects-container").style.display = "flex";
    document.querySelector("#back").style.display = "block";
}