# 🚀 Publicar o site DE GRAÇA no GitHub Pages

O GitHub Pages é **100% gratuito de verdade** — sem cartão, sem créditos, sem limite de tempo.
Eu já deixei **todo o repositório Git pronto e commitado** dentro da pasta `site`.
Falta só a parte que exige o SEU login no GitHub (que só você pode fazer).

São 4 passos. Leva uns 5 minutos.

---

## Passo 1 — Criar uma conta no GitHub (se ainda não tiver)
1. Acesse https://github.com/signup
2. Crie a conta (gratuita). Anote seu **nome de usuário** — vamos usar já já.

---

## Passo 2 — Criar um repositório vazio
1. Acesse https://github.com/new
2. Em **Repository name**, escreva: `uchoa-bim-site`
3. Deixe como **Public** (público).
4. ⚠️ **NÃO** marque nenhuma opção de "Add a README", ".gitignore" ou "license".
   O repositório precisa nascer **vazio**.
5. Clique em **Create repository**.

---

## Passo 3 — Enviar o site (copie e cole os comandos)
Os arquivos já estão **prontos e commitados** — você só precisa conectar e enviar.
Abra o **Git Bash** (ou o terminal) e cole os comandos abaixo, **um de cada vez**.
Troque `SEU_USUARIO` pelo seu nome de usuário do GitHub.

```bash
cd "C:/Users/Gustavo Uchoa/OneDrive/Documentos/Engenharia Civil/Empresa/SITE/site"

git remote add origin https://github.com/SEU_USUARIO/uchoa-bim-site.git
git push -u origin main
```

➡️ No `git push`, vai abrir uma **janela do navegador** pedindo para você
fazer login no GitHub. Faça o login e autorize — é automático e seguro.
Depois disso, todos os arquivos sobem sozinhos.

---

## Passo 4 — Ligar o GitHub Pages
1. No GitHub, abra seu repositório `uchoa-bim-site`.
2. Clique em **Settings** (Configurações) no menu de cima.
3. No menu da esquerda, clique em **Pages**.
4. Em **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
6. Espere ~1 minuto e recarregue a página. Vai aparecer o endereço do seu site:

```
https://SEU_USUARIO.github.io/uchoa-bim-site/
```

🎉 Pronto! Seu site está no ar, de graça.

---

## Como ATUALIZAR o site depois
Sempre que você (ou eu) mudar algo, é só rodar no terminal, dentro da pasta `site`:

```bash
git add -A
git commit -m "descreva a mudança aqui"
git push
```

Em segundos o site atualiza sozinho.

---

## Dúvidas comuns

**O site abre sem as cores / quebrado?**
Espere mais 1-2 minutos após ligar o Pages — a primeira publicação demora um pouco.

**Quero um domínio próprio (ex.: uchoabim.com.br)?**
Dá para ligar depois, em Settings → Pages → Custom domain. Me chame que eu te guio.

**O vídeo de demonstração (29 MB) sobe normal?**
Sim, pelo `git push` ele vai junto sem problema. (Mais para frente vale subir os
vídeos no YouTube e deixar o site ainda mais leve — me lembre disso.)
