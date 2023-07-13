import { useDispatch } from 'react-redux';
import { setNotification } from './notificationSlice';

const TestNotification = () => {
  const dispatch = useDispatch();

  const showSuccessNotification = () => {
    dispatch(
      setNotification({
        message: 'Success!',
        type: 'success',
      })
    );
  };

  return (
    <div>
      <button onClick={showSuccessNotification}>Show Success Notification</button>
    </div>
  );
};

export default TestNotification;