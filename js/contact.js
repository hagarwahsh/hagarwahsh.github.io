'use strict';

// Contact us Form
if (document.querySelector('#contact-us')) {
    var formContactUs = document.querySelector('#contact-us')
    var firstName = formContactUs.querySelector('#first-name')
    var lastName = formContactUs.querySelector('#last-name')
    var email = formContactUs.querySelector('#contact-email')
    var phone = formContactUs.querySelector('#phone')
    var organization = formContactUs.querySelector('#organization')
    var jobTitle = formContactUs.querySelector('#job-title')
    var message = formContactUs.querySelector('#message')
    var thanksMessageContact = document.querySelector('.contact__thanks-message')
}

// Firebase Config
var config = {
    apiKey: "AIzaSyBUAyWnDLchENZrZ4msz4KsvUGWGtImFGI",
    authDomain: "dozen-2f91a.firebaseapp.com",
    databaseURL: "https://dozen-2f91a.firebaseio.com",
    projectId: "dozen-2f91a",
    storageBucket: "dozen-2f91a.appspot.com",
    messagingSenderId: "70481441056",
    appId: "1:70481441056:web:aa874a5af2803c1a822745",
    measurementId: "G-2H42C80MST"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
var db = firebase.firestore();

// Contact Form
function firebasePushContact(firstName, lastName, email, phone, organization, jobTitle, message) {
    db.collection("contact").add({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        organization: organization.value,
        jobTitle: jobTitle.value,
        message: message.value
    })
        .then(function (docRef) {
            // formContactUs.setAttribute('hidden', '')
            formContactUs.reset()
            thanksMessageContact.removeAttribute('hidden')

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
if (formContactUs) {
    formContactUs.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePushContact(firstName, lastName, email, phone, organization, jobTitle, message);
    })
}