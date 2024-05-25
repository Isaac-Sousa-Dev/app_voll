import {Button, ITextProps} from 'native-base';
import { ReactNode } from 'react';

interface BotaoProps extends ITextProps {
    children: ReactNode;
    autoSize?: boolean;
    color?: string;
}

export function Botao({children, autoSize = false, color, ...rest}: BotaoProps) {
    return (
        <Button
        w={autoSize ? "auto" : "100%"}
        backgroundColor={color || 'blue.800'}
        marginTop={10}
        borderRadius="lg"
        _text={{ color: 'white' }}
        {...rest}

      >
        {children}
      </Button>
    )
}