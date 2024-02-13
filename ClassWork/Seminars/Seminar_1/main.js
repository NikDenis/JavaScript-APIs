// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.

// function windowSize() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   console.log(`Высота окна: ${height}, Ширина окна: ${width}`);
// }

// window.addEventListener('resize', windowSize);
// windowSize();


// 2. Подтверждение закрытия страницы:
// ○ Создайте всплывающее окно или диалоговое окно,
//   которое появляется при попытке закрыть вкладку
// браузера и спрашивает пользователя, уверен ли он в
// своем решении закрыть страницу.

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
//   const message = 'Вы уверены, что хотите покинуть эту страницу?';
//   e.returnValue = message;

//   return message;
// });

// 3. Управление историей переходов:
// ○ Используйте объект history для управления историей
// переходов на веб - странице.Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.


// const forwardBtn = document.querySelector('.forward');
// const backBtn = document.querySelector('.back');

// forwardBtn.addEventListener('click', () => {
//   console.log(history.length);
//   window.history.forward();
// })
// backBtn.addEventListener('click', () => {
//   window.history.back();
// })

//------------------------------------------------------------------------------



// Вы должны создать веб-страницу, которая позволяет пользователю динамически
// управлять элементами на странице. Ниже приведены основные требования и
// функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
// "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый
// квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент
// должен иметь класс .box и содержать текст, указывающий порядковый номер
// элемента (1, 2, 3 и так далее).
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
// элемент, если таковой имеется.
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
// добавленного элемента и добавляется на страницу.
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
// любом количестве

// const addBtn = document.querySelector('.add');
// const removeBtn = document.querySelector('.remove');
// const cloneBtn = document.querySelector('.clone');
// const container = document.querySelector('.container');

// let counter = 3;

// addBtn.addEventListener('click', () => {
//   counter++;
//   const box = document.createElement('div');
//   box.classList.add('box');
//   box.textContent = counter;
//   container.appendChild(box);
// });

// removeBtn.addEventListener('click', () => {
//   counter--;
//   const lastChild = container.lastChild;
//   container.removeChild(lastChild);
// });

// cloneBtn.addEventListener('click', () => {
//   const lastChild = container.lastChild;
//   console.log(lastChild);
//   const clonedElement = lastChild.cloneNode(true);
//   container.appendChild(clonedElement);
// });
//------------------------------------------------------------------------------
// 1. Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и
// текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// 2. Используйте Bootstrap, чтобы стилизовать элементы:
// a. Заголовок статьи (<h2>)
// b. Текст статьи (<p>)
// c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
// 3. Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте
// JSON-данные для определения заголовков и текстов статей.
// 4. Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна
// появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// 5. Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая
// статья должна быть удалена из списка.
// 6. Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать"
// пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте
// всплывающее окно или prompt для ввода новых данных.
// 7. Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное
// хранилище браузера, чтобы они сохранялись после перезагрузки страницы.
const add = document.querySelector('.add');
const list = document.querySelector('.list');



const articlesData = [
  {
    title: 'Заголовок статьи 1',
    content: 'Содержание статьи 1'
  },
  {
    title: 'Заголовок статьи 2',
    content: 'Содержание статьи 2'
  }
];

// articlesData.forEach(item => {
//   console.log(item.content);
//   const elem =
//     `<li>
//       <h2>${item.title}</h2>
//       <p>${item.content}</p>
//       <button>удалить статью</button>
//       <button>редактировать статью</button>
//     </li>`

//   list.insertAdjacentHTML('beforeend', elem);
// });


add.addEventListener('click', () => {
  const data = {
    title: prompt('Введите заголовок'),
    content: prompt('Введите содержание')
  }
  articlesData.push(data);
  console.log(articlesData);
  list.innerHTML = '';
  addArticle();
});

function addArticle() {
  articlesData.forEach(item => {
    console.log(item.content);
    const elem =
      `<li>
        <h2>${item.title}</h2>
        <p>${item.content}</p>
        <button>удалить статью</button>
        <button>редактировать статью</button>
      </li>`

    list.insertAdjacentHTML('beforeend', elem);
  });
}

addArticle();