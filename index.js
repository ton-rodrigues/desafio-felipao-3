class heroi{
    constructor (nomeHeroi, idadeHeroi, tipoHeroi){
      this.nomeHeroi = nomeHeroi
      this.idadeHeroi = idadeHeroi
      this.tipoHeroi = tipoHeroi
    }
    
    escolher (){
      console.log(`O ${this.tipoHeroi} é ${this.nomeHeroi} e tem ${this.idadeHeroi} anos de experiência`)
    }
    atacar (){
        let ataque = " "

        switch (this.tipoHeroi) {
            case "Guerreiro" :
            ataque = "Espada de Tanus."
            break
            case "Mago" :
            ataque = "Varinha do Réri Poter."
            break
            case "Monge" :
            ataque = "Poderes do Pensamento."
            break
            case "Ninja" :
            ataque = "Shurikens do Papa."
            break
            default:
                ataque = "atacou"
                break
        }

        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)


    }
    
  }
  
  let heroiOrion = new heroi("Órion", 333 , "Guerreiro")
  let heroiGaia = new heroi("Gáia", 857 , "Mago")
  let heroiAris = new heroi("Áris", 99 , "Monge")
  let heroiKabut = new heroi("Kábut", 00 , "Ninja")
  
  heroiOrion.escolher()
  heroiOrion.atacar()
  heroiGaia.escolher()
  heroiKabut.atacar()
  heroiAris.atacar()