
export default {
  methods: {
    deleteMessage: function(messageId){
       	// this.eventBus.$emit('message-deleted', messageId);

        // bus.$emit('id-selected', 1);
	    this.$http.delete("comments/"+messageId).then((response) => { 
	    	console.log('-----2----');

	    	this.$router.push(this.$route.path);
	    	console.log('-----1----');

	        // add to list if successfull,
	        // alert if not
	    }, (response) => {
	        this.error = response;
	    }); 
    },
  }
}