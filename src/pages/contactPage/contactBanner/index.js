import { useState } from 'react';
import styles from './contactBanner.module.scss';
import ErrorIcon from '@/assets/images/svg/errorIcon';

export default function ContactBanner() {
  const [formErrors1, setFormErrors1] = useState({});
  const [formErrors2, setFormErrors2] = useState({});
  const [formValues1, setFormValues1] = useState({ firstName: "", lastName: "", email: "", comments: "", });
  const [formValues2, setFormValues2] = useState({ email: "", checkbox: false, });

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormValues1((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange2 = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues2((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const validateForm1 = () => {
    const errors = {};
    if (!formValues1.firstName.trim()) errors.firstName = "Enter a first name.";
    if (!formValues1.lastName.trim()) errors.lastName = "Enter a last name.";
    if (!formValues1.email.trim()) {
      errors.email = "Enter an email address like example@mysite.com.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues1.email)) {
      errors.email = "Invalid email address.";
    }
    return errors;
  };

  const validateForm2 = () => {
    const errors = {};
    if (!formValues2.email.trim()) {
      errors.email = "Enter an email address like example@mysite.com.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues2.email)) {
      errors.email = "Invalid email address.";
    }
    if (!formValues2.checkbox) errors.checkbox = "You must agree to the terms and conditions.";
    return errors;
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const errors = validateForm1();
    setFormErrors1(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Contact Form submitted:", formValues1);
      setFormValues1({ firstName: "", lastName: "", email: "", comments: "", });
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const errors = validateForm2();
    setFormErrors2(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Newsletter Form submitted:", formValues2);
      setFormValues2({ email: "", checkbox: false, });
    }
  };

  return (
    <div className={styles.contactBanner}>
      <div className={styles.container}>
        <div className={styles.contactBox}>
          <div className={styles.contactBox1}>
            <h1>Get in Touch</h1>
            <p>Reach out to us for inquiries, collaborations, or support. We're here to connect and bring your ideas to life!</p>
            <form onSubmit={handleSubmit1}>
              <div className={styles.inputGrid}>
                <div className={styles.inputBox}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formValues1.firstName}
                    onChange={handleInputChange1}
                  />
                  {formErrors1.firstName && (<span><ErrorIcon /> {formErrors1.firstName}</span>)}
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formValues1.lastName}
                    onChange={handleInputChange1}
                  />
                  {formErrors1.lastName && (<span><ErrorIcon /> {formErrors1.lastName}</span>)}
                </div>
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formValues1.email}
                  onChange={handleInputChange1}
                />
                {formErrors1.email && (<span><ErrorIcon /> {formErrors1.email}</span>)}
              </div>
              <div className={styles.inputBox}>
                <label htmlFor="comments">Leave us a message...</label>
                <textarea
                  rows={3}
                  name="comments"
                  id="comments"
                  value={formValues1.comments}
                  onChange={handleInputChange1}
                ></textarea>
              </div>
              <div className={styles.submitBtn}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className={styles.contactBox2}>
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit2}>
              <div className={styles.inputBox}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formValues2.email}
                  onChange={handleInputChange2}
                />
                {formErrors2.email && (<span><ErrorIcon /> {formErrors2.email}</span>)}
              </div>
              <div className={styles.inputBox}>
                <div className={styles.checkboxDiv}>
                  <div className={styles.checkbox}>
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      checked={formValues2.checkbox}
                      onChange={handleInputChange2}
                    />
                    <div htmlFor="checkbox">
                      <svg viewBox="0,0,50,50">
                        <path d="M5 30 L 20 45 L 45 5"></path>
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="checkbox">I agree to the terms and conditions.</label>
                </div>
                {formErrors2.checkbox && (<span><ErrorIcon /> {formErrors2.checkbox}</span>)}
              </div>
              <div className={styles.submitBtn2}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
