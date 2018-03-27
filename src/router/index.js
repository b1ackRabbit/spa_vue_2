import Vue from 'vue'
import Router from 'vue-router'
import ListOfMessages from '@/components/ListOfMessages'
// import Message from '@/components/Message'
import EditMessages from '@/components/EditMessages'
import PageNotFound from '@/components/PageNotFound'

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
    },
    {
      path: '/edit-message/:id?',
      name: 'EditMessages',
      component: EditMessages
    },
    { 
      path: "*", 
      name: 'PageNotFound' ,
      component: PageNotFound 
    } 
  ],
  mode: 'history'
})
