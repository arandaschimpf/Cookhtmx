import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyFormbody from '@fastify/formbody';
import fastifyKitaHtml from '@kitajs/fastify-html-plugin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getHomePage, postIncrement } from './controllers/counterController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
  logger: true,
});

// Register form body parser
await fastify.register(fastifyFormbody);

// Register KitaJS HTML plugin
await fastify.register(fastifyKitaHtml);

// Serve static files from public directory
await fastify.register(fastifyStatic, {
  root: join(__dirname, '..', 'public'),
  prefix: '/public/',
});

// Routes
fastify.get('/', getHomePage);
fastify.post('/increment', postIncrement);

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running at http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
