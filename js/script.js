function ResponsiveToggle(){ 
        //This one adds a class to the navbar that makes you able to put some specifications to make it responsive
        var x = document.getElementById("navbar");
        if (x.className === "topnav") {
          x.className += "responsive";
        } else {
          x.className = "topnav";
        }
     
}

function ShowingUp(){
    //This one writes everything that is related to cheat-codes in Teachers Fall
    var areaForSelection = document.getElementById("selecting-area");

    const codes = "<li><b>MOTHERLODE</b> - Itens gratuitos na loja;</li>" +
     "<br>" + "<li><b>HESOYAM</b> - Restaura todos os status;</li>" +
    "<br>" + "<li><b>Konami code</b> - Invencibilidade</li>" + 
    "<br>" + "<li><b>/give teachersfall:nomedoitem</b> - Adquirir items via comando.</li>";

    areaForSelection.innerHTML = codes;
}

function WritingBasics(){
    //Sinopsis on index page 
    var descriptions = document.getElementById('game-description');

    const sinopsis = "<p>Sempre tirando as maiores notas em qualquer matéria, o protagonista começa a chamar atenção entre os professores, principalmente a de Louis Flawell. </p>" + "<br>" + 
    "<p>Certo dia, ao tirar a maior nota na prova final de Louis, o professor fica espantado com a possibilidade de perder seu título de M.I.E. e convence outros professores a atribuírem péssimas notas ao protagonista em troca de um <b>SSD Princeston, KC2500, 2TB, M.2 NVMe, Leitura 3500MB/s, Gravação 2900MB/s (com LED RGB).</b></p>" + 
    "<br>" + "<p> Assim, o protagonista inicia sua jornada em busca de <b>notas finais justas.</b> <img id='Idle-MC' src='resource/AndyIdle-Left.gif' alt='Teachers Fall protagonist Idle animation'></p>"

    descriptions.innerHTML = sinopsis;
}

function CheatWarning(){
    //Just making fun of people that often go after cheat-codes
    var messages = ['Você não deveria apenas jogar normalmente?', 'Você não consegue passar de fase né...', 'Isso não é vergonhoso?', 'Quer dizer...só porque existe no jogo não significa que tem que ser usado sempre...', 'Você quer um modo mais fácil? Pode mandar um feedback se quiser 🥱'];

    alert(messages[Math.floor(Math.random() * messages.length)]);
}

function WarningSpoiler(){
    //Alert to warn about spoilers inside the Q&A page.
    alert("Algumas abas de resposta podem conter spoiler sobre o jogo, não nos responsabilizamos por eventuais desapontamentos.")
}

function WarningDownload(){
    //Alert to warn about the demo, shall be modified when it comes out
    alert('Por enquanto não há nenhuma demo, então nenhum dos botões te levará a algum lugar...')
}

function DiscordServer(){
    //Alert to warn about Discord Server - will be disabled when the server gets ready
    alert('Servidor atualmente em manutenção.');
}