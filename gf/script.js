const cardInner = document.querySelector('.card-inner');
cardInner.addEventListener('click', function(e) {
    if (e.target.id !== 'btn-celebrate') {
        this.classList.toggle('flipped');
    }
});
// ส่วนควบคุมปุ่มกดรับพร
const btn = document.querySelector('#btn-celebrate');

btn.addEventListener('click', (e) => {
    e.stopPropagation(); // กันไม่ให้การ์ดพลิกกลับตอนกดปุ่ม

    // 1. ยิงพลุฉลอง (ใช้โค้ดเดิมที่คุณมี)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffb3c1', '#ffffff']
    });

    // 2. เปลี่ยนข้อความปุ่มนิดนึง
    btn.innerText = "กำลังไปรับพร... 🚀";

    // 3. หน่วงเวลา 1.5 วินาที แล้ววาร์ปไปหน้าอื่น
    setTimeout(() => {
        window.location.href = "blessing.html"; // ใส่ชื่อไฟล์หน้าใหม่ตรงนี้
    }, 1500); 
});