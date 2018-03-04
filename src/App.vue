<template>
    <div id="app"> 
        <todo-item></todo-item>
    </div>
</template>

<script>
    import TodoItem from './components/TodoItem'

    export default {
        name: 'app',
        components: {
            TodoItem
        }
    }
</script>

