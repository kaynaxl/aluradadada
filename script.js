document.getElementById('inicio-tab').addEventListener('click', function() {
    showTab('inicio');
});

document.getElementById('sobre-tab').addEventListener('click', function() {
    showTab('sobre');
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Efeito de neve
const snowContainer = document.getElementById('snow');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowContainer.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);