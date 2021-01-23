
 <!--- Index of Full Stack App-->

<template>
     <div id="app" class="container">
        <nav>
          <div class="logo">PROIECT</div>
      
          <ul>
            <li><router-link class="active" to="/login">Autentificare</router-link></li>
            <li><router-link class="active" to="/signup">Inregistrare</router-link></li>
          </ul>
         </nav>
         <br/>
           <router-view/>
           </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  padding:0px;
  margin:0px;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px 100px;
  box-sizing: border-box;
  transition: .3s;
   margin-left:0px;
   background-color: blueviolet;
}

nav .logo {
  padding: 23px 0px;
  height: 80px;
  margin-left:0px;
  float: left;
  font-size: 24px;
  transition: .3s;
}

nav ul{
  list-style: none;
  float: right;
  margin: 0;
  padding: 0;
  display: flex;
}
nav ul li {
  list-style: none;
}
nav ul li a{
  line-height: 80px;
  color: #151515;
  padding: 12px 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: .3s;
  margin-right: 10px;
}
nav ul li a:focus{
  outline: none;
}
nav ul li a.active{
  background: #E247;
  color: #fff;
  border-radius: 6px;
}
nav.black {
  background: rgba(0,0,0,0.8);
  height: 100px;
  padding: 10px 100px;
}
nav.black .logo {
  color: #fff;
}
nav.black ul li a{
  color: #fff;
}
nav ul li a.active{
  background: #E247;
  color: #fff;
  border-radius: 6px;
}

nav ul li a:hover{
  background-color: aquamarine;
  text-decoration: none;
}

</style>
