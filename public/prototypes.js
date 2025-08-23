// handle burger menu
const bMenu = document.getElementById("bMenu");
const mobileNavDiv = document.getElementById("mobileNavDiv");

mobileNavDiv.style.display = "none"

const toggleMobileNav = () => {
    if (mobileNavDiv.style.display === "none") {
        console.log(mobileNavDiv.style.display)
        mobileNavDiv.style.display = "block"
    } else {
        mobileNavDiv.style.display = "none"
    }
}

bMenu.addEventListener("click", () => {
    toggleMobileNav()
});

document.addEventListener("click", e => {

    // hide mobile nave when clicked outside of the div
    if (!bMenu.contains(e.target)) {
        mobileNavDiv.style.display = "none"
    }
})