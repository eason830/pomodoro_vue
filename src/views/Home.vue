<template lang="pug">
#home
  b-container
    b-row
      img.img123(src="../assets/001.png")
      b-col.text123(cols='12')
        h1.h1 {{ timeText}}
        h5 {{ currentText }}
        b-btn.mx-1.w-50.start123(variant="dark" v-if="status !== 1" @click="start") start
        b-btn.mx-1.w-50.h-100.py-2.pause123(variant="white" v-else @click="pause")
          b-icon(icon="pause-fill" font-scale="2.5")
        br
        b-btn.restart123(v-if="status === 1" @click="restart") Restart
</template>
<style>
.pause123{
  border: 2px solid #343a40;
}
.restart123{
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  color: black;
  border-color: white;
}
.h1{
  font-size: 4rem;
  text-align: center;
}
.img123{
  position: absolute;
  z-index: -1;
  top: 80px;
  left: 80px;
}
.text123{
  width: 350px;
  position: absolute;
  top: 180px;
  left: 100px;
  text-align: center;
}
.start123{
  font-size: 30px;
}
</style>
<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.items.length > 0 ? '點擊開始' : '沒有事項'
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    }
  },
  methods: {
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')
      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + this.$store.state.sound)
        audio.play()
      }
      if (this.items.length > 0) {
        this.start()
      }
    },
    restart () {
      this.$store.commit('restart')
      this.pause()
    }
  }
}
</script>
