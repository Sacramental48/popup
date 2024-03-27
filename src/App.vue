<script>
import PopUp from './components/PopUp.vue'

export default {
    name: 'App',
    components: {
        PopUp
    },
    data() {
        return {
            startBtn: true,
            closeJson: false,
            formData: '',
            formDataJson: '',
            showPopup: false,
            getValueFromModel: ''
        }
    },
    methods: {
        handleFormSubmission(data) {
            this.formData = data;
            this.formDataJson = JSON.stringify(data);

            this.closeJson = true;
            this.startBtn = true;
            this.showPopup = false;
        },
        startButtonClick() {
            this.startBtn = false;
            this.showPopup = true;
        },
        changingVariablesToTitleCLick() {
            this.startBtn = true;
            this.showPopup = false;
            this.closeJson = false;
        },
        modelValue(data) {
            if(!data) {
                this.startBtn = true;
                this.showPopup = false;
                this.closeJson = true;
            }
        },
    },
}
</script>

<template>
    <section class="main">
        <header class="header">
            <h2 @click="changingVariablesToTitleCLick" class="title">Главная</h2>
            <button class="btn" v-if="startBtn" @click="startButtonClick">Начать</button>
        </header>
        <p v-if="startBtn && !closeJson" class="paragraph">Заполни форму! Нажми "Начать"</p>
        <PopUp v-if="showPopup" @inputs-value="handleFormSubmission" @showModalValue="modelValue" />
        <div v-if="closeJson">
            <article>
                <h2>Данные</h2>
                <p>Имя: {{ formData.name }}</p>
                <p>Фамилия: {{ formData.surname }}</p>
                <p>Телефон: {{ formData.phone }}</p>
                <p>Email: {{ formData.email }}</p>
                <p>Возраст: {{ formData.age }}</p>
            </article>
            <h3>JSON</h3>
            <p>{{ formDataJson }}</p>
        </div>
    </section>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100vh;
}

.isPopupActive {
    background-color: rgba(0, 0, 0, 0.3);
}

.paragraph {
    font-size: 20px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0 20px;
    border-bottom-right-radius: 6mm;
    border-bottom-left-radius: 6mm;
    background-color: #414a74;
}

.title {
    color: #fff;
    font-size: 28px;
    cursor: pointer;
}

.btn {
    padding: 10px 20px;
    background-color: #5490d0;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
