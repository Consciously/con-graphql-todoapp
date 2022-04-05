const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/todoSchema');
const resolvers = require('./resolvers/resolvers');
const Todos = require('./models/todoModel');
const connectDB = require('./db');

connectDB();

const startApolloServer = async (typeDefs, resolvers) => {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return { Todos };
		}
	});

	const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
	console.log(`
Server running on port ${port} at ${url}`);
};

startApolloServer(typeDefs, resolvers);
