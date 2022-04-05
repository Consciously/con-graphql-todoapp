const resolvers = {
	Query: {
		todos: async (_, __, { dataSources }) => {
			return await dataSources.Todos.find();
		},
		todo: async (_, { id }, { dataSources }) => {
			return await dataSources.Todos.findById(id);
		}
	},
	Mutation: {
		createTodo: async (_, { input }, { dataSources }) => {
			return await dataSources.Todos.create(input);
		},
		updateTodo: async (_, { id, input }, { dataSources }) => {
			return await dataSources.Todos.findByIdAndUpdate(id, input, {
				new: true
			});
		},
		deleteTodo: async (_, { id }, { dataSources }) => {
			return await dataSources.Todos.findByIdAndRemove(id);
		}
	}
};

module.exports = resolvers;
