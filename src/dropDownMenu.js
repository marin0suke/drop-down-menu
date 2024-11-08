

function createDropdown(dropdownElement) { // factory for smaller app/function. naming verb since factory?
    const menu = dropdownElement.querySelector(".menu-items");
    const toggleButton = dropdownElement.querySelector(".drop-down-button");

    function toggleDropdown() {
        menu.classList.toggle("visible");
    }

    function hideDropdown() {
        menu.classList.remove("visible");
    }

    toggleButton.addEventListener("click", toggleDropdown); // toggle button toggles menu.
    menu.addEventListener("mouseleave", hideDropdown); // when mouse leave visible menu, triggers hideDropdown.
    
    return { // expose inner functions for testing if needed.
        toggleDropdown,
        hideDropdown
    };

};

export default createDropdown;


