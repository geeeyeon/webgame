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
   },
};
</script>
<style>
 
</style>