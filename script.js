function on(element) {
  element.classList.remove("off");
}
function off(element) {
  element.classList.add("off");
}

var listaNameFilmes = ["interstellar", "perdido em marte", "Coringa"];
var listaNameSeries = ["game of thrones", "stranger things", "dark"];
var listaNameJogos = ["dark souls", "diablo 3", "age of empires 2"];

var listaImgFilmes = [
  "https://cdn.fstatic.com/media/movies/covers/2014/05/interstellar_t27814_2.jpg",
  "https://br.web.img2.acsta.net/pictures/16/01/18/18/57/082205.jpg",
  "https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg"
];
var listaImgSeries = [
  "https://i.pinimg.com/originals/ac/4f/fd/ac4ffd8309980a091dd1dc57abe908b4.jpg",
  "https://www.quadrorama.com.br/wp-content/uploads/2017/10/quadro-poster-Stranger-things-11-01.png",
  "https://br.web.img2.acsta.net/r_1280_720/pictures/17/11/01/13/35/2780331.jpg"
];
var listaImgJogos = [
  "https://sm.ign.com/ign_br/screenshot/d/dark-souls/dark-souls-1-concept-cover_ywnn.jpg",
  "https://notadogame.com/uploads/game/cover/250x/5bfdc33b32e57.jpg",
  "https://store-images.s-microsoft.com/image/apps.55056.13678235101671609.c350aa6a-23e2-407c-94fd-5050e9bedb6f.f8b5d931-11f6-46e3-859f-54981d5b9d1b"
];

var listaLinkFilmes = [
  "https://www.youtube.com/watch?v=OWE-4gw18_E",
  "https://www.youtube.com/watch?v=QVX5DSzRn14",
  "https://www.youtube.com/watch?v=ntSvI2qaRxU"
];
var listaLinkSeries = [
  "https://www.imdb.com/title/tt0944947/",
  "https://www.imdb.com/title/tt4574334/?ref_=fn_al_tt_1",
  "https://www.imdb.com/title/tt5753856/?ref_=fn_al_tt_1"
];
var listaLinkJogos = [
  "https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/",
  "https://us.diablo3.com/pt-br/",
  "https://store.steampowered.com/app/813780/Age_of_Empires_II_Definitive_Edition/?l=brazilian"
];

var title = document.querySelector("#title");
var seletor = document.querySelector("#seletor");
var imagens = document.querySelector("#imagens");
var rodape = document.querySelector("#rodape");
var cadastro = document.querySelector("#cadastro");
var remover = document.querySelector("#remover");

function mostrarLista() {
  let select = document.querySelector("#select").value;
  off(seletor);
  off(cadastro);
  off(remover);
  let listRem = document.querySelector("#listRem");
  listRem.innerHTML=""
  on(imagens);
  switch (select) {
    case "filmes":
      document.querySelector("body").style.backgroundImage =
        "url('https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-04-aluraflix-e-filmes.png')";
      title.innerHTML = "Meus filmes";
      on(title);
      imagens.innerHTML = "";
      for (let i = 0; i < listaImgFilmes.length; i++) {
        imagens.innerHTML +=
          "<a href=" +
          listaLinkFilmes[i] +
          " target='blank'><img src=" +
          listaImgFilmes[i] +
          "></a>";
      }
      break;
    case "series":
      document.querySelector("body").style.backgroundImage =
        "url('https://i.imgur.com/ngGxzLc.png')";
      title.innerHTML = "Minhas séries";
      on(title);
      imagens.innerHTML = "";
      for (let j = 0; j < listaImgSeries.length; j++) {
        imagens.innerHTML +=
          "<a href=" +
          listaLinkSeries[j] +
          " target='blank'><img src=" +
          listaImgSeries[j] +
          "></a>";
      }
      break;
    case "jogos":
      document.querySelector("body").style.backgroundImage =
        "url('https://i.imgur.com/TYZU6ct.png')";
      title.innerHTML = "Meus jogos";
      on(title);
      imagens.innerHTML = "";
      for (let g = 0; g < listaImgJogos.length; g++) {
        imagens.innerHTML +=
          "<a href=" +
          listaLinkJogos[g] +
          " target='blank'><img src=" +
          listaImgJogos[g] +
          "></a>";
      }
      break;
  }
  on(rodape);
}
function trocarLista() {
  off(title);
  off(rodape);
  on(seletor);
  imagens.innerHTML = "";
  document.querySelector("body").style.backgroundImage = "url('')";
  document.querySelector("#select").value = "";
}
function abrirRem() {
  off(title);
  off(seletor);
  off(imagens);
  off(rodape);
  imagens.innerHTML = "";
  on(remover);
  let select = document.querySelector("#select").value;
  let removerTitle = document.querySelector("#removerTitle");
  let removerSubTitle = document.querySelector("#removerSubTitle");
  let listRem = document.querySelector("#listRem");

  switch (select) {
    case "filmes":
      removerTitle.innerHTML = "Remover filme(s)";
      removerSubTitle.innerHTML = "Escolha o(s) filme(s) para remover:";
      listaNameFilmes.forEach((element, index) => {
        listRem.innerHTML += "<div class='checbox'><input type='checkbox' id='"+element+"' value='"+index+"' class='optionRem'><label for='"+element+"'>"+element+"</label></div>"
      } )
      break;
    case "series":
      removerTitle.innerHTML = "Remover série(s)";
      removerSubTitle.innerHTML = "Escolha a(s) série(s) para remover:";
      listaNameSeries.forEach((element, index) => {
        listRem.innerHTML += "<div class='checbox'><input type='checkbox' id='"+element+"' value='"+index+"' class='optionRem'><label for='"+element+"'>"+element+"</label></div>"
      } )
      break;
    case "jogos":
      removerTitle.innerHTML = "Remover jogo(s)";
      removerSubTitle.innerHTML = "Escolha o(s) jogos(s) para remover:";
      listaNameJogos.forEach((element, index) => {
        listRem.innerHTML += "<div class='checbox'><input type='checkbox' id='"+element+"' value='"+index+"' class='optionRem'><label for='"+element+"'>"+element+"</label></div>"
      } )
      break;
  }
}
function abrirCadastro() {
  off(title);
  off(seletor);
  off(imagens);
  off(rodape);
  imagens.innerHTML = "";
  on(cadastro);
  let select = document.querySelector("#select").value;
  let titleCad = document.querySelector("#cadastroTitle");
  let nameInLab = document.querySelector("#nameInLab");
  let linkInLab = document.querySelector("#linkInLab");

  switch (select) {
    case "filmes":
      titleCad.innerHTML = "Cadastrar novo filme";
      nameInLab.innerHTML = "Nome do filme:";
      linkInLab.innerHTML = "Link do trailer:";
      break;
    case "series":
      titleCad.innerHTML = "Cadastrar nova série";
      nameInLab.innerHTML = "Nome da série:";
      linkInLab.innerHTML = "Link do IMDb:";
      break;
    case "jogos":
      titleCad.innerHTML = "Cadastrar novo jogo";
      nameInLab.innerHTML = "Nome do jogo:";
      linkInLab.innerHTML = "Link do jogo:";
      break;
  }
}
function checkNome() {
  let cadastroName = document
    .querySelector("#cadastroName")
    .value.toLowerCase();
  let botaoCad = document.querySelector("#botaoCad");
  let cadErro = document.querySelector("#cadErro");
  let select = document.querySelector("#select").value;
  switch (select) {
    case "filmes":
      for (let ii = 0; ii < listaNameFilmes.length; ii++) {
        if (listaNameFilmes[ii].toLowerCase() === cadastroName) {
          botaoCad.disabled = true;
          cadErro.innerHTML = "Filme já cadastrado";
        } else {
          botaoCad.disabled = false;
          cadErro.innerHTML = "";
        }
      }
      break;
    case "series":
      for (let jj = 0; jj < listaNameSeries.length; jj++) {
        if (listaNameSeries[jj].toLowerCase() === cadastroName) {
          botaoCad.disabled = true;
          cadErro.innerHTML = "Série já cadastrada";
        } else {
          botaoCad.disabled = false;
          cadErro.innerHTML = "";
        }
      }
      break;
    case "jogos":
      for (let gg = 0; gg < listaNameJogos.length; gg++) {
        if (listaNameJogos[gg].toLowerCase() === cadastroName) {
          botaoCad.disabled = true;
          cadErro.innerHTML = "Jogo já cadastrado";
        } else {
          botaoCad.disabled = false;
          cadErro.innerHTML = "";
        }
      }
      break;
  }
}
function checkImg() {
  let cadastroImg = document.querySelector("#cadastroImg").value;
  let botaoCad = document.querySelector("#botaoCad");
  let cadErro = document.querySelector("#cadErro");
  if (cadastroImg.endsWith(".jpg") || cadastroImg.endsWith(".png")) {
    botaoCad.disabled = false;
    cadErro.innerHTML = "";
  } else {
    botaoCad.disabled = true;
    cadErro.innerHTML = "Endereço do poster inválido";
  }
}
function cadastrar() {
  let cadastroName = document
    .querySelector("#cadastroName")
    .value.toLowerCase();
  let select = document.querySelector("#select").value;
  let cadastroImg = document.querySelector("#cadastroImg").value;
  let cadastroLink = document.querySelector("#cadastroLink").value;

  switch (select) {
    case "filmes":
      listaNameFilmes.push(cadastroName);
      listaImgFilmes.push(cadastroImg);
      listaLinkFilmes.push(cadastroLink);
      break;
    case "series":
      listaNameSeries.push(cadastroName);
      listaImgSeries.push(cadastroImg);
      listaLinkSeries.push(cadastroLink);
      break;
    case "jogos":
      listaNameJogos.push(cadastroName);
      listaImgJogos.push(cadastroImg);
      listaLinkJogos.push(cadastroLink);
      break;
  }
  mostrarLista();
}
function removerFun() {
  let elements = document.querySelectorAll(".optionRem")
  let select = document.querySelector("#select").value;
  let listRem = document.querySelector("#listRem");
  
  elements.forEach(element => {
    if (element.checked){
      switch (select){
        case "filmes":
          listaNameFilmes.splice(element.value, 1)
          listaLinkFilmes.splice(element.value, 1)
          listaImgFilmes.splice(element.value, 1)
          break
        case "series":
          listaNameSeries.splice(element.value, 1)
          listaLinkSeries.splice(element.value, 1)
          listaImgSeries.splice(element.value, 1)
          break
        case "jogos":
          listaNameJogos.splice(element.value, 1)
          listaLinkJogos.splice(element.value, 1)
          listaImgJogos.splice(element.value, 1)
          break
      }
    }
  })
  
  listRem.innerHTML=""
  mostrarLista();
}