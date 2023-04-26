import {Wrapper, Title, Button, Icon} from './ColumnHeadBar.styled'
import Icons from '../../../images/sprite.svg';

export const ColumnHeadBar = () => {

    return (
        <Wrapper>
        <Title>To do</Title>
        <Button type="button">
            <Icon>
                <use href={`${Icons}#profile-plus-s`}></use>
            </Icon>
        </Button>
        </Wrapper>
    )
}