var followstart = 0;
const followneed = 4;

function followclick() {
    followstart++;
    console.log('clicked')
}

function followcheck() {
    if (followstart >= followneed) {
        window.open('https://agentgaming.gg/apply/r6')
    } else {
        document.getElementById('error').style.display = 'block';
    }
}