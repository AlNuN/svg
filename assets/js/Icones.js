class Icones {
  constructor() {
    this.listaIcones = document.querySelectorAll('.icone');
  }
  
  animaIcones() {
    gsap.to(this.listaIcones, {scale: 0.9,
      repeat: -1, yoyo: true, duration: 0.5})
  }
}

export { Icones };
