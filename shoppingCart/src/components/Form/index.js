import React, { useState } from 'react';



function validateName(name) {
  const re =  (/^[A-Za-z]+$/);
  return re.test(String(name));
}

function validatePrice(price) {
  const re =  (/^\d+\.\d{2}$/);
  return re.test(String(price));
}

function validateDes(des) {
  const re =  (/^[A-Za-z]+$/);
  return re.test(String(des));
}


function Form(props) {
  const [product, setProduct] = useState({name:'',price:'', description:''})
  const [isNameValid, setIsNameValid]=useState(false)
  const [isPriceValid, setIsPriceValid]=useState(false)
  const [isDesValid, setIsDesValid]=useState(false)
  const [hasErrors, setHasErrors]=useState(true)


  // const checkError = () => {
  //   if(isNameValid &&) {
  //     setHasErrors(false)
  //     return hasErrors;
  //   }
  // }
  const onNameBlur=()=>{
    
    const isNameValid=validateName(product.name)
    
    setIsNameValid(isNameValid)
    
    if(isPriceValid && isDesValid) {
      setHasErrors(false);
      return hasErrors
    }
  }

  const onPriceBlur=()=>{
    
    const isPriceValid=validatePrice(product.price)
    
    setIsPriceValid(isPriceValid)
    
    if(isNameValid && isDesValid) {
      setHasErrors(false);
      return hasErrors
    }
  }

  const onDesBlur=()=>{
    
    const isDesValid=validateDes(product.description)
   
    setIsDesValid(isDesValid)
    
    if(isPriceValid && isNameValid) {
      setHasErrors(false);
      return hasErrors
    }
  }

  const checkError =() => {
   
    setHasErrors(false);
    return ''
  }

  

  const handleNameChange = (ev) => {
    
    setProduct({
      ...product,
      [ev.target.name]: ev.target.value
    })
  }

  const handlePriceChange = (ev) => {
    
    setProduct({
      ...product,
      [ev.target.name]: ev.target.value

    })
  }

  const handleDescriptionChange = (ev) => {
    
    setProduct({
      ...product,
      [ev.target.name]: ev.target.value

    })
  }

  const handleSubmit=()=>{
    
    props.handleSubmit(product)

    setProduct({
      name:'',price:'', description:''
    })
    setIsNameValid(false)
    setIsPriceValid(false)
    setIsDesValid(false)
    setHasErrors(true);
    
  }
  return (
    <div className="wrapper">
      <div className="form-signin">
        <h2 className="form-signin-heading">{props.title}</h2>
        <div className="instruction">
        {isNameValid && isPriceValid && isDesValid?'':<p>Please enter a valid: {isNameValid?'':'(name)'} {isPriceValid?'':'(price)'} {isDesValid?'':'description'}</p>}
        </div>
        <input 
        className='form-control' value={product.name} type='text' name='name' placeholder='name, for etc: chocolate' onChange={handleNameChange} onBlur={onNameBlur}>
        </input>
        <input 
        className='form-control' value={product.price} type='text' name='price' placeholder='price, for etc: 10.95' onChange={handlePriceChange} onBlur={onPriceBlur}>
        </input>
        <input 
        className='form-control' value={product.description} type='text' name='description' placeholder='description, for etc: food' onChange={handleDescriptionChange} onBlur={onDesBlur}>
        </input>
        <input type='submit' onClick={handleSubmit} disabled={hasErrors}/>
      </div>
    </div>
  );
}

export default Form;
