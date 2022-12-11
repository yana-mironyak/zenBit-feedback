import { FooterWrap, GreenSmile, MiniYellow, PinkSmile, SocialIcons, SocialIconsItem, SocialIconsLink } from "./footer.styled";
import icons from '../img/icons.svg';

export const Footer = () => {
    return (
        <FooterWrap>
            <PinkSmile />
            <GreenSmile />
            <MiniYellow />
            <SocialIcons>
                <SocialIconsLink>
                    <SocialIconsItem>
                        <use href={`${icons}#icon-linkedin`}></use>
                    </SocialIconsItem>
                </SocialIconsLink>   
                <SocialIconsLink>
                    <SocialIconsItem>
                        <use href={`${icons}#icon-twitter`}></use>
                    </SocialIconsItem>
                </SocialIconsLink>
                <SocialIconsLink>
                    <SocialIconsItem>
                        <use href={`${icons}#icon-facebook`}></use>
                    </SocialIconsItem>
                </SocialIconsLink>
                <SocialIconsLink>
                    <SocialIconsItem>
                        <use href={`${icons}#icon-pinterest`}></use>
                    </SocialIconsItem>
                </SocialIconsLink>
            </SocialIcons>
        </FooterWrap>
    )
}