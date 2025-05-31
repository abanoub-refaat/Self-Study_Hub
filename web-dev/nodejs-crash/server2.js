import { createServer } from "http";

const PORT = process.env.PORT;
const users = [
  { id: 1, name: "Abanoub" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Ali" },
];

// logger middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// route function for GET /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// route handler for GET /api/users/#id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "User not found" }));
  }
  res.end();
};

// route handler for POST /api/users/
const createUserHandler = (req, res) => {
  let body = "";
  // lesten for the data
  req.on("data", (chunck) => {
    body += chunck.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201; // successful and somthing is created.
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// route handler for not found
const notFoundHandler = (req, res) => {
  res.statusCode = 404;

  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};
// req.url.match(/\/api\/users\/([0-9]+)/)
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users/" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method == "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users/" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
