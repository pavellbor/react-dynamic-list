# Решение задания 2

Метод `preventDefault` отменяет действие события по умолчанию.

Пример: вызов у события отправки формы, чтобы избежать перезагрузки страницы.

```js
function onSubmitForm(e) {
  e.preventDefault()

  ...
}
```
