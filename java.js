function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.getElementById('imagem')
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                img.src = 'imagens/criança.png'
            } else if (idade <21){
                img.src = 'imagens/jovem.png'
            } else if (idade <50){
                img.src = 'imagens/homem.png'
            } else {
                img.src = 'imagens/idoso.png'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                img.src = 'imagens/menina.png'
            } else if (idade <21){
                img.src = 'imagens/adolecente.png'
            } else if (idade <50){
                img.src = 'imagens/mulher.png'
            } else {
                img.src = 'imagens/idosa.png'
            }
        }
        res.innerHTML = `Você é ${gênero} com ${idade} anos`
    }
}