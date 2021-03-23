class Cards {
  constructor () {
  }

  calculoScroll() {
    const posicao = document.getElementById
      ('section-dicas').getBoundingClientRect()['y'];
    console.log(posicao)
    if(posicao <= 25) {
      document.querySelector('.card-esq')
        .style.backgroundColor = 'blue';
      document.querySelector('.card-dir')
        .style.backgroundColor = 'red';
    }
  }
}

export { Cards };