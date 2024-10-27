//Task 1
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

//Task 2
// second resolve ignores at all - only first resolve executes in the promise - so answer is 1

//Task 3
// Если честно, я не понял ответ на это задание, обязательно спрошу на следующем семинаре
