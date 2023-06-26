import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM crud.users";

  db.query(q, (err, data) => {
    if(err) 
    return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO users(`name`, `email`, `fone`, `date_nasc`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.fone,
    req.body.date_nasc,
];
  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso!")
  });
};

export const updateUser = (req, res) => {
  const q = "UPDATE users SET `name` = ?, `email` = ?, `fone` = ?, `date_nasc` = ? WHERE `id` = ? ";

  const values = [
    req.body.name,
    req.body.email,
    req.body.fone,
    req.body.date_nasc,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com Sucesso!");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM users WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com Sucesso!");
  });
};