window.onload = function(){
    //tdo meu codigo

    //for(I; CONDIÇAO ; INCREMENTO );;


    //while
    /*
    let i = 0
    while( i <= 10 ){
          console.log(i +"\n");
          document.write(i + "\n");

          i++; //i = i + 1

    }
   */
/*
   let nome = prompt ('Digite seu nome ou FIM para sair ');

   while( nome.toUpperCase() != "FIM"){
         document.write(`<p>nome :${nome} </p>`)
         //document.write('nome : ' + nome)
         nome = prompt ('Digite se nome ou FIM ara sair ')

   }
   */
   //do while
     let nomes = [ "Jair" , "Madoka" , "Gallagher", "Juri" , "Sora"];
     
     //nomes[2]
     //nomes.lenght
     document.write("<ul>");
     /*for(let i = 0; i<= nomes.length-1; i++){
         document.write(`<li> ${nomes[i]} </li>`);
     }

     */

     nomes.forEach(( element, i )=>{
       document.write( `<li>${i + 1 } ${element}</li>`);
     });
     document.write("</ul>");

}