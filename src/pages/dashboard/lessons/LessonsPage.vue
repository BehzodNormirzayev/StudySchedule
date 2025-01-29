// src/components/LessonList.vue
<template>
  <div>
    <h1>Lessons</h1>
    <ul>
      {{ lessons }}
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      lessons: [], // This will store the list of lessons from the API
    };
  },
  mounted() {
    this.fetchLessons(); // Fetch the lessons when the component is mounted
  },
  methods: {
    async fetchLessons() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/lessons/'); // Make a GET request to your Django API
        this.lessons = response.data; // Store the data in the 'lessons' variable
      } catch (error) {
        console.error('Error fetching lessons:', error); // Handle errors if any
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styling here */
</style>
