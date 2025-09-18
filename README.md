# Madeireira Pristilo — Landing Page SEO

Site estático, otimizado para SEO, pronto para deploy em **Vercel** (recomendado) ou **GitHub Pages**.

## ✍️ Como personalizar
- Troque telefone/WhatsApp, endereço e redes sociais no `index.html` (busque por **Sua Cidade**, **+55** etc.).
- Substitua imagens em `/assets` pelas suas fotos reais (mantenha os nomes para não quebrar links).
- Ajuste os dados do JSON-LD (schema.org) com seu endereço real — isso ajuda muito no SEO local.
- Crie páginas/blog no futuro (opcional) e adicione ao `sitemap.xml`.

## 🚀 Deploy na Vercel
1. Crie um repositório no GitHub e envie os arquivos.
2. No painel da **Vercel**, clique **New Project** → **Import Git Repository** → selecione o repo.
3. Em **Framework Preset**, escolha **Other**; em **Root Directory**, deixe a raiz mesmo (este projeto é estático).
4. Deploy! Sua URL `.vercel.app` sairá na hora. Adicione o domínio customizado se quiser.

## 🚀 Deploy no GitHub Pages
1. Crie um repositório e suba estes arquivos na branch `main`.
2. Em **Settings → Pages**, escolha **Deploy from a branch** e selecione `main` e a pasta `/`.
3. Acesse a URL gerada (algo como `https://seuusuario.github.io/nome-do-repo`).

## 🧩 Formulário sem backend
O formulário usa **FormSubmit**. Altere o e-mail em `action=` para receber as mensagens. Em produção, prefira um backend próprio na Vercel (Serverless) caso queira validação e anti-spam avançados.

## 🔎 SEO checklist rápido
- Title e description únicos (já configurados).
- JSON‑LD de **LocalBusiness** e **FAQPage** (já incluso).
- Conteúdo local: liste bairros/regiões atendidas (adicione mais no bloco “Atendimento por Região”).
- Imagens com `alt` descritivo (já feito).
- Sitemap e robots configurados (ajuste domínio nos arquivos).
- Links internos: use as âncoras do menu.
- Crie um **Google Business Profile** e vincule seu site lá.
- Configure **Search Console** (sitemap e verificação).

## 📁 Estrutura
```
/assets        # imagens (substitua pelas suas)
index.html
styles.css
script.js
robots.txt
sitemap.xml
vercel.json
README.md
```

Boa obra! 🪵