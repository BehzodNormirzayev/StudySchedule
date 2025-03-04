<template>
  <div>
    <a-row>
      <a-col>
        <div @click="handlePageChange" style="cursor: pointer; display: inline-block;">
          <template v-if="currentPage === 'teachers'">
           
          </template>
          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </template>
        </div>
      </a-col>
    </a-row>
  </div>

  <!-- Page content -->
  <div v-if="currentPage === 'teachers'">
    <a-table :columns="columns" :data-source="teachersList" rowKey="id">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'fio'">
          <span @click="showTeacherInfo(record)" class="teacher-name">
            {{ record.fio }}
          </span>
        </template>
      </template>
    </a-table>
  </div>
  
  <div v-else-if="currentPage === 'info'">
    <teacher-info 
      :teacher="selectedTeacher"
      @close="goToTeachers" 
    />
  </div>
  
 
</template>

<script setup>
import { ref } from "vue";
import { useTeachersStore } from "@/stores/teachers.pinia";
import TeacherInfo from "./TeacherInfo.vue";

// Store
const store = useTeachersStore();
const teachersList = store.teachersList;

// State
const currentPage = ref("teachers");
const selectedTeacher = ref(null);

// Table columns
const columns = [
{ 
  title: "Name", 
  dataIndex: "fio",
  key: "fio"
},
{ title: "Age", dataIndex: "age", key: "age" },
{ title: "Kafedra", dataIndex: "cafedra", key: "cafedra" },
{ title: "Number", dataIndex: "number", key: "number" }
];

// Navigation methods
const goToTeachers = () => {
currentPage.value = "teachers";
selectedTeacher.value = null;
};

const goToForm = () => {
currentPage.value = "form";
};

const goToInfo = () => {
currentPage.value = "info";
};

// Event handlers
const handlePageChange = () => {
if (currentPage.value === "teachers") {
  goToForm();
} else {
  goToTeachers();
}
};

const showTeacherInfo = (teacher) => {
selectedTeacher.value = teacher;
goToInfo();
};

const handleFormSubmit = async (formData) => {
try {
  await store.addTeacher(formData);
  goToTeachers();
} catch (error) {
  console.error('Error submitting form:', error);
}
};
</script>

<style scoped>
.teacher-name {
cursor: pointer;
}

.teacher-name:hover {
background-color: #f5f5f5;
}

/* Добавляем стили для всей строки таблицы */
:deep(.ant-table-row) {
cursor: pointer;
}

:deep(.ant-table-row:hover) {
background-color: #f5f5f5;
}
</style>