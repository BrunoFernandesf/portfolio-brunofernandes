//Acessa o ínicio da página
const ancora = document.querySelector('.cabecalho__nav-portfolio');

ancora.addEventListener('click', function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

// Função para adicionar eventos de clique aos itens do menu
function addMenuClickEvents() {
    // Remover eventos de clique existentes
    document.querySelectorAll('.cabecalho__nav-menu-acesso-lista-itens').forEach(item => {
        item.removeEventListener('click', menuClickHandler);
    });

    // Adicionar eventos de clique
    document.querySelectorAll('.cabecalho__nav-menu-acesso-lista-itens').forEach(item => {
        item.addEventListener('click', menuClickHandler);
    });
}

// Função para lidar com cliques no menu
function menuClickHandler() {
    // Obtém a âncora correspondente com base no valor do atributo data-lang
    const langKey = this.getAttribute('data-lang');
    const anchor = document.getElementById(`id__${langKey}`);

    // Verifica se a âncora existe antes de rolar para ela
    if (anchor) {
        anchor.scrollIntoView({top: 10, behavior: 'smooth' });

        // Oculta o menu após a rolagem
        document.querySelector('.cabecalho__nav-menu-icone-x').classList.toggle('visivel');
        document.querySelector('.cabecalho__nav-menu-acesso').classList.toggle('ativo');
        document.querySelector('.cabecalho__nav-menu-icone-hamburg').classList.toggle('invisivel');
    }
}

// Adiciona um evento de clique ao ícone "Hamburguer" para exibir o menu
document.querySelector('.cabecalho__nav-menu-icone-hamburg').addEventListener('click', function () {
    const menuAcesso = document.querySelector('.cabecalho__nav-menu-acesso');
    const iconeHamburguer = document.querySelector('.cabecalho__nav-menu-icone-hamburg');
    const iconeX = document.querySelector('.cabecalho__nav-menu-icone-x');

    menuAcesso.classList.toggle('ativo');
    iconeHamburguer.classList.toggle('invisivel');
    iconeX.classList.toggle('visivel');
});

// Adiciona um evento de clique ao ícone "X" para ocultar o menu
document.querySelector('.cabecalho__nav-menu-icone-x').addEventListener('click', function () {
    const menuAcesso = document.querySelector('.cabecalho__nav-menu-acesso');
    const iconeHamburguer = document.querySelector('.cabecalho__nav-menu-icone-hamburg');
    const iconeX = document.querySelector('.cabecalho__nav-menu-icone-x');

    menuAcesso.classList.toggle('ativo');
    iconeHamburguer.classList.toggle('invisivel');
    iconeX.classList.toggle('visivel');
});

// Função para alternar o idioma
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');

        // Verifica se o idioma é "pt", se for, use o conteúdo original do HTML
        const translation = lang === 'pt' ? element.dataset.langOriginal : (translations[lang][key] || key);
        element.textContent = translation;
    });

    // Adiciona novamente os eventos de clique ao menu após a mudança de idioma
    addMenuClickEvents();
}

document.querySelector('.cabecalho__nav-idioma').addEventListener('click', function () {
    // Alterna entre inglês (en) e português (pt)
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    
    // Altera o idioma
    changeLanguage(newLanguage);

    // Atualiza o idioma atual
    currentLanguage = newLanguage;
});

// Inicializa as traduções
translations = {
    'en': {
        'sobre': 'About',
        'habilidades': 'Skills',
        'projetos': 'Projects',
        'contatos': 'Contacts',
        'portfolio': 'Portfolio',
        'idioma': 'PT-BR',
        'apresentacao01': 'Hello, I am Bruno Fernandes',
        'apresentacao02': 'Front-End Software Developer',
        'sobretexto': 'Front-end Developer specialized in HTML, CSS, JavaScript, React, and Bootstrap. With extensive knowledge in responsive design and a constant commitment to technical improvement, I have experience in creating intuitive and visually appealing user interfaces. I am seeking opportunities to apply my creativity and skills in innovative projects in Front-end development, contributing to the creation of efficient and high-quality websites and web applications.',
        'veja': 'See more',
        'textoProjeto01': 'A modern website for a gym, created from a design in Figma and developed with HTML, CSS, JavaScript, and Bootstrap. The project offers an attractive and responsive interface, ensuring a smooth and engaging user experience.',
        'textoProjeto02': 'Website for an electronics store, developed from a design in Figma and implemented with HTML, CSS, JavaScript, and Bootstrap. It offers a modern, responsive, and intuitive interface for an enhanced shopping experience.',
        'textoProjeto03': 'Professional website for a law firm, created with WordPress. It offers an elegant and responsive interface, ensuring easy and accessible navigation, with a focus on presenting legal services.',
        'textoProjeto04': 'Website for the local restaurant Pamonha da Iris, specializing in pamonhas, developed with Figma, HTML, CSS, and JavaScript. It features a friendly and responsive interface, highlighting the products and the cozy atmosphere.',
        'textoProjeto05': 'Website for the traditional Japanese restaurant Aska Lamen, designed in Figma and developed with HTML, CSS, and JavaScript. It features an elegant and responsive interface that highlights the authenticity of Japanese cuisine.',
        'textoProjeto06': 'Fokus é um temporizador estilo Pomodoro, desenvolvido para ajudar a manter o foco e a produtividade. Simples e intuitivo, oferece intervalos programados para otimizar o tempo de trabalho e descanso.'
    }
};

// Inicializa o idioma atual
let currentLanguage = 'pt';

// Salva o conteúdo original do HTML nos atributos dataset
document.querySelectorAll('[data-lang]').forEach(element => {
    element.dataset.langOriginal = element.textContent.trim();
});

// Inicializa os eventos de clique no menu
addMenuClickEvents();

//Muda o card
// Adiciona um evento de clique aos elementos do card
document.querySelectorAll('.principal__projetos__container-itens').forEach(item => {
    item.addEventListener('click', function () {
        // Adiciona ou remove a classe 'virado' ao elemento do card clicado
        this.classList.toggle('virado');
    });
});


