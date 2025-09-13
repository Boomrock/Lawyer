# 🤖 AI Lawyer - Интеллектуальная Юридическая Система

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![WindexAI](https://img.shields.io/badge/WindexAI-GPT--4o--mini-purple.svg)](https://windexai.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Полнофункциональная AI-система для автоматизации юридических консультаций, анализа документов и генерации правовых материалов с использованием современных технологий ИИ.

## 📋 Быстрый старт

### 🚀 Запуск проекта
```bash
# 1. Клонирование
git clone <repository-url>
cd layer_3

# 2. Установка зависимостей
npm install
cd backend && npm install && cd ..

# 3. Настройка переменных окружения
cp env.example .env
# Отредактируйте .env файл с вашими API ключами

# 4. Запуск
cd backend && npm run dev &
npm start
```

### 🌐 Доступ к приложению
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3007
- **Админ-панель**: войдите с `admin@mail.ru` / `admin123`

## 🚀 Ключевые возможности

### 💬 Интеллектуальный чат-бот
- **AI-Юрист "Галина"** - специализированная модель для юридических консультаций
- **Голосовые функции** - TTS и STT интеграция
- **Генерация документов** - автоматическое создание DOCX файлов
- **Анализ документов** - OCR обработка и ИИ-анализ рисков

### 📊 Администрирование
- **Статистика WindexAI** - мониторинг расходов и использования
- **Управление пользователями** - CRUD операции с аккаунтами
- **Системные метрики** - производительность и здоровье системы

## 🛠️ Архитектура

### Frontend (React 18.2.0)
- **React Router** - навигация
- **CSS Modules** - модульная стилизация
- **Axios** - HTTP клиент
- **Web Audio API** - голосовые функции

### Backend (Node.js + Express)
- **WindexAI GPT-4** - основной ИИ движок
- **WindexAI Whisper** - транскрибация речи
- **Google Cloud TTS** - синтез речи
- **Tesseract OCR** - распознавание текста
- **DOCX** - генерация документов

## 📋 Системные требования

- **Node.js**: 18.0.0+
- **Python**: 3.8+ (для OCR)
- **WindexAI API ключ** с достаточным балансом
- **RAM**: 4GB минимум, 8GB рекомендуется
- **Диск**: 2GB свободного места

## 🔧 Конфигурация

### Основные переменные окружения (.env)
```env
# Backend
PORT=3007
NODE_ENV=development

# WindexAI API
WINDEXAI_API_KEY=your_api_key_here
WINDEXAI_MODEL=gpt-4o-mini

# Frontend
REACT_APP_API_URL=http://localhost:3007
```

## 📁 Структура проекта

```
layer_3/
├── backend/                 # Node.js сервер
│   ├── routes/             # API маршруты
│   ├── controllers/        # Бизнес-логика
│   ├── services/          # Сервисы (WindexAI, OCR, etc.)
│   ├── config/            # Конфигурация
│   └── utils/             # Утилиты
├── src/                    # React приложение
│   ├── components/        # UI компоненты
│   ├── pages/            # Страницы приложения
│   ├── services/         # API клиенты
│   ├── hooks/            # React хуки
│   └── utils/            # Утилиты
├── public/                # Статические файлы
└── uploads/               # Загруженные файлы
```

## 🔌 API Endpoints

| Метод | Endpoint | Описание |
|-------|----------|----------|
| POST | `/api/chat` | Отправка сообщения AI |
| POST | `/api/chat/transcribe` | Транскрибация аудио |
| POST | `/api/documents/upload` | Загрузка документа |
| POST | `/api/documents/ocr` | OCR обработка |
| GET | `/api/admin/users` | Список пользователей |
| GET | `/api/admin/windexai-stats` | Статистика WindexAI |

## 🐛 Устранение неполадок

### "Cannot access uninitialized variable"
```bash
# Исправление React хуков
# 1. Переместите функции выше useEffect
# 2. Используйте useCallback с правильными зависимостями
# 3. Проверьте порядок объявления переменных
```

### "WindexAI API Error"
```bash
# Проверка:
# 1. WINDEXAI_API_KEY в .env файле
# 2. Баланс на WindexAI аккаунте
# 3. Правильность модели (gpt-4o-mini)
```

### "Port already in use"
```bash
# Освобождение порта:
lsof -ti:3007 | xargs kill -9
# Или используйте другой порт:
PORT=3008 npm run dev
```

## 📚 Документация

📖 **Подробная документация**: [README_DETAILED.md](./README_DETAILED.md)
🛠️ **Руководство по настройке**: [SETUP.md](./SETUP.md)
⚙️ **Пример конфигурации**: [env.example](./env.example)

**Документация включает:**
- Полное API описание с примерами
- Пошаговое руководство по настройке
- Архитектурные решения и паттерны
- Безопасность и лучшие практики
- Устранение неполадок
- Разработка и расширение

## 🤝 Разработка

### Добавление новой функции
1. **Backend**: Создайте маршрут в `routes/`, контроллер в `controllers/`
2. **Frontend**: Добавьте компонент в `src/components/`
3. **API**: Создайте сервис в `src/services/`

### Скрипты
```bash
npm start          # Запуск development сервера
npm run build      # Сборка для production
npm test          # Запуск тестов
npm run lint      # Проверка ESLint
```

## 📄 Лицензия

MIT License - см. [LICENSE](LICENSE) файл для деталей.

## 🤝 Вклад в проект

1. Fork репозиторий
2. Создайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit изменения (`git commit -m 'Add some AmazingFeature'`)
4. Push в branch (`git push origin feature/AmazingFeature`)
5. Создайте Pull Request

## 📞 Контакты

- **Email**: developer@ailawyer.com
- **GitHub Issues**: Для багов и предложений
- **Документация**: [README_DETAILED.md](./README_DETAILED.md)

---

⭐ **Если проект оказался полезным, поставьте звезду!**

🚀 **AI Lawyer - Ваш персональный ИИ-юрист!** 🤖⚖️

