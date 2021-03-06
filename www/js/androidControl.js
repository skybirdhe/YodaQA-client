/**
 * Created by Petr Marek on 8.7.2015.
 */

// Wait for device API libraries to load
    //
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    checkConnection();
    navigator.tts.startup(startupWin, fail);
}

function checkConnection(){
    if (!isConnected()){
        var mainPageContentElement = $(".ui-content");
        mainPageContentElement.empty();
        mainPageContentElement.append("<H1>No internet connection</H1>");
    }
}

function isConnected() {
    var networkState = navigator.connection.type;
    if (Connection.NONE==networkState){
        return false;
    }else{
        return true;
    }
}

function startupWin(result) {
    // When result is equal to STARTED we are ready to play
    //TTS.STARTED==2 use this once so is answered
    if (result == 2) {
        navigator.tts.getLanguage(win, fail);
        navigator.tts.speak("The text to speech service is ready");
    }
}

function win(result) {
    console.log(result);
}

function fail(result) {
    console.log("Error = " + result);
}
