<template>
    <div>
        <div class="new-message-button" v-if="!showOne">
            <router-link to="/edit-message"class="btn btn-primary">Add New Message</router-link>
        </div>

        <div class="list-of-messages">
            <p class="font-italic">Messages</p>          
            <div class="message" v-for="(message,index) in sortedMessages">
                <messageShow v-bind:message="message" v-bind:showOne="showOne" ></messageShow>
            </div>
        </div>
    </div>
</template>

<script>


// import commands from './Commands.vue';
import messageShow from './MessageShow.vue';




export default {
  name: 'ListOfMessages',
  data () {
    return {
      messages : [],
      showOne : false
    }
  },
  components: {
    // 'commands': commands,
    'messageShow' : messageShow
  },
  created: function(){
    // this.prepareToSaveMessage();
    this.init();
  },
  watch: {
    '$route' (to, from) {
      this.messages = []
      this.showOne = false;
      this.getMessages(this.$route.params.id);
    }
  },
  computed: {
    sortedMessages: function() {
      function compare(a, b) {
        if (a.id > b.id)
          return -1;
        if (a.id < b.id)
          return 1;
        return 0;
      }

      return this.messages.sort(compare);
    }
  },
  methods: {
    
    init: function(){

      this.getMessages(this.$route.params.id);
    },
    getMessages: function(messId) { 

      this.$http.get('comments' + (messId ? ('/' + messId) : '' )).then((response) => { 
        if(!!response.body) {
          var answer = response.body;
          if(!messId){
            console.log('g');
            for (var messageNumber in answer){
              if (answer.hasOwnProperty(messageNumber)) {
                if(typeof messageNumber === "number" || !isNaN(parseInt(messageNumber)) && typeof parseInt(messageNumber) === "number"){
                  answer[messageNumber].deleted = false;
                  this.messages.push(answer[messageNumber]);
                }
              }
            }
          }else{
            answer.deleted = false;
            this.messages.push(answer);
            this.showOne = true;
          }

        }
      }, (response) => {
        this.error = response;
      });
    }   
  }

}
</script>

<style type="text/css">
  .new-message-button{margin-bottom: 20px;}

</style>
