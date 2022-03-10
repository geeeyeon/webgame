<template>
  <div>
    <h1>로또 번호 생성기</h1>
    <div>당첨 숫자</div>
    <div id="결과창">
        <lotto-ball v-for="ball in winBalls" :key="ball" v-bind:number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="redo" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한번 더</button>
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
const timeouts = [];
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
       onClickRedo(){
           this.winNumbers = getWinNumbers();
           this.winBalls = [];
           this.bonus = null;
           this.redo = false;
           this.showBalls();
       },
       showBalls(){
           for(let i=0; i< this.winNumbers.length-1; i++){
                timeouts[i] = setTimeout(()=>{
                    this.winBalls.push(this.winNumbers[i]);
                }, (i+1) * 1000);
            }
            timeouts[6] = setTimeout(()=>{
                this.bonus = this.winNumbers[6];
                this.redo = true;
            }, 7000);
       }
   },
   mounted(){
       this.showBalls();
   },
   beforeDestroy(){
       timeouts.forEach((t)=>{
           clearTimeout(t);
       })
   },
//    watch:{ //어떤 값이 바뀐건지 감시
//     redo(value, oldValue){
//         console.log(value, oldValue)
//         if(value === false){
//             this.showBalls();
//         }
//     }
//    }
};
</script>
<style>
 
</style>