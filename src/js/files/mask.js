export default function mask() {
  const inputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7 (999) 999-99-99");
  if (inputs.length) {
    im.mask(inputs);
  }
}
