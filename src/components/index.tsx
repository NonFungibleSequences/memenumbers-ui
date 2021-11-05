import styled, { css } from 'styled-components'

export const PangolinFont = css`
    color: rgba(255, 255, 255, 1);
    font-family: Pangolin;
    font-weight: Regular;
`

export const FrederickaFont = css`
    color: rgba(255, 255, 255, 1);
    font-family: Fredericka the Great;
    font-weight: Regular;
`

export const DefaultFont = css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
`

export const DefaultFontSpan = styled.span`
    ${DefaultFont}
`

export const EtherSymbol = () => <DefaultFontSpan>Ξ</DefaultFontSpan>

export const Field = styled.p`
    ${PangolinFont}
    font-size: 20px;
    opacity: 1;
`

export const Value = styled.p`
    ${PangolinFont}
    color: rgba(166, 250, 255, 1);
    font-size: 26px;
    opacity: 1;
`

export const FieldSet = styled.fieldset`
    font-size: 1em;
    padding: 0.5em;
    border-radius: 1em;
    border-width: 0;
`

export const Input = styled.input`
    ${PangolinFont}
    font-size: inherit;
    padding: 0.3em 0.4em;
    margin: 0.1em 0.2em;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;

    background: rgba(51, 51, 51, 1);
    border: 2px solid rgba(255, 255, 255, 1);
`

export const Select = styled.select`
    color: rgba(51, 51, 51, 1);
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    border-width: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:active {
        background-color: #f1ac15;
    }
`

export const Submit = styled.input.attrs({
    type: 'submit',
})`
    ${FrederickaFont}
    color: rgba(51, 51, 51, 1);
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    border-width: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:active {
        background-color: #f1ac15;
    }
`

export const Button = styled.button`
    ${FrederickaFont}
    color: rgba(51, 51, 51, 1);
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    border-width: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &:active {
        background-color: #f1ac15;
    }
`

export const LongInput = styled(Input)`
    width: 35%;
`

export const Status = styled.div<{ isError: Error | undefined }>`
    color: ${(props) => (props.isError ? '#d30000' : 'green')};
`
