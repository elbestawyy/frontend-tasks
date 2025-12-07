document.addEventListener('DOMContentLoaded', () => {
    const micButton = document.getElementById('micButton');
    const statusElement = document.getElementById('status');
    const audioPlayer = document.getElementById('liveAudio');
    let mediaStream = null;


    const updateStatus = (message, isRecording = false) => {
        statusElement.textContent = `Status: ${message}`;
        statusElement.classList.toggle('recording', isRecording);
    };

   
    const stopMicrophone = () => {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            mediaStream = null;
            micButton.textContent = "Start Microphone";
            micButton.classList.remove('active');
            updateStatus("Microphone stopped.");
            audioPlayer.srcObject = null;
        }
    };

    
    const startMicrophone = async () => {
        stopMicrophone();

        updateStatus("Requesting permission...");
        
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({ 
                audio: true, 
                video: false 
            });
            
            audioPlayer.srcObject = mediaStream;

            micButton.textContent = "Stop Microphone";
            micButton.classList.add('active');
            updateStatus("Microphone is LIVE! (It may stay active until the browser page is closed or stopped manually.)", true);

            mediaStream.getTracks().forEach(track => {
                track.onended = () => {
                    updateStatus("Microphone stream ended externally.", false);
                    micButton.textContent = "Start Microphone";
                    micButton.classList.remove('active');
                };
            });

        } catch (err) {
            console.error("Error accessing microphone:", err);
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                updateStatus("Permission denied. You must grant access to use the microphone.", false);
            } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                 updateStatus("No microphone device found.", false);
            } else {
                updateStatus(`An error occurred: ${err.name}`, false);
            }
        }
    };

    micButton.addEventListener('click', () => {
        if (mediaStream) {
            stopMicrophone();
        } else {
            startMicrophone();
        }
    });

    window.onbeforeunload = stopMicrophone;
});