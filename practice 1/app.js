let count = 0;

const span = document.getElementById('span');
const button = document.getElementById('button');

const handleClick= () => {

    const intervalFunction = ()=>{
        span.innerHTML = `${++count}`;
    };

    setInterval(intervalFunction ,1000);
};

button.addEventListener("click", handleClick);


