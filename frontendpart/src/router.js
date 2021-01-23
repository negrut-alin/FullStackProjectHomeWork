import Vue from "vue";
import Router from "vue-router"

  // Se definesc Rutele 

Vue.use(Router);

const routes = [
     // Prima Ruta (Autentificare)
   {
       path:'/login',
       name:'login',
       component : ()=> import('./components/login.vue')
   },
     // Ruta Inregistrare 
{
    path:'/signup',
    name:'signup',
    component : ()=> import('./components/signup.vue')
},
   // Ruta Vizualizare Proiect 
{
   path:'/projectsview',
   name:'projectsview',
   component : ()=> import('./components/ProjectList.vue')
},

// Ruta de Adaugare Proiect 
{
  path:'/projectadd',
  name:'projectadd',
  component : ()=> import('./components/AddProject.vue')
},
// Ruta de Review Proiect 
{
   path:'/projectreview',
   name:'projectreview',
   component : ()=> import('./components/ProjectReview.vue')
}]; 


const router = new Router({
   routes
});


export default router