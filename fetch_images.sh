#!/usr/bin/env bash
# Baixa fotos royalty‑free do Unsplash para uso local no site.
# Requer: curl
set -e

mkdir -p assets

download () {
  url="$1"
  out="$2"
  echo "Baixando: $out"
  curl -L --fail --silent --show-error "$url" -o "$out"
}

# Produtos
download "https://source.unsplash.com/800x534/?lumber,hardwood" "assets/prod-madeiras-serradas.jpg"
download "https://source.unsplash.com/800x534/?wood%20ceiling,wood%20panel" "assets/prod-forros.jpg"
download "https://source.unsplash.com/800x534/?door%20trim,architrave" "assets/prod-guarnicoes.jpg"
download "https://source.unsplash.com/800x534/?clay%20roof%20tiles" "assets/prod-telhas-ceramicas.jpg"
download "https://source.unsplash.com/800x534/?fiber%20cement%20roof" "assets/prod-telha-fibrocimento.jpg"
download "https://source.unsplash.com/800x534/?nails,construction" "assets/prod-pregos.jpg"
download "https://source.unsplash.com/800x534/?wood%20planks%20stack" "assets/prod-tabuas.jpg"
download "https://source.unsplash.com/800x534/?wood%20door" "assets/prod-portas.jpg"
download "https://source.unsplash.com/800x534/?door%20hardware,hinge,lock" "assets/prod-ferragens.jpg"

echo "Pronto! As imagens foram salvas em ./assets. Faça commit e deploy."
