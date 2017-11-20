const inputs = document.querySelectorAll('input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  // wprowadzamy do zmiennej pusty string, gdyż nie mamy data-sizing w palecie kolorów. W wypadku gdybyśmy nie dodali tej możliwośći przeglaradka wysypie undefined.
  console.log(this.value);

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);


}

inputs.forEach(function(input){
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
})
