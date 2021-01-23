<template>
    <div class="login">
             <form>
            <h3 id="h1">Autentificare</h3>

            <div class="form-group">
                <label>Nume de Utilizator</label>
                <input 
                required
                v-model="var1"
                 type="text" class="form-control form-control-lg"/>
            </div>


            <div class="form-group">
                <label>Parola</label>
                <input 
                required
                v-model="var2"
                type="password" class="form-control form-control-lg" />
            </div>

            <button
              @click="autentificare"
             type="submit" class="btn btn-dark btn-lg btn-block">Autentificare</button>
            </form>
        </div>
</template>
    
<script>

import axios from 'axios';


export default{
    data(){ return{
       var1:'',
       var2:''    
     }
    },
    methods:{
      autentificare(){
          axios.get("http://localhost:8080/api/USERS/",{
              username:this.var1,
              password:this.var2
          })
          .then((Succes)=>{
              if(Succes){
                  alert(`Bine ai venit ${this.var1}`);
              }
              else{
                  alert("Nu exista acest cont !");
              }
          }).catch(Error=>{console.log(Error)})
      } 
  
    }

}


</script>

<style>
.login {
    text-align: center;
    margin-top: 120px;
}

#h1{

    margin-bottom: 50px;
}
</style>