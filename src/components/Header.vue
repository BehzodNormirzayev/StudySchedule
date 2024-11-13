<script setup>

</script>

<template>
    <header class=" bg-white">
        <a-row>
            <a-col :span="12">
                <a-input type="text" size="large" placeholder="Поиск клиента"> </a-input>
            </a-col>

            <a-col :span="12" class="flex justify-end">
                <div class="flex items-center gap-4">
                    <div> Name name</div>
                    <a-avatar size="large">
                        <template #icon>
                            <img src="../assets/logo.svg" alt="">
                        </template>
                    </a-avatar>
                </div>

            </a-col>

        </a-row>

    </header>



</template>

<style scoped></style>
