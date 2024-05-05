const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson:`{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Мария",
            "id_3": "Светлана",
            "id_4": "Екатерина",
            "id_5": "Кристина",
            "id_6": "Ольга",
            "id_7": "Елена",
            "id_8": "Александра",
            "id_9": "Евгения",
            "id_10": "Марина"
        }
    }`,

    professionMaleJson:`{
        "count": 10,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Токарь",
            "id_3": "Грузчик",
            "id_4": "Каменщик",
            "id_5": "Строитель",
            "id_6": "Сварщик",
            "id_7": "Электрик",
            "id_8": "Сантехник",
            "id_9": "Сталевар",
            "id_10": "Водитель"
        }
    }`,

    professionFemaleJson:`{
        "count": 10,
        "list": {     
            "id_1": "Учитель",
            "id_2": "Бахгалтер",
            "id_3": "Уборщица",
            "id_4": "Медсестра",
            "id_5": "Швея",
            "id_6": "Библиотекарь",
            "id_7": "Диспетчер",
            "id_8": "Секретарь",
            "id_9": "Кондуктор",
            "id_10": "Косметолог"
        }
    }`,

    //28 дней: Февраль
    //30 дней: Апрель, Июнь, Сентябрь, Ноябрь
    birthDayMonthJson:`{
        "count": 4,
        "list": {     
            "id_1": "Апреля",
            "id_2": "Июня",
            "id_3": "Сентября",
            "id_4": "Ноября"
        }
    }`,

    birthMonthJson:`{
        "count": 7,
        "list": {     
            "id_1": "Январь",
            "id_2": "Март",
            "id_3": "Май",
            "id_4": "Июль",
            "id_5": "Август",
            "id_6": "Октябрь",
            "id_7": "Декабрь"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender == this.GENDER_MALE) {

            return this.randomValue(this.firstNameMaleJson);

        } else return this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function(gender) {
        if (gender == this.GENDER_MALE) {

            return this.randomValue(this.surnameJson);

        } else return this.randomValue(this.surnameJson) + "а";
    },

    randomMiddleName: function(gender) {
        middleName = this.randomValue(this.firstNameMaleJson);

        if (gender == this.GENDER_MALE) {

            if(middleName.includes('ий') || middleName.includes('ей')) {
                return middleName.replace("й", "евич")

            } else if (middleName.includes('Никита')) { //исключение
                return middleName.replace('а', 'ич')

            } else if (middleName.includes('аил')) {
                return middleName.replace('ил', 'йлович')

            } else return middleName + 'ович'
    
        } else if (gender == this.GENDER_FEMALE) {

            if(middleName.includes('ий')|| middleName.includes('ей')) {
                return middleName.replace('й', 'евна')

            } else if (middleName.includes('Никита')) {
                return middleName.replace('а', 'ична')
            
            } else if (middleName.includes('аил')) {
                return middleName.replace('ил', 'йловна')

            } else return middleName + 'овна'
        }
    },

    randomGender: function() {
        return (this.randomIntNumber() == 1) ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomProfession: function(gender) {
        if (gender == this.GENDER_MALE) {

        return this.randomValue(this.professionMaleJson);
        
        } else return this.randomValue(this.professionFemaleJson);
    },

    randomBirthMonth: function(month) {
        if (month == 1) {
        
            return this.randomIntNumber(1, 28) + " Февраля";
        
        } else if (month > 1 && month < 6) {
        
            return this.randomIntNumber(1, 30) + " " + this.randomValue(this.birthDayMonthJson);
        
        } else if (month > 5) return this.randomValue(this.birthMonthJson);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        
        //для соблюдения соотношения месяцев с датой к месяцам без даты (5:7)
        this.person.birthMonth = this.randomBirthMonth(this.randomIntNumber(1, 12));
        
        this.person.birthYear = this.randomIntNumber(1965, 2000);
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};
