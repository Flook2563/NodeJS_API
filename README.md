# NodeJS_API
จากข้อสอบการพื้นฐานการเขียน API ด้วย RestfulAPI JSON Server
ผมเขียนโดยการใช้ NodeJS กับ Express


1.	เขียน Restful API JSON คำสั่ง Get ข้อมูล filed มาแสดง

    router.get('/', function(req, res, next) {
      res.send(Data);
    });
    
2.	เขียน Restful API JSON คำสั่ง Post ข้อมูล filed มาแสดง

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

3.  เขียน Restful API JSON คำสั่ง Put ข้อมูล filed มาแสดง

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


4.	เขียน Restful API JSON คำสั่ง Delete ข้อมูล filed มาแสดง

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

