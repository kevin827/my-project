//路由配置

import App from '../App'
import home from '../pages/home'
import fenlei from '../pages/fenlei'
import news from '../pages/news'
import about from '../pages/about'
import error from '../components/common/error'


const routes=[
  {
    path:"/",     //一级路由 对应的是index.html
    component:App,
    children:[   //二级路由 对应的App.vue
      {
        path:"/",
        component:home
      },
      {
        path:'home',
        component:home
      },
      {
        path:"news",
        component:news
      },
      {
        path:"fenlei",
        component:fenlei
      },
      {
        path:"about",
        component:about
      },
      {
        path:"error",
        component:error
      }
    ]
  }

]

export default routes;
