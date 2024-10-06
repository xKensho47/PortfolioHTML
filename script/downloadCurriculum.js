document.getElementById('descargaCurriculum').addEventListener('click', function () {
    const confirmacion = confirm('¿Estás seguro de que deseas descargar el archivo?');
    
    if (confirmacion) {
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = '../files/CVEDT20240929.pdf';
        enlaceDescarga.download = 'CV Tripodi, E. Damián.pdf';
        enlaceDescarga.click();
    }
});
