<template>
    <div>
        <input type="text" @input="ipt">
    </div>
</template>
<script>
export default {
    data(){
        return {

        }

    },
    methods: {
        ipt(e){
            this.$store.commit("search",e.target.value)

        }
        
    },
}
</script>
