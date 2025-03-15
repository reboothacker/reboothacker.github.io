from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

# Настройка опций Chrome
chrome_options = Options()
chrome_options.add_argument("--headless")  # Запуск без графического интерфейса

# Инициализация драйвера
driver = webdriver.Chrome(options=chrome_options)

# Открытие страницы
driver.get("https://app.deel.com/login")

# Ожидание загрузки контента (может потребоваться настройка)
time.sleep(5)

# Получение исходного кода страницы после выполнения JavaScript
page_source = driver.page_source

# Сохранение в файл
with open("deel_login.html", "w", encoding="utf-8") as f:
    f.write(page_source)

# Закрытие драйвера
driver.quit()