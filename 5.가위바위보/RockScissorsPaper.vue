<template>
  <div>
    <h1>가위바위보</h1>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
        <button @click="onClickButton('바위')">바위</button>
        <button @click="onClickButton('가위')">가위</button>
        <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>  
</template>
<script>
const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
}
const scores={
    가위 : 1,
    바위 : 0,
    보 : -1
};
const computerChoice = (imgCoord)=>{
    return Object.entries(rspCoords).find(function (v){
        return v[1] === imgCoord;
    })[0];
}
let interval = null;
export default {
   data(){ 
       return{
          result:'',
          score:0,
          imgCoord:rspCoords.바위,
        }
   },
   computed:{ // 일반 데이터를 가공해서 쓸 때(성능상 문제)
     computedStyleObject(){
         return{
             background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
         }
     }
   },
   methods:{
       changeHand(){
           interval = setInterval(()=>{
               if(this.imgCoord === rspCoords.바위){
                   this.imgCoord =rspCoords.가위;
               }else if(this.imgCoord === rspCoords.가위){
                   this.imgCoord =rspCoords.보;
               }else if(this.imgCoord === rspCoords.보){
                   this.imgCoord =rspCoords.바위;
               }
           },100)
       },
       onClickButton(choice){
           clearInterval(interval); //이미지 잠시 멈춤
           const myScore = scores[choice];
           const computerScore = scores[computerChoice(this.imgCoord)];
           const diff = myScore - computerScore;
           if(diff===0){
               this.result = '비겼다'
           }else if ([-1,2].includes(diff)){
               this.result="이겼다";
               this.score +=1;
           }else{
               this.result = '졌다';
               this.score -=1
           }
           setTimeout(()=>{
               this.changeHand()
           },1000);
       }
   },
   created(){ //data 채워 넣었지만 화면에는 안보이는상태

   },
   mounted(){ //화면에까지 다 보여준 상태
    this.changeHand();
   },
   beforeDestroy(){ // clear 할 때 주로 사용
    clearInterval(interval);
   }
};
</script>
<style>
  #computer{
      width: 142px;
      height: 200px;
      background-position: 0 0;
  }
</style>