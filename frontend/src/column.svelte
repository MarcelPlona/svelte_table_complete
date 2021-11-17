<script>
    import Person from "./person.svelte";
    import Properties from "./properties.svelte";
    import Marks from "./mark.svelte";
    export let person;

    // let javascript, python, c_sharp, java;

    // $: if(person !== undefined){
    //     ({ javascript, python, c_sharp, java } = person);
    // } 
    
    export let which_column;
  
</script>

<div class="column">
    {#if which_column === "properties"}
        <Properties lang={"Javascript"}/>
        <Properties lang={"Python"}/>
        <Properties lang={"C#"}/>
        <Properties lang={"Java"}/>
    {:else}
        <Person profile={person.img} />
        <Marks mark={person.javascript} />
        <Marks mark={person.python} />
        <Marks mark={person.c_sharp} />
        <Marks mark={person.java} />
    {/if}
</div>

<style>
    .column {
        display: flex;
        flex-direction: column;
        margin: 0 20px;
        position: relative;
        align-items: center;
    }
</style>
