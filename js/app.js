const hobbies = ["Cozinhar","Costurar","Correr","dormir","cagar","viajar","Concatenar"];
/*
const hobbies = [ { name : "Cozinhar",
    description : "Gosto de fazer diferentes comidas, principalmente salgadas",
  },
  {
    name : "Costurar",
    description : "Gosto de costurar couro",
  },
  {
    name : "Correr",
    description : "De vez em quando gosto de correr na rua",
  }
];
*/
hobbies.forEach(function(hobby) {  
console.log("Olá, eu sou o hobby " + hobby + "!");  
}); 

const bookTitle = hobbies.map(function(hobby){
  return "O incrivel mundo de " + hobby;
});

console.log(bookTitle);

const dHobbies = hobbies.filter(function(hobby) {
  return hobby[0] === 'd';
});
console.log(dHobbies);

const runningPosition = hobbies.findIndex(function(hobby) {
  return hobby === 'Correr';
});
console.log("Correr está na posição: " + runningPosition);

const allHobbies = hobbies.reduce(function(accumulator, hobby) {
  return accumulator + " e " + hobby;
  }
);


console.log("Meus hobbies são: " + allHobbies);

const hasVHobby = hobbies.some(function(hobby) {
  return hobby[0] === 'v';
});

console.log("Eu tenho um hobby que começa com 'v?'" + hasVHobby);

const hasHobbyWith8 = hobbies.some(function(hobby) {
  return hobby.length > 8;
})

console.log("Eu tenho um hobby com mais de 8 letras?" + hasHobbyWith8);

const allShort = hobbies.every(function(hobby) {
  return hobby.length < 15
});

console.log("Todos os meus hobbies têm menos de 15 letras?" + allShort);

const minorLetter = hobbies.every(function(hobby){
  if(hobby[0] === hobby.toLowerCase()) {
    return true;
  }else return false;
})

console.log("Todos os meus hobbies começam com letra minuscula? " +minorLetter);
/*
const div = document.createElement('div');que se você tem um hobby com mais de 8 letras! 

6. every(): O Escudo Protetor que se você tem um hobby com mais de 8 letras! 

6. every(): O Escudo Protetor 

const paragrafo = document.createElement('p');

div.appendChild(paragrafo);
document.body.appendChild(div);

div.classList.add('minhaClasse');

const exibirProdutos = () => {
  produtos.forEach((produto) => {
    paragrafo.innerHTML += 'Produto:' + produto.name + "</br>";
    paragrafo.innerHTML += 'Descrição:' + produto.description + "</br>";
    paragrafo.innerHTML += 'Preço:' + produto.price + "</br>";
    
  });  
}

const pesquisarProduto = () => {
  const idInput = document.getElementById('pesquisarProduto').value;
  const  resultado = produtos.filter(item => item.name.includes(idInput));
  paragrafo.innerHTML = resultado.map(item => item.name);

}

exibirProdutos();
document.addEventListener('input', pesquisarProduto);*/