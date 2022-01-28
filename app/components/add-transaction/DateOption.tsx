import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { Option } from './Option';

interface Props {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const DateOption: React.FC<Props> = ({ date, setDate }) => {
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  const onToggleCalendar = () => {
    setIsShowDatePicker(!isShowDatePicker);
  };

  const onConfirmDate = (selectedDate: Date) => {
    setDate(selectedDate);
    onToggleCalendar();
  };

  return (
    <>
      <Option
        iconName="calendar-o"
        title={moment(date).format('DD.MM.YY HH:mm')}
        onPress={onToggleCalendar}
      />
      <DateTimePickerModal
        mode="datetime"
        display="spinner"
        isVisible={isShowDatePicker}
        onCancel={onToggleCalendar}
        onConfirm={onConfirmDate}
        date={date}
      />
    </>
  );
};
