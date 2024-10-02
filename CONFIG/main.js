document.addEventListener("DOMContentLoaded", () => {
    const themeStylesheet = document.getElementById('themeStylesheet');
    const themeSelector = document.getElementById('theme');
    const savedTheme = localStorage.getItem('selectedTheme');

    // Se houver um tema salvo, aplica-o ao carregar a página
    if (savedTheme) {
        switchTheme(savedTheme);
        themeSelector.value = savedTheme;
    }

    themeSelector.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        switchTheme(selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
    });

    function switchTheme(theme) {
        if (theme === 'light') {
            themeStylesheet.href = 'light-theme.css';
        } else {
            themeStylesheet.href = 'estilos.css';
        }
    }

    // Botões de ações
    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'C:\Users\Aluno\Downloads\CATUW\CONFIGURAÇÕES\config.html';
    });

    document.getElementById('changeAccountButton').addEventListener('click', () => {
        window.location.href = 'C:\Users\Aluno\Downloads\CATUW\LOGIN\tela_de_login.html';
    });

    document.getElementById('logoutButton').addEventListener('click', () => {
        alert("Você foi desconectado.");
        window.location.href = 'C:\Users\Aluno\Downloads\CATUW\LOGIN\tela_de_login.html';
    });

    document.getElementById('deleteAccountButton').addEventListener('click', () => {
        if (confirm("Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.")) {
            alert("Sua conta foi excluída.");
            window.location.href = "http://127.0.0.1:5500/REGISTRO/tela_de_registro.html";
        }
    });
});
