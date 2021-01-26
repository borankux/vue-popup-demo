<template>
  <div class="main" v-show="showPopup">
    <h3 style="text-align: center;">{{msg.title}}</h3>
    <p>{{msg.content}}</p>
    <div class="tool-bar">
      <button @click="close(true)">Confirm</button>
      <button @click="close(false)">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'popup',
  data() {
    return {
      showPopup: this.show,
      msg: this.message
    }
  },
  props: {
    message: {
      type: Object,
      default:function() {
      	return {
      		title: 'default title',
      		content: 'default content'      		
      	}
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  watch :{
  	'show': {
  		handler(val){
  			 this.showPopup = val;
  		},
  		deep: true,
  		immediate: true,
  	},
  	'message': {
  		handler(msg) {
  			this.msg = msg
  		},
  		deep: true
  	}
  },
  methods: {
    close(result) {
    	this.showPopup = false;
    	this.$emit('onDecided', result);
    }
  }
}

</script>
<style>
.main {
  position: relative;
  width: 500px;
  margin: 10px auto;
  border: 1px solid red;
  padding: 10px;
  background: #09c;
  box-shadow: 0 12px 6px #ccc;
}

</style>
