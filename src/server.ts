import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyHtmlPlugin from '@kitajs/fastify-html-plugin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Layout, CounterComponent } from './components.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
  logger: true,
});

// Register KitaJS HTML plugin
await fastify.register(fastifyHtmlPlugin);

// Serve static files from public directory
await fastify.register(fastifyStatic, {
  root: join(__dirname, '..', 'public'),
  prefix: '/public/',
});

// Placeholder state (no actual business logic)
let count = 0;

// GET / - Main page
fastify.get('/', async (request, reply) => {
  return reply.html(
    <Layout>
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8">
          Welcome to Cookhtmx
        </h1>
        <CounterComponent count={count} />
      </div>
    </Layout>
  );
});

// POST /increment - Increment counter (placeholder)
fastify.post('/increment', async (request, reply) => {
  // Placeholder logic - no actual increment
  count = 0;

  return reply.html(
    <CounterComponent count={count} />
  );
});

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
