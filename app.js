new Vue({
  el: '#app',
  data: {
    navegationGame: false,
    playerLife: 100,
    monsterLife: 100,
  },
  computed: {
    hasResult(){ // Resultado da Life
      return this.playerLife == 0 || this.monsterLife == 0
    }    
  },
  methods: {
    startGame(){ // Iniciar Game
      this.navegationGame = true
      this.playerLife = 100
      this.monsterLife = 100

    },
    giveUp(){ // Desistir
      this.navegationGame = false
      this.playerLife = 0
      this.monsterLife = 0
    },
    attack(especial){
      this.hurt('playerLife', 7, 12, false)
      this.hurt('monsterLife', 5, 10, especial)
    },
    hurt(prop, min, max, especial){ // Dados aos Usuários
      const plus = especial ? 5: 0
      const hurt = this.getRandom(min + plus, max + plus)
      this[prop] = Math.max(this[prop] - hurt, 0)
    },
    curarEatacar(){ // Curar
      this.heal(10, 15)
      this.hurt('playerLife', 7, 12, false)
    },
    heal(min, max){
      const heal = this.getRandom(min, max)
      this.playerLife = Math.min(this.playerLife + heal, 100)
    },
    getRandom(min,max){ // Gera Valores aleatórios de Dano Sofrido
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    }
  },
  watch: {
    hasResult(value){
      if (value) this.navegationGame = false
    }

  }
})