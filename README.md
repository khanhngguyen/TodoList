# Todo List Project

### Project brief
Create a simple todo list, using React & MUI

### Demo 
![Demo gif](./todo-list/src/demo.gif)

### Development phases
##### Phase 1: the basics:
- create basic Todo list within 1 main component (App.js)
- then split into smaller components (TodoList.js, Todo.js), add codes to make all components functional
##### Phase 2: add more features & fix issues:
- add features:
    - autofocus on Add todo input & when click on Edit button
    - make pressing down Enter key works when finish typing Add todo or finish Editing
    - Delete comfirmation pop-up box
    - save Todo list when refresh page
- fix issues: 
    - todo items: 
        - after every page reload, the newly added item always has id: 0, causing issue when several items share the same id: 0 --> edit 1 item will override others
        - also items with id: 0 are unable to delete
#### Phase 3: adding UI using MUI:
- use available components from MUI, e.g:
```
<Container>
<Typography>
<TextField>
<Button>
<Table>
<Dialog>
etc.
```
- custom styling with CSS, e.g content layout, alignment, padding, margin, etc.
- fix issue with todo's content: layout breaks when the content is too long

### Learning outcomes
- Learn the basics of React:
    - function components, passing props
    - useState, useEffect
- Javascript:
    - localStorage
    - rest & spread operator
    - array destructuring
- MUI:
    - components & variants
    - `<Diaglog>` components for confirmation pop-up box
- Git: create & merge branch

## Known limitations
- Warning & errors in console
- stored data in localStorage does not work on 'private browsing' or 'incognito mode'
- even when delete all items, when reload page, the last deleted item will also reload
- Edit button should disappear after being clicked

## Goals for next project
- Learn more about React
- Understand warning & errors in console & how to fix them
- Fix layout issues & add more contents & features, e.g:
    - make todo list into a table
    - each todo item has these contents:
        - selectable status: in-progress, completed, discarded
        - title
        - details
        - edit & delete buttons
- Learn & use more of MUI components, as well as custom styling without an extra CSS file

