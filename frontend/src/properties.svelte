<script>
    export let lang;
</script>

<div class="properties">
    <h2 class="properties_text">{lang}</h2>
</div>

<style>
    .properties {
        padding: 0 20px;
        height: 60px;
        background-color: rgb(255, 70, 70);
        margin: 25px 0 ;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .properties:first-of-type {
        margin-top:125px;
    }

    .properties_text {
        color: white;
    }
</style>
