//

var themes = {
    "light": {
        "background": "#FFFEFD",
        "seperator": "rgba(0,0,0,0.06)",
        "text": "#252525",
        "block_border": "#D3D3D3",
        "block_shadow": "rgba(0,0,0,0.05)",
        "block_background": "#FFFFFF",
        "code_comment": "rgba(0,0,0,0.4)"
    },
    "sepia": {
        "background": "#FFE6CA",
        "seperator": "rgba(0,0,0,0.06)",
        "text": "#252525",
        "block_border": "#C0A280",
        "block_shadow": "rgba(0,0,0,0.05)",
        "block_background": "#FFEFDD",
        "code_comment": "rgba(0,0,0,0.4)"
    },
    "dark": {
        "background": "#000",
        "seperator": "rgba(1,1,1,0.12)",
        "text": "#FFFFFF",
        "block_border": "#404040",
        "block_shadow": "transparent",
        "block_background": "#151017",
        "code_comment": "rgba(1,1,1,0.4)"
    }
}

function switchTheme(theme) {
    document.getElementById("theme").setAttribute("href", "/stylesheets/themes/" + theme + ".css");
    document.body.setAttribute("theme", theme)
    localStorage.setItem("theme", theme)
}

function setThemeFromLocalStorage() {
    var theme = localStorage.getItem("theme");
    switchTheme(theme);
}
