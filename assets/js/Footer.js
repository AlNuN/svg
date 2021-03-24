class Footer {
  constructor() {
    this.filtroTurbulencia = document.getElementById('filtro-turbulencia');
  }

  efeitoOnda() {
    gsap.to(this.filtroTurbulencia, {
      attr: {
        baseFrequency: 0.03,
      },
      repeat: -1,
      yoyo: true,
      duration: 20,
    });
  }
}

export { Footer };
