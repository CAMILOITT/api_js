const main = document.querySelector('main'),
  fragment = document.createDocumentFragment(),
  // creamos una constante donde va a llevar la dirección de la petición
  url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';

function datos() {
  const options = { method: 'GET' };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      response.communityCategories.forEach((e) => {
        const $div = document.createElement('div');

        $div.className = 'main__target';
        // a esta etiqueta div le asignamos un  a clase
        //imprimimos en la consola para verificar el resultado
        console.log($div);

        $div.innerHTML = `
          <div class="target__container-img">
            <img class="container-img__background" src="${e.background}" alt="">
            <img class="container-img__logo" src="${e.icon}" alt="">
          </div>
          <div class="target__information">
            <h2 class="information information__title">${e.name}</h2>
            <p class="information information__quizzes">Total Quizzes: ${e.totalQuizzes}</p>
            <p class="information information__user">User: ${e.users}</p>
            <a href="https://larnu.app/#/" class="information information__link" >Go to larnU</a>
          </div>
          `;

        fragment.appendChild($div);
      });

      main.appendChild(fragment);
    })
    .catch((err) => console.error(err));
}

document.getElementById('btn').addEventListener('click', () => {
  datos();
});
