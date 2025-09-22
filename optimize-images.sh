#!/usr/bin/env bash
# Otimiza imagens WebP e gera variações responsivas
# Requisitos: imagemagick (convert) e cwebp
# sudo apt-get update && sudo apt-get install -y imagemagick webp
set -euo pipefail
cd "$(dirname "$0")/assets"

make_sizes() {
  local in="$1" base="${1%.*}" ext="${1##*.}"
  for w in 480 768 1200 1920; do
    if [ ! -f "${base}-${w}.webp" ]; then
      echo "Gerando ${base}-${w}.webp"
      convert "$in" -resize ${w}x -strip -quality 85 "${base}-${w}.webp"
      cwebp -quiet -q 68 "${base}-${w}.webp" -o "${base}-${w}.webp"
    fi
  done
}

compress_inplace(){
  local f="$1"
  echo "Compactando $f (q=68)"
  cwebp -quiet -q 68 "$f" -o "$f"
}

# Heros
for f in hero-madeiras-serradas1.webp hero-madeiras-serradas2.webp hero-madeiras-serradas3.webp hero-madeiras-serradas4.webp; do
  [ -f "$f" ] && make_sizes "$f" || true
  [ -f "$f" ] && compress_inplace "$f" || true
done

# Outras imagens comuns
for f in tabua.webp telha.webp forro.webp pergolado.webp telhado.webp deck.webp fibrocimento.webp logo.webp madeiraserradao.webp porta.webp telhado1.webp; do
  [ -f "$f" ] && compress_inplace "$f" || true
  [ -f "$f" ] && make_sizes "$f" || true
done

# Logo em tamanhos fixos otimizados para header
if [ -f "logo.webp" ]; then
  echo "Gerando variações específicas da logo (155x100 e 310x200)"
  convert logo.webp -resize 310x200\> -strip -quality 85 logo-310x200.webp
  cwebp -quiet -q 70 logo-310x200.webp -o logo-310x200.webp
  convert logo.webp -resize 155x100\> -strip -quality 85 logo-155x100.webp
  cwebp -quiet -q 70 logo-155x100.webp -o logo-155x100.webp
fi

echo "Pronto. Atualize seus srcset/sizes conforme necessário."
