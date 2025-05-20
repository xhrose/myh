// 新增平滑滚动函数
function smoothScroll() {
    const windowHeight = window.innerHeight;
    const currentPosition = window.pageYOffset;
    const targetPosition = currentPosition + windowHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // 到达页面底部时回到顶部
    if (targetPosition >= documentHeight - windowHeight) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 添加键盘向下箭头支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.keyCode === 40) {
        smoothScroll();
    }
});