import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//组件模块
import Profile from '../components/person_page/Profile.vue'
import Chatpage from '../components/chat_page/Chatpage.vue'
import Mute from '../components/chat_page/Mute.vue'
import Share from '../components/chat_page/Share.vue'
import Creategroup from '../components/Creategroup.vue'

export default new Router({
    routes: [
        { path: '/roomId/:id', name: 'profile', component: Profile },
        { path: '/chatpage', name: 'chatpage', component: Chatpage, children: [
            { path: 'mute', component: Mute },
            { path: 'share', component: Share }
        ]},
        { path: '/creategroup', name: 'creategroup', component: Creategroup }
    ]
})
