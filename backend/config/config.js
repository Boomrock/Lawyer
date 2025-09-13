require('dotenv').config();

const config = {
  // Server configuration
  server: {
    port: parseInt(process.env.PORT, 10) || 3006,
    host: process.env.HOST || 'localhost'
  },

  // WindexAI configuration
  windexai: {
    apiKey: process.env.WINDEXAI_API_KEY,
    model: process.env.WINDEXAI_MODEL || 'gpt-4o-mini',
    maxTokens: parseInt(process.env.WINDEXAI_MAX_TOKENS) || 4000,
    temperature: parseFloat(process.env.WINDEXAI_TEMPERATURE) || 0.7
  },

  // Google TTS configuration
  googleTTS: {
    credentialsPath: process.env.GOOGLE_APPLICATION_CREDENTIALS || './google_credentials.json',
    defaultVoice: process.env.GOOGLE_TTS_VOICE || 'ru-RU-Chirp3-HD-Orus',
    defaultLanguage: process.env.GOOGLE_TTS_LANGUAGE || 'ru-RU',
    audioEncoding: process.env.GOOGLE_TTS_ENCODING || 'MP3',
    sampleRateHertz: parseInt(process.env.GOOGLE_TTS_SAMPLE_RATE) || 24000
  },

  // Web search configuration
  webSearch: {
    enabled: process.env.WEB_SEARCH_ENABLED === 'true',
    timeout: parseInt(process.env.WEB_SEARCH_TIMEOUT) || 10000
  },

  // File upload configuration
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 * 1024, // 5GB
    allowedTypes: ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'text/plain'],
    uploadDir: process.env.UPLOAD_DIR || 'uploads',
    tempDir: process.env.TEMP_DIR || 'temp'
  },

  // CORS configuration
  cors: {
    origins: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3004',
      'http://localhost:3006',
      'http://localhost:3007',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
      'http://127.0.0.1:3002',
      'http://127.0.0.1:3004',
      'http://127.0.0.1:3006',
      'http://127.0.0.1:3007',
      'file://',
      'null',
      'http://localhost',
      'http://127.0.0.1'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Origin', 'Accept']
  },

  // Document generation configuration
  documents: {
    defaultLanguage: 'ru',
    supportedTypes: ['договор', 'жалоба', 'заявление', 'contract', 'complaint', 'application']
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    enableConsole: process.env.LOG_CONSOLE !== 'false',
    enableFile: process.env.LOG_FILE === 'true'
  },


};

module.exports = config; 