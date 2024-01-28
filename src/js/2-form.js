const form = document.querySelector('.feedback-form');
const emailField = form.elements.email;
const messageField = form.elements.message;
const LS_KEY = 'feedback-form-state';
let fieldsData = {};

form.addEventListener('input', () => {
    createDataObject();
    localStorage.setItem(LS_KEY, JSON.stringify(fieldsData));
});

function createDataObject() {
    const email = emailField.value.trim();
    const message = messageField.value.trim();
    fieldsData = {
        email,
        message,
    };
}

function fillFields() {
    const savedData = JSON.parse(localStorage.getItem(LS_KEY));
    if (!savedData) return;
    emailField.value = savedData.email;
    messageField.value = savedData.message;
}
fillFields();

form.addEventListener('submit', evt => {
    evt.preventDefault();
    if (!emailField.value.trim() || !messageField.value.trim()) {
        alert('All form fields must be filled in');
        return;
    }
    createDataObject();
    console.log(fieldsData);
    localStorage.removeItem(LS_KEY);
    form.reset();
});
