var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
}

function printStudents(arr){
    for(var i=0; i<arr.length;i++){
        console.log(arr[i].first_name + " " + arr[i].last_name);
    }
}

function printUsers(obj){
    for(var user in obj){
        console.log(user);
        for(var i=0;i<obj[user].length;i++){
            var name = obj[user][i].first_name + " " + obj[user][i].last_name;
            console.log((i+1) + " " + name + " " + (name.length-1));
        }
    }
}