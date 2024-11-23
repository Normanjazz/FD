document.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date("2024-11-23T23:59:59"); // Задайте вашу целевую дату
    const timerElement = document.getElementById("timer");
  
    function updateTimer() {
      const now = new Date();
      const diff = targetDate - now;
  
      if (diff <= 0) {
        timerElement.textContent = "Time's up!";
        clearInterval(intervalId);
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      timerElement.textContent = `${days}дней ${hours}часов ${minutes}мин. ${seconds}сек.`;
    }
  
    const intervalId = setInterval(updateTimer, 1000);
    updateTimer(); // Первоначальное обновление таймера
  });
