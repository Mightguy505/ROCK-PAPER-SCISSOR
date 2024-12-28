
const selectedIcon = localStorage.getItem("selectedIcon")
let compUteIcon = localStorage.getItem("compUteIcon")

let IWin = parseInt(localStorage.getItem("IWin")) || 0
let compWin = parseInt(localStorage.getItem("compWin")) || 0
if(selectedIcon){
    const playLastLayer = document.querySelector(".PLAYLAST_LAYER")

    playLastLayer.innerHTML=""

    const icon = document.createElement("i")
    icon.className = `fa-solid ${getIconClass(selectedIcon)}`
    icon.id = `${selectedIcon}Play`
    playLastLayer.appendChild(icon)

    if(!compUteIcon){
        compUteIcon = getRandomIcon()
        localStorage.setItem("compUteIcon", compUteIcon)
    }
     
    const compUteIconClass = getIconClass(compUteIcon)
    
    const compLayer = document.querySelector(".PCLAST_LAYER")
    compLayer.innerHTML = ""
    
    const compIcon = document.createElement("i")
    compIcon.className = `fa-solid ${compUteIconClass}`
    compIcon.id = `${compUteIcon}Play`
    compLayer.appendChild(compIcon)

    const results = determineWinner(selectedIcon, compUteIcon)
    if(results === "You Win!"){
     IWin++;
     localStorage.setItem("IWin", IWin)
    }else if(results === "PC Win !"){
     compWin++;
     localStorage.setItem("compWin", compWin)
    }
    const resultsLayer = document.querySelector(".Win_Text h3")
    resultsLayer.innerHTML = `<p>${results}</p>`
    
    const scoreLayer = document.querySelector(".homeScore_Box h5")
    scoreLayer.innerHTML = `<h5>${IWin}</p>`

    const computerLayer = document.querySelector("#yourbox h5")
computerLayer.innerHTML = `<h5>${compWin}</h5>`
}


function getIconClass(iconId){
    const iconMapping = {
        handSymbol : "fa-hand",
        fistSymbol : "fa-hand-back-fist",
        scissorSymbol : "fa-hand-scissors",
    }

    return iconMapping[iconId] || ""
}

function getRandomIcon(){
    const cIcon = ["handSymbol", "fistSymbol", "scissorSymbol"]
    const rIndex = Math.floor(Math.random() * cIcon.length)
    return cIcon[rIndex]
}

function determineWinner(userChosen, computerChosen){

    if(userChosen === computerChosen){
        return "It's a tie!"
    }else if((userChosen === "scissorSymbol" && computerChosen === "handSymbol") || (userChosen === "fistSymbol" && computerChosen ==="scissorSymbol" ) || (userChosen === "handSymbol" && computerChosen === "fistSymbol")
    ){
        return "You Win!"
    }else{
        return "PC Win!"
    }}

    document.querySelector(".PlayAgain").addEventListener("click", () => {
        window.location.href ="HomePage.html"
    })

    const HomePage = window.location.pathname.includes("HomePage.html")
    if(HomePage){
        let IWin = parseInt(localStorage.getItem("IWin")) || 0
let compWin = parseInt(localStorage.getItem("compWin")) || 0

document.querySelector("#yourbox h5").textContent = IWin
document.querySelector("#compScore h5").textContent = compWin
    }

    document.querySelector(".PlayNext_btn").addEventListener("click", () => {
        window.location.href = "LastPage.html"
    })