const showImage = document.getElementById("showImage");
const questionText = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const noImages = [
    "images/a.jpg",
    "images/b.jpg",
    "images/c.jpg",
    "images/sad.png",
    "images/cry.png"
]
const noTexts = [
    "你认真的吗？",
    "要不再想想",
    "不许选这个",
    "我会很伤心的",
    "不行！"
];

let name = ''
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
name = params.get('name') ? params.get('name') : ''
questionText.textContent += ` ${name}`;

let clickCount = 0;

noButton.addEventListener("click", function () {
    clickCount += 1;
    if (clickCount <= 5) {
        showImage.src = noImages[clickCount - 1]
        noButton.innerText = noTexts[clickCount - 1];
    }
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    showImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

});

yesButton.addEventListener("click", function () {
    document.body.innerHTML = `
        <div class="yes-wrapper">
            <p class="yes-text">汪~我就知道，我永远是你的粉丝哈哈哈</p>
            <img src="images/happy.png" alt="开心" class="yes-image">
        </div>
    `;
});