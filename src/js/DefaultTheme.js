import React, { useState } from "react";
// import "../styles/styleCake.css";


const DefaultTheme = () => {
const [actualTheme , setActualTheme]= useState("");

const handleAcualTheme = () => {

    setActualTheme(()=> {
        actualTheme = document.querySelector("body").getAttribute("data-theme")
    });


}


    const setDefaultTheme = () => {
        document.querySelector("body").setAttribute('data-theme', "default");
        localStorage.setItem("selectedTheme", "default")
    };

    const setCakeTheme = () => {
        document.querySelector("body").setAttribute('data-theme', "cake");
        localStorage.setItem("selectedTheme", "cake")
    }


    const selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === "cake") {
        setCakeTheme()
    };

    const ChangeTheme = (e) => {
        if (e.target.checked) setCakeTheme();
        else setDefaultTheme()
    };
const themeTextCake = "Cake Theme";
const themeTextLeather = "Leather Theme";

    return (
        <div class="item">
            <div class="toggle-pill flex-column text-start">
                <input type="checkbox" id="pill1" name="check" onChange={ChangeTheme} defaultChecked={selectedTheme === "cake"} />
                <label className="label" htmlFor="pill1"></label>
                <p className="theme-text">{actualTheme === "default" ? themeTextCake : themeTextLeather}</p>
            </div>
        </div>
    )


}

export { DefaultTheme };