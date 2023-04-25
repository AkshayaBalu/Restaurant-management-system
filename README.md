
# Restaurant amanagement system using Node js & MongoDb

<h3> Installation steps: </h3>

1 -> install library node js by typing [ npm install ]

2 -> create database with mongodb by typing [ use restaurant ]

3 -> Fake Data to use application by typing [ node ./seeder/seeder.js ]

<h3>Admin details:</h3>

<strong>Email : adminstrator@gmail.com</strong>

<strong>Password : ddd</strong>


<h3>Database schema :</h3>

<pre>
// Users schema
User {
        _id : ("5e946cbe64937321dc961e5e"),
        role : "adminstrator",
        Fname : "Akshaya",
        LName : "B",
        Contact : "02152145454",
        email : "adminstrator@gmail.com",
        password : "$2a$08$kmk4DRv5jcCRhNKk0OTBhuze6zKitBOSoSoFKQ/qVKinoVbXzVXkm",
        avatar : "profile.png",
        created_at : ("2023-04-13T13:44:30.521Z")
}

// Drink schema
Drink {
            _id : ("5e87404989624917fc83db12"),
            Name : "Tropic sunrise",
            Alcohol : "silky rom",
            Type : "Summer drink",
            Description : "Happy dining!",
            created_at : ("2023-04-03T13:55:21.527Z")
}

// Food schema
Food {
        _id : ("5e81ba1051d4f6298052d9d1"),
        Name : "Onion dosa",
        Price : "201.21",
        Type : "Dosa",
        Category : "South indian food",
        Description : "Happy dining!",
        created_at : ("2023-04-17T13:55:16.968Z")
}

// Table schema
Table {
    _id : ("5e832c1593129439b8f3bdcb"),
    Name : "classic row",
    NumberPlace : "6",
    Type : "family",
    Description : "Happy dining!",
    created_at : ("2023-03-31T11:40:05.990Z")
}

// Chef schema
Chef {
        _id : ("5e833906da8f86227cb61966"),
        Fname : "Nikita",
        LName : "kumari",
        Email : "nikita@chef.dz",
        Experience : "10 years of job",
        Type : "Indian cook",
        City : "Chennai",
        Postcode : "35000",
        Salary : "1000",
        Sex : "woman",
        Birthdate : "1992-04-17",
        created_at : ("2023-03-31T12:35:18.391Z")
}

// Waiter schema
Waiter {
            _id : ("5e81ae8260cd552b58714cfc"),
            Fname : "mohammed",
            LName : "asif",
            Email : "mohammed@waiter.dz",
            City : "Newsville",
            Postcode : "35000",
            Salary : "200",
            Sex : "man",
            Birthdate : "1983-04-25",
            created_at : ("2023-03-30T08:32:02.436Z")
}

// Booking schema
Customer {
        _id : ("5e822f29b0f7790a685ac372"),
        Fname : "younes",
        LName : "younes",
        Contact : "02145121210",
        Email : "younes@mail.dz",
        created_at : ("2023-03-30T17:40:57.452Z")
}

// Booking schema
booking {
        _id : ("5e8626c48b66dd116813b732"),
        Date : "2023-04-16",
        time : "6:00am",
        number_place : "3",
        CustomerID : "5e9864b2b8ffe7594876d724",
        created_at : ("2023-04-17T14:31:08.158Z")
}

// Bills schema
Bill {
        _id : ("5e95f5bbd0315c3d6c25f179"),
        Sub_Total : "88.12",
        Vat : "66.12",
        Total : "900.32",
        drink_id : "5e985e544815552404e93b47",
        food_id : "5e974face028ec5590e73eb6",
        waiter_id : "5e98627d961ec759b0217a69",
        table_id : "5e9719fff6ca344ac449dd20",
        CustomerID : "5e822fd59d92e605285b5396",
        created_at : ("2023-04-14T17:41:15.241Z")
}
</pre> 
