import { useEffect, useRef, useState } from 'react';
import styles from './joinModal.module.scss';
import CloseIcon from '@/assets/images/svg/closeIcon';
import ErrorIcon from '@/assets/images/svg/errorIcon';
import DropIcon from '@/assets/images/svg/dropIcon';

export default function JoinModal({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        cvUrl: "",
        linkedInUrl: "",
        comments: ""
    });

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleOptionClick = (position) => {
        setSelectedPosition(position);
        setIsDropdownOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formValues.firstName.trim()) errors.firstName = "Enter a first name.";
        if (!formValues.lastName.trim()) errors.lastName = "Enter a last name.";
        if (!formValues.email.trim()) {
            errors.email = "Enter an email address like example@mysite.com.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
            errors.email = "Invalid email address.";
        }
        if (!formValues.cvUrl.trim()) {
            errors.cvUrl = "Enter a web URL like https://www.example.com.";
        } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formValues.cvUrl)) {
            errors.cvUrl = "Invalid URL.";
        }
        if (!selectedPosition) errors.position = "Choose an option.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            console.log("Form submitted:", formValues);
            onClose();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
                if (!event.target.closest(`.${styles.selectDrop}`)) {
                    onClose();
                }
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`${styles.joinModal} ${isOpen ? styles.open : ''}`}>
            <div className={styles.joinModalDiv} ref={modalRef}>
                <div className={styles.joinModalHead}>
                    <div>
                        <h2>Join Our Team</h2>
                        <p>Submit Your Application</p>
                    </div>
                    <div className={styles.closeIcon} onClick={onClose}>
                        <CloseIcon />
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGrid}>
                        <div className={styles.inputBox}>
                            <label htmlFor="firstName">First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleInputChange}
                            />
                            {formErrors.firstName && (
                                <span><ErrorIcon /> {formErrors.firstName}</span>
                            )}
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="lastName">Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleInputChange}
                            />
                            {formErrors.lastName && (
                                <span><ErrorIcon /> {formErrors.lastName}</span>
                            )}
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                            />
                            {formErrors.email && (
                                <span><ErrorIcon /> {formErrors.email}</span>
                            )}
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="number"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="position">Position</label>
                            <div className={styles.customSelect}>
                                <div className={styles.select} onClick={toggleDropdown}>
                                    {selectedPosition || " "}
                                </div>
                                <div className={`${styles.selectArrow} ${isDropdownOpen ? styles.open : ""}`}>
                                    <DropIcon />
                                </div>
                                {isDropdownOpen && (
                                    <div className={styles.selectDrop} onClick={(e) => e.stopPropagation()}>
                                        {["Community Manager", "QA Tester", "Game Designer", "Game Developer"].map((position) => (
                                            <div
                                                key={position}
                                                onClick={(e) => { e.stopPropagation(); handleOptionClick(position); }}>
                                                {position}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {formErrors.position && (
                                <span><ErrorIcon /> {formErrors.position}</span>
                            )}
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="cvUrl">CV URL *</label>
                            <input
                                type="url"
                                name="cvUrl"
                                value={formValues.cvUrl}
                                onChange={handleInputChange}
                            />
                            {formErrors.cvUrl && (
                                <span><ErrorIcon /> {formErrors.cvUrl}</span>
                            )}
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="linkedInUrl">LinkedIn URL</label>
                            <input
                                type="url"
                                name="linkedInUrl"
                                value={formValues.linkedInUrl}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="comments">Any Comments</label>
                            <textarea
                                rows={3}
                                name="comments"
                                value={formValues.comments}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className={styles.submitBtn}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
