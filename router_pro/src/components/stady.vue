<template>
  <div>
    <h1> {{ msg }}</h1>
    <input v-model="newitem" @keyup.enter="onEnter()">
    <ul>
      <li v-for="item in items" v-text="item.name" :class="{finish : item.finished}" @click="toggle_color(item)"></li>
    </ul>
    <hello msgf='' @tell="listen"></hello>
    <div>你好 {{ childrenmsg }}</div>
    <h2> soso</h2>
  </div>
</template>

<script>
  import Store from '../store.js'
  import hello from  './HelloWorld'

    export default {
      name: "stady",
        data: function(){
          return{
            msg:'To do list',
            items:Store.fetch(),
            newitem:'',
            childrenmsg:''
          }
        },
        components: {hello},
        methods:{
          toggle_color: function (item) {
            item.finished = !item.finished
          },
          onEnter:function () {
            if (!this.items) {
              this.items=[]
            }
            this.items.push({name:this.newitem,finished:false})
            this.newitem=''
          },
          listen:function (msg) {
            this.childrenmsg = msg
            console.log(msg)
          }
        },
        watch:{
            items:{
              handler: function (items) {
                Store.save(items)
              },
              deep:true
            }
        }
    }
</script>

<style>
li{width: 200px;margin: auto;cursor: pointer}
.finish{color: red;}
</style>
