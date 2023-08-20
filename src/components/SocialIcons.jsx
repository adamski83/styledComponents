// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyledSocialIcons } from './styled/SocialIocns.styled';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

export const SocialIcons = () => {
	return (
		<StyledSocialIcons>
			<li>
				<a href=''>
					<FaTwitter />
				</a>
			</li>
			<li>
				<a href=''>
					<FaFacebook />
				</a>
			</li>
			<li>
				<a href=''>
					<FaLinkedin />
				</a>
			</li>
		</StyledSocialIcons>
	);
};
