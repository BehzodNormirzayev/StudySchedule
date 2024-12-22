import { defineStore } from 'pinia';

export const useTeachersStore = defineStore('teachers', {
    state: () => ({
        teachersList: [
            {
                id: 1,
                fio: ' Begi Behzod Beki',
                age: 32,
                number: '99 080 00 00',
                cafedra: 'Fiz-mat'
            },
            

        ]

    }),
    actions: {


    }
});

