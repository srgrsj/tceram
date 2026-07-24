# Tceram

Сайт компании «Нанокерамика».

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Готовый статический сайт создаётся в каталоге `out`.

## GitHub Pages

В репозитории настроен workflow `.github/workflows/pages.yml`. После включения
GitHub Pages с источником **GitHub Actions** публикация будет запускаться при
каждом push в ветку `main`.

Workflow автоматически учитывает имя репозитория в адресах страниц и ресурсов.
