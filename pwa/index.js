/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('ok', 'beforeinstallprompt', event);
    // 这个变量后面要用
    window.deferredPrompt = event;
    // 你用来显示 添加到PWA 的 按钮可以显示出来了

});

const butInstall = document.querySelector('.add-button');

butInstall.addEventListener('click', () => {
    console.log('ok', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // deferred prompt 不可用
        alert('deferred prompt 不可用')
        return;
    }
    promptEvent.prompt();
    promptEvent.userChoice.then((choiceResult) => {
        console.log('ok', 'userChoice', choiceResult);
        if (choiceResult.outcome === 'accepted') {
            console.log('用户 同意了');
            // 成功之后的业务回掉操作
            // your code here
        } else {
            console.log('用户 没同意');
        }
        // 回收 deferredPrompt 变量, prompt() 只能被调用一次
        window.deferredPrompt = null;
    });
});


window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // 回收 deferredPrompt 变量
    window.deferredPrompt = null;
});
