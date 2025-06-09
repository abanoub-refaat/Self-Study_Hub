import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController";
const router = express.Router();

// get all posts
router.get("/", getPosts);

// get a single post
router.get("/:id", getPost);

// create new post
router.post("/", createPost);

// update posts
router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);

export default router;
