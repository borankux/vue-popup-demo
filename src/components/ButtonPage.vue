<template>
  <div>
    <button @click="togglePopup(true)">Show</button>
    <button @click="togglePopup(false)">Hide</button>
    <button @click="changePopup({title:'Title form button', content:'Content from button'})">Change</button>

    <div>{{msg}}</div>
    <popup 
    :show="showPopup" 
    :message="msg"
    @onDecided="handleDecision"
    />
  </div>
</template>
<script>
import popup from '../components/popup'

export default {
  name: 'btn-page',
  components: {
  	popup
  },
  data () {
  	return {
  		msg:{ 
  			title: "default title from father",
  			content: "default content from father"
  		},
  		showPopup: false,
  	}
  },
  methods: {
  	togglePopup(isShow) {
  		this.showPopup = isShow;
  	},

  	changePopup(msg){
  		this.msg = msg;
  	},
  	handleDecision(result) {
  		console.log("user said:", result);
  	}
  }
}

</script>
<style>
	button {
		width: 100px;
		height: 30px;
	}
</style>
