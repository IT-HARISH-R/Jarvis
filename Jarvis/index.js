const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...")
    }

    else if (hour => 12 && hour < 17) {
        speak("Good Afternoon sir...")
    }

    else {
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', () => {
    speak("Initializing JARVIS.. ");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')|| message.includes('hi')) {
        speak("Hello Sir, How May I Help You?");
    }
    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speak(finalText);

    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }
    //search
    else if (message.includes('search on youtube')) {
        window.open(`https://www.youtube.com/results?search_query=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + "...";
        speak(finalText);
    }
    else if (message.includes('open chat gpt')) {
        window.open(`https://www.google.com/search?q=open+chat%20gpt`, "_blank");
        const finalText = "I found some information for " + message + "...";
        speak(finalText);
    }
    //https://www.youtube.com/results?search_query=

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText);
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speak(finalText);
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if (message.includes('camera')) {
        //window.open('Camera:///')
        const finalText = "OPening Camer";
        navigator.mediaDevices.getUserMedia({ video: true })
        video.srcObject = stream;

        //const video = document.getElementById('camera-stream');
        speak(finalText);
    }
    else if (message.includes('notepad')) {
        window.open('C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Accessories\Notepad.lnk:///')
        const finalText = "OPening Notepad";
        speak(finalText);
    }
    else if (message.includes('writi')) {
        const finalText = "OPening Notepad";
        speak(finalText);
    }
    else if (message.includes('kadavule')) {
        // window.open('Calculator:///')

        const finalText = 'Ajiththe...';
        speak(finalText);
    }
    else if (message.includes('your name')) {
        const finalText = 'my name is Jarviss';
        speak(finalText);
    }
    else if (message.includes('about you')) {
        // window.open('Calculator:///')
        const finalText = 'i am your Assistant... my name is jarvis... i con look up answers for you,or help you with find the Quickest way home...., if you need anything just ask me';
        speak(finalText);
    }

    //C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Accessories\Notepad.lnk
    //window.open('file:///')
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}