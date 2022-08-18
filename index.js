function shout (dialogue) {
    return dialogue.toUpperCase()
}

function whisper (dialogue) {
    return dialogue.toLowerCase()
}

function logShout (dialogue) {
    console.log(dialogue.toUpperCase())
}

function logWhisper (dialogue) {
    console.log(dialogue.toLowerCase())
}

function sayHiToHeadphonedRoommate (dialogue) {
    if (dialogue === "Let's have dinner together!")
    return ('I would love to!');

    if (dialogue === dialogue.toLowerCase())
    return ("I can't hear you!");
    
    if (dialogue === dialogue.toUpperCase())
    return ("YES INDEED!");
}