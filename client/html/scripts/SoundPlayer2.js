class SoundPlayer2 {
    static yPlayer = null;
    youtubeIsReady = false;

    constructor() {
        // ... (other properties)
        this.soundPath = "";
    }

    setSoundPath(path) {
        this.soundPath = path;
    }

    create() {

            this.audioPlayer = new Howl({
                src: [this.soundPath],
                loop: false,
                html5: true,
                autoplay: false,
                volume: 0.00,
                format: ['mp3'],
                onend: function(event) {
                    ended(null);
                },
                onplay: function() {
                    isReady("nothing", true);
                },
            });
            $("#" + this.div_id).remove();
            $("body").append("<div id = '" + this.div_id + "' style='display:none'>" + this.soundPath + "</div>");
    }

    play() {
        if (this.audioPlayer != null) {
            this.audioPlayer.play();
        }
    }

    // ... (rest of the SoundPlayer methods)
}

// class SoundPlayer2 {
//     constructor(audioPath) {
//         this.url = audioPath || ""; // Default to an empty string if no path is provided
//         this.volume = 1.0;
//         this.loop = false;
//         this.audioPlayer = null;
//     }

//     create() {
//         this.audioPlayer = new Howl({
//             src: [this.url],
//             loop: this.loop,
//             volume: this.volume,
//             format: ['ogg'],
//             onend: function(event) {
//                 // Handle end of audio playback if needed
//             },
//             onplay: function() {
//                 // Handle start of audio playback if needed
//             },
//         });
//     }

//     play() {
//         if (this.audioPlayer != null) {
//             this.audioPlayer.play();
//         }
//     }
// }