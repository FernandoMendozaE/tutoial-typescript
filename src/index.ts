console.log('Hello World')

// * types
var myString: string = 'Hello World'
myString = 22 + ''
myString.split('')

var myNumber: number = 22
var myBool: boolean = true || false

var myVar: any = 'Hello' // ? aceptar cualquier tipo de dato
myVar = false

// * Arrays
var StringArray: string[] = ['item1', 'item2', '']
var NumberArray: number[] = [1, 2, 3, 4]
var BooleanArray = [true, false, true]
var AnyArray: any[] = [1, 'Hello', false, [], {}]

// * tuple
var strNumTuple: [string, number]
strNumTuple = ['Hello', 22]
// strNumTuple = ['World', 22, '', 45] // ! error

// * void, undefined, null
let myVoid: void = undefined
let myNull: null = null
let myUndefined: undefined = undefined

// * Functions
function getSum(num1: number, num2: number): number {
  return num1 + num2
}

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === 'string') {
    num1 = parseInt(num1)
  }
  if (typeof num2 === 'string') {
    num2 = parseInt(num2)
  }
  return num1 + num2
}

// * (?) nos permite definir un parametro opcional
function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName
  }
  return `${firstName} ${lastName}`
}

function myVoidFunction(): void {
  return
}

// * Interface
interface ITodo {
  title: string
  text: string
}

function showTodo(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`)
}

let myTodo: ITodo = { title: 'Trabajar', text: 'Hacer una app' }

// * Classes
class User {
  private name: string // ? private: solo se puede acceder desde la clase
  public email: string // ? public: se puede acceder desde cualquier lugar
  protected age: number // ? protected: se puede acceder desde la clase y desde las clases que heredan de esta

  // ? constructor: es el metodo que se ejecuta cuando se crea un objeto, this se refiere al objeto que se esta creando el cual define los atributos
  constructor(name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
  }

  register() {
    // ? this es una referencia al objeto que se esta creando, this se usa para acceder a los atributos del objeto
    console.log(`${this.name} is registered`)
  }

  showMeAge() {
    return this.age
  }

  public AgeInYears() {
    return this.age + ' years'
  }

  payInvoice() {
    console.log(`${this.name} paid invoice`)
  }
}

var john = new User('John', 'john@gmail.com', 26)
john.register()

console.log(john.showMeAge())
console.log(john.AgeInYears())

// * Herancias
// ? extends: permite definir una clase que hereda de otra
class Member extends User {
  id: number

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age) // ? super: permite acceder a los atributos de la clase padre
    this.id = id // ? atributos de la clase hija
  }

  payInvoice() {
    super.payInvoice()
  }
}

var gordon = new Member(1, 'Gordon', 'gotdon@gmail.com', 24)
gordon.payInvoice()
