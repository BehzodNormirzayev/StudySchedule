<template>
    <div class="container">
      <h1>Школьные кабинеты</h1>
  
      <div class="navigation">
        <button
          v-for="room in rooms"
          :key="room.id"
          :class="['nav-button', { active: activeRoom === room.id }]"
          @click="activeRoom = room.id"
        >
          {{ room.name }}
        </button>
      </div>
  
      <div
        v-for="room in rooms"
        :key="room.id"
        :id="room.id"
        :class="['classroom', { active: activeRoom === room.id }]"
      >
        <div class="classroom-content">
          <div class="classroom-info">
            <div class="classroom-image">
              <img :src="room.image" :alt="room.name" />
            </div>
            <h2>{{ room.equipmentTitle }}</h2>
            <ul class="equipment-list">
              <li v-for="(item, idx) in room.equipment" :key="idx">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: "SchoolRooms",
    setup() {
      const activeRoom = ref("physics");
      const rooms = ref([
        {
          id: "physics",
          name: "Физика",
          image: "https://www.digis.kz/upload/iblock/4aa/dsh7el7hr9q8s6vlgq14hn3g1qhv9q3z/%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C_%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82_%D1%84%D0%B8%D0%B7%D0%B8%D0%BA%D0%B8_%D0%B2_%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%D0%B5.png",
          equipmentTitle: "Оборудование кабинета физики:",
          equipment: [
            "Демонстрационные приборы",
            "Лабораторное оборудование",
            "Интерактивная доска",
            "Таблицы и схемы",
            "Осциллографы",
          ],
        },
        {
          id: "math",
          name: "Математика",
          image: "images/math.jpg",
          equipmentTitle: "Оборудование кабинета математики:",
          equipment: [
            "Геометрические модели",
            "Измерительные инструменты",
            "Графики функций",
            "Калькуляторы",
            "Математические таблицы",
          ],
        },
        {
          id: "art",
          name: "ИЗО",
          image: "images/art.jpg",
          equipmentTitle: "Оборудование кабинета ИЗО:",
          equipment: [
            "Мольберты",
            "Художественные материалы",
            "Наглядные пособия",
            "Репродукции картин",
            "Скульптурные модели",
          ],
        },
        {
          id: "music",
          name: "Музыка",
          image: "images/music.jpg",
          equipmentTitle: "Оборудование кабинета музыки:",
          equipment: [
            "Фортепиано",
            "Музыкальный центр",
            "Различные инструменты",
            "Нотные стенды",
            "Портреты композиторов",
          ],
        },
        {
          id: "geography",
          name: "География",
          image: "images/geography.jpg",
          equipmentTitle: "Оборудование кабинета географии:",
          equipment: [
            "Глобусы",
            "Географические карты",
            "Коллекция минералов",
            "Метеорологические приборы",
            "Компасы",
          ],
        },
        {
          id: "chemistry",
          name: "Химия",
          image: "images/chemistry.jpg",
          equipmentTitle: "Оборудование кабинета химии:",
          equipment: [
            "Лабораторные столы",
            "Химические реактивы",
            "Вытяжной шкаф",
            "Периодическая система",
            "Защитное оборудование",
          ],
        },
        {
          id: "biology",
          name: "Биология",
          image: "images/biology.jpg",
          equipmentTitle: "Оборудование кабинета биологии:",
          equipment: [
            "Микроскопы",
            "Анатомические модели",
            "Гербарии",
            "Коллекции насекомых",
            "Таблицы по ботанике и зоологии",
          ],
        },
        {
          id: "gym",
          name: "Физкультура",
          image: "images/gym.jpg",
          equipmentTitle: "Оборудование спортзала:",
          equipment: [
            "Спортивные маты",
            "Гимнастические снаряды",
            "Мячи для разных видов спорта",
            "Шведская стенка",
            "Баскетбольные кольца",
          ],
        },
      ]);
  
      return {
        activeRoom,
        rooms,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
  }
  
  .navigation {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  .nav-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .nav-button:hover {
    background-color: #2980b9;
  }
  
  .nav-button.active {
    background-color: #2c3e50;
  }
  
  .classroom {
    display: none;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .classroom.active {
    display: block;
  }
  
  .classroom-content {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .classroom-info {
    flex: 1;
    min-width: 300px;
  }
  
  .classroom-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .equipment-list {
    list-style: none;
    margin-top: 10px;
  }
  
  .equipment-list li {
    margin-bottom: 5px;
    padding-left: 20px;
    position: relative;
  }
  
  .equipment-list li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #3498db;
  }
  </style>
  