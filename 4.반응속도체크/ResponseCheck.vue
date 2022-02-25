<template>
  <div>
    <h1>반응속도 체크</h1>
    <div id="screen" :class="state">{{message}}</div>
    <div>
        <div>평균시간: {{}}</div>
        <button @click="onReset">리셋</button>
    </div>
  </div>  
</template>
<script>
export default {
   data(){ 
       return{
           result : [],
           state: 'waiting',
           message: '클릭해서 시작하세요'
        }
   },
   methods:{
       onReset(){

       }
   }
};
</script>
<style>
  #screen {
      width: 300px;
      height: 200px;
      text-align: center;
      user-select: none;
  }
  #screen.waiting {
      background-color:cornflowerblue;
  }
  #screen.ready {
      background-color:lightcoral;
      color:white;
  }
  #screen.now {
      background-color:lightgreen;
  }
</style>