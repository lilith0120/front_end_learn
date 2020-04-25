import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//组件模块
import Profile from '../components/person_page/Profile.vue'
import Chatpage from '../components/chat_page/Chatpage.vue'
import Creategroup from '../components/Creategroup.vue'

export default new Router({
    routes: [
        { path: '/', components: {
            default: Profile,
            creategroup: Creategroup,
            chatpage: Chatpage
        }},
        { path: '/roomId/:id', components: {
            default: Profile,
            creategroup: Creategroup,
            chatpage: Chatpage
        }},
    ]
})
