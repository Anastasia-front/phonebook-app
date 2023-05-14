import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectContacts } from 'redux/contacts/selectors';
import {
  BoxSection,
  TwoSections,
} from 'components/ContactForm/ContactForm.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ fontFamily: 'revert-layer' }}>Phonebook</h1>
      <TwoSections>
        <Section title="Additor">
          <ContactForm style={{ maxWidth: 500 }} />
        </Section>

        <Section title="Contacts">
          <BoxSection style={{ maxWidth: 500 }}>
            {contacts.length !== 0 && <Filter />}
            {!error && <ContactList />}
          </BoxSection>

          {error && (
            <b
              style={{ margin: '10px auto', width: '50%', textAlign: 'center' }}
            >
              The operation failed with error: ${error}
            </b>
          )}
        </Section>
      </TwoSections>
    </div>
  );
};

export default Contacts;
