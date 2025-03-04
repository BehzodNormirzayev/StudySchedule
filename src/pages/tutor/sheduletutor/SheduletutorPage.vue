<template>
    <div class="container">
      <!-- Calendar View -->
      <div v-if="!selectedDay" class="calendar-view">
        <div class="calendar-header">
          <button @click="prevMonth" class="nav-button">←</button>
          <span class="current-month">{{ currentMonthYear }}</span>
          <button @click="nextMonth" class="nav-button">→</button>
        </div>
  
        <div class="calendar-grid">
          <div v-for="day in daysOfWeek" :key="day" class="day-header">
            {{ day }}
          </div>
  
          <div
            v-for="day in calendarDays"
            :key="day.date"
            :class="[
              'calendar-day',
              { 'other-month': !day.isCurrentMonth },
              { 'has-classes': day.events.length > 0 }
            ]"
            @click="selectDay(day)"
          >
            <div class="day-number">{{ new Date(day.date).getDate() }}</div>
            <div class="events-preview" v-if="day.events.length">
              <div class="event-count">{{ day.events.length }} занятий</div>
              <div class="grade-preview">
                {{ getUniqueGrades(day.events).join(', ') }} классы
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Schedule View -->
      <div v-else class="schedule-view">
        <div class="schedule-header">
          <button @click="closeSchedule" class="back-button">
            Назад к календарю
          </button>
          <h2>{{ formatDate(selectedDay.date) }}</h2>
        </div>
  
        <!-- Modified grade selector -->
        <div class="grade-selector">
          <select 
            v-model="selectedGrade" 
            class="grade-select"
          >
            <option :value="null">Все классы</option>
            <option 
              v-for="grade in availableGrades" 
              :key="grade" 
              :value="grade"
            >
              {{ grade }} класс
            </option>
          </select>
        </div>
  
        <div class="schedule-content">
          <div v-if="filteredSchedule.length === 0" class="no-classes">
            Нет занятий на этот день
          </div>
          
          <div v-else class="class-list">
            <div 
              v-for="classItem in sortedSchedule" 
              :key="classItem.id"
              class="class-item"
              :class="classItem.color"
            >
              <div class="class-time">{{ classItem.time }}</div>
              <div class="class-details">
                <div class="class-name">
                  {{ classItem.title }}
                  <span class="grade-label">{{ classItem.grade }} класс</span>
                </div>
                <div class="class-info">
                  <span class="class-room">Кабинет: {{ classItem.room }}</span>
                  <span class="class-teacher">Преподаватель: {{ classItem.teacher }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

// State
const currentDate = ref(new Date());
const selectedDay = ref(null);
const selectedGrade = ref(null);

// Constants
const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const availableGrades = [5, 6, 7, 8, 9, 10, 11];

// Sample class schedule data
const classSchedule = [
  {
    id: 1,
    date: '2025-01-27',
    time: '09:00',
    title: 'Математика',
    grade: 5,
    room: '201',
    teacher: 'Иванов И.И.',
    color: 'blue'
  },
  {
    id: 2,
    date: '2025-01-27',
    time: '10:30',
    title: 'Физика',
    grade: 7,
    room: '305',
    teacher: 'Петров П.П.',
    color: 'red'
  },
  {
    id: 3,
    date: '2025-01-27',
    time: '12:00',
    title: 'Информатика',
    grade: 9,
    room: '404',
    teacher: 'Сидоров С.С.',
    color: 'green'
  },
  {
    id: 4,
    date: '2025-01-27',
    time: '13:30',
    title: 'Химия',
    grade: 11,
    room: '301',
    teacher: 'Смирнова С.С.',
    color: 'purple'
  }
];

// Computed Properties and Methods remain the same as before
const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long'
  });
});

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  let start = firstDay.getDay() - 1;
  if (start === -1) start = 6;
  
  const days = [];
  
  // Previous month days
  for (let i = start - 1; i >= 0; i--) {
    const date = new Date(year, month, -i);
    days.push({
      date: date.toISOString(),
      isCurrentMonth: false,
      events: getClassesForDate(date)
    });
  }
  
  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    days.push({
      date: date.toISOString(),
      isCurrentMonth: true,
      events: getClassesForDate(date)
    });
  }
  
  // Next month days
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push({
      date: date.toISOString(),
      isCurrentMonth: false,
      events: getClassesForDate(date)
    });
  }
  
  return days;
});

const filteredSchedule = computed(() => {
  if (!selectedDay.value) return [];
  
  let events = selectedDay.value.events;
  if (selectedGrade.value) {
    events = events.filter(event => event.grade === selectedGrade.value);
  }
  return events;
});

const sortedSchedule = computed(() => {
  return [...filteredSchedule.value].sort((a, b) => {
    return a.time.localeCompare(b.time);
  });
});

function getClassesForDate(date) {
  const dateString = date.toISOString().split('T')[0];
  return classSchedule.filter(event => event.date === dateString);
}

function getUniqueGrades(events) {
  return [...new Set(events.map(event => event.grade))].sort((a, b) => a - b);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function selectDay(day) {
  selectedDay.value = day;
  selectedGrade.value = null;
}

function closeSchedule() {
  selectedDay.value = null;
  selectedGrade.value = null;
}

function prevMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
}
</script>

<style scoped>
/* Previous styles remain the same */
.container {
  width: 100%;
  margin: 2px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 800px;
  justify-content: space-between;
  align-items: center;
}

/* Calendar Styles remain the same */

/* New Grade Selector Styles */


/* Rest of the styles remain the same */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.current-month {
  font-size: 1.5rem;
  font-weight: 500;
}

.nav-button, .back-button {
  background: none;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover, .back-button:hover {
  background: #f5f5f5;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #ddd;
  border: 1px solid #ddd;
}

.day-header {
  background: #f5f5f5;
  padding: 10px;
  text-align: center;
  font-weight: 500;
}

.calendar-day {
  background: white;
  min-height: 100px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.calendar-day:hover {
  background: #f8f9fa;
}

.calendar-day.has-classes {
  background: #f8f9fa;
}

.day-number {
  font-weight: 500;
  margin-bottom: 5px;
}

.other-month {
  background: #f9f9f9;
  color: #999;
}

.events-preview {
  font-size: 0.8rem;
  color: #666;
}

.grade-preview {
  font-size: 0.75rem;
  color: #888;
  margin-top: 2px;
}

.schedule-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.schedule-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}
.grade-selector {
    justify-content: space-between;  
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 20px;
}

.grade-select {
  width: 200px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.grade-select:hover {
  border-color: #007bff;
}

.grade-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}



.schedule-content {
  padding: 20px 0;
}

.no-classes {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.1rem;
}

.class-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.class-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background: #f8f9fa;
  transition: transform 0.2s;
}

.class-item:hover {
  transform: translateX(5px);
}

.class-item.blue {
  border-left: 4px solid #2196f3;
}

.class-item.red {
  border-left: 4px solid #f44336;
}

.class-item.green {
  border-left: 4px solid #4caf50;
}

.class-item.purple {
  border-left: 4px solid #9c27b0;
}

.class-time {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  min-width: 70px;
}

.class-details {
  flex: 1;
}

.class-name {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
}

.grade-label {
  font-size: 0.9rem;
  padding: 2px 8px;
  border-radius: 4px;
  background: #e9ecef;
  color: #666;
}

.class-info {
  display: flex;
  gap: 20px;
  color: #666;
}

.class-room, .class-teacher {
  font-size: 0.9rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
