<template lang="pug">
#list
  b-container.mt-3
    b-row
      b-col(cols="12")
        b-btn.plus(@click="additem")
          img(src="../assets/002.png")
      b-col(cols="12")
        b-form-group(label-for="newinput" invalid-feedback="字數太少" )
          b-form-input#newinput(v-model="newinput" :state="newinputstate" @keydown.enter="additem" placeholder="What are going to do today?")
      b-col.my-3(cols="12")
        b-table(:items="items" :fields="fields" show-empty  hover)
          template(#empty)
            p.text-center 沒有項目
          template(#cell(name)="data")
            b-form-input(v-if="data.item.edit" v-model="data.item.model" :state='data.item.state' @keydown.enter="submitedit(data.index)" @keydown.esc="canceledit(data.index)")
            b-form-checkbox(v-else @checked="") {{ data.value }}
          template(#cell(action)="data")
            span(v-if="data.item.edit")
              b-btn.mx-1(variant="success")
                b-icon(icon="check" @click="submitedit(data.index)")
              b-btn.mx-1(variant="danger")
                b-icon(icon="arrow-counterclockwise" @click="canceledit(data.index)")
            span(v-else)
              b-btn.mx-1(variant="success")
                b-icon(icon="pencil" @click="edititem(data.index)")
              b-btn.mx-1(variant="danger")
                b-icon(icon="trash" @click="delitem(data.index)")
      b-col(cols="12")
        b-table-simple(hover)
          thead
            th  Done
            th
          tbody
            tr(v-for="(item, idx) in finished")
              td
                b-form-checkbox(v-model="check") {{ item }}
              td
                b-btn(variant="danger" @click="delfinish(idx)")
                  b-icon(icon="trash")
            tr(v-if="finished.length === 0")
              td.text-center(colspan="2") 沒有項目
</template>
<style>
.plus{
  position: absolute;
  z-index: 5;
  left: -10px;
  top:25px;
}
.plus,.plus:hover,.plus:active{
  background-color: white;
  border: none;
}
#newinput,#newinput:active{
  border: none;
  border-bottom: 2px solid #343a40;
  position: relative;
  left: 30px;
  top: 25px;
}
.table td, .table th{
  border-top: 0;
  padding: 0.1rem;
}
.table thead th {
  border-bottom: 0;
}
</style>
<script>
export default {
  data () {
    return {
      newinput: '',
      fields: [
        { key: 'name', label: 'To-do' },
        { key: 'action', label: '' }
      ],
      check: true
    }
  },
  computed: {
    newinputstate () {
      return this.newinput.length > 2 ? true : this.newinput.length === 0 ? null : false
    },
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model.length > 2
        return item
      })
    },
    finished () {
      return this.$store.state.finished
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
      }
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    submitedit (index) {
      if (this.items[index].state) {
        this.$store.commit('submitedit', index)
      }
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    }
  }
}
</script>
