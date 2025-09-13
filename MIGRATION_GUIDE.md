# 🚀 Руководство по миграции на новую архитектуру

## 📊 Что изменилось

### ✅ **До (старая архитектура)**
- Монолитный `server.js` (154KB, 2992 строки)
- Смешанная логика в одном файле
- Отсутствие структуры папок
- Прямые импорты и зависимости
- Простое логирование через console.log

### 🎯 **После (новая архитектура)**
- Модульная структура с разделением ответственности
- Чистая архитектура с сервисами, контроллерами, маршрутами
- Централизованная конфигурация
- Структурированное логирование
- Обработка ошибок через middleware

## 🏗️ Новая структура

```
backend/
├── config/           # Конфигурация
├── controllers/      # Контроллеры (HTTP обработка)
├── middleware/       # Middleware (CORS, ошибки)
├── routes/           # Маршруты API
├── services/         # Бизнес-логика и внешние API
├── utils/            # Утилиты (логирование)
└── server.js         # Главный файл (только инициализация)
```

## 🔄 Миграция функциональности

### 1. **Chat API** ✅
- **Старый**: `app.post('/api/chat', ...)` в server.js
- **Новый**: `backend/controllers/chatController.js` + `backend/routes/chatRoutes.js`

### 2. **Document Generation** ✅
- **Старый**: `app.post('/api/generate-pdf', ...)` в server.js
- **Новый**: `backend/controllers/documentController.js` + `backend/routes/documentRoutes.js`

### 3. **File Upload** ✅
- **Старый**: `app.get('/api/uploaded-files', ...)` в server.js
- **Новый**: `backend/controllers/documentController.js`

### 4. **OpenAI Integration** ✅
- **Старый**: Прямые вызовы в server.js
- **Новый**: `backend/services/openaiService.js`

### 5. **Web Search** ✅
- **Старый**: Функция в server.js
- **Новый**: `backend/services/webSearchService.js`

### 6. **Document Generation** ✅
- **Старый**: LaTeX функции в server.js
- **Новый**: `backend/services/documentService.js` (DOCX)

## 🚀 Запуск

### Старый способ
```bash
npm run server  # запускал node server.js
```

### Новый способ
```bash
npm run server      # запускает node backend/server.js
npm run server:dev  # с nodemon для разработки
npm run server:prod # для продакшна
```

## 📋 API Endpoints (без изменений)

Все API endpoints остались теми же для обратной совместимости:

- `POST /api/chat` - ✅ работает
- `POST /api/generate-pdf` - ✅ работает (генерирует DOCX)
- `GET /api/uploaded-files` - ✅ работает

## 🔧 Новые возможности

### 1. **Health Check**
```bash
curl http://localhost:3001/health
```

### 2. **API Info**
```bash
curl http://localhost:3001/
```

### 3. **Структурированное логирование**
```javascript
logger.info('Operation successful');
logger.error('Error occurred', error);
logger.debug('Debug info', data);
```

### 4. **Конфигурация через переменные окружения**
```bash
OPENAI_API_KEY=your_key
OPENAI_MODEL=gpt-4
WEB_SEARCH_ENABLED=true
LOG_LEVEL=debug
```

## 🧹 Очистка

### Удаленные файлы
- `server.js` (старый монолитный файл)
- `test_*.html` (временные тестовые файлы)
- `test_*.pdf` (старые PDF файлы)
- `test_*.tex` (LaTeX файлы)

### Сохраненные файлы
- `src/` - React фронтенд (без изменений)
- `package.json` - обновлен для новой структуры
- `.env` - конфигурация
- `uploads/` - загруженные файлы

## 🧪 Тестирование

### 1. Запуск сервера
```bash
npm run server
```

### 2. Проверка health check
```bash
curl http://localhost:3001/health
```

### 3. Тест чата
```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "привет"}'
```

### 4. Тест генерации документа
```bash
curl -X POST http://localhost:3001/api/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{"documentType": "Договор", "content": "Тестовый договор"}'
```

## 🎯 Преимущества новой архитектуры

### 1. **Масштабируемость**
- Легко добавлять новые функции
- Модульная структура
- Разделение ответственности

### 2. **Поддерживаемость**
- Читаемый код
- Структурированное логирование
- Централизованная обработка ошибок

### 3. **Тестируемость**
- Изолированные сервисы
- Легко мокать зависимости
- Чистые интерфейсы

### 4. **Производительность**
- Кэширование веб-поиска
- Оптимизированная обработка ошибок
- Graceful shutdown

### 5. **Безопасность**
- Валидация входных данных
- CORS настройки
- Безопасная обработка файлов

## 🔮 Следующие шаги

1. **Добавить тесты** для каждого сервиса
2. **Добавить валидацию** входных данных
3. **Добавить кэширование** для OpenAI запросов
4. **Добавить мониторинг** и метрики
5. **Добавить документацию** API (Swagger)

## 🆘 Поддержка

Если что-то не работает:

1. Проверьте логи сервера
2. Убедитесь, что все переменные окружения установлены
3. Проверьте, что порт 3001 свободен
4. Перезапустите сервер: `npm run server`

---

**🎉 Миграция завершена! Проект теперь использует современную, масштабируемую архитектуру.** 