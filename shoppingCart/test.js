function validatePrice(price) {
    const re =  /^\d+\.\d{2}$/;
    return re.test(String(price));
  }

  console.log(validatePrice(12.12));