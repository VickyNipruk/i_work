const toggle = document.getElementById('toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

window.onload = () => {
    const candles = document.querySelectorAll(".candle"); 
  
    candles.forEach(candle => {
      gsap.set(candle, { 
        x: Math.random() * window.innerWidth,
        y: window.innerHeight, 
        opacity: 1
      });
  
      // Створюємо анімацію для свічки
      gsap.to(candle, {
        x: "random(-1200, 1200)",
        y: "random(-1200, 1200)", 
        opacity: 0, 
        repeat: -1, 
        duration: 6 + Math.random() * 4,
        ease: "power1.inOut", 
        delay: Math.random() * 3, 
        yoyo: true, 
        stagger: Math.random() * 2, 
      });
    });
  };


  const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const scores = {
    gryffindor: 0,
    ravenclaw: 0,
    hufflepuff: 0,
    slytherin: 0
};

const questions = [
    {
        text: "Що для тебе важливіше?",
        options: {
            gryffindor: "Сміливість і доблесть",
            ravenclaw: "Мудрість і знання",
            hufflepuff: "Лояльність і працьовитість",
            slytherin: "Амбіції та хитрість"
        }
    },
    {
        text: "Що ти обереш у вільний час?",
        options: {
            gryffindor: "Пригоди на природі",
            ravenclaw: "Читання книг",
            hufflepuff: "Допомогу друзям",
            slytherin: "Розробку планів для успіху"
        }
    },
    {
        text: "Який твій улюблений предмет у школі?",
        options: {
            gryffindor: "Фізкультура або історія",
            ravenclaw: "Математика або література",
            hufflepuff: "Трудове навчання або біологія",
            slytherin: "Економіка або право"
        }
    }
];

let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        quiz.innerHTML = `<p><strong>${currentQuestion + 1}. ${question.text}</strong></p>`;
        for (const [key, value] of Object.entries(question.options)) {
            const button = document.createElement('button');
            button.textContent = value;
            button.dataset.value = key;
            button.onclick = () => {
                scores[key]++;
                currentQuestion++;
                loadQuestion();
            };
            quiz.appendChild(button);
        }
    } else {
        showResult();
    }
}

function showResult() {
    const maxScore = Math.max(...Object.values(scores));
    const topHouses = Object.entries(scores)
        .filter(([key, value]) => value === maxScore)
        .map(([key]) => key);

    let selectedHouse;
    if (topHouses.length === 1) {
        selectedHouse = topHouses[0];
    } else {
        // Пріоритетний вибір: Gryffindor > Ravenclaw > Hufflepuff > Slytherin
        const priority = ['gryffindor', 'ravenclaw', 'hufflepuff', 'slytherin'];
        selectedHouse = topHouses.sort((a, b) => priority.indexOf(a) - priority.indexOf(b))[0];
    }

    const houseNames = {
        gryffindor: "Грифіндор",
        ravenclaw: "Рейвенклов",
        hufflepuff: "Гафелпаф",
        slytherin: "Слизерин"
    };

    quiz.style.display = 'none';
    result.textContent = `Твій факультет: ${houseNames[selectedHouse]}!`;
}

loadQuestion();


const quotes = document.querySelectorAll('.quote');

quotes.forEach(quote => {
    quote.addEventListener('mouseover', () => {
        quote.style.color = 'lightblue';
    });
    
    quote.addEventListener('mouseout', () => {
        quote.style.color = 'gold';
    });
});
