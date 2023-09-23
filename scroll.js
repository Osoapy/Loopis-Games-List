var gameListContainer = document.querySelector('.game-list-container');
var gameList = document.querySelector('.game-list');

gameListContainer.addEventListener('mouseenter', function () {
    if (gameList.scrollHeight > gameListContainer.clientHeight) {
        gameListContainer.style.overflow = 'auto';
    }
});

gameListContainer.addEventListener('mouseleave', function () {
    gameListContainer.style.overflow = 'hidden';
});