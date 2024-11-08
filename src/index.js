import createDropdown from "./dropDownMenu";
import "./styles.css";

function setupDropdowns() {
    document.querySelectorAll("[data-dropdown]").forEach(dropdownElement => {
        createDropdown(dropdownElement);
    });
};

// practice using custom attributes for selecting for JS functionality instead of classes.

document.addEventListener("DOMContentLoaded", setupDropdowns);