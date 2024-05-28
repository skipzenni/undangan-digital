
// Countdown Timer
const countdown = () => {
    const countDate = new Date("Jul 28, 2024 09:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = textDay;
    document.getElementById('hours').innerText = textHour;
    document.getElementById('minutes').innerText = textMinute;
    document.getElementById('seconds').innerText = textSecond;
};

setInterval(countdown, 1000);

// Comment Section
document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('comment-name').value;
    const message = document.getElementById('comment-message').value;
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.push({ name, message });
    localStorage.setItem('comments', JSON.stringify(comments));
    displayComments();

    document.getElementById('comment-form').reset();
});

function displayComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsContainer = document.getElementById('comments');

    commentsContainer.innerHTML = '';

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<strong>${comment.name}</strong><p>${comment.message}</p>`;
        commentsContainer.appendChild(commentElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayComments();
});

$(document).ready(function(){
    $('.gallery-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
});
