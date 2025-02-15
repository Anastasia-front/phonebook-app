import { Li, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';

const getVisibleTasks = (contacts, filter) => {
  const normilizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact['name'].toLowerCase().includes(normilizedFilter)
  );
};

const Items = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleTasks = getVisibleTasks(contacts, filter);

  return (
    <List>
      {visibleTasks.length ? (
        visibleTasks.map(({ _id, name, number }) => (
          <Li key={_id}>
            <Contact id={_id} name={name} number={number} />
          </Li>
        ))
      ) : (
        <h3 style={{ textAlign: 'center', marginLeft: 70 }}>
          There are no contacts in your phoneBook
        </h3>
      )}
    </List>
  );
};

export default Items;
