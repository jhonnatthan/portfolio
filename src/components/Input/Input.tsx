import React, {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  useState,
  useEffect,
  memo,
} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  margin-bottom: 10px;

  .InputPlaceholder {
    opacity: 0.7;
    will-change: opacity;
    transition: opacity 500ms;
    color: white;
  }

  &.focused {
    .InputPlaceholder {
      opacity: 0;
    }
  }

  input {
    border-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 10px;

    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    will-change: border-color, box-shadow;
    transition: border-color 1s, box-shadow 1s;
  }

  .InputError {
    opacity: 0;
    max-height: 0;
    will-change: opacity, max-height;
    transition: opacity 1s, max-height 1s;
  }

  &.error {
    input {
      border-color: rgba(255, 0, 0, 1);
      box-shadow: 0 0 5px rgba(255, 0, 0, 1);
    }

    .InputError {
      opacity: 1;
      max-height: 100px;
    }
  }
`;

const InputPlaceholder = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 2;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const InputError = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: red;
  margin: 0;
  margin-top: 5px;
`;

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  containerProps?: HTMLAttributes<HTMLDivElement>;
};

const Input = ({ error, containerProps, ...props }: Props) => {
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    if (props.value && props.value !== '') setFocused(true);
  }, [props]);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (props?.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (props?.onBlur) props.onBlur(e);
  };

  return (
    <Container
      {...containerProps}
      className={`${error && 'error'} ${focused && 'focused'}`}
    >
      <InputPlaceholder className="InputPlaceholder">
        Digite seu nome
      </InputPlaceholder>
      <StyledInput {...props} onFocus={handleFocus} onBlur={handleBlur} />
      <InputError className="InputError">{error}</InputError>
    </Container>
  );
};

export default memo(Input);
