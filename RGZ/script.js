function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFullNews() {
    alert('Полный текст новости...');
}

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency-select').value;

    // Логика конвертации валюты
}


async function fetchCurrencyHistory() {
    try {
      const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
      const data = await response.json();
      // Обработка данных и построение диаграммы
      renderChart(data);
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  }
  
  function renderChart(data) {
    // Реализация столбчатой диаграммы с использованием Chart.js или аналогичной библиотеки
  }