// graphQL wrapper
const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		todos: [Todo!]
		todo(id: ID!): Todo!
	}

	type Mutation {
		createTodo(input: CreateTodoResponse!): Todo!
		updateTodo(id: ID, input: UpdateTodoResponse!): Todo!
		deleteTodo(id: ID): DeleteTodoResponse!
	}

	type Todo {
		id: ID!
		task: String!
	}

	input CreateTodoResponse {
		task: String!
	}

	input UpdateTodoResponse {
		task: String!
	}

	type DeleteTodoResponse {
		id: ID!
	}
`;

module.exports = typeDefs;
