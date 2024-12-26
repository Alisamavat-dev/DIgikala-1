const correctUsername = "Ali samavat"; // نام کاربری صحیح
const correctPassword = "s1"; // رمز عبور صحیح

const form = document.getElementById("loginForm") as HTMLFormElement;
const errorParagraph = document.getElementById("error") as HTMLParagraphElement;

form.addEventListener("submit", (event) => {
    event.preventDefault(); // جلوگیری از ارسال فرم

    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === correctUsername && password === correctPassword) {
        // ورود موفق
        window.location.href = "Admin.html"; // انتقال به صفحه کاربری
    } else {
        // ورود ناموفق
        errorParagraph.textContent = "نام کاربری یا رمز عبور اشتباه است.";
    }
});

document.addEventListener('keydown', (event) => {
    // غیرفعال کردن F12
    if (event.key === 'F12') {
        event.preventDefault();
    }

    // غیرفعال کردن Ctrl+Shift+I
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
});

// فایل TypeScript شما

// تابعی برای جلوگیری از کلیک راست
function disableRightClick(event: MouseEvent): void {
    event.preventDefault(); // جلوگیری از نمایش منوی زمینه
}

// افزودن رویداد به سند
document.addEventListener('contextmenu', disableRightClick);
