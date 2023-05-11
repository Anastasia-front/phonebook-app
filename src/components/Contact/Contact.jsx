import { Delete } from 'components/ContactList/ContactList.styled';
import { Puff } from 'react-loading-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectError } from 'redux/selectors';
import { useState } from 'react';

import { deleteContact } from 'redux/contactsOperations';

export const Contact = ({ id, name, number }) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loader = () => {
    setIsLoading(true);
  };

  return (
    <p>
      {name}: {number}
      {isLoading && !error ? (
        <Delete>
          <Puff height={12} stroke="#000" />
        </Delete>
      ) : (
        <Delete
          onClick={() => {
            dispatch(deleteContact(id));
            loader();
          }}
        >
          Delete
        </Delete>
      )}
    </p>
  );
};
