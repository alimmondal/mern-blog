import { errorHandler } from "../utils/error.js";
import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";

export const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;
    
    if (userId !== req.user.id) {
      return next(errorHandler(403, 'You are not allowed to comment this post'));
    }

    const newComment = new Comment({ content, postId, userId })
    
    const savedComment = await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

  // Get all comments
export const getAllComments = async (req, res, next) => {
  try {
  
    const comments = await Comment.find({ postId: req.params.postId}).sort({ createdAt: -1 })

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

// Delete a single post
export const deleteComment = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this post'));
  }
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json('The post has been deleted');
  } catch (error) {
    next(error);
  }
}

// Update a single post
export const updateComment = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this post'));
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};


