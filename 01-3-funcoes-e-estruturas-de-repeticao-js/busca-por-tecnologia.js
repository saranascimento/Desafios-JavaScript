const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ]

  function checaSeUsuarioUsaCSS(usuario) {
    
    return usuario.tecnologias.includes("CSS") 
    
  }
    
  // for (let i = 0; i < usuarios.length; i++) {
  //   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
  //   if (usuarioTrabalhaComCSS) {
  //     console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  //   }
  // }

  for (let usuario of usuarios) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
  }











  // for (let i = 0; i < usuarios.length; i++) {
  //   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);
  
  //   if (usuarioTrabalhaComCSS) {
  //     console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
  //   }
  // }


// function checaSeUsuarioUsaCSS(usuario) {
//     for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

//     if (usuarioTrabalhaComCSS) {
//       console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
//     }
//   }
// }





  // function checaSeUsuarioUsaCSS(usuario) {
  //   // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    
  //   return usuario.tecnologias.includes("CSS")
  //   // SE encontrar, retorne true da função, caso contrário retorne false
  // }

 