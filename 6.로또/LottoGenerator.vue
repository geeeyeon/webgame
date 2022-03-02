<template>
  <div>
    <h1>로또 번호 생성기</h1>
    <div>당첨 숫자</div>
    <div id="결과창">
        <lotto-ball v-for="ball in winBalls" number="5"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="redo"></lotto-ball>
    <button v-if="redo">한번 더</button>
  </div>  
</template>
<script>
import LottoBall from './LottoBall';
function getWinNumbers(){
    const candidate = Array(45).fill().map((v,i)=>i+1);
    const shuffle = [];
    while(candidate.length>0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0,6).sort((p,c)=>p-c);
    return [...winNumbers, bonusNumber];
}
export default {
    components:{ // 컴포넌트 등록
        'lotto-ball' : LottoBall
    },
   data(){ 
      return{
          winNumbers : getWinNumbers(),
          winBalls:[],
          bonus: null,
          redo: false,
      }
   },
   computed:{ // 일반 데이터를 가공해서 쓸 때(성능상 문제)
     
   },
   methods:{
   },
   mounted(){

   },
   beforeDestroy(){

   },
   watch:{

   }
};
</script>
<style>
 
</style>