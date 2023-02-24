//--1
function Task1() {
    var array = [
        { id: 1, name: 'Vasya', group: 10 },
        { id: 2, name: 'Ivan', group: 11 },
        { id: 3, name: 'Masha', group: 12 },
        { id: 4, name: 'Petya', group: 10 },
        { id: 5, name: 'Kira', group: 11 },
    ];
}
function Task2_3() {
    ;
    var car = {}; //объект создан!
    car.manufacturer = "manufacturer";
    car.model = 'model';
    var car1 = {}; //объект создан!
    car1.manufacturer = "manufacturer";
    car1.model = 'model';
    var car2 = {}; //объект создан!
    car2.manufacturer = "manufacturer";
    car2.model = 'model';
    var arrayCars = [{
            cars: [car1, car2]
        }];
}
function Task4() {
    var Univer = {
        students: [
            {
                id: 1,
                name: 'Alexey',
                group: 1,
                marks: [
                    {
                        subject: "Математика",
                        mark: 8,
                        done: true
                    },
                    {
                        subject: "Русский язык",
                        mark: 5,
                        done: true
                    },
                    {
                        subject: "Физика",
                        mark: 2,
                        done: false
                    }
                ]
            },
            {
                id: 2,
                name: 'Vlad',
                group: 1,
                marks: [
                    {
                        subject: "Математика",
                        mark: 8,
                        done: true
                    },
                    {
                        subject: "Русский язык",
                        mark: 5,
                        done: true
                    },
                    {
                        subject: "Физика",
                        mark: 2,
                        done: false
                    }
                ]
            },
        ],
        group: 1,
        mark: 5,
        deleteStudent: function (id) {
            for (var i = 0; i < Univer.students.length; i++) {
                if (Univer.students[i].id === id) {
                    delete Univer.students[i];
                    break;
                }
            }
        },
        marksFilter: function (mark) {
            var arr = [];
            var markCheck = 0;
            var iterator = 0;
            for (var i = 0; i < Univer.students.length; i++) {
                for (var j = 0; j < Univer.students[i].marks.length; j++) {
                    markCheck += Univer.students[i].marks[j].mark;
                }
                markCheck = markCheck / Univer.students[i].marks.length;
                if (markCheck == mark) {
                    arr[iterator] = Univer.students[i];
                }
            }
            return arr;
        },
        studentsFilter: function (group) {
            var arr = [];
            var iterator = 0;
            for (var i = 0; i < Univer.students.length; i++) {
                if (Univer.students[i].group == group) {
                    arr[iterator] = Univer.students[i];
                    iterator++;
                }
            }
            return arr;
        }
    };
    
    alert(Univer.students[0].name);
    Univer.deleteStudent(1);
    alert(Univer.students[0]);
}
