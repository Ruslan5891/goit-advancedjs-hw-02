# Advanced JavaScript — Homework 02

Два завдання на роботу з промісами, бібліотеками та DOM.

## Завдання

- **Завдання 1. Таймер зворотного відліку** — `src/1-timer.html`, `src/js/1-timer.js`.
  Вибір дати через [flatpickr](https://flatpickr.js.org/), відлік часу до неї та
  повідомлення через [iziToast](https://izitoast.marcelodolza.com/).
- **Завдання 2. Генератор промісів** — `src/2-snackbar.html`, `src/js/2-snackbar.js`.
  Форма створює проміс, який виконується або відхиляється із заданою затримкою,
  а результат показується тостом iziToast.

Головна сторінка `src/index.html` містить навігацію між завданнями.

## Запуск

1. Встанови залежності: `npm install`
2. Запусти режим розробки: `npm run dev`
3. Відкрий [http://localhost:5173](http://localhost:5173)

## Скрипти

- `npm run dev` — режим розробки
- `npm run build` — продакшн-збірка у папку `dist`
- `npm run preview` — перегляд продакшн-збірки

## Деплой

Збірка автоматично деплоїться на GitHub Pages у гілку `gh-pages` при оновленні
`main`. У `package.json` для команди `build` потрібно вказати назву репозиторію у
прапорі `--base=/<REPO>/`.
