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
          
      <div class="content">
      <!-- Left Section -->
        <div class="left-section">
          <h3>Примечание не задано</h3>
          <div class="schedule">
            <h4>Расписание на ближайшие 7 дней</h4>
            <ul>
             <li v-for="(schedule, index) in schedules" :key="index">
              <span>{{ schedule.day }}</span>
              <span>{{ schedule.time }}</span>
              <span>{{ schedule.group }}</span>
              <span>{{ schedule.duration }}</span>
              </li>
            </ul>
        </div>
        <div class="uploaded-files">
          <h4>Загруженные файлы</h4>
          <button @click="uploadFile">Загрузить новый</button>
        </div>
        <div class="comments">
          <h4>Комментарии</h4>
          <textarea v-model="newComment" placeholder="Добавьте комментарий"></textarea>
          <button @click="addComment">Сохранить</button>
        </div>
        </div>
      </div>

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
    

      <!-- Interface Language -->
      

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

.schedule {
  margin-top: 20px;
}

.schedule ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.schedule li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd; /* Border between rows */
}

.schedule li:last-child {
  border-bottom: none; /* Remove border for the last item */
}

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

