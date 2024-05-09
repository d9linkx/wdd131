// Select references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList'); // Fill in the blank with the ID of the unordered list

// Event listener for button click
button.addEventListener('click', addChapter);

function addChapter() {
  // Create a new list item element (li)
  const li = document.createElement('li');

  // Create a delete button element
  const deleteButton = document.createElement('button');

  // Get the entered chapter title from the input field
  const chapterTitle = input.value;

  // Set the text content of the list item to the chapter title
  li.textContent = chapterTitle;

  // Set the text content of the delete button to a delete emoji (❌)
  deleteButton.textContent = '❌';

  // Add an `aria-label` attribute to the delete button for accessibility
  deleteButton.setAttribute('aria-label', `Remove ${chapterTitle}`);

  // Append the delete button as a child of the list item
  li.append(deleteButton);

  // Append the list item to the unordered list
  list.append(li);

  // Clear the input field for the next entry
  input.value = '';
}
