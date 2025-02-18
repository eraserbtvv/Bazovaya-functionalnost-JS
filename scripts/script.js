const main = document.querySelector("main");
const template = document.querySelector("template").content;
const submitButton = document.querySelector(".submit");

function renderButtons() {
  const likeButton = document.querySelectorAll('.unlike')
  const deleteButton = document.querySelectorAll('.delete')
  
  likeButton.forEach(eventLike => {
      eventLike.addEventListener("click", () => {
          eventLike.classList.toggle('like')
      })
  })
  
  deleteButton.forEach(eventDelete => {
      eventDelete.addEventListener("click", () => {
        const cardID = parseInt(eventDelete.parentNode.getAttribute("id"));//Мы это не проходили, но parseint преобразовывает строку в число, а floor не работает
        data = data.filter(item => item.id !== cardID);
        eventDelete.parentNode.remove();
        console.log(data)
      })
  })
}

function renderHTML() {
  main.innerHTML = "";

  data.forEach((item) => {
    const clone = template.cloneNode(true);

    clone.querySelector(".image").setAttribute("src", item.image);
    clone.querySelector(".title").textContent = item.title;
    clone.querySelector(".paragraph").textContent = item.paragraph;

    clone.querySelector(".ul").setAttribute("id", item.id);
    
    main.appendChild(clone);
  });
  renderButtons()
}

renderButtons()

let data = [
  {
    id: 3,
    image: "../images/img-1.jpeg",
    title: "Переход на возобновляемые источники энергии",
    paragraph:
      "Увеличение доли солнечной, ветровой и гидроэнергии в энергетическом балансе",
  },
  {
    id: 2,
    image: "../images/img-2.jpg",
    title: "Разработка новых технологий",
    paragraph:
      "Инвестирование в исследования и разработки технологий, которые могут помочь в улавливании и хранении углерода",
  },
  {
    id: 1,
    image: "../images/img-3.png",
    title: "Образовательные программы",
    paragraph:
      "Проведение кампаний по повышению осведомленности о важности снижения углеродного следа",
  },
];

submitButton.addEventListener("click", function () {
  let title = document.querySelector("#title").value;
  let paragraph = document.querySelector("#paragraph").value;
  let file = document.querySelector("#file").value;

  const newID = data.length > 0 ? data[0].id + 1 : 1;//Мог использовать data.lenght + 1, но тогда бы она работала криво. Так они встают ровно с помощью тернарного оператора
  const newObject = {
    id: newID,
    image: file,
    title: title,
    paragraph: paragraph,
  };
  data.unshift(newObject);
  console.log(data);

  renderHTML()
});

renderHTML();
