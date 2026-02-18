async function list() {
    const key = "AIzaSyACEG7a6TmlEPxpUbOV0-GF8LflcoDCIDI";
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e);
    }
}
list();
