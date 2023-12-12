const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

// Return All todos in from the file
app.get("/todos", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

//Return specific todo based on its ID
app.get("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      res.json(todos[todoIndex]);
    }
  });
});

// Create New todo and write to the file
app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

// Update the existing todo
app.put("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      const updatedTodo = {
        id: todos[todoIndex].id,
        title: req.body.title,
        description: req.body.description,
      };
      todos[todoIndex] = updatedTodo;
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(updatedTodo);
      });
    }
  });
});

//Delete a specific todo from the file
app.delete("/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

//ROUTES FOR HANDLING NOTES
// Return All NOTES in from the file
app.get("/notes", (req, res) => {
  fs.readFile("notes.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

//Return specific Note based on its ID
app.get("/notes/:id", (req, res) => {
  fs.readFile("notes.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const notesIndex = findIndex(notes, parseInt(req.params.id));
    if (notesIndex === -1) {
      res.status(404).send();
    } else {
      res.json(notes[notesIndex]);
    }
  });
});

// Create New Note and write to the file
app.post("/notes", (req, res) => {
  const newNotes = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile("notes.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNotes);
    fs.writeFile("notes.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.status(201).json(newNotes);
    });
  });
});

// Update the existing note
app.put("/notes/:id", (req, res) => {
  fs.readFile("notes.json", "utf8", (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    const noteIndex = findIndex(notes, parseInt(req.params.id));
    if (noteIndex === -1) {
      res.status(404).send();
    } else {
      const updatednote = {
        id: notes[noteIndex].id,
        title: req.body.title,
        description: req.body.description,
      };
      notes[noteIndex] = updatednote;
      fs.writeFile("notes.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.status(200).json(updatednote);
      });
    }
  });
});

//Delete a specific notes from the file
app.delete("/notes/:id", (req, res) => {
  fs.readFile("notes.json", "utf8", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    const noteIndex = findIndex(notes, parseInt(req.params.id));
    if (noteIndex === -1) {
      res.status(404).send();
    } else {
      notes = removeAtIndex(notes, noteIndex);
      fs.writeFile("notes.json", JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});
app.listen(3000);
