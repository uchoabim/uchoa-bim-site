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

// Número de WhatsApp da empresa: 55 (Brasil) + 44 (DDD) + número
const WHATSAPP_NUMERO = '5544999122326';

// Botão flutuante de WhatsApp (aparece fixo no canto, em todas as páginas)
(function () {
  if (document.querySelector('.wa-float')) return;
  const msg = encodeURIComponent('Olá! Vim pelo site da UCHOA BIM & CUSTOS e gostaria de falar sobre um projeto.');
  const a = document.createElement('a');
  a.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${msg}`;
  a.target = '_blank'; a.rel = 'noopener';
  a.className = 'wa-float';
  a.setAttribute('aria-label', 'Falar no WhatsApp');
  a.innerHTML = '<svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.3-.4c-1-1.6-1.5-3.4-1.5-5.3C4.9 9.5 9.9 4.6 16 4.6S27 9.5 27 15.6 22 24.8 16 24.8zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.1 2.2.9 3 1 4.1.9.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/></svg>';
  document.body.appendChild(a);
})();

// Formulário de contato → envia a mensagem direto para o WhatsApp da empresa
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
