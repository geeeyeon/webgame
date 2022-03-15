<template>
    <div>
        <table-component :table-data="tableData"/>
        <div>{{turn}}님의 턴입니다.</div>
    </div>
</template>
<script>
import TableComponent from './TableComponent';
export default {
    components:{ 
        TableComponent,
    },
   data(){ 
      return{
          tableData:[
              ['','',''],
              ['','',''], 
              ['','',''],
          ],
          turn: 'O',
      }
   },
   computed:{ // 일반 데이터를 가공해서 쓸 때(성능상 문제)
     
   },
   methods:{
       onChangeData(){
           // Vue.set(Vue import필요) 또는 this.$set을 사용하여 데이터를 바꾸면서 화면을 다시 그림
           this.$set(this.tableData[1],0,'X');
       }
   },
};
</script>
<style>
 
</style>