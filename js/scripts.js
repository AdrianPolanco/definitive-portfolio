const toggleTheme = document.getElementById("toggle-theme"); /*The background or mode of the page*/ 
const toggleIcon = document.getElementById("toggle-icon"); /*The Sun/Moon icon*/
const toggleText = document.getElementById("toggle-text"); /*The text next to the  Sun/Moon icon */

const toggleColors = document.getElementById("toggle-colors"); /*Gets the elements with the class "toggle-colors"*/ 

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const specificSelector = document.getElementById("student");


const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];

    }

    if (language == "es" && toggleIcon.src.includes("moon.svg")){
        toggleText.textContent = "Modo Oscuro"
    } else if(language == "en" && toggleIcon.src.includes("moon.svg")){
        toggleText.textContent = "Dark Mode"
    }
    else if(language == "es" && toggleIcon.src.includes("sun.svg")){
        toggleText.textContent = "Modo Claro"
    }else if(language == "en" && toggleIcon.src.includes("sun.svg")){
        toggleText.textContent = "Light Mode"
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);

});


/*Listens the "event" of the click and makes a function that takes the HTML/CSS class "dark" and if it has the icon of the moon
changes both the background color and icon to the light mode, and the same applies if the current mode is the light mode, turn it into dark mode*/ 
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src="assets/icons/sun.svg"
        toggleText.textContent = "Light Mode"
        if (specificSelector.innerHTML == "Estudiante de Desarrollo de Software"){
            toggleText.textContent = "Modo Claro";
        }
        

    } else {
    toggleIcon.src="assets/icons/moon.svg"
    toggleText.textContent = "Dark Mode"

    if (specificSelector.innerHTML == "Estudiante de Desarrollo de Software"){
        toggleText.textContent = "Modo Oscuro";
    }
    
}

})



toggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--primary-color", e.target.dataset.color)
    
})