import type { FC } from 'react';

const Component: FC = () => (
    <div className="container mx-auto max-w-2xl p-6">
        <h1 className="text-2xl font-bold mb-2">Hello from a Route Plugin 👋</h1>
        <p className="opacity-80">Served at <code>/hello</code> by the plugin.</p>
    </div>
);

export default Component;
