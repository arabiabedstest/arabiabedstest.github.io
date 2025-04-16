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

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            event.target.reset(); // Formu temizle
        } else {
            alert(result.error);
        }
    } catch (error) {
        console.error('Bir hata oluştu:', error);
        alert('Form gönderilirken bir hata oluştu.');
    }
}
