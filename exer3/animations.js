document.addEventListener("DOMContentLoaded", function() {
    const moreInfo = document.getElementById('more-info');
    const infoButton = document.getElementById('info-button');

    infoButton.addEventListener('click', function() {
        if (moreInfo.style.display === "none") {
            moreInfo.style.display = "block";
            infoButton.textContent = "Show Less";
        } else {
            moreInfo.style.display = "none";
            infoButton.textContent = "Show More";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector('.profile-img');
    const container = document.querySelector('.container');

    profileImg.addEventListener('mouseover', function() {
        container.style.backgroundColor = '#f0f0f0';
    });

    profileImg.addEventListener('mouseout', function() {
        container.style.backgroundColor = '';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector('.bio-text');
    const container = document.querySelector('.container');

    profileImg.addEventListener('mouseover', function() {
        container.style.backgroundColor = '#f0f0f0';
    });

    profileImg.addEventListener('mouseout', function() {
        container.style.backgroundColor = '';
    });
});