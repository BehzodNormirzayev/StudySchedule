<template>
    <div class="container">
      
          
    <button v-show="!isOpen" @click="activeRoom = ''; isOpen= true"><img src="https://cdn-icons-png.flaticon.com/512/10944/10944712.png" width="40px" height="40px" alt="icon"></button>

      <div v-show="isOpen" class="navigation">
        <button
          v-for="room in rooms"
          :key="room.id"
          :class="['nav-button', { active: activeRoom === room.id }]"
          @click="activeRoom = room.id; isOpen= false"
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
         <!-- Add Equipment Input and Button -->
         <div class="add-equipment">
            <input
              type="text"
              v-model="newEquipment"
              class="input-field"
              placeholder="Добавить оборудование"
            />
            <button
              class="add-button"
              @click="addEquipment(room.id)"
            >
              Добавить
            </button>
          </div>
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
      const activeRoom = ref("");
      const isOpen = true;
      const rooms = ref([
        {
          id: "physics",
          name: "Кабинет Физики",
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
          name: "Кабинет Математик",
          image: "https://i0.wp.com/mymathresources.com/wp-content/uploads/2020/07/Virtual-Middle-School-Math-Classroom-Low-Resolution.png?fit=1359%2C800&ssl=1",
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
          name: "Кабинет ИЗО",
          image: "https://fhai.com/wp-content/uploads/2021/12/4911721-scaled.jpg",
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
          name: "Кабинет Музыки",
          image: "https://img.freepik.com/premium-photo/music-classroom-with-instruments-1-generated-by-ai_930337-75.jpg",
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
          name: "Кабинет Географии",
          image: "https://www.promoteyourschool.co.uk/wp-content/uploads/2021/01/PYS-Cardinal-Wiseman-Humanities-Wall-Art-1.webp",
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
          name: "Кабинет Химиии",
          image: "https://as1.ftcdn.net/v2/jpg/04/55/66/96/1000_F_455669622_ZYl2BFihZNdCEQmRbA81LE1MPkpZqFCO.jpg",
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
          name: "Кабинет Биологии",
          image: "https://www.crbgroup.com/wp-content/uploads/2019/10/UI-Biology-Labs-01m.jpg",
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
          name: "Кабинет Физкультуры",
          image: "https://www.screenflex.com/wp-content/uploads/2011/04/26-Gym-For-Portable-Partitions.jpg",
          equipmentTitle: "Оборудование спортзала:",
          equipment: [
            "Спортивные маты",
            "Гимнастические снаряды",
            "Мячи для разных видов спорта",
            "Шведская стенка",
            "Баскетбольные кольца",
          ],
        },

        {
          id: "history",
          name: "Кабинет Истории",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Elementary_classroom_in_Alaska.jpg/1200px-Elementary_classroom_in_Alaska.jpg",
          equipmentTitle: "Оборудование спортзала:",
          equipment: [
            "Пергамент",
            "Гусиные перья",
            "Печатные станки",
            "Пишущие машинки",
            "Археологические инструменты",
          ],
        },
        {
          id: "compyuter since",
          name: "Кабинет Информатики",
          image: "https://talgarlitsey.kz/wp-content/uploads/photo-gallery/informatics_classroom/IMG_20210215_154606.jpg?bwg=1613935693",
          equipmentTitle: "Оборудование спортзала:",
          equipment: [
            "Компьютеры",
            "Периферия",
            "Сеть",
            "Программное обеспечение",
          ],
        },
        {
          id: "english",
          name: "Кабинет Иностранный языка",
          image: "https://i0.wp.com/jennacopper.com/wp-content/uploads/2018/08/Picture12.png?resize=1024%2C682",
          equipmentTitle: "Оборудование спортзала:",
          equipment: [
            "Учебные материалы",
            "Технологии для изучения языков",
            
          ],
        },
        {
          id: " literature",
          name: "Кабинет Русский язык и литературы",
          image: "https://www.promoteyourschool.co.uk/wp-content/uploads/2019/04/burnt-mill-academy-english-subject-wall-1.jpg",
          equipmentTitle: "Оборудование спортзала:",
          equipment: [
            "Письменные принадлежности",
            "Оборудование для печати",
            "Аудио и видео оборудование",
            ],
        },
        {
          id: "Texnology",
          name: "Кабинет Технологии",
          image: "https://www.learningspacesolutions.com/wp-content/uploads/2023/02/reasons-upgrade-dt-classrooms.png",
          equipmentTitle: "Оборудование спортзала:",
          equipment: [
            "Производственное оборудование",
            "Измерительные приборы",
            "Транспортные средства",
            
          ],
        },
      ]);
      const addEquipment = (roomId) => {
      if (newEquipment.value.trim()) {
        const room = rooms.value.find((r) => r.id === roomId);
        room.equipment.push(newEquipment.value);
        newEquipment.value = ""; // Clear the input field
      }
    };
      return {
        activeRoom,
        rooms,
        isOpen
      };
    },
  };
  </script>
  
<style scoped lang="scss">

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
    border-radius: 50px;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .nav-button:hover {
    background-color: #2980b9;
    transform: translateY(-3px);
  }
  
  .nav-button.active {
    background-color: #2c3e50;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .classroom {
    display: none;
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    opacity: 0;
    transform: translateY(10px);
  }
  
  .classroom.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
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
    border-radius: 12px;
    transition: transform 0.3s;
  }
  
  .classroom-image img:hover {
    transform: scale(1.05);
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
  .add-equipment {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.input-field {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
}

.add-button {
  padding: 8px 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #2980b9;
}
  </style>
  