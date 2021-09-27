import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, ondeleteContact }) => (
    <ul className={style.listContact}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
                <p>
                    &#9742; {name}: {number}
                </p>
                <button type="button" onClick={() => ondeleteContact(id)}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

export default ContactList;

ContactList.propTypes = {
    ondeleteContact: PropTypes.func,
    contacts: PropTypes.array,
};
