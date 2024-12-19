let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


function printCV() {
    // Cria um iframe temporário para carregar o PDF
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none'; // Oculta o iframe
    iframe.src = './Imagens/Fidélio Ricardo Cacholote - Curriculum_054657.pdf';
    document.body.appendChild(iframe);

    // Aguarda o carregamento do PDF e dispara a impressão
    iframe.onload = () => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        document.body.removeChild(iframe); // Remove o iframe após a impressão
    };
}



 // Inicialize o EmailJS com a chave pública (você encontra isso no painel do EmailJS)
emailjs.init('service_ola699u');  // Substitua 'YOUR_USER_ID' pela sua chave de usuário fornecida pelo EmailJS

// Captura o formulário de envio
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado da maneira tradicional

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const mensagem = document.getElementById('mensagem').value;

    // Envia o e-mail através do EmailJS
    const templateParams = {
        nome: nome,
        email: email,
        celular: celular,
        mensagem: mensagem
    };

    // Chama o serviço do EmailJS e envia o e-mail
    emailjs.send('service_ola699u', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('Success:', response);
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            console.log('Error:', error);
            alert('Falha no envio. Tente novamente.');
        });
});