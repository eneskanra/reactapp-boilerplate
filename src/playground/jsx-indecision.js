console.log('App.js is running');

class Person {
    constructor(name='Anonymous', age=15) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I'm ${this.name}!`;
    }
    getDescription() {
        return `My name is ${this.name} and i'm ${this.age} years old!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        return description;
    }
}


const me = new Student('Enes Kanra', 37, 'Statistics');

console.log(me);

const other = new Student(name='Hasan', 11);

console.log(other);
console.log(other.hasMajor());

console.log(other.getDescription());

const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderPage();
}
 
const onRemoveAll = () => {
    app.options = [];
    renderPage();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderPage = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0 && true} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
                
            </form>
           
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderPage();

