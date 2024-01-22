// Fonction pour configurer le modal
function setupModal(modalId, btnId, closeClassName) {
    // Récupérer le modal
    var modal = document.getElementById(modalId);

    // Récupérer le bouton qui ouvre le modal
    var btn = document.getElementById(btnId);

    // Récupérer l'élément <span> qui ferme le modal
    var span = document.getElementsByClassName(closeClassName)[0];

    // Quand l'utilisateur clique sur le bouton, ouvrir le modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // Quand l'utilisateur clique sur <span> (x), fermer le modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // Quand l'utilisateur clique n'importe où en dehors du modal, le fermer
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}


setupModal('w3myModal', 'w3myBtn', 'w3close');
