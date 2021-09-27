import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function ContactForm ({onSubmit}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    
    const handleChange = (event) => {
        switch (event.target.name) {
          case 'name':
            setName(event.currentTarget.value);
            break;
          case 'number':
            setNumber( event.currentTarget.value);
            break;

          default: console.warn(`${event.target.value} not found`)
        }
      };

    const handleAddContact = event => {
        event.preventDefault();
        onSubmit({name, number})
        reset()
    };
    const reset = () => {
        setName ('')
        setNumber('')
    };

        return (
            <form onSubmit={handleAddContact}>
                <label>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        placeholder="Name Surname"
                    />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        placeholder="111-11-11"
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
}


ContactForm.propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
    number: PropTypes.number,
    handleAddContact: PropTypes.func,
    handleChange: PropTypes.func,
};