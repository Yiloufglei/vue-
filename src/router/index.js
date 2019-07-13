import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import park from '../pages/park'
import party from '../pages/party'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/park',
        name: 'park',
        component: park
    }, {
        path: '/party',
        name: 'party',
        component: party
    }]
})
