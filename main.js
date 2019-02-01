
// Some starter code
document.querySelector(".btn__lego__save").addEventListener("click", event => {
    const creator = document.querySelector("#lego__creation").value
    let color = document.querySelector("#lego__color");
    let userColorPick = color.options[color.selectedIndex].text;
    const shape = document.querySelector("#lego__shape").value
    const creation = document.querySelector("#creation__name").value
    

    // // Once you have collected all the values, build your data structure
    const legoToSave = {
        creator,
        userColorPick,
        shape,
        creation
    }
    console.log(legoToSave)
})

