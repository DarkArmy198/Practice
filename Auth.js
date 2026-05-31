    import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js'
        import { getAuth } from 'https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js'

export function protectPage(){
    onAuthState4Changed(auth, (user) => {
        if (!user) {
            window.location.href = 'login.html'
        }   
    })
}