//sistema dos valores do formulario
function fun() {
    var nomeV = document.getElementById('nome').value;
    var cargoV = document.getElementById('cargo').value;
    var empresaV = document.getElementById('empresa').value;
    var emailV = document.getElementById('email').value;

    document.getElementById('nomeH').innerText = (nomeV);
    document.getElementById('cargoH').innerText = (cargoV);
    document.getElementById('empresaH').innerText = (empresaV);
    document.getElementById('emailH').innerText = (emailV);
};
// sistema do colorpicker
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", (event) => {
    const cor = event.target.value;
    document.documentElement.style.setProperty("--carta-sombra", cor);
});

// função modo dark
function modoEscuro() {
    const root = document.documentElement.style;
    root.setProperty("--cor-primaria", "#4a9eff");
    root.setProperty("--cor-acento", "#002081");
    root.setProperty("--cor-label", "white");
    root.setProperty("--cor-label-hover", "#4a9eff");
    root.setProperty("--cor-sombra", "rgba(0, 39, 102, 0.69)");
    document.body.classList.add("dark");
}

// função modo light
function modoClaro() {
    const root = document.documentElement.style;
    root.setProperty("--cor-primaria", "#2758c4");
    root.setProperty("--cor-acento", "rgb(105, 163, 255)");
    root.setProperty("--cor-label", "#000000");
    root.setProperty("--cor-label-hover", "#007bff");
    root.setProperty("--cor-sombra", "rgba(150, 191, 255, 0.685)");
    document.body.classList.remove("dark");
}