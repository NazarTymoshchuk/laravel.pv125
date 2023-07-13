import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotification } from './notificationSlice';
import { RootState } from '../../../store/store';
import "./style.scss";

const Notification = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state: RootState) => state.notification);

  const closeNotification = () => {
    dispatch(clearNotification());
  };

  if (!message) {
    return null;
  }

  if (type == 'error')
  {
    return (
        <div className={`alert alert-${type} error`} role="alert">
        {message}
            <button type="button" className="btn" onClick={closeNotification}>
                <span>&times;</span>
            </button>
        </div>
    );
  }
 else{
    return (
        <div className={`alert alert-${type}`} role="alert">
        {message}
        <button type="button" className="btn" onClick={closeNotification}>
            <span>&times;</span>
        </button>
        </div>
    );
}
};

export default Notification;