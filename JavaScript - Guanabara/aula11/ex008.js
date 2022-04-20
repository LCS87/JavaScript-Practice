function calcular() {
    // ou document.querySelector('input#txtvel')
       var txtv = window.document.getElementById("txtvel") 
       var res = window.document.querySelector(`div#res`)
        var vel = Number(txtv.value)
         res.innerHTML = `<p>sua velocidade é de <strong>${vel}</strong></p>`
         if (vel > 60){
           res.innerHTML +=`<p>Voce esta <strong>MULTADO</strong> por excesso de velocidade`

         }
           res.innerHTML += `<p>Dirija sempre com cinto e segurança</p>`
}