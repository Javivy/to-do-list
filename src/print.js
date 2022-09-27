const printMe = () => {
  const div = document.createElement('div');
  div.innerHTML = 'Hola';

  document.body.appendChild(div);
};

export default printMe;