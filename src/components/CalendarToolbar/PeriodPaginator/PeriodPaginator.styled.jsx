import  styled  from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


`;

export const MonthWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

gap: 149px;

width: 118px;
height: 30px;

background-color: #3E85F3;
border-radius: 8px;
`;

export const MonthName = styled.span`
width: 94px;
height: 18px;

    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;


text-align: center;
text-transform: uppercase;

color: #FFFFFF;
`;

export const WrapperButton = styled.div`
display: flex;
`;

export const ButtonLeft = styled.button`
    display: flex;
justify-content: center;
align-items: center;
padding: 8px 12px;
gap: 149px;
isolation: isolate;

width: 36px;
height: 30px;

background: #FFFFFF;
border: 1px solid rgba(220, 227, 229, 0.5);
border-radius: 8px 0px 0px 8px;
cursor: pointer;
`;
export const ButtonRight = styled.button`
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 12px;
gap: 149px;
isolation: isolate;

width: 36px;
height: 30px;

background: #FFFFFF;
border: 1px solid rgba(220, 227, 229, 0.5);
border-radius: 0px 8px 8px 0px;
cursor: pointer;
`;
