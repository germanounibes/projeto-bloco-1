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
        //sistema do colorpicker
        const colorPicker = document.getElementById("colorPicker");
        const component = document.getElementById("carta");
        colorPicker.addEventListener("input", (event) => {
            const cor = event.target.value;
            component.style.boxShadow = `inset 25px 25px ${cor}`;
        });
        //função modo dark
        function modoEscuro() {
            // Fundo e Título
            document.body.style.backgroundImage = "linear-gradient(135deg, #121212 0%, #1a2a6c 100%)";
            document.querySelector('h1').style.color = "#4a9eff";

            // Inputs e Botões
            var inputs = document.querySelectorAll('input');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].style.backgroundColor = "#333";
                inputs[i].style.color = "white";
            }

            var botoes = document.querySelectorAll('.botao');
            for (var j = 0; j < botoes.length; j++) {
                botoes[j].style.backgroundColor = "#000";
                botoes[j].style.color = "#4a9eff";
            }
        }
        //função modo light
        function modoClaro() {
            // Fundo e Título
            document.body.style.backgroundImage = "linear-gradient(135deg, #f5f7fa 0%, rgb(150, 191, 255) 100%)";
            document.querySelector('h1').style.color = "#2758c4";

            // Inputs e Botões
            var inputs = document.querySelectorAll('input');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].style.backgroundColor = "#FFF";
                inputs[i].style.color = "";
            }

            var botoes = document.querySelectorAll('.botao');
            for (var j = 0; j < botoes.length; j++) {
                botoes[j].style.backgroundColor = "rgb(105, 163, 255)";
                botoes[j].style.color = "white";
            }
        }