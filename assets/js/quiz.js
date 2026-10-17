/* Edite aqui perguntas, alternativas e explicações. Todas vêm das páginas do site. */
const questions=[
 {question:'Quais são as três grandes regiões do Peru?',answers:['Costa, Andes/Sierra e Amazônia/Selva','Pampa, Patagônia e Cerrado','Caribe, Pantanal e Savana','Costa, Alpes e Deserto'],correct:0,explanation:'O território peruano reúne a Costa do Pacífico, os Andes/Sierra e a Amazônia/Selva.'},
 {question:'Qual alimento andino é destacado pela FAO por seu valor nutritivo?',answers:['Café','Quinoa','Arroz branco','Trigo europeu'],correct:1,explanation:'A quinoa é um cultivo tradicional dos Andes, ligado à agricultura familiar e à segurança alimentar.'},
 {question:'Qual combinação descreve corretamente o milho roxo e a maca?',answers:['Ambos são medicamentos que curam doenças','A maca é um tipo de milho e o milho roxo é uma raiz','O milho roxo entra na chicha morada; a maca é consumida em preparações e em pó','Ambos são cultivados apenas no litoral'],correct:2,explanation:'O milho roxo dá cor à chicha morada. A maca é uma planta andina cuja parte comestível aparece em pó, bebidas e mingaus, sem promessas medicinais.'},
 {question:'Por que o território pode dificultar o acesso à saúde?',answers:['Porque não existem cidades no Peru','Porque todos os peruanos vivem em ilhas','Porque Machu Picchu causa desigualdade','Porque montanhas, rios e distâncias podem tornar os deslocamentos mais difíceis'],correct:3,explanation:'O relevo e as distâncias afetam transporte, tempo e custo para chegar a consultas e emergências. Machu Picchu ajuda a visualizar os Andes, mas não causa desigualdade.'},
 {question:'Em 2025, onde a pobreza e a anemia infantil foram maiores no Peru?',answers:['Nas áreas rurais','Nas áreas urbanas','Foram iguais nas duas áreas','Esses indicadores não variam por local'],correct:0,explanation:'Segundo o INEI, a pobreza foi de 35,5% no meio rural e 23,4% no urbano. A anemia em crianças de 6 a 35 meses atingiu 43,2% e 31,5%, respectivamente.'},
 {question:'O que caracteriza a Dança das Tesouras?',answers:['Uma técnica de pesca','Uma prática andina com música, lâminas metálicas e desafios físicos','Uma sobremesa feita de milho roxo','Uma dança criada como atração de Machu Picchu'],correct:1,explanation:'A Danza de las Tijeras envolve comunidades quéchuas, resistência, equilíbrio e competição ritual. Foi inscrita pela UNESCO em 2010.'},
 {question:'Qual iniciativa relaciona nutrição, escola e redução de desigualdades?',answers:['Construção de estádios','Venda de ingressos turísticos','Programa de Alimentação Escolar (PAE)','Festival de cinema'],correct:2,explanation:'O PAE, ligado ao MIDIS, oferece alimentação escolar complementar. Em 2026, o serviço opera com comida quente e alimentos prontos para consumo.'}
];
const reviewTopics=[
 {href:'peru.html',label:'Peru e suas regiões'},
 {href:'alimentacao.html#quinoa',label:'Quinoa'},
 {href:'alimentacao.html',label:'Milho roxo e maca'},
 {href:'saude.html#territorio',label:'Território e acesso à saúde'},
 {href:'saude.html#desigualdades',label:'Desigualdades urbanas e rurais'},
 {href:'cultura.html#danca',label:'Dança das Tesouras'},
 {href:'saude.html#politica',label:'Alimentação escolar'}
];
let current=0,score=0,answered=false;
const missed=new Set();
const title=document.querySelector('#question-title'),answers=document.querySelector('#answer-grid'),feedback=document.querySelector('#feedback'),next=document.querySelector('#next-question'),result=document.querySelector('#quiz-result'),count=document.querySelector('#question-count'),live=document.querySelector('#score-live'),progress=document.querySelector('#quiz-progress');
function setProgress(value){progress.style.width=`${value/questions.length*100}%`;progress.parentElement.setAttribute('aria-valuenow',String(value));}
function renderQuestion(focus=false){
 answered=false;const item=questions[current];result.hidden=true;document.querySelector('#question-area').hidden=false;
 count.textContent=`Pergunta ${current+1} de ${questions.length}`;live.textContent=`${score} ${score===1?'acerto':'acertos'}`;setProgress(current);
 title.textContent=item.question;feedback.replaceChildren();next.hidden=true;answers.replaceChildren();
 item.answers.forEach((text,index)=>{const button=document.createElement('button');button.type='button';button.className='answer';const letter=document.createElement('span');letter.className='answer-letter';letter.textContent=String.fromCharCode(65+index);letter.setAttribute('aria-hidden','true');const label=document.createElement('span');label.textContent=text;button.append(letter,label);button.addEventListener('click',()=>selectAnswer(index));answers.append(button);});
 if(focus)title.focus();
}
function selectAnswer(index){
 if(answered)return;answered=true;const item=questions[current],correct=index===item.correct;
 if(correct)score++;else missed.add(current);Array.from(answers.children).forEach((button,i)=>{button.disabled=true;if(i===item.correct){button.classList.add('correct');button.setAttribute('aria-label',`${item.answers[i]} — Resposta correta`);}else if(i===index){button.classList.add('wrong');button.setAttribute('aria-label',`${item.answers[i]} — Resposta incorreta`);}});
 const status=document.createElement('strong');status.textContent=correct?'Resposta certa!':'Ainda não. Veja a resposta correta:';feedback.append(status,document.createTextNode(item.explanation));
 live.textContent=`${score} ${score===1?'acerto':'acertos'}`;setProgress(current+1);next.textContent=current===questions.length-1?'Ver resultado':'Próxima pergunta';next.hidden=false;
}
function finish(){
 document.querySelector('#question-area').hidden=true;result.hidden=false;count.textContent='Quiz concluído';setProgress(questions.length);
 document.querySelector('#result-score').textContent=`${score} / ${questions.length}`;
 document.querySelector('#result-message').textContent=score>=6?'Excelente! Você conectou cultura, alimentos, território e saúde. Agora leve essas descobertas para a conversa na feira.':score>=4?'Muito bem! Você entendeu os principais temas. Uma nova visita às páginas pode ajudar a aprofundar as conexões.':'Cada descoberta conta. Explore novamente o Peru e veja como território, cultura e acesso a serviços se relacionam.';
 const reviewLinks=document.querySelector('#review-links');
 reviewLinks.replaceChildren();
 document.querySelector('#review-intro').hidden=missed.size===0;
 for(const index of missed){const topic=reviewTopics[index],link=document.createElement('a');link.href=topic.href;link.textContent=topic.label;reviewLinks.append(link);}
 if(missed.size)document.querySelector('#result-message').textContent+=' Reveja os temas abaixo e tente novamente: cada visita traz uma nova descoberta.';
 document.querySelector('#result-heading').focus();
}
next.addEventListener('click',()=>{if(!answered)return;if(current<questions.length-1){current++;renderQuestion(true);}else finish();});
document.querySelector('#restart-quiz').addEventListener('click',()=>{current=0;score=0;missed.clear();renderQuestion(true);});
renderQuestion();
