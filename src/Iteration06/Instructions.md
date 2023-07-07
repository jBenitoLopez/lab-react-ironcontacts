### Iteration 1 | Display 5 Contacts

Let's take a look at the starter code.

Inside the `src` folder we have a `contacts.json` file containing the producer's contacts. Import the `contacts.json` file to `App.js`. Once done, create a state variable named `contacts` and store an **array containing the first 5 contacts**.

Display that array of 5 contacts as a list in a `<table>` and display the `picture`, `name`, and `popularity` of each contact.

For now, let's render the content in `App.js`. This being said, don't proceed to create a dedicated component for the contact list. The reason will become a bit clearer later when we add the delete button next to each contact. You are probably not yet familiar with the concept of "lifting state up" and passing callbacks as props. For this reason, it is better to render everything in one component for the moment.

Let's proceed.

To import `contacts.json` in `App.js`, you can use:

```js
import contacts from './contacts.json';
```

At the end of this iteration, your application should look like this:

<details>
  <summary> Check image inside </summary>

![Screenshot - Iteration 1](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-ironcontacts-1.png)

</details>
