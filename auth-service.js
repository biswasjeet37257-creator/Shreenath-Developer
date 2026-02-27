// Auth Service Stub for Developer Dashboard
console.log('✅ Auth service loaded');

// Developer mode - bypass authentication
window.AuthService = {
    isAuthenticated: () => true,
    getCurrentUser: () => ({ id: 'dev', name: 'Developer', role: 'admin' }),
    login: () => Promise.resolve(true),
    logout: () => Promise.resolve(true)
};
