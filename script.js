
const festivalSelect = document.getElementById('festival');
const recipientInput = document.getElementById('recipient');
const messageInput = document.getElementById('message');
const senderInput = document.getElementById('sender');
const imageInput = document.getElementById('image');

const previewImage = document.getElementById('preview-image');
const previewTitle = document.getElementById('preview-title');
const previewMessage = document.getElementById('preview-message');
const previewSender = document.getElementById('preview-sender');
const cardPreview = document.getElementById('card-preview');

document.getElementById('generate-btn').addEventListener('click', function() {
  const festival = festivalSelect.value;
  const recipient = recipientInput.value;
  const message = messageInput.value;
  const sender = senderInput.value;

  if (recipient === '' || message === '' || sender === '') {
    alert('Please fill all the fields.');
    return;
  }

  previewTitle.innerText = `Happy ${festival}, ${recipient}!`;
  previewMessage.innerText = message;
  previewSender.innerText = sender;

  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImage.src = e.target.result;
    }
    reader.readAsDataURL(file);
  } else {
    previewImage.src = '';
  }

  cardPreview.classList.remove('hidden');

  setTimeout(() => {
    html2canvas(cardPreview, {backgroundColor: null}).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg', 1.0);
      link.download = 'festival-wishing-card.jpg';
      link.click();
    });
  }, 1000);
});
