import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutoView from '../views/ProdutoView.vue'
import LoginView from '../views/LoginView.vue'
import UsuarioView from '../views/usuario/UsuarioView.vue'
import UsuarioProdutos from '../views/usuario/UsuarioProdutos.vue'
import UsuarioEditar from '../views/usuario/UsuarioEditar.vue'
import UsuarioCompras from '../views/usuario/UsuarioCompras.vue'
import UsuarioVendas from '../views/usuario/UsuarioVendas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: ProdutoView,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/usuario',
    component: UsuarioView,
    children: [
      {
        path: '',
        name: 'usuario',
        component: UsuarioProdutos
      },
      {
        path: 'compras',
        name: 'usuarioCompras',
        component: UsuarioCompras
      },
      {
        path: 'vendas',
        name: 'usuarioVendas',
        component: UsuarioVendas
      },
      {
        path: 'editar',
        name: 'usuarioEditar',
        component: UsuarioEditar
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return window.scrollTo({top: 0, behavior: 'smooth'})
  }
})


export default router
