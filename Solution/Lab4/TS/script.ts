//--1
function Task1() : void {
    type ItemForArray = {
        id: number,
        name: string,
        group: number,
    };
    
    const array : Array<ItemForArray> = [
        {id: 1, name: 'Vasya', group: 10}, 
        {id: 2, name: 'Ivan', group: 11},
        {id: 3, name: 'Masha', group: 12},
        {id: 4, name: 'Petya', group: 10},
        {id: 5, name: 'Kira', group: 11},
    ];
}
function Task2_3(): void {
    interface CarsType {
        [key: string] : string;
    };
    
    let car: CarsType = { }; //объект создан!
    car.manufacturer = "manufacturer";
    car.model = 'model';

    type ArrayCarsType = {
        cars : Array<CarsType>;
    };
    
    const car1: CarsType = {}; //объект создан!
    car1.manufacturer = "manufacturer";
    car1.model = 'model';
    
    const car2: CarsType = {}; //объект создан!
    car2.manufacturer = "manufacturer";
    car2.model = 'model';
    
    const arrayCars: Array<ArrayCarsType> = [{
        cars: [car1, car2]  
    }];
}
function Task4() : void {

    type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    type DoneType = true | false;
    
    // let TEST : MarkType = {
    //     subject: " ",
    //     mark: 1,
    //     done: 1,
    // }
    
    type MarkType = {
        subject: string,
        mark: MarkFilterType, // может принимать значения от 1 до 10
        done: DoneType,
    };
    type StudentType = {
        id: number,
        name: string,
        group: GroupFilterType, // может принимать значения от 1 до 12
        marks: Array<MarkType>,
    };
    
    type GroupType = {
        students: Array<StudentType>                           // массив студентов типа StudentType
        studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
        marksFilter: (mark: number) => Array<StudentType>,     // фильтр по  оценке
        deleteStudent: (id: number) => void,                   // удалить студента по id из  исходного массива
        mark: MarkFilterType,
        group: GroupFilterType,
    };
    
    let Univer : GroupType = {
        students: [
            {
                id: 1,
                name: 'Alexey',
                group: 1, // может принимать значения от 1 до 12
                marks: [
                    {
                        subject: "Математика",
                        mark: 8,
                        done: true,
                    },
                    {
                        subject: "Русский язык",
                        mark: 5,
                        done: true,
                    },
                    {
                        subject: "Физика",
                        mark: 2,
                        done: false,
                    }
                ],
            },
            {
                id: 2,
                name: 'Vlad',
                group: 1, // может принимать значения от 1 до 12
                marks: [
                    {
                        subject: "Математика",
                        mark: 8,
                        done: true,
                    },
                    {
                        subject: "Русский язык",
                        mark: 5,
                        done: true,
                    },
                    {
                        subject: "Физика",
                        mark: 2,
                        done: false,
                    }
                ],
            },
        ],
        group: 1,
        mark: 5,
        deleteStudent: (id : number) : void => {
            for (let i = 0; i < Univer.students.length; i++) {
                if (Univer.students[i].id === id) {
                    delete Univer.students[i];
                    break;
                }
            }
        },
        marksFilter: (mark : number) : Array<StudentType> => {
            let arr : Array<StudentType> = [];
            let markCheck : number = 0;
            let iterator : number = 0;
            for (let i = 0; i < Univer.students.length; i++) {
                for (let j = 0; j < Univer.students[i].marks.length; j++) {   
                    markCheck += Univer.students[i].marks[j].mark;
                }
                markCheck = markCheck / Univer.students[i].marks.length;
                if(markCheck == mark) {
                    arr[iterator] = Univer.students[i];
                }
            }
            return arr;
        },
        studentsFilter: (group: number) : Array<StudentType> => {
            let arr : Array<StudentType> = [];
            let iterator : number = 0;
            for (let i = 0; i < Univer.students.length; i++) {
                if(Univer.students[i].group == group) {
                    arr[iterator] = Univer.students[i]; 
                    iterator++;
                }            
            }
            return arr;
        },
    }

    Univer.marksFilter(5).forEach(alert);

    alert(Univer.students[0]);
    Univer.deleteStudent(1);
    alert(Univer.students[0]);
}