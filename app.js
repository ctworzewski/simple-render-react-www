const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = 'big';
const handleClick = () => {
    alert('kliknął');
}

const newTextFooter = 'Testowanie stopki';
const handleFooter = () => {
    alert(newTextFooter)
}
const footerTxt = 'Copyright 2018';

const main = (
    <div>
        <h1 onClick={handleClick} className='red'>Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure qui tempore non, fugiat facilis ea distinctio, at deserunt quae voluptatem nihil deleniti vitae nostrum earum repellat accusantium ipsa unde!</p>
    </div>
)
const footer = (
<footer className={classBig} onClick={handleFooter}> 
    <p>Stopka</p>
    {footerTxt}
</footer>
)

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'));
