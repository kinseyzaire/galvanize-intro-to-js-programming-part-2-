
var bigObj = {
  users:[
    {
      user_id: 1,
      name: "Chris Rivers",
      mention_name: "chris",
      email: "chris@hipchat.com",
      title: "Developer",
      photo_url: "https:\/\/www.hipchat.com\/chris.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "away",
      status_message: "gym, bbl",
      is_group_admin :1,
      is_deleted :0
    },
    {
      user_id: 3,
      name: "Peter Curley",
      mention_name: "pete",
      email: "pete@hipchat.com",
      title: "Designer",
      photo_url: "https:\/\/www.hipchat.com\/pete.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "offline",
      status_message: "",
      is_group_admin: 1,
      is_deleted: 0
    },
    {
      user_id: 5,
      name: "Garret Heaton",
      mention_name: "garret",
      email: "garret@hipchat.com",
      title: "Co-founder",
      photo_url: "https:\/\/www.hipchat.com\/garret.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "available",
      status_message: "Come see what I'm working on!",
      is_group_admin: 1,
      is_deleted: 0
    }
  ]
}

// console.log(bigObj.users[0].email);
// console.log(bigObj.users[2].title);
// console.log(bigObj.users[0].user_id);


function getUserEmail(userId) {
for (i =0; i < bigObj.users.length; i++) {
   if (bigObj.users[i].user_id == userId)
   return(bigObj.users[i].email);
   }
}

function getUserTitle(userId) {
for (i =0; i < bigObj.users.length; i++) {
   if (bigObj.users[i].user_id == userId)
   return(bigObj.users[i].title);
   }
}

function getUserIds() {
   var bucket = [];
   for (i =0; i < bigObj.users.length; i++) {
   bucket.push(bigObj.users[i].user_id);
   }
   return(bucket);
}

console.log(getUserEmail(5));

console.log(getUserTitle(3));

console.log(getUserIds());
