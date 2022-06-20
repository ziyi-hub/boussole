
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

window.addEventListener('beforeinstallprompt', (event) => {
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'none';

    event.preventDefault();
    console.log('ok', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // 隐藏显示 A2HS 按钮的界面
        addBtn.style.display = 'none';

        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

const butInstall = document.querySelector('.add-button');

butInstall.addEventListener('click', () => {
    console.log('ok', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        alert('deferred prompt ne support pas')
        return;
    }
    promptEvent.prompt();
    promptEvent.userChoice.then((choiceResult) => {
        console.log('ok', 'userChoice', choiceResult);
        if (choiceResult.outcome === 'accepted') {
            console.log('installer');
            // your code here
        } else {
            console.log('annuler');
        }
        window.deferredPrompt = null;
    });
});


window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    window.deferredPrompt = null;
});
