import { Layout } from '../components/Layout.js';
import { Counter } from '../components/Counter.js';

export interface HomePageProps {
  count: number;
}

/**
 * Home Page View
 *
 * The main landing page of the application.
 * Wraps the Counter component in the standard Layout.
 */
export function HomePage({ count }: HomePageProps) {
  return (
    <Layout>
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8">
          Welcome to Cookhtmx
        </h1>
        <Counter count={count} />
      </div>
    </Layout>
  );
}
