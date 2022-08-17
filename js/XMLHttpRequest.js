const main = document.querySelector('main'),
  fragment = document.createDocumentFragment(),
  // creamos una constante donde va a llevar la dirección de la petición
  url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';

function datos() {
  // distanciamos un un objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  //creamos un evento en donde va a escuchar los cambios  que realiza el readystatechange
  xhr.addEventListener('readystatechange', () => {
    // esta condicional hace que la consola no repita 4 veces el mismo procedimiento
    if (xhr.readyState !== 4) return;
    console.log(xhr);
    /*creamos una validación con una condicional ojo esta validación remplaza la validación de errores de try/catch ya que esta no se puede utilizar en las peticiones de XMLHttpRequest*/

    if (xhr.status >= 200 && xhr.status <= 300) {
      // creamos un evento para el cuando termine de cargar la pagina la información de la api se muestre
      xhr.addEventListener('load', () => {
        // creamos una constante json para que obtenga la información en objetos
        const json = JSON.parse(xhr.responseText);
        // $main.innerHTML = json.communityCategories[0].companyCode;
        //mandamos a la consola para verificar como llega los datos
        console.log(json);
        //realizamos un bucle en este caso de tipo forEach
        //! primer intento
        json.communityCategories.forEach((e) => {
          //creamos una constante div en donde creamos una etiqueta div
          const $div = document.createElement('div');
          // a esta etiqueta div le asignamos un  a clase
          $div.className = 'main__target';
          //imprimimos en la consola para verificar el resultado
          console.log($div);
          //
          $div.innerHTML = `
          <div class="target__container-img">
          <img class="container-img__background" src="${e.background}" alt="">
          <img class="container-img__logo" src="${e.logo}" alt="">
          </div>
          <h2 class="target__information target__information-title">${e.name}</h2>
          <p class="target__information target__information-quizzes">Total Quizzes: ${e.totalQuizzes}</p>
          <p class="target__information target__information-user">User: ${e.users}</p>
          <a href="https://larnu.app/#/" class="target__information target__information-link" >Go to larnU</a>
          `;
          fragment.appendChild($div);
        });
        main.appendChild(fragment);
      });
    }
  });

  // definimos el tipo de petición
  // abrimos la petición
  xhr.open('GET', url);
  // enviamos la petición al servidor
  xhr.send();
}

// document.querySelector('.main__btn')
document.getElementById('btn').addEventListener('click', () => {
  datos();
});
