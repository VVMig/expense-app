import React from 'react';
import { BlurView } from 'expo-blur';

import { Styled } from './styled';
import { StyleSheet } from 'react-native';

interface Props {
  onPressDelete?: () => void;
  onPressCancel: () => void;
}

export const ContextMenu: React.FC<Props> = ({
  onPressCancel,
  onPressDelete,
}) => {
  return (
    <BlurView intensity={100} style={Styles.container}>
      <Styled.ContextMenu>
        <Styled.TitleContainer>
          <Styled.ContextMenuTitle>
            Do you want to delete?
          </Styled.ContextMenuTitle>
        </Styled.TitleContainer>
        <Styled.Choice>
          <Styled.ChoiceButton isDelete onPress={onPressDelete}>
            <Styled.ButtonText>Delete</Styled.ButtonText>
          </Styled.ChoiceButton>
          <Styled.ChoiceButton onPress={onPressCancel}>
            <Styled.ButtonText>Cancel</Styled.ButtonText>
          </Styled.ChoiceButton>
        </Styled.Choice>
      </Styled.ContextMenu>
    </BlurView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
