document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');

  const anchorLinks = document.querySelectorAll('a');
  console.log('Number of anchor links found:', anchorLinks.length);

  for (const link of anchorLinks) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Link clicked:', link);
    });
  }

  // Get the modal
  const modal = document.getElementById('imageModal');

  // Get the image and insert it inside the modal
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');

  // Get all images inside content-box__images
  const images = document.querySelectorAll('.content-box__images img');

  // Add click event listener to each image
  images.forEach((img) => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  // Get the <span> element that closes the modal
  const closeSpan = document.querySelector('.close');

  // When the user clicks on <span> (x), close the modal
  closeSpan.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal when Esc key is pressed
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
});
