
 <!-- Partea de Template(HTML) --> 
<template>
 <div class="container">
     <form>
   <h3 id="h3">Inregistrare</h3>
          <div class="form-group">
                <label>Numele de Utilizator</label>
                <input placeholder="username"
                required
                v-model="var1"
                  type="text" 
                  class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Adresa de Mail</label>
                <input 
                 required
                v-model="var2"
                placeholder="email" id="txt2" type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Parola</label>
                <input  required
                v-model="var3"
                 id="txt3" placeholder="Password" type="password" class="form-control form-control-lg" />
            </div>

              <div class="form-group">
                <label>Confirmare Parola</label>
                <input 
                 required
                 v-model="var4"
                 placeholder="Confirm Password" id="txt4" type="password" class="form-control form-control-lg" />
            </div>

            <button @click="postUser" id="buttonSubmit" type="submit" class="btn btn-dark btn-lg btn-block">Inregistrare</button>
               </form>
</div>
</template>


<!--- Partea de Cod --> 

<script>

import axios from "axios";
import router from "../router";


export default{
  data(){
    return{
      var1:'',
      var2:'',
      var3:'',
      var4:''
    }
  },
  methods:{
       postUser(){
         axios.post('http://localhost:8080/api/USERS/',{
           username:this.var1,
           email:this.var2,
           password:this.var3
         })
         .then(() =>{
           // Redirect to Login
                 router.push({name:'login'});
             })
         .catch(() =>{})
       }
  }
}


</script>


<!-- Partea de CSS -->

<style>
.container{
  margin-top:70px;
  text-align:center;
}
#h3{
  margin-bottom:30px;
}
button{
  margin-top:30px;
}
</style>
    
