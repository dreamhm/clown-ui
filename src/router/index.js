import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import ParentView from '@/components/ParentView'

/**
 * Note: 路由配置项
 *
 * hidden: true 
 * alwaysShow: true
 * 
 * 
 * 
 * redirect: noRedirect
 * name: 'router-name'
 * meta: {
		noCache: true
		title: 'title'
		icon: 'svg-name'
		breadcrumb: false
  }
 */

// 公共路由
export const constantRoutes = [
	{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [
			{
				path: '/redirect/:path(.*)',
				component: (resolve) => require(['@/views/redirect'], resolve)
			}
		]
	},
	{
		path: '/login',
		component: (resolve) => require(['@/views/login'], resolve),
		hidden: true
	}
]

export default new Router({
	mode: 'history', // 去掉url中的#
	scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
