const { Schema, model } = require('mongoose');

const TodoSchema = new Schema(
	{
		task: {
			type: String,
			required: [true, 'Please add a task']
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = model('todos', TodoSchema);
