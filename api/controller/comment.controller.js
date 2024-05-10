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
export const getSinglePostComments = async (req, res, next) => {
  try {
  
    const comments = await Comment.find({ postId: req.params.postId}).sort({ createdAt: -1 })

    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

// Update likes in comments
export const likeComment = async (req, res, next) => {
  
  try {
    const comment = await Comment.findById(req.params.commentId)
    if (!comment) {
        return next(errorHandler(404, 'Comment not found'));
    }
    
    const userIndex = comment.likes.indexOf(req.user.id);

    if (userIndex === -1) {
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id);
    } else {
      comment.numberOfLikes -= 1;
      comment.likes.splice(userIndex, 1);
    }

    await comment.save()
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

// Edit comment
export const editComment = async (req, res, next) => {
  
  try {
        const comment = await Comment.findById(req.params.commentId)
            if (!comment) {
                return next(errorHandler(404, 'Comment not found'));
        }
    
        if (comment.userId !== req.user.id || !req.user.isAdmin) {
            return next(errorHandler(403, 'You are not allowed to edit'));
        }

    const editedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      {
        $set: {
          content: req.body.content,
        },
      },
      { new: true }
    );

    res.status(200).json(editedComment);
  } catch (error) {
    next(error);
  }
};

// Delete a single comment
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId)
    if (!comment) {
      return next(errorHandler(404, 'Comment not found'));
     }
    
    if (comment.userId !== req.user.id || !req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to edit'));
    }
    
    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(200).json('The comment has been deleted');
  } catch (error) {
    next(error);
  }
}

export const getAllComments = async (req, res, next) => {
  try {
  if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to get comments'));
    }

    const startIndex = parseInt(req.params.startIndex, 0);
    const limit = parseInt(req.params.limit, 5);
    const sortDirection = req.params.sort === 'desc' ? -1 : 1;

    const comments = await Comment.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);
    
    const totalComments = await Comment.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

    const lastMothComments = await Comment.countDocuments({ createdAt: { $gte: oneMonthAgo } })
    
    res.status(200).json({
      comments,
      totalComments,
      lastMothComments,
    });
  } catch (error) {
    next(error);
  }
};