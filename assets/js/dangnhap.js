document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var em = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Kiểm tra tên đăng nhập và mật khẩu
    if (em === 'thaophuong@gmail.com' && password === '12345') {
        // Đăng nhập thành công
        errorMessage.textContent = ''; // Xóa thông báo lỗi (nếu có)
        alert('Xin chào quý khách');
    } 

    else {
        // Hiển thị thông báo lỗi và yêu cầu nhập lại
        errorMessage.textContent = 'Sai tài khoản hoặc mật khẩu. Yêu cầu nhập lại';
    }
    
});
