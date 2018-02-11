import { createServer } from 'http';
import express from 'express';
import next from 'next';
import Bluebird from 'bluebird';

import pkg from '../package.json';
import nextConfig from '../next.config';

const server = () => {
	const port = parseInt(process.env.PORT, 10) || 3000;
	const dev = process.env.NODE_ENV !== 'production';
	const nextApp = next({ dir: './app', dev, conf: nextConfig });
	const handle = nextApp.getRequestHandler();

	const app = Object.assign(express(), {
		pkgname: pkg.name,
		version: pkg.version
	});

	const server = createServer(app);

	app.get('/up', (req, res) => {
		res
			.status(200)
			.set('Content-Type', 'text/plain')
			.send('');
	});

	app.get('/', (req, res) => nextApp.render(req, res, '/home', req.query));
	app.get('*', (req, res) => handle(req, res));

	function listen() {
		return nextApp.prepare().then(() => {
			server.listen(port, err => {
				if (err) throw err;
				console.log(`> Ready on http://localhost:${port}`);
			});
		});
	}

	function close() {
		return Bluebird.fromCallback(cb => server.close(cb));
	}

	return Object.freeze({
		listen,
		close
	});
};

export default server;
