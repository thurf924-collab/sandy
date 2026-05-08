function togglePopup() {
  const popup = document.getElementById('popup');
  if (popup.style.display === 'none' || popup.style.display === '') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
}


function showInfo() {
  event.stopPropagation();  // stops popup from closing when clicking image
  const infoBox = document.getElementById('infoBox');
  if (infoBox.style.display === 'none' || infoBox.style.display === '') {
    infoBox.style.display = 'block';
  } else {
    infoBox.style.display = 'none';
  }
}