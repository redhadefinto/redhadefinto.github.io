  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyS1JXKB218XhiSGm0PY69N5NOR18d4PekFXAKUmabJTWrZ9Evs3kzhiHor1JD35yk/exec";
  const form = document.forms['redha-contact']
  const btnKirim = document.querySelector('.btn-kirim');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // ketika tombol submit di klick
    // tampilkan tombol loading hilangkan tombol kirim 
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        // tampilkan alert
        myAlert.classList.toggle('d-none');
        // reset formnya
        form.reset();
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  });
