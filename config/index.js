const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://127.0.0.1:3000' : 'https://example.com' 