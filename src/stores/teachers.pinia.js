import { defineStore } from 'pinia';

export const useTeachersStore = defineStore('teachers', {
    state: () => ({
        teachersList: [
            {
                id: 1,
                fio: ' Normirzayev Behzod ',
                age: 32,
                number: '99 080 00 00',
                cafedra: 'Fiz-mat'
            },
            

        ]

    }),
    actions: {


    }
});

