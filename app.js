let data = [
    {
        id: 1,
        alt: "Tanya Sinclair",
        img: "https://github.com/Alucard2169/Testimonials-slider-FrontEnd-Mentor/blob/main/images/image-tanya.jpg?raw=true",
        test: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
        name: "Tanya Sinclair",
        occ: "UX Designer",
    },
    {
        id: 2,
        alt: "John Tarkpor",
        img: "https://github.com/Alucard2169/Testimonials-slider-FrontEnd-Mentor/blob/main/images/image-john.jpg?raw=true",
        test: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        name: "John Tarkpor",
        occ: "Junior Front-End Developer",
    }
]

const testimonial = document.querySelector('.info__testimonial');
const nameClient = document.querySelector('.info__author-name');
const occ = document.querySelector('.info__author-occupation');
const images = document.querySelector('.image');
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');

let a = 0;

function dataFill(i) {
    images.src = data[i].img;
    images.alt = data[i].alt;
    testimonial.textContent = data[i].test;
    nameClient.textContent = data[i].name;
    occ.textContent = data[i].occ;
}

dataFill(a);

forward.addEventListener('click', () => {
    if (a == (data.length -1)) return;

    a++;
    console.log(a);
    dataFill(a);
})

backward.addEventListener('click', () => {
    if(a == 0) return;
    
    a--;
    console.log(a);
    dataFill(a);
})