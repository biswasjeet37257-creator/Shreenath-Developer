// Auth Manager Stub for Developer Dashboard
console.log('[AuthManager] Initializing...');
console.log('[AuthManager] No stored auth state found');
console.log('✅ Auth manager loaded');

// Developer mode - bypass authentication
window.AuthManager = {
    isAuthenticated: () => true,
    getCurrentUser: () => ({ id: 'dev', name: 'Developer', role: 'admin' }),
    checkAuth: () => Promise.resolve(true),
    addEventListener: (event, callback) => {
        console.log('[AuthManager] Event listener added');
    }
};
