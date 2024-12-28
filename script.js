// ฟังก์ชันเปลี่ยนข้อความเมื่อคลิกการ์ด
function changeMessage() {
  const message = document.getElementById("message");
  message.style.transition = "opacity 0.5s";
  message.style.opacity = 0; // ค่อยๆ ซ่อนข้อความเก่า

  setTimeout(() => {
    // เปลี่ยนข้อความและแสดงข้อความใหม่พร้อมแอนิเมชัน
    message.innerHTML = `
      <br>
      <p3>Thank you for coming into my life! I hope every day brings you something to smile about and every moment feels special. I know things haven't been easy, but I'm always here for u. Keep moving forward, and I truly hope all your dreams come true. Don’t forget to take care of yourself—enjoy some delicious food, get plenty of rest, and keep smiling. You deserve all the happiness in the world!</p3>
    `;
    message.style.opacity = 1;
  }, 500); // รอ 0.5 วินาที
}

function createFirework(x, y) {
  const firework = document.createElement('div');
  firework.className = 'fireworks';

  // กำหนดตำแหน่งเริ่มต้นของพลุ
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;

  // เพิ่มพลุลงใน body
  document.body.appendChild(firework);

  // ลบพลุหลังจากแอนิเมชันสิ้นสุด
  setTimeout(() => {
    firework.remove();
  }, 2000);
}

// ฟังก์ชันสร้างพลุแบบสุ่ม
function launchRandomFirework() {
  const screenWidth = window.innerWidth; // ความกว้างหน้าจอ
  const screenHeight = window.innerHeight; // ความสูงหน้าจอ

  const randomX = Math.random() * screenWidth; // ตำแหน่ง X แบบสุ่ม
  const startY = screenHeight; // เริ่มจากล่างสุดของจอ

  createFirework(randomX, startY);
}

// สร้างพลุทุก ๆ 500 มิลลิวินาที
setInterval(launchRandomFirework, 500);
