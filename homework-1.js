const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ticketPrice(category) {
  switch (category) {
    case '1':
      return 300;
    case '2':
      return 500;
    case '3':
      return 900;
    default:
      return 0;
  }
}

function maxTickets(budget, price) {
  let count = 0;
  let currentBudget = budget;
  while (currentBudget >= price) {
    currentBudget -= price;
    count++;
  }
  return count;
}

function printTicketResult(category, budget) {
  const price = ticketPrice(category);
  if (price === 0) {
    console.log('неизвестная категория');
    return;
  }
  const count = maxTickets(budget, price);
  console.log(`Категория ${category}, билет ${price} руб., бюджет ${budget} руб.: можно купить ${count} шт.`);
}

function deliveryPrice(distance, total) {
  if (total >= 3000 || distance <= 3) {
    return 0;
  }
  if (distance <= 10) {
    return 200;
  }
  return 200 + (distance - 10) * 25;
}

function printDelivery(distance, total) {
  const delivery = deliveryPrice(distance, total);
  console.log(`Расстояние ${distance} км, заказ ${total} руб.: доставка ${delivery} руб.`);
}

function printSteps(height) {
  let builtCount = 0;
  for (let i = 1; i <= height; i++) {
    if (i === 4) {
      continue;
    }
    if (i > 10) {
      console.log('Дальше лестница не построена');
      break;
    }
    console.log(`Ступень ${i}`);
    builtCount++;
  }
  console.log(`Всего построено: ${builtCount}`);
}

console.log('Выберите задачу:\n1 — билетная касса\n2 — доставка заказа\n3 — лестница');
rl.question('Ваш выбор: ', (choice) => {
  if (choice === '1') {
    rl.question('Категория билета: ', (category) => {
      rl.question('Бюджет: ', (budget) => {
        printTicketResult(category, Number(budget));
        rl.close();
      });
    });
  } else if (choice === '2') {
    rl.question('Расстояние: ', (distance) => {
      rl.question('Сумма заказа: ', (total) => {
        printDelivery(Number(distance), Number(total));
        rl.close();
      });
    });
  } else if (choice === '3') {
    rl.question('Высота лестницы: ', (height) => {
      printSteps(Number(height));
      rl.close();
    });
  } else {
    console.log('такой задачи нет');
    rl.close();
  }
});
