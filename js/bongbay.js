document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("balloonCanvas");
    const ctx = canvas.getContext("2d");
  
    function drawBalloon(x, y) {
      // Vẽ bóng bay
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fillStyle = "#FFD700"; // Màu vàng
      ctx.fill();
      ctx.closePath();
  
      // Vẽ dây bóng bay
      ctx.beginPath();
      ctx.moveTo(x, y + 20);
      ctx.lineTo(x, y + 50);
      ctx.strokeStyle = "#000"; // Màu đen
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    }
  
    // Xử lý sự kiện click để vẽ bóng bay ở vị trí click
    canvas.addEventListener("click", function (event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      drawBalloon(x, y);
    });
  });
  