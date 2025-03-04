<template>
  <div class="form-container">
    <div class="form-header">
      <h2>Добавить педагога</h2>
      <button class="close-btn" @click="closeForm">x</button>
    </div>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>ФИО <span class="required">*</span></label>
        <input
          v-model="formData.fullName"
          type="text"
          placeholder="Например, Иванова Мария Ивановна"
          required
        >
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Дата рождения <span class="required">*</span></label>
          <input v-model="formData.birthDate" type="date">
        </div>

        <div class="form-group">
          <label>Пол <span class="required">*</span></label>
          <div class="gender-buttons">
            <button 
              type="button" 
              :class="['gender-btn', { active: formData.gender === 'M' }]"
              @click="formData.gender = 'M'"
            >м.</button>
            <button 
              type="button" 
              :class="['gender-btn', { active: formData.gender === 'F' }]"
              @click="formData.gender = 'F'"
            >ж.</button>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>Контакты</label>
        <div class="contacts-container">
          <select v-model="formData.contactType">
            <option value="mobile">Мобильный</option>
            <option value="home">Домашний</option>
            <option value="work">Рабочий</option>
          </select>
          <input 
            v-model="formData.contactValue" 
            type="text" 
            placeholder="Примечание"
          >
          <button type="button" class="add-contact-btn" @click="addContact">+</button>
        </div>
      </div>

     

      <div class="form-row">
        <div class="form-group">
          <label>Дата начала раб.</label>
          <input v-model="formData.startDate" type="date">
        </div>

        <div class="form-group">
          <label>Дата увольнения</label>
          <input v-model="formData.endDate" type="date">
        </div>
      </div>


      <div class="form-group">
        <label>Филиалы преподавания</label>
        <select v-model="formData.teachingBranches">
          <option value="branch1">Филиал 1</option>
          <option value="branch2">Филиал 2</option>
        </select>
      </div>

      <div class="form-group">
        <label>Кафедра <span class="required">*</span></label>
        <select v-model="formData.department">
          <option value="dept1">Кафедра 1</option>
          <option value="dept2">Кафедра 2</option>
        </select>
      </div>

      <div class="form-group">
        <label>Квалификация <span class="required">*</span></label>
        <select v-model="formData.qualification">
          <option value="">Не задано</option>
          <option value="qual1">Квалификация 1</option>
          <option value="qual2">Квалификация 2</option>
        </select>
      </div>

      <div class="form-group">
        <label>Образование <span class="required">*</span></label>
        <textarea v-model="formData.education"></textarea>
      </div>

      <div class="form-group">
        <label>Предмет преподавания <span class="required">*</span></label>
        <select v-model="formData.subjects">
          <option value="subject1">Предмет 1</option>
          <option value="subject2">Предмет 2</option>
        </select>
      </div>

      <div class="form-group">
        <label>Стаж работы <span class="required">*</span></label>
        <textarea v-model="formData.experience"></textarea>
      </div>

      <div class="form-actions">
        <button type="button" class="cancel-btn" @click="closeForm">Отмена</button>
        <button type="submit" class="save-btn">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TeacherRegistrationForm',
  data() {
    return {
      formData: {
        fullName: '',
        birthDate: '',
        gender: '',
        contactType: 'mobile',
        contactValue: '',
        contacts: [],
        notes: '',
        startDate: '',
        endDate: '',
        contract: '',
        teachingBranches: [],
        department: [],
        qualification: '',
        education: '',
        subjects: [],
        experience: '',
        branches: [],
        color: '#556B2F'
      }
    }
  },
  methods: {
    addContact() {
      if (this.formData.contactValue) {
        this.formData.contacts.push({
          type: this.formData.contactType,
          value: this.formData.contactValue
        })
        this.formData.contactValue = ''
      }
    },
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.formData)
      // Add your API call or form processing logic here
    },
    closeForm() {
      // Emit event to parent component to close the form
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 15px;
}

.form-row {
  display: flex;
  gap: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.required {
  color: red;
}

input[type="text"],
input[type="date"],
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  height: 35px;
}

.gender-buttons {
  display: flex;
  gap: 10px;
}

.gender-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.gender-btn.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}

.contacts-container {
  display: flex;
  gap: 10px;
}

.add-contact-btn {
  padding: 8px 12px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.cancel-btn,
.save-btn {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  background: white;
  border: 1px solid #ddd;
}

.save-btn {
  background: #007bff;
  color: white;
  border: none;
}

.checkbox-group {
  display: flex;
  gap: 10px;
}

select[multiple] {
  height: 100px;
}
</style>
