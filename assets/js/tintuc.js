document.addEventListener("DOMContentLoaded", function () {
    const historyTitle = document.getElementById("toggleContent"); // Tiêu đề cần bấm vào
  
    if (historyTitle) {
      // Lắng nghe sự kiện click vào tiêu đề
      historyTitle.addEventListener("click", function () {
        // Mở demo.html trong một tab mới
        window.open('Tintuc_demo_detail.html', '_blank'); // Mở file demo.html trong tab mới
      });
    }
  });
  