<template>
  <div>
    <h1>반응속도 체크</h1>
    <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
    <template>
        <div>평균시간: {{average}} ms</div>
        <button @click="onReset">리셋</button>
    </template>
  </div>  
</template>
<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
   data(){ 
       return{
           result : [],
           state: 'waiting',
           message: '클릭해서 시작하세요'
        }
   },
   computed:{ // 일반 데이터를 가공해서 쓸 때(성능상 문제)
       average(){
           return (this.result.reduce((a,c)=>a+c,0)/this.result.length) || 0;
       }
   },
   methods:{
       onReset(){
           this.result = [];
       },
       onClickScreen(){
           if(this.state==='waiting'){
               this.state ='ready';
               this.message = "초록색이 되면 클릭하세요";
               setTimeout(()=>{
                   this.state = 'now';
                   this.message = '지금 클릭!';
                   startTime = new Date();
               },Math.floor(Math.random()*1000)+2000); //2~3초
           }else if(this.state==='ready'){
               clearTimeout(timeout)
               this.state ='waiting';
               this.message = '초록색이 된 후에 클릭하세요';
           }else if(this.state==='now'){
               clearTimeout(timeout);
               endTime = new Date();
               this.state ='waiting';
               this.message = '클릭해서 시작하세요';
               this.result.push(endTime - startTime);
           }
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