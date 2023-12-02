import { createRoot } from 'react-dom/client';
import { App } from './app';
import './internationalization/i18n';

const domNode = document.getElementById('root');

if (!domNode) {
	throw new Error('Root container not found');
}

const root = createRoot(domNode);
root.render(<App />);
