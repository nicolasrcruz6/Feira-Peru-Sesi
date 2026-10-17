# Revisão de conteúdo e apresentação

Data: 16/10/2026. Tema: Peru, diversidade cultural, saúde e desigualdades entre as regiões.

## Arquivos alterados

| Arquivo | Alteração |
| --- | --- |
| index.html | Tema do grupo no subtítulo; pergunta central na área de exploração. Mesmas fotografias e navegação. |
| peru.html | Regiões, diferenças internas, ligação entre território e serviços; inscrição de Machu Picchu na Lista do Patrimônio Mundial em 1983. |
| alimentacao.html | Ingredientes tradicionais da mesa identificados; nova seção de ceviche, lomo saltado e causa, com atalho e fontes. |
| saude.html | Pobreza e anemia de 2025, comparações urbano/rural, relações com qualidade de vida, PAE e conclusão. Todas as seções anteriores preservadas. |
| cultura.html | Comunidades quéchuas e aimarás, 55 povos, 48 línguas, força na Dança das Tesouras e participação cultural relacionada a oportunidades. |
| quiz.html | Área de recomendações de leitura no resultado, mantendo controles e estrutura anteriores. |
| fontes.html | Referências INEI 2025, metodologia ENDES, procedimentos PAE 2026 e receitas PROMPERÚ. Referências anteriores preservadas como históricas. |
| assets/css/style.css | Estilo da nova seção de pratos, altura flexível da abertura em celular e dados em coluna única abaixo de 380 px. Paleta, fontes e animações preservadas. |
| assets/js/quiz.js | Pergunta sobre desigualdade urbano/rural; links de revisão dos temas errados; limpeza das recomendações ao reiniciar. |
| tools/verify.cjs | Seletor adaptado às duas comparações e verificações dos links de revisão do quiz. |
| tools/review-content.cjs | Novo teste dos gráficos, abertura em 320/390/1920 px e recomendações personalizadas do quiz. |
| README.md | Documentação dos pratos e do teste adicional. |
| AUDITORIA.md | Registro dos indicadores atualizados, critérios preservados e limites opcionais. |
| REVISAO.md | Este registro. |

Nenhuma fotografia, licença, menu, animação, página, seção ou funcionalidade anterior foi removida. O arquivo compartilhado assets/js/script.js mantém os efeitos e o tratamento de falhas do vídeo local.

## Dados antigos e limites

- Pobreza de 27,6% e anemia de 35,3% eram dados de 2024, não valores de 2025. Foram substituídos pelos dados confirmados de 2025 nos destaques; as fontes antigas continuam disponíveis como histórico.
- INEI 2025: pobreza de 25,7% nacional, 23,4% urbana e 35,5% rural; anemia de 34,9% nacional, 31,5% urbana e 43,2% rural, em crianças de 6 a 35 meses.
- Seguro de saúde: 93,4% no 4º trimestre de 2025, segundo INEI / ENAHO. Água e saneamento conservam os períodos históricos indicados junto aos números.
- Anemia usa a diretriz OMS 2024 / RM 251-2024-MINSA. Resultados com faixas etárias ou critérios distintos não devem ser misturados.
- O PAE é apresentado como iniciativa pública, sem afirmar que resolveu os problemas ou atribuir resultados não demonstrados.
- Os três pratos receberam fotografias reais e identificadas, com arquivos locais e créditos no Wikimedia Commons / CC BY-SA 4.0. As fotos de quinoa, milho roxo e maca continuam nas respectivas seções de ingredientes.
- A seção cultural distingue a reflexão do grupo sobre acesso e participação das informações documentadas pela UNESCO.

## Critérios e validação

Todos os critérios da Feira SESI continuam representados: identificação, diversidade cultural, saúde, alimentação, qualidade de vida, desigualdades, política pública, prática corporal, produção textual, material visual, elementos físicos, interatividade e fontes.

O vídeo local da dança está incluído em assets/video/danca-tesouras.webm, com player funcionando e créditos preenchidos. As fotografias dos novos pratos também estão incluídas. O link complementar UNESCO e as demais fotografias foram preservados.

Testes locais usam file:// com requisições externas bloqueadas: sete páginas em 1920x1080, 1366x768 e 390x844; menu, imagens, links internos, ausência de rolagem horizontal e quiz. Testes adicionais verificam a abertura em 320x667 e o resultado parcial 6/7, além de 7/7, 0/7 e reinício. Os gráficos foram conferidos quanto aos valores e às larguras proporcionais.

Links oficiais e créditos foram consultados. Os links novos do INEI, PAE e Peru Travel responderam à verificação. A UNESCO pode bloquear consultas automatizadas; seus endereços oficiais foram confirmados por pesquisa. Links externos e acesso ao vídeo UNESCO exigem internet; o site, as fotos locais e o quiz funcionam offline.

## Capturas atualizadas

Saídas de verificação em tools/screenshots/:

- index-1920.png, index-390.png, index-section.png
- peru-1920.png, peru-390.png, peru-section.png
- alimentacao-1920.png, alimentacao-390.png, alimentacao-section.png
- saude-1920.png, saude-390.png, saude-section.png
- cultura-1920.png, cultura-390.png, cultura-section.png
- quiz-1920.png, quiz-390.png, quiz-section.png, quiz-result.png
- fontes-1920.png, fontes-390.png, fontes-section.png
- revisao-home-1920.png, revisao-home-390.png, revisao-home-320.png
- revisao-alimentacao-1920.png, revisao-alimentacao-390.png, revisao-alimentacao-320.png
- revisao-saude-1920.png, revisao-saude-390.png, revisao-saude-320.png

## Ajuste final: player local da dança

Arquivos alterados nesta etapa:

- cultura.html: player local com controles, capa preservada, explicação curta, aviso para arquivo ausente e espaço de crédito. Link UNESCO mantido.
- assets/css/style.css: regras específicas para o player responsivo, sem mudar a identidade.
- assets/js/script.js: tratamento de ausência ou falha de mídia; o aviso desaparece quando os metadados são carregados.
- fontes.html: seção #video com crédito completo de Scissor Dance, Peru, Chris Gill, Wikimedia Commons, CC BY 3.0, e referência complementar UNESCO.
- saude.html: somente atalho do PAE para cultura.html#video-danca. Estatísticas e explicações preservadas.
- assets/video/LEIA-ME.md: origem, autoria, licença, integridade e caminho do WebM local.
- README.md: instruções atualizadas do player.
- tools/review-content.cjs: verificações de poster, controles, caminho local, ausência de autoplay, aviso de arquivo ausente e enquadramento em três larguras.
- AUDITORIA.md: resultado e limite da validação de mídia.
- REVISAO.md: este registro adicional.

Capturas de testes em tools/screenshots/ foram atualizadas. Acrescentadas video-local-1920.png, video-local-390.png e video-local-320.png.

O arquivo existe em C:/Users/Lipe/Desktop/trabalho da feira/assets/video/danca-tesouras.webm. É o original de Chris Gill, obtido no Wikimedia Commons sob CC BY 3.0, sem cortes ou conversão. Reprodução, avanço e áudio foram verificados no Chrome e no Edge em modo offline. Créditos incluídos na legenda e em fontes.html#video.

Nenhum problema de conteúdo identificado nesta etapa; dados de 2025, seis alimentos/pratos, PAE, Machu Picchu e sete perguntas foram preservados. Os três pratos têm fotografias reais locais, além dos textos já existentes. Nenhuma página, seção ou funcionalidade removida; nenhum critério da feira deixou de ser representado.

## Ajustes finais de cobertura e fotografias

- saude.html: seguro de saúde atualizado de 91,4% (4º trimestre de 2024) para 93,4% (4º trimestre de 2025), sem mudar pobreza, anemia, PAE ou a navegação.
- alimentacao.html e assets/css/style.css: três fotos reais nos blocos de pratos já existentes, preservando ingredientes primeiro e textos curtos.
- fontes.html e assets/image-credits.json: referência oficial do indicador e atribuições completas das fotografias.
- assets/img/ceviche.jpg, assets/img/lomo-saltado.jpg e assets/img/causa-peruana.jpg: arquivos do Wikimedia Commons, com CC BY-SA 4.0, autores Miguel Salas UNMSM, Dtarazona e Zamazu33, respectivamente.
- AUDITORIA.md e REVISAO.md: instruções antigas de inclusão de vídeo substituídas pelo estado final do WebM local e seus créditos.

