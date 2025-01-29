<template>
    <div class="schedule-form">
      <div class="form-header">
        <h2>Групповой — запланировать</h2>
        <button class="close-button" @click="$emit('close')">&times;</button>
      </div>
  
      <form @submit.prevent="handleSubmit">
        <!-- Date Field -->
        <div class="form-group">
          <label>Дата</label>
          <div class="date-input">
            <input
              type="date"
              v-model="formData.date"
              :min="getCurrentDate()"
            />
            <span class="help-icon">?</span>
          </div>
        </div>
  
        <!-- Time Field -->
        <div class="form-group">
          <label>Время <span class="required">*</span></label>
          <div class="time-container">
            <div class="time-input">
              <input
                type="text"
                v-model="formData.hours"
                placeholder="--"
                maxlength="2"
                @input="validateTimeInput"
              />
              <span>:</span>
              <input
                type="text"
                v-model="formData.minutes"
                placeholder="--"
                maxlength="2"
                @input="validateTimeInput"
              />
            </div>
            <div class="duration-input">
              <input
                type="number"
                v-model="formData.duration"
                min="1"
                max="360"
              />
              <span>мин</span>
            </div>
          </div>
        </div>
  
        <!-- Classroom Field -->
        <div class="form-group">
          <label>Аудитория</label>
          <div class="select-container">
            <select v-model="formData.classroom">
              <option value="" disabled selected>(не задан)</option>
              <option v-for="room in classrooms" :key="room" :value="room">
                {{ room }}
              </option>
            </select>
            <span class="available-count">58 доступно</span>
          </div>
        </div>
  
        <!-- Group Field -->
        <div class="form-group">
          <label>Группа</label>
          <input
            type="text"
            v-model="formData.group"
            placeholder="Добавьте одну или несколько"
          />
        </div>
  
        <!-- Subject Field -->
        <div class="form-group">
          <label>Предмет <span class="required">*</span></label>
          <select v-model="formData.subject" required>
            <option value="Почемучка">Почемучка</option>
            <option value="other">Other subjects...</option>
          </select>
        </div>
  
        <!-- Teacher Field -->
        <div class="form-group">
          <label>Педагог(и)</label>
          <select v-model="formData.teacher">
            <option value="" disabled selected>Выберите</option>
            <option v-for="teacher in teachers" :key="teacher" :value="teacher">
              {{ teacher }}
            </option>
          </select>
        </div>
  
        <!-- Comment Field -->
        <div class="form-group">
          <label>Комментарий</label>
          <input
            type="text"
            v-model="formData.comment"
            placeholder="Например, задержится на 10 мин"
          />
        </div>
  
        <!-- Form Actions -->
        <div class="form-actions">
          <button type="button" class="btn-cancel" @click="$emit('close')">
            Отмена
          </button>
          <button type="submit" class="btn-save">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GroupScheduleForm',
    data() {
      return {
        formData: {
          date: this.getCurrentDate(),
          hours: '',
          minutes: '',
          duration: 90,
          classroom: '',
          group: '',
          subject: 'Почемучка',
          teacher: '',
          comment: ''
        },
        classrooms: ['Room 101', 'Room 102', 'Room 103'],
        teachers: ['Teacher 1', 'Teacher 2', 'Teacher 3']
      }
    },
    methods: {
      getCurrentDate() {
        const now = new Date()
        return now.toISOString().split('T')[0]
      },
      validateTimeInput(event) {
        const input = event.target
        const value = input.value.replace(/[^0-9]/g, '')
        
        if (input === this.formData.hours) {
          if (parseInt(value) > 23) {
            this.formData.hours = '23'
          } else {
            this.formData.hours = value
          }
        } else {
          if (parseInt(value) > 59) {
            this.formData.minutes = '59'
          } else {
            this.formData.minutes = value
          }
        }
      },
      handleSubmit() {
        // Validate required fields
        if (!this.formData.hours || !this.formData.minutes || !this.formData.subject) {
          alert('Please fill in all required fields')
          return
        }
  
        // Emit form data to parent component
        this.$emit('submit', {
          ...this.formData,
          time: `${this.formData.hours}:${this.formData.minutes}`
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .schedule-form {
    max-width: 600px;
    padding: 20px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }
  
  .required {
    color: red;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .time-container {
    display: flex;
    gap: 10px;
  }
  
  .time-input {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .time-input input {
    width: 50px;
    text-align: center;
  }
  
  .duration-input {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .duration-input input {
    width: 70px;
  }
  
  .select-container {
    position: relative;
  }
  
  .available-count {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 0.9em;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
  
  .btn-cancel {
    padding: 8px 16px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-save {
    padding: 8px 16px;
    background: #4A90E2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .help-icon {
    color: #4A90E2;
    cursor: pointer;
    margin-left: 5px;
  }
  
  .date-input {
    display: flex;
    align-items: center;
  }
  </style>