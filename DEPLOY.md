# Como publicar o site de graça

O site é **estático** (só HTML/CSS/JS), então é simples e gratuito de hospedar.
Abaixo, do mais fácil ao mais robusto.

---

## ✅ Antes de publicar
- **Contato:** e-mail, WhatsApp e LinkedIn já preenchidos (uchoabim@gmail.com · (44) 98803-4897 · linkedin.com/uchoa-bim).
- **Casos** (`casos.html`): troque os exemplos por casos reais quando tiver.

### Formulário de contato — já funciona, sem cadastro
O formulário do site envia a mensagem **direto para o seu WhatsApp**: quando o
visitante clica em "Enviar pelo WhatsApp", abre uma conversa no seu número com
nome, e-mail e mensagem já preenchidos. Não precisa de nenhum serviço externo.

> Se um dia quiser receber por e-mail em vez de WhatsApp, dá para trocar por um
> serviço gratuito (ex.: Formspree). É só avisar que eu configuro.

> ⚠️ Confirme o link do seu LinkedIn: o formato normal é
> `linkedin.com/in/seu-nome` (perfil) ou `linkedin.com/company/sua-empresa`
> (página). Usei `linkedin.com/uchoa-bim` conforme você passou — ajuste se for diferente.

---

## Opção 1 — Netlify Drop (mais fácil, sem conta técnica)
1. Acesse https://app.netlify.com/drop
2. Arraste a **pasta `site`** inteira para a janela.
3. Em segundos o site fica no ar com um endereço tipo `seu-site.netlify.app`.
4. Para atualizar: arraste a pasta de novo (ou conecte ao GitHub — opção 2).

> Dá para trocar o subdomínio e, depois, ligar um domínio próprio (ex.: `uchoabim.com.br`).

---

## Opção 2 — GitHub + Netlify (atualização automática)
1. Crie um repositório no GitHub e suba o conteúdo da pasta `site`.
2. No Netlify: "Add new site" → "Import from Git" → selecione o repo.
3. Em "Publish directory" use `.` (já configurado no `netlify.toml`).
4. A cada `git push`, o site atualiza sozinho.

---

## Opção 3 — GitHub Pages (100% grátis, sem Netlify)
1. Suba a pasta `site` para um repositório no GitHub.
2. Settings → Pages → Source: branch `main`, pasta `/root`.
3. O site fica em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

> No GitHub Pages, o formulário do Formspree continua funcionando normalmente.

---

## Domínio próprio (opcional)
1. Registre o domínio (ex.: registro.br para `.com.br`).
2. No Netlify: "Domain settings" → "Add custom domain" → siga as instruções de DNS.
3. O HTTPS (cadeado) é ativado automaticamente e de graça.

---

## Testar localmente antes
- **Mais simples:** dê duplo clique em `index.html` — abre no navegador.
- **Com servidor local** (recomendado para testar links/formulário), no terminal dentro da pasta `site`:
  - `python -m http.server 8000` e acesse `http://localhost:8000`
