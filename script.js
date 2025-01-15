const img = document.getElementById('qrcode');
const ssid = document.querySelector('.ssid');
const password = document.querySelector('.password');
const button = document.querySelector('button');

function update() {
    const wifi = `WIFI:T:WPA;S:${ssid.value};P:${password.value};;`;
    if (ssid.value && password.value) {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${encodeURIComponent(wifi)}`;
    } else {
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=empty';
    }
}

function downloadQR() {
    const link = document.createElement('a');
    link.download = 'wifi_qrcode.png';
    link.href = img.src;
    link.click();
}

ssid.addEventListener('input', update);
password.addEventListener('input', update);
button.addEventListener('click', downloadQR);