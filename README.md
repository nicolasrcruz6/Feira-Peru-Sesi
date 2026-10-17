# Peru - Feira SESI Multicultural 2026

Abra `index.html` diretamente em um navegador atualizado. Não precisa de servidor, instalação ou internet para navegar pelas páginas, ver as fotos e responder ao quiz. Os links externos de referência e o acesso a vídeos da UNESCO exigem conexão.

## Organização

- `index.html`: abertura e caminhos de exploração.
- `peru.html`: identificação, mapa, regiões, identidade e Machu Picchu.
- `alimentacao.html`: quinoa, milho roxo e maca, com informações expansíveis, e pratos da culinária peruana.
- `saude.html`: saúde, desigualdades, qualidade de vida, política pública e conclusão.
- `cultura.html`: tradições e Dança das Tesouras, com área preparada para vídeo.
- `quiz.html`: sete perguntas, feedback, resultado e reinício.
- `fontes.html`: referências por categoria e créditos das fotografias.
- `assets/css/style.css`: identidade visual e regras responsivas.
- `assets/js/script.js`: menu, ícones, animações e contadores.
- `assets/js/quiz.js`: perguntas e funcionamento do quiz.
- `assets/img/`: fotografias e mapa locais.
- `assets/image-credits.json`: registro de autoria, licença e origem dos arquivos.

## Edição

Para trocar fotos, substitua o arquivo correspondente e atualize o crédito em `fontes.html` e `assets/image-credits.json`. A maioria das fotos usa licenças Creative Commons; preserve a atribuição e as condições de cada licença. A foto de tecelagem retrata uma demonstração de tecelãs de Cusco em Washington em 2015, identificada nos créditos.

Os textos estão no HTML de cada página. Mantenha ano e fonte junto de qualquer alteração em dados. O exemplo de política pública foi atualizado para o PAE em 2026, preservando o histórico de Qali Warma e Wasi Mikuna.

O player em `cultura.html#video-danca` usa o arquivo local `assets/video/danca-tesouras.webm`, de Chris Gill, disponibilizado no Wikimedia Commons sob CC BY 3.0. O original foi preservado, sem conversão. Os créditos estão na legenda, em `fontes.html#video` e em `assets/video/LEIA-ME.md`. Nenhum player externo é carregado automaticamente.

## Verificação

`tools/verify.cjs` testa as sete páginas em 1920x1080, 1366x768 e 390x844, usando Playwright com Chrome local. Testa arquivos de imagem, links e âncoras internos, menu móvel e os resultados 7/7 e 0/7 do quiz, incluindo reinício. As requisições externas ficam bloqueadas durante o teste.

`tools/verify-links.cjs` verifica os links externos das referências. Alguns sites oficiais podem aplicar proteção contra consultas automatizadas. Screenshots de revisão estão em `tools/screenshots/`.

`tools/review-content.cjs` confere os gráficos de pobreza e anemia de 2025, a abertura em telas de 320, 390 e 1920 px e os links de revisão sugeridos pelo quiz conforme as respostas erradas. Consulte `REVISAO.md` para o registro das alterações de conteúdo de outubro de 2026.

O layout antigo e suas ilustrações foram substituídos. Os estilos e scripts ativos ficam exclusivamente em `assets/css/` e `assets/js/`.
