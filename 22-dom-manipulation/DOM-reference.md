# DOM Reference

<!-- TOC depthTo:3 -->

- [DOM Reference](#dom-reference)
  - [Finding Elements](#finding-elements)
    - [querySelector](#queryselector)
    - [getElementById](#getelementbyid)
    - [querySelectorAll](#queryselectorall)
    - [closest](#closest)
    - [matches](#matches)
    - [children](#children)
    - [parentElement](#parentelement)
  - [Creating DOM Elements](#creating-dom-elements)
    - [createElement](#createelement)
    - [append](#append)
    - [prepend](#prepend)
    - [innerHTML](#innerhtml)
    - [insertAdjacentHtml](#insertadjacenthtml)
  - [Updating Elements](#updating-elements)
    - [textContent](#textcontent)
    - [innerText](#innertext)
    - [classList](#classlist)
    - [className](#classname)
    - [dataset](#dataset)
  - [Deleting DOM Elements](#deleting-dom-elements)
    - [remove](#remove)
  - [Working with Forms](#working-with-forms)
    - [Accessing Form Fields](#accessing-form-fields)
    - [Getting User Input](#getting-user-input)

<!-- /TOC -->

## Finding Elements

### querySelector
#### _targetElement_.querySelector(_selectors_)
Returns the first child element of _targetElement_ (looking _down_ the DOM tree) that matches the given CSS _selectors_.
[Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

Example:
```html
<ul id="cards">
  <li>Card 1</li>
  <li>Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cardsUl = document.querySelector("ul#cards") // finds the first UL with the id of "cards" within the document
const firstCard = cardsUl.querySelector("li") // finds the first LI within the cardsUl
```

### getElementById
#### document.getElementById(_id_)
Returns the first DOM element with the given _id_.
[Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

Example:
```html
<ul id="cards">
  <li>Card 1</li>
  <li>Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cardsUl = document.getElementById("cards") // finds the first UL with the id of "cards" within the document
```

### querySelectorAll
#### _targetElement_.querySelectorAll(_selectors_)
Returns a collection (a `NodeList`) of all children of _targetElement_ (looking _down_ the DOM tree) that match the given CSS _selectors_. You can call `.forEach` on the resulting collection. 
[Element.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)

Example:
```html
<ul id="cards">
  <li>Card 1</li>
  <li>Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cardsUl = document.querySelector("ul#cards") // finds the first UL with the id of "cards" within the document
const allCards = cardsUl.querySelector("li") // finds ALL LI elements within the cardUl
allCards.forEach(function(cardLi) {
  cardLi.style.color = "red"
})
```

### closest
#### _targetElement_.closest(_selectors_)
Returns the first parent of _targetElement_ that matches the given CSS _selectors_. Like querySelector, but looking _up_ the DOM instead of looking _down_. Useful in event handlers to find a child element's parent.
[Element.closest()](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)

Example:
```html
<ul id="cards">
  <li>Card 1</li>
  <li>Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cards = document.querySelectorAll("li") // finds all LI elements
cards.forEach(function(cardLi) {
  const closestUl = cardLi.closest("ul#cards")
  console.log("The closest parent UL is", closestUl)
})
```

### matches
#### _targetElement_.matches(_selectors_)
Returns true if the _targetElement_ matches the provided CSS _selectors_ and false if it doesn't match. Useful with event delegation to run conditional logic based on the target element of the event.
[Element.matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)

Example 1:
```html
<ul id="cards">
  <li>Card 1</li>
  <li class="flipped">Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cards = document.querySelectorAll("li") // finds all LI elements
cards.forEach(function(cardLi) {
  if (cardLi.matches("li.flipped")) {
    console.log("The flipped card is", cardLi)
  }
})
```

Example 2 (event delegation):
```html
<ul id="cards">
  <li>Card 1</li>
  <li class="flipped">Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cardsUl = document.querySelector("ul#cards")
cardsUl.addEventListener("click", function(event) {
  if (event.target.matches("li.flipped")) {
    console.log("The flipped card was clicked")
  }
})
```

### children
#### _targetElement_.children
Returns an HTML collection of all the direct child nodes of _targetElement_. 
[ParentNode.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)

### parentElement
#### _targetElement_.parentElement
Returns the element's parent node...yeah.
[Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)

## Creating DOM Elements

### createElement
#### document.createElement(_tagName_)
Creates an element with the given _tagName_. The element won't automatically be inserted on the DOM - you have to add it somewhere! See [append](#append) and [prepend](#prepend) for examples.
[Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

Example:
```html
<ul id="cards">
  <li>Card 1</li>
  <li>Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cardsUl = document.querySelector("ul#cards")
const newLi = document.createElement("li") // creates a new LI tag with nothing inside
newLi.textContent = "Card 4" // sets the text inside the LI
cardsUl.append(newLi) // append as the last child element of cardsUl
```

### append
#### _targetElement_.append(_childElement1_, _childElement2_, ...)
[ParentNode.append()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)

### prepend
#### _targetElement_.prepend(_childElement1_, _childElement2_, ...)
[ParentNode.prepend()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)

### innerHTML
#### _targetElement_.innerHTML = _htmlString_
Takes a string representing HTML elements and creates new DOM elements as children of the _targetElement_. !!Use with caution!! If you don't have control over the _htmlString_ being used to generate the DOM elements, you may open yourself up to [Cross-Site Scripting attacks](https://gomakethings.com/preventing-cross-site-scripting-attacks-when-using-innerhtml-in-vanilla-javascript/). Also, setting the innerHTML on a target element will destroy any existing DOM elements inside that target.
[Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

Example:
```html
<ul id="cards">
  <li>Card 1</li>
  <li>Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cardsUl = document.querySelector("ul#cards")
cardsUl.innerHTML += "<li>Card 4</li>" // one powerful line of code!
```

In the example above, changing the innerHTML works something like this:
1. get the innerHTML: convert the current DOM elements inside the cardsUl to a string (`<li>Card 1</li><li>Card 2</li><li>Card 3</li>`)
2. append to the innerHTML string: add another li to the end of the string (`<li>Card 1</li><li>Card 2</li><li>Card 3</li><li>Card 4</li>`)
3. set the innerHTML: remove all existing DOM nodes inside the UL, and replace them with new DOM nodes for each element represented in the innerHTML string

### insertAdjacentHtml
#### _targetElement_.insertAdjacentHtml(_position_, _htmlString_)
Takes a position (a string representing a position relative to _targetElement_) and an _htmlString_ (a string representing new DOM nodes to be created), and inserts them into the DOM. !!Use with caution!! See link in [innerHTML](#innerhtml) for potential issues around cross-site scripting vulnerabilities with this approach. Unlike innerHTML, insertAdjacentHtml _won't_ destroy child DOM elements of the _targetElement_.
[Element.insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

Example:
```html
<ul id="cards">
  <li>Card 1</li>
  <li>Card 2</li>
  <li>Card 3</li>
</ul>
```

```js
const cardsUl = document.querySelector("ul#cards")
cardsUl.insertAdjacentHTML("beforeend", "<li>Card 4</li>") // before end will insert after the last child elemnt
```

## Updating Elements

### textContent
#### _targetElement_.textContent
Get/set the text content (the content between the opening and closing HTML tags). Also see [innerText](#innertext).
[Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

Example:
```html
<p id="article">How to update the DOM</p>
```

```js
const article = document.querySelector("#article")
console.log(article.textContent) // "How to update the DOM"
article.textContent = "Now you try"
```

### innerText
#### _targetElement_.innerText
Get/set the "rendered" inner text (the text between the opening and closing HTML tags). Works similiarly to [textContent](#textcontent), but with some subtle differences. For a detailed explanation, see: [The poor, misunderstood innerText](http://perfectionkills.com/the-poor-misunderstood-innerText/)
[HTMLElement.innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)

Example:
```html
<p id="article">How to update the DOM</p>
```

```js
const article = document.querySelector("#article")
console.log(article.innerText) // "How to update the DOM"
article.innerText = "Now you try"
```

### classList
#### _targetElement_.classList
Used to manipulate the _targetElement_'s CSS classes. Returns a "DOMTokenList" that you can use to add/remove CSS classes from an element. See also [className](#classname).
[Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

Example:
```html
<p id="article">How to update the DOM</p>
```

```js
const article = document.querySelector("#article")
article.classList.add("bold") // <p class="bold">
article.classList.add("green") // <p class="bold green">
article.classList.remove("bold") // <p class="green">
```

### className
#### _targetElement_.className
Get/set the element's _class_ attribute. Unlike [classList](#classlist), this returns a string representing the element's CSS classes.
[Element.className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)

Example:
```html
<p id="article" class="bold green">How to update the DOM</p>
```

```js
const article = document.querySelector("#article")
console.log(article.className) // "bold green"
article.className = "italic" // <p class="italic">
```

### dataset
#### _targetElement_.dataset
[HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset)

## Deleting DOM Elements

### remove
#### _targetElement_.remove()
Removes the _targetElement_ from the DOM tree.

Example:
```html
<p id="article">How to update the DOM</p>
```

```js
const article = document.querySelector("#article")
article.remove() // it's gone!
```

## Working with Forms

### Accessing Form Fields
Any time you need to access the user's input from the form, you need to access the _input fields_. Since forms and inputs have a special relationship in HTML (a form always needs input fields), there are some shortcuts for accessing input fields in a form.

Example:
```html
<form>
  <input type="text" name="username" id="username-field" />
  <input type="password" name="password" id="password-field" />
  <input type="submit" />
</form>
```

```js
const form = document.querySelector("form")
form.username // will return the input field using its 'name' attribute
form["username"] // will also return the input field using its 'name' attribute
form["username-field"] // will also return the input field using its 'id' attribute
```

### Getting User Input
#### _input_.value
Returns the value of the given input field. For text inputs and textareas, the value is the text that the user inputs. For select tags, the value represents which option the user selected from the dropdown.

Example:
```html
<form>
  <input type="text" name="username" id="username-field" />
  <input type="password" name="password" id="password-field" />
  <input type="submit" />
</form>
```

```js
const form = document.querySelector("form")
form.username
form.username.value // get the value of the input field (whatever the user entered)
```