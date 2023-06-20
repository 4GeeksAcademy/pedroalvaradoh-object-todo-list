import React, { useState, useEffect } from "react";


// Componente
// Componente
const DefaultTheme = () => {
    const [themeLabel, setThemeLabel] = useState("Swap Theme!");
    const selectedTheme = localStorage.getItem("selectedTheme");

    const setDefaultTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "default");
        localStorage.setItem("selectedTheme", "default");
    };

    const setCakeTheme = () => {
        document.querySelector("body").setAttribute("data-theme", "cake");
        localStorage.setItem("selectedTheme", "cake");
    };

    useEffect(() => {
        if (selectedTheme === "cake") {
            setCakeTheme();
        } else {
            setDefaultTheme();
        }
    }, [selectedTheme]);

    const ChangeTheme = (e) => {
        if (e.target.checked) {
            setCakeTheme();
            setThemeLabel("Cake Theme");
        } else {
            setDefaultTheme();
            setThemeLabel("Leather Theme");
        }
    };

    return (
        <div className="item">
            <div className="toggle-pill flex-column text-start">
                <input
                    type="checkbox"
                    id="pill1"
                    name="check"
                    onChange={ChangeTheme}
                    defaultChecked={selectedTheme === "cake"}
                />
                <label className="label" htmlFor="pill1"></label>
                <p className="theme-text">{themeLabel}</p>
            </div>
        </div>
    );
};

export { DefaultTheme };