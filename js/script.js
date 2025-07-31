// === Подсчёт символов в textarea ===
const textarea = document.getElementById('message');
const counter = document.getElementById('charCounter');
const maxLength = 200;

if (textarea && counter) {
    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        counter.textContent = `${currentLength} / ${maxLength}`;

        counter.style.color = currentLength > maxLength ? 'red' : '#ccc';
    });
}

// === Анимация навыков при скролле ===
function animateSkills() {
    const skills = document.querySelectorAll('.skills-bar');

    skills.forEach((skill) => {
        const fill = skill.querySelector('.skills-fill');
        const level = skill.dataset.level;

        const rect = skill.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible && fill.style.height === '') {
            fill.style.height = level + '%';
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// === На будущее: бургер-меню (если появится)
// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.mobile-menu');

// if (burger && menu) {
//   burger.addEventListener('click', () => {
//     menu.classList.toggle('open');
//   });
// }

// === Лейбл поднимается при заполнении (любое поле) ===
const inputs = document.querySelectorAll('.contacts__input-wrapper input, .contacts__input-wrapper textarea');

inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        const wrapper = input.closest('.contacts__input-wrapper');
        if (input.value.trim() !== '') {
            wrapper.classList.add('filled');
        } else {
            wrapper.classList.remove('filled');
        }
    });

    // Для предварительно заполненных полей (например, автозаполнения)
    if (input.value.trim() !== '') {
        input.closest('.contacts__input-wrapper').classList.add('filled');
    }
});
