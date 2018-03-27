import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListOfMessages from '@/components/ListOfMessages'
// import Message from '@/components/Message'
import EditMessages from '@/components/EditMessages'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', 
      redirect: '/messages' 
    },
   
    {
      path: '/messages/:id?',
      name: 'ListOfMessages',
      component: ListOfMessages
    }/*,

  	{
      path: '/messages/:id',
      name: 'Message',
      component: Message
    }*/,
    {
      path: '/edit-message/:id?',
      name: 'EditMessages',
      component: EditMessages
    }    
  ],
  mode: 'history'
})
