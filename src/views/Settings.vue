<template lang="pug">
#settings
    b-container
    table.table123
        tr
          td.h123 Data
          td.h123 Finished
          td.h123 Restart
        tr
          td 27 Jun,2019
          td 8
          td 3
        tr
          td 23 Jun,2019
          td 8
          td 3
        tr
          td 20 Jun,2019
          td 8
          td 3
</template>
<style>
.table123{
  width: 80%;
  font-weight: bold;
}
.table123 tr{
  border: 1px solid black;
}
.table123 tr:nth-child(1){
  border: none;
  font-size: 16px;
  font-weight: bold;
}
</style>
<script>
export default {
  data () {
    return {
      items: [
        { name: '鬧鈴', src: 'alarm.mp3' },
        { name: 'yay', src: 'yay.mp3' }
      ],
      fields: [
        { key: 'name', label: '名稱' },
        { key: 'src', label: '試聽' },
        { key: 'select', label: '選擇' }
      ]
    }
  },
  methods: {
    select (item) {
      console.log(item)
      this.$store.commit('selectSound', item.src)
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    }
  }
}
</script>
