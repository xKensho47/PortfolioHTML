async function loadHeader() {
    try {
        const response = await fetch('/templates/header.html');
        if (!response.ok) throw new Error('Error al cargar el header');
        const header = await response.text();
        document.getElementById('header-template').innerHTML = header;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function loadFooter() {
    try {
        const response = await fetch('/templates/footer.html');
        if (!response.ok) throw new Error('Error al cargar el footer');
        const footer = await response.text();
        document.getElementById('footer-template').innerHTML = footer;
    } catch (error) {
        console.error('Error:', error);
    }
}
