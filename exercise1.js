// Enunciado:

// En el laboratorio de criptografía, se ha descubierto un antiguo pergamino que contiene una serie de códigos encriptados. Cada código está representado como un arreglo de números enteros. Tu misión es descifrar el mensaje oculto dentro de estos códigos. Sin embargo, hay un desafío adicional: los códigos están dispersos en varios niveles de anidamiento dentro de un gran arreglo multidimensional. Utiliza tus habilidades con JavaScript para aplicar el método flat y map y extraer el mensaje secreto.

// Instrucciones:

// Dado el arreglo multidimensional codigos, tu tarea es descifrar el mensaje oculto. Cada subarreglo contiene los números correspondientes a una palabra en el mensaje. Recorre el arreglo para convertir cada subarreglo en una palabra legible y luego utiliza algún metodo de los arreglos en JavaScript para aplanar el arreglo resultante. Finalmente, únelo todo para revelar el mensaje secreto.

const codigos = [
    [84, 104, 101],
    [115, 101],
    [99, 114, 101, 116, 111],
    [109, 101],
    [109, 101, 115, 115, 97, 103, 101],
    [111, 99, 117, 108, 116],
    [97],
    [115],
    [105, 109, 112, 108, 101],
  ];
  
  const mensajeSecreto = //Tu código aqui
  
  console.log("El mensaje secreto es:", mensajeSecreto);
  