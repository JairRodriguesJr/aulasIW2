window.onload = function(){

    // pegar os elementos
    let bt = document.querySelector("button");
    //let cep = document.querySelector("#cep");

  


    bt.addEventListener("click",()=>{
        //alert("que ifuhf e essa!!!");
        //alert(`valor ${cep.value}`)
        //alert("valor" + cep);
        let servidor = `https://viacep.com.br/ws/${cep.value}/json/`;
        //let servidor = `https://viacep.com.br/ws/"+cep.value"/json/`;
        console.log(servidor)
        
        fetch(servidor).then(
            (resp)=> {return resp.json();}
        ).then(
            (data)=> {
                console.log(data);
                console.log(data["bairro"]);
            }


        ).catch(
            (er)=> console.error(er)
        )


    })


}