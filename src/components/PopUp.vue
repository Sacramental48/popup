<script>
export default {
    name: 'PopUp',
    data() {
        return {
            showModal: true,
            columnAInputs: [
                { name: 'Имя', inputType: 'text', inputName: 'name', inputModel: '' },
                { name: 'Фамилия', inputType: 'text', inputName: 'surname', inputModel: '' }
            ],
            columnBInputs: [
                { name: 'Телефон', inputType: 'tel', inputName: 'phone', inputModel: '' },
                { name: 'Почта', inputType: 'email', inputName: 'email', inputModel: '' },
                { name: 'Возраст', inputType: 'number', inputName: 'age', inputModel: '' }
            ]
        }
    },
    methods: {
        submitForm() {
            const formData = {
                name: this.columnAInputs[0].inputModel,
                surname: this.columnAInputs[1].inputModel,
                phone: this.columnBInputs[0].inputModel,
                email: this.columnBInputs[1].inputModel,
                age: this.columnBInputs[2].inputModel,
            };
            this.$emit('inputs-value', formData);
        },
        closeModal(event) {
            if (!event.target.closest('.modal')) {
                this.showModal = false;
                this.$emit('showModalValue', this.showModal)
            }
        },
    }
}
</script>
<template>
    <div class="popapc">
        <div class="modal-overlay" v-if="showModal" @click="closeModal"></div>
        <div class="modal" v-if="showModal">
            <form @submit.prevent="submitForm" class="form">
                <h2 class="title">Введите данные</h2>
                <div class="content">
                    <div class="columnA">
                        <div class="input-group" v-for="(item, index) in columnAInputs" :key="index">
                            <label :for="item.inputName">{{ item.name }}:</label>
                            <input :type="item.inputType" v-model="item.inputModel">
                        </div>
                    </div>
                    <div class="columnB">
                        <div class="input-group" v-for="(item, index) in columnBInputs" :key="index">
                            <label :for="item.inputName">{{ item.name }}:</label>
                            <input :type="item.inputType" v-model="item.inputModel">
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn">Отправить</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
.title {
    color: #000;
    margin-bottom: 10px;
    cursor: auto;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #1d242c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    max-width: 500px;
    padding: 20px;
    border-radius: 5px;
    cursor: auto;
    z-index: 999;
}

.content {
    display: flex;
    gap: 4px;
}

.input-group {
    display: flex;
    flex-wrap: wrap;
}

.input-group label {
    flex: 1 1 100%;
    margin-bottom: 10px;
}

.input-group input {
    flex: 1 1 100%;
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
}

@media screen and (max-width: 540px) {
    .content {
        flex-direction: column;
    }
}
</style>