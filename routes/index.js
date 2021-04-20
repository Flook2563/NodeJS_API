var express = require('express');
var router = express.Router();
var Data = require('../routes/User.json')

// GET
router.get('/', function(req, res, next) {
  res.send(Data);
});

// POST
router.post('/', function(req, res, next) {
  const newData = {
    name: "Suvichada",
    password: "Passw0rd",
    phone: "0895555555",
    id: 6
  };
  //อ้างถึง Users
  Data.users.push(newData);
  res.json(Data);
});

//Put
router.put('/:id', (req, res)=>{
  let found = Data.users.some(Data => Data.id === parseInt(req.params.id));

  if (found){
    const updAPI = {
      name: "Flook",
      password: "FlookPassword"
    };
    Data.users.forEach(Data => {
      if (Data.id === parseInt(req.params.id)){
        Data.name = updAPI.name ? updAPI.name : Data.name;
        Data.password = updAPI.password ? updAPI.password : Data.password;

        res.json({ messages : 'User updated',Data })
      }
    })
  } else {
    res.status(400).json({ messages:`No user with the id of ${req.params.id}` })
  }
});

//Delect
router.delete('/:id', (req, res)=>{
  let found = Data.users.some(Data => Data.id === parseInt(req.params.id));

  if (found){
      res.json({
        messages: 'Deleted',
        users : Data.users.filter(Data => Data.id !== parseInt(req.params.id))
      })
  }else {
      res.status(400).json({ messages:`No user with the id of ${req.params.id}` })
  }
});






module.exports = router;
