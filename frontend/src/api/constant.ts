const domain = process.env.NODE_ENV === 'development' ? 'localhost' : `${process.env.NEXT_PUBLIC_HOST}`;
export const backendUrl = `http://${domain}:${process.env.NEXT_PUBLIC_APP_PORT}/api/`;
export const socketUrl = `${domain}:${process.env.NEXT_PUBLIC_SOCKET_PORT}/`;
