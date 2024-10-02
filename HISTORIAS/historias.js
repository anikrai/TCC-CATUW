function navigateTo(page) {
    switch(page) {
        case 'forum':
            window.location.href = 'forum.html';
            break;
        case 'login':
            window.location.href = 'login.html';
            break;
        case 'register':
            window.location.href = 'register.html';
            break;
        case 'profile':
            window.location.href = 'profile.html';
            break;
        case 'settings':
            window.location.href = 'settings.html';
            break;
        default:
            console.error('Page not found');
    }
}
