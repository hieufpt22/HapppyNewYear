document.addEventListener("DOMContentLoaded", function () {
    const balloonContainer = document.body;
  
    // Thêm sự kiện click để tạo bóng bay
    document.addEventListener("click", function (event) {
      createBalloon(event.clientX, event.clientY);
    });
  
    function createBalloon(x, y) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = `${x}px`;
      balloon.style.top = `${y}px`;
      balloon.style.backgroundImage = `url('./img/balloon.png')`; // Đường dẫn đến hình ảnh bóng bay
      balloonContainer.appendChild(balloon);
  
      // Sử dụng setTimeout để xóa bóng bay sau một khoảng thời gian
      setTimeout(() => {
        balloon.remove();
      }, 2000);
    }
  });
  