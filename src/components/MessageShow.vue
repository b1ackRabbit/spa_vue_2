<template>
  <div class="message-block">
        
        <commands v-bind:messageId="message.id" v-bind:deleted="message.deleted" v-bind:showOne="showOne" v-on:messageDeletedEvent="messageDeletedCallback"></commands>
    <div v-if="!message.deleted">
        <p class="message-author">{{ message.author }}</p>
        <div class="message-body">{{ message.text }}</div>
        <div v-if="showOne">
          <span>number in list {{ message.id }}</span> <br>
          <span>created {{ message.created_at }}</span> <br>
          <span>updated {{ message.updated_at }}</span>   
        </div>
         
    </div>
    <div v-if="message.deleted">
      <p>Message from {{ message.author }} was deleted</p>
    </div>

  </div>
</template>

<script>



import commands from './Commands.vue';

export default {
  props: [
    'message' , 'showOne'
  ],  
  
  // name: 'Message',
  data () {
    return {
      deleted: false,
    }
  },
  // },
  components: {
    'commands': commands
  },
  methods: {
    messageDeletedCallback: function(){
      console.log(this.message);
      this.message.deleted = true;
    }
  }

}
</script>

<style>
  .message-block{
    position: relative;
    padding: 25px 10%;
    border-bottom: 1px solid #999;
    text-align: left;
  }
  .message-block:hover{
    background-color: #eee;
  }
  .message-author{
    font-weight: bold;
  }
</style>