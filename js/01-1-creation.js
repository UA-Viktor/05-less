const playlist = {
    name: 'Мой супер Playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
};

// console.log(playlist);
// Получение данных

// console.log(playlist.name);
// console.log(playlist.tracks);
// console.log(playlist.trackCount);

// console.log(playlist.rating);   // одно и тоже
// console.log(playlist['rating']);// одно и тоже

// console.log(playlist.tracks);       // одно и тоже
// // или
// const propertyName = 'tracks';      // одно и тоже
// console.log(playlist[propertyName]);// одно и тоже



// const username = 'Mango';
// const email = 'mango@gmail.com'
// const signupData = {
//     // username: username,
//     // email: email,
// //  если названия совпадают - можно сократить
//     username,
//     email,
// };
// console.log(signupData);





// Так же можно быть делать димамически задачать свойства ВЫЧЕСЛЯЕМЫЕ свойста
// <input name="color", value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';
// const colorPickerData = {
//     [inputName]: inputValue,
// }
// console.log(colorPickerData); 


// ADD Добавляет
// playlist.sound = 'vocal';
// console.log(playlist);