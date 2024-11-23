<template>
  <div class="profile-container">
    <!-- User Header Section -->
    <div class="user-header">
      <div class="user-info">
        <div class="avatar-section">
          <img
            :src="user.avatar || './logo.jpg'"
            alt="User avatar"
            class="avatar"
          />
        </div>
        <div class="user-details">
          <h1 class="user-name">{{ user.fullName }}</h1>
          <div class="location">
            <span class="location-icon">📍</span>
            {{ user.location }}
          </div>
        </div>
      </div>
      <div class="user-meta">
        <div class="birth-date">
          {{ user.birthDate }} ({{ user.age }} год)
        </div>
        <div class="gender">
          👤 {{ user.gender }}
        </div>
      </div>
    </div>

    <!-- Avatar Update Notice -->
    <div class="notice-box">
      <span class="info-icon"></span>
      Чтобы изменить фотографию — кликните по ней.
    </div>

    <!-- Update Button -->
    <div class="update-button">
      <button class="btn-update" @click="toggleForm">
        ✏️ ОБНОВИТЬ ИНФОРМАЦИЮ
      </button>
    </div>

    <!-- Main Form (conditionally rendered) -->
    <form v-if="isFormVisible" @submit.prevent="handleSubmit" class="profile-form">
      <!-- ФИО Field -->
      <div class="form-group">
        <label>ФИО <span class="required">*</span></label>
        <input
          type="text"
          v-model="formData.fullName"
          required
        />
      </div>

      <!-- Gender Field -->
      <div class="form-group">
        <label>Пол <span class="required">*</span></label>
        <select v-model="formData.gender" required>
          <option value="Мужчина">Мужчина</option>
          <option value="Женщина">Женщина</option>
        </select>
      </div>

      <!-- Phone Field -->
      <div class="form-group">
        <label>Телефон</label>
        <input
          type="tel"
          v-model="formData.phone"
          pattern="\+[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{4}"
          placeholder="+998-93-407-2925"
        />
      </div>

      <!-- Password Change Checkbox -->
      <div class="form-group">
        <label class="checkbox-label">
          <input
            type="checkbox"
            v-model="formData.changePassword"
          />
          Сменить пароль
        </label>
      </div>

      <!-- Interface Language -->
      <div class="form-group">
        <label>Язык интерфейса</label>
        <select v-model="formData.language">
          <option value="Русский">Русский</option>
          <option value="O'zbekcha">O'zbekcha</option>
          <option value="English">English</option>
        </select>
      </div>

      <button type="submit" class="btn-save">
        Сохранить
      </button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'UserProfileForm',
  data() {
    return {
      isFormVisible: false, // состояние для отображения формы
      user: {
        fullName: 'Нормирзаев Бехзод Журамирза угли',
        location: 'Tashkent',
        birthDate: '26.10.2003',
        age: '21',
        gender: 'Мужчина',
        avatar: null
      },
      formData: {
        fullName: 'Нормирзаев Бехзод Журамирза угли',
        gender: 'Мужчина',
        phone: '+998-93-407-2925',
        changePassword: false,
        language: 'Русский'
      }
    }
  },
  methods: {
    // Toggle visibility of the form
    toggleForm() {
      this.isFormVisible = !this.isFormVisible;
    },
    // Handle form submission
    handleSubmit() {
      console.log('Form submitted with:', this.formData);
      // Logic to submit the form data (e.g., make API request)
    }
  }
}
</script>

<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.user-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin-bottom: 15px;
  grid-column: 1 / -1;
}

.user-info {
  display: flex;
  gap: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-size: 24px;
  margin: 0 0 8px 0;
}

.location {
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
}

.notice-box {
  background: #FFF9E6;
  padding: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  grid-column: 1 / -1;
}

.btn-update {
  background: transparent;
  color: #4A90E2;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
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

.checkbox-label {
  display: flex;
  align-items: center;
  text-align: left;
  gap: 8px;
}

.statistics-sidebar {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.stats-header {
  margin-bottom: 20px;
}

.lessons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lesson-count {
  color: #4A90E2;
}

.planned {
  color: #666;
  font-size: 0.9em;
}

.contact-info {
  margin-bottom: 20px;
}

.phone-number {
  color: #4A90E2;
  text-decoration: none;
}

.messenger-icons {
  display: flex;
  gap: 8px;
}

.statistics-section h3 {
  margin-bottom: 15px;
}

.stats-month {
  margin-bottom: 20px;
}

.stats-month h4 {
  margin-bottom: 10px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.btn-save {
  background: #4A90E2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}
</style>

