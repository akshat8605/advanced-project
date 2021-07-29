// var database = [
//     {
//         userName:"A",
//         password:"C"
//     },
//     {
//         userName:"A1",
//         password:"C2"
//     },
//     {
//         userName:"A2",
//         password:"c3"
//     }
// ]

//  var newsFeed=[
//      {
//          text:'Hello there, how are you?'
//      },
//      {
//         text:'Hello there, how was your day?'
//     },
    
//  ]

// var userInput = prompt("Enter user name");
// var passInput = prompt("Enter password");
// function checkSignIn(user, pass){
//     var isAUser = false;
//     database.forEach((item)=>{
//         console.log(item);
//         if(item.userName === user && item.password === pass){
//             alert("Enjoy the feed");
//             console.log(newsFeed);
//             isAUser = true;
//             return false
//         }
        
        
//     })
//     if(!isAUser) {
//         alert("Check User Name or Password");
//     }
// }
// checkSignIn(userInput, passInput);



todo=[
    "code",
    'brush teeth',
    "play game",
    "study React"
]


//for
//while

for(var i =0;i < todo.length; i++){
    console.log(todo[i])
}