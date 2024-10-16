  const username = document.getElementById('name')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btnCalculate')
  const predict= document.getElementById('btnPredict')
  const response = document.getElementById('Answer')

  btnCalculate.addEventListener('click', calculateNote );
  predict.addEventListener('click', predictEvent );

  function calculateNote() {
    event.preventDefault();
    let user= username.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4))


    if (result>0 && result<=3.5 ){
        response.textContent= `Hola ${user} su nota definitiva es: ${result}, perdio la materia`
        response.style.color='red';
    }
    else if (result>=3.6 && result <= 4.5){
        response.textContent= `Hola ${user} su nota definitiva es: ${result},Gano la materia`
        response.style.color='orange';
    }
    else if (result>=4.6 && result <= 5.0){
        response.textContent=`Hola ${user} su nota definitiva es: ${result},Su nota es sobresaliente`
        response.style.color='green';
    }
    else {
        response.textContent= `Hola ${user} alguna de sus notas es invalida,revise`
    }
  }

  
  function predictEvent(event) {
    event.preventDefault();
    let user = username.value;
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let noteMinimum = 3.5;

    if (note1 < 1 && note1 > 5 && note2 < 1 && note2 > 5) {
      alert('Alguna de las notas no concuerda');
      return
    }
    
    let result2 = (noteMinimum - (note1 * 0.3) - (note2 * 0.3)) / 0.4;

    if (result2 > 5.0) {

      data3.placeholder= `${result2.toFixed(2)}`
      response.style.color = 'black';
      response.textContent = `${user}, te falta mucho para pasar la materia. Necesitas: ${result2.toFixed(2)};`

  } else if (result2 < 0) {

      data3.placeholder= `${result2.toFixed(2)}`
      response.style.color = 'green';
      response.textContent = `${user}, ya tienes suficiente para pasar la materia.;`

  } else {
      data3.placeholder= `${result2.toFixed(2)}`
      response.style.color = 'blue';
      response.textContent = `${user}, necesitas sacar al menos: ${result2.toFixed(2)} para pasar la materia.;`
  }
}
  
  
