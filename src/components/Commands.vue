<template>
	<div class="commands">
		<span v-if="!deleted">
			<router-link class="edit" v-bind:to="'/edit-message/' + messageId"></router-link>
		  <a href="#" class="remove-message close"  v-on:click.prevent="deleteMessage( messageId )"></a>
		  <router-link class="info" v-if="!showOne" v-bind:to="'/messages/' + messageId"></router-link>
		</span>
	  <router-link  v-if="showOne" to="/messages">show all messages</router-link>
	</div>
   
</template>

<script>
import mixins from './../mixins';
import { EventBus } from './../event-bus.js';
export default {
	props: [
    'messageId' , 'showOne' , 'deleted'
  ],
  // mixins: [mixins],
  name: 'commands',
  data () {
    return {
      eventBus : EventBus
    }
  },
  methods: {
    deleteMessage: function(messageId){
	    this.$http.delete("comments/"+messageId).then((response) => { 
	    	this.$emit('messageDeletedEvent',messageId);
	    	// this.$router.push(this.$route.path);
	    }, (response) => {
	        this.error = response;
	    }); 
    },
  }

}
</script>

<style type="text/css">
	.commands{
		position: absolute;
		top:0;
		right: 0;
	}
	.close:after{
		content: "\2715";
	}
	.edit:after{
		content: "\270E";

	}
	.info:after{
		content: "\2139";
	}
</style>
