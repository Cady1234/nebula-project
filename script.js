import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBt7LiztPcGhen0M7uWafq8-40QczHkusg",
  authDomain: "nebula-project-bd823.firebaseapp.com",
  projectId: "nebula-project-bd823",
  storageBucket: "nebula-project-bd823.firebasestorage.app",
  messagingSenderId: "841228632953",
  appId: "1:841228632953:web:c8fd59226a5b4967c065a8",
  measurementId: "G-90CXL6G5NM",
  databaseURL: "https://nebula-project-bd823-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameValue = contactForm.querySelector('input[type="text"]').value;
        const emailValue = contactForm.querySelector('input[type="email"]').value;

        push(ref(database, 'contacts'), {
            name: nameValue,
            email: emailValue,
            time: new Date().toLocaleString()
        }).then(() => {
            alert("تم إرسال بياناتك بنجاح!");
            contactForm.reset();
        }).catch((error) => {
            console.error(error);
        });
    });
}