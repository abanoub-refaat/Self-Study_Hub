import express from "express";
import { title } from "process";
const router = express.Router();

let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

// get all posts
router.get("/", (req, res) => {
  //   console.log(req.quey);
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// get a single post
router.get("/:id", (req, res) => {
  //   console.log(req.params);
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }
  res.status(200).json(post);
});

// create new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ msg: "please include a title" });
  }

  posts.push(newPost);

  console.log(req.body);
  res.status(201).json(posts);
});

// update posts
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `no post with id of ${id}` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

// delete post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: `no post with id of ${id}` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
