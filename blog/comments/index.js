import express from 'express';
import { randomBytes } from 'crypto';

const app = express();

app.use(express.json());

const commentByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
	const { id } = req.params;

	res.send(commentByPostId[id] || []);
});

app.post('posts/:id/comments', (req, res) => {
	const commentId = randomBytes(4).toString('hex');
	const { id } = req.params;
	const { content } = req.body;

	const comments = commentByPostId[id] || [];

	comments.push({ id: commentId, content });

	res.status(201).send(comments);
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
