<!--src/components/paramdetails.vue-->
<template>
    <div>
    The paremeter value that was passed to me is: {{ $route.params.id }}
    </div>
</template>
<script>
    export default {
        name: 'paramdetails'
    }
</script>
