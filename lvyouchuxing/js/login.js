document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // 这里可以添加登录验证逻辑
        
        // 登录成功后跳转到首页
        window.location.href = 'index.html';
    });
});
