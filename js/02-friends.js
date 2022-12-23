// массив объектов - вот это

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

// console.table(friends);


// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// }

// console.table(friends);



// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         if (friend.name === friendName) {
//             return 'Yes!';
//         }
//     }
//     return 'No (';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// const getAllNames = function (allFriends) { 
//     for (const friend of allFriends) {
//         console.log(friend.name);
//     }
// };

// console.log(getAllNames(friends));





// const getOnlineFriends = function (allFriends) {
//     const onlineFriens = [];

//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.online);

//         if (friend.online) {
//             onlineFriens.push(friend);
//          }
//     }
//     return onlineFriens;
// };
// console.log(getOnlineFriends(friends));






const getOfflineFriends = function (allFriends) {
    const offlineFriens = [];

    for (const friend of allFriends) {
        // console.log(friend.online);

        if (!friend.online) {
            offlineFriens.push(friend);
        }
    }
    return offlineFriens;
};

console.log(getOfflineFriends(friends));
