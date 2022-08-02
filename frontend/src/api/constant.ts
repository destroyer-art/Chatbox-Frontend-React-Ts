const baseBackendUrl = `http://${process.env.NEXT_PUBLIC_HOST}`
export const backendUrl = `${baseBackendUrl}:${process.env.NEXT_PUBLIC_APP_PORT}/api/`;
export const socketUrl = `${baseBackendUrl}:${process.env.NEXT_PUBLIC_SOCKET_PORT}/`;
