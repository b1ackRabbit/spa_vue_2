<template>
  <div class="for-form">

    <p class="font-italic" v-if="!message.id">Send New Message</p>
    <p class="font-italic" v-else>Updating of existing Message</p>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
        <label for="author">Author</label>
        <input type="text" id="author" class="form-control" name="author" placeholder="Name" v-model="message.author">
      </div>
      <div class="form-group">
        <label for="text">Text</label>
        <textarea id="text" class="form-control" name="text"  placeholder="Enter the text of your message" v-model="message.text"></textarea>
      </div>
      <div class="buttons">
        <button class="btn btn-secondary" v-on:click.prevent="resetForm">Reset</button> <router-link class="btn btn-warning"  to="/messages">Cancel</router-link> <input class="btn btn-primary" type="submit" name="" v-bind:value="message.buttonText">
      </div>
    </form>
  </div>
</template>

<script>

var emptyForm = {
        id: 0,
        author : '',
        text: '',
        buttonText: "Send Message"
      }

export default {
  name: 'editMessages',
  data () {
    return {
      message: emptyForm,
    }
  },
  // mixins: [spaMixin],
  created: function(){
    this.init();
  },  
  methods: {
    init: function(){
      // this.hello();
      if(!!this.$route.params.id){
        this.getMessage(this.$route.params.id);
      }else{

      }
    },

    getMessage: function(messageId){
      this.$http.get("comments/" + messageId).then((response) => { 
        if(!!response.body) {
          this.message = response.body;
          this.message.buttonText = "Edit Message";

        }
      }, (response) => {
        this.error = response;
      });                    
    },
   
    resetForm: function(){
      this.message = emptyForm;
    },
    submitForm: function() {
      if(!this.message.id){
        this.sendNewMessage();
      }else{
        this.updateMessage(this.message.id);
      }

    },
    listReload: function(){
      this.$router.push('/messages');
    },
    sendNewMessage: function() {
      this.$http.post('comments', this.message).then((response) => { 
        this.listReload();
      }, (response) => {
        this.error = response;
      });                    
    },                

    updateMessage: function(messageId){
      this.$http.put('comments' + "/"+messageId, { "author" : this.message.author, "text": this.message.text}).then(
        (response) => { 
          this.listReload();
        }, (response) => {
          this.error = response;
        }
      ); 
    }
  }
}
</script>
<style type="text/css">
  .for-form{
    text-align: left;
    padding: 25px 10%;
  }
  form{
    text-align: left;
  }
  .buttons{
    text-align: right;
  }
</style>