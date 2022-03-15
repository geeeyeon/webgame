<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
export default {
    props:{
        cellData: String,
        rowIndex: Number,
        cellIndex: Number,
    },
    methods:{
        onClickTd(){
            console.log(this.$root.$data);
            console.log(this.$parent.$data);
            const rootData = this.$root.$data;
            // index를 사용해서 데이터를 수정하면 화면에 반영이 되지 않는다. 배열에 메서드를 사용하는 것은 반영됨(push..)
            // -> this.$set 사용
            this.$set(rootData.tableData[this.rowIndex],this.cellIndex,rootData.turn);
            rootData.turn = rootData.turn === 'O' ? 'X':'O';
        }
    }
}
</script>
