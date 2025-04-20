const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => {
            b.classList.remove('active', 'text-[#3c3b7f]', 'border-[#ff5375]');
            b.classList.add('border-transparent');
        });
        
        // Add active class to current button
        btn.classList.add('active', 'text-[#3c3b7f]', 'border-[#ff5375]');
        btn.classList.remove('border-transparent');
        
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('active');
        });
        
        // Show corresponding content
        const tabId = btn.getAttribute('data-tab');
        const activeTab = document.getElementById(`${tabId}-tab`);
        activeTab.classList.remove('hidden');
        activeTab.classList.add('active');
    });
});

// Mobile menu toggle
document.querySelector('button.md\\:hidden').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Mobile menu links - close menu after click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});
