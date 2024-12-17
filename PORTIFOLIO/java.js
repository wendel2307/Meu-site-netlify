// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar animações de entrada ao rolar
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.about, .projects, .contact').forEach(section => {
        observer.observe(section);
    });
});
