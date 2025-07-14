# Настройка Slack Webhook для Cloudflare Pages

## Шаг 1: Создание Slack App и Webhook

1. Перейдите в [Slack API](https://api.slack.com/apps)
2. Нажмите "Create New App" → "From scratch"
3. Введите название приложения (например, "ZENPULSAR Forms")
4. Выберите рабочую область (workspace)

## Шаг 2: Настройка Incoming Webhooks

1. В меню слева выберите "Incoming Webhooks"
2. Включите "Activate Incoming Webhooks"
3. Нажмите "Add New Webhook to Workspace"
4. Выберите канал, куда будут приходить сообщения
5. Скопируйте Webhook URL (начинается с `https://hooks.slack.com/services/...`)

## Шаг 3: Обновление кода

В файле `index.html` найдите строку:
```javascript
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK';
```

Замените на ваш реальный Webhook URL:
```javascript
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX';
```

Также обновите канал (если нужно):
```javascript
const SLACK_CHANNEL = '#general'; // или ваш канал
```

## Шаг 4: Деплой на Cloudflare Pages

1. Загрузите обновленный `index.html` на Cloudflare Pages
2. Или подключите GitHub репозиторий к Cloudflare Pages
3. Формы будут отправлять сообщения прямо в ваш Slack канал

## Преимущества этого подхода:

✅ **Простота** - никаких серверов, только статические файлы
✅ **Надежность** - работает на Cloudflare Pages без дополнительных настроек
✅ **Безопасность** - Webhook URL встроен в код, CORS не нужен
✅ **Быстрота** - мгновенная отправка сообщений в Slack

## Пример сообщения в Slack:

```
📋 New Demo Request - ZENPULSAR

Name: John Doe
Email: john@example.com
Company: ACME Corp
Message: Interested in trading signals

Submitted on 14.07.2025, 10:30:45
```

## Примечание:

Webhook URL безопасно встраивать в статический код, так как он может отправлять сообщения только в указанный канал и не дает доступ к чтению сообщений или другим функциям Slack.