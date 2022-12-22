const playlist = {
    name: 'Мой супер Playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
    },
    updateRating(newRating) { 
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    },
};

playlist.changeName('New Name');
playlist.addTrack('New Track');
playlist.updateRating(10);
console.log(playlist);
console.log(playlist.getTrackCount());