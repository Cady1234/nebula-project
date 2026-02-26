document.getElementById('nebulaForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع تحديث الصفحة

    // جمع البيانات
    const name = document.getElementById('userName').value;
    const service = document.getElementById('serviceType').options[document.getElementById('serviceType').selectedIndex].text;

    // محاكاة إرسال البيانات (هنا يمكنك مستقبلاً ربطها بقاعدة بيانات)
    const successBox = document.getElementById('successMsg');
    
    successBox.style.display = 'block';
    successBox.innerHTML = مرحباً <strong>${name}</strong>، تم استلام طلبك لخدمة (<strong>${service}</strong>). فريقنا سيتواصل معك قريباً.;

    // مسح الحقول بعد الإرسال
    this.reset();
    
    // إخفاء الرسالة بعد 5 ثوانٍ
    setTimeout(() => { successBox.style.display = 'none'; }, 5000);
});

// تأثير بسيط: تغيير لون الهيدر عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#0f172a';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.padding = '15px 0';
    }
});