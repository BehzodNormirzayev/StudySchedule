<template>
    <!-- Иконка для переключения страниц -->
    <div>
      <a-row>
        <a-col>
          <div @click="togglePage" style="cursor: pointer; display: inline-block;">
            <!-- Иконка меняется в зависимости от текущей страницы -->
            <template v-if="currentPage === 'teachers'">
              <!-- Иконка "Добавить" -->
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
              </svg>
            </template>
            <template v-else>
              <!-- Иконка "Назад" -->
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
            </template>
          </div>
        </a-col>
      </a-row>
    </div>
  
    <!-- Переключение между страницами -->
    <div v-if="currentPage === 'teachers'">
      <!-- Таблица с учителями -->
      <a-table :columns="columns" :data-source="teachersList" rowKey="id">
        <template #bodyCell="{ column, record }"></template>
      </a-table>
    </div>
    <div v-else-if="currentPage === 'info'">
      <!-- Форма регистрации преподавателя -->
      <teacher-info @close="togglePage" />
      
    </div>
    <div v-else-if="currentPage === 'form'">
      <!-- Форма регистрации преподавателя -->
      <teacher-registration-form @close="togglePage" />
      
    </div>


  </template>
  <script setup>
  import { ref } from "vue";
  import { useTeachersStore } from "@/stores/teachers.pinia";
  import TeacherRegistrationForm from "./TeacherRegistrationForm.vue"; // Убедитесь, что путь правильный
  import TeacherInfo from "./TeacherInfo.vue";
  // Pinia Store
  const store = useTeachersStore();
  const teachersList = store.teachersList;
  
  // Столбцы таблицы
  const columns = [
    { title: "Name", dataIndex: "fio" },
    { title: "Age", dataIndex: "age" },
    { title: "Kafedra", dataIndex: "cafedra" },
    { title: "Number", dataIndex: "number" },
  ];
  
  // Текущее состояние страницы (таблица или форма)
  const currentPage = ref("teachers"); // "teachers" - начальная страница
  
  // Методы
  const togglePage = () => {
    currentPage.value = currentPage.value === "teachers" ? "form" : "teachers";
   
  };
  </script>
  