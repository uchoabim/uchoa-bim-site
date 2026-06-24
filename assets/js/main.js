// ===================================================================
// UCHOA BIM & CUSTOS — interações da Home
// ===================================================================

// Menu mobile (abre/fecha)
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  // fecha o menu ao clicar em um link
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// Ano automático no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Formulário de contato → envia a mensagem direto para o WhatsApp da empresa
const WHATSAPP_NUMERO = '5544999122326'; // 55 (Brasil) + 44 (DDD) + número
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = (form.nome?.value || '').trim();
    const email = (form.email?.value || '').trim();
    const empresa = (form.empresa?.value || '').trim();
    const mensagem = (form.mensagem?.value || '').trim();

    const texto =
      `Olá! Vim pelo site da UCHOA BIM & CUSTOS.\n\n` +
      `Nome: ${nome}\n` +
      `E-mail: ${email}\n` +
      (empresa ? `Empresa: ${empresa}\n` : '') +
      `\nMensagem: ${mensagem}`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
}
