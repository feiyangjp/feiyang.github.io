// main.js - 页面交互与动画 + 表单校验
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = 1;
  }, 100);
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  const ctaBtn = document.querySelector(".cta-button");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "contact.html";
    });
  }
  const form = document.querySelector("form.contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.querySelector("input[name='name']");
      const email = form.querySelector("input[name='email']");
      const message = form.querySelector("textarea[name='message']");
      if (!name.value || !email.value || !message.value) {
        alert("すべての項目を入力してください。");
        e.preventDefault();
      }
    });
  }
});

