import {Button, Nav, Navbar} from 'react-bootstrap'
import {
	FaDownload,
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaGooglePlusG,
} from 'react-icons/fa'

import {
	SiCodechef,
	SiCodeforces,
	SiLeetcode,
	SiHackerrank,
} from 'react-icons/si'

import React, {useState} from 'react'
import PortfolioLogo from '../assets/Image/logo.png'
import loadable from '@loadable/component'

const ResumeModal = loadable(() => import('./ResumeModal'))
// import ResumeModal from "./ResumeModal";

function Navigation() {
	const [showResumeModal, setShowResumeModal] = useState(false)

	return (
		<React.Fragment>
			<Navbar variant='dark' expand='lg' fixed='top' className='nvabar-custon'>
				<a href='/' className='navbar_logo_container'>
					<img src={PortfolioLogo} className='navbar_logo' alt='navbar_logo' />
					<span>Anurag.CV</span>
				</a>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'></Nav>
					<Nav className='navbar-right'>
						<Nav.Link>
							<Button
								variant='light'
								style={{
									borderRadius: '4px 0 0 4px',
									borderRight: '1px solid rgba(0,0,0,0.5)',
								}}
								onClick={() => {
									setShowResumeModal(true)
								}}>
								Curriculum Vitae (CV)
							</Button>
							<Button
								variant='light'
								href='https://drive.google.com/uc?export=download&id=1YJsajrXQ4jRRUEyHlCBZN50KbmmIup-p'
								style={{
									borderRadius: '0 4px 4px 0',
								}}
								aria-label='Resume'>
								<FaDownload
									aria-label='Resume'
									fill='rgba(0,0,0,0.5)'
									onClick={() =>
										(window.location =
											'https://drive.google.com/uc?export=download&id=1YJsajrXQ4jRRUEyHlCBZN50KbmmIup-p')
									}
								/>
							</Button>
						</Nav.Link>
						<Nav.Link
							aria-label='Github'
							href='https://github.com/anurag19100'
							target='_blank'>
							<FaGithub
								aria-label='Github'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Linked In'
							href='https://www.linkedin.com/in/anurag19100/'
							target='_blank'>
							<FaLinkedin
								aria-label='Linked In'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Twitter'
							href='https://twitter.com/anuragg19100'
							target='_blank'>
							<FaTwitter
								aria-label='Twitter'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Gmail'
							href='mailto:anurag19100@gmail.com'
							target='_blank'>
							<FaGooglePlusG
								aria-label='Gmail'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Codechef'
							href='https://www.codechef.com/users/superstar11'
							target='_blank'>
							<SiCodechef
								aria-label='codechef'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Codeforces'
							href='https://codeforces.com/profile/super1_1star'
							target='_blank'>
							<SiCodeforces
								aria-label='Codeforces'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Leetcode'
							href='https://leetcode.com/super1_1star/'
							target='_blank'>
							<SiLeetcode
								aria-label='Leetcode'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link
							aria-label='Hackerrank'
							href='https://www.hackerrank.com/super1_1star'
							target='_blank'>
							<SiHackerrank
								aria-label='Hackerrank'
								color='rgba(255,255,255,0.8)'
								size='1.5em'
							/>
						</Nav.Link>
						<Nav.Link href='mailto:anurag19100@gmail.com' target='_blank'>
							<Button className='moving-gradient'>Open to freelance</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<ResumeModal
				showResumeModal={showResumeModal}
				closeModal={() => {
					setShowResumeModal(!showResumeModal)
				}}
			/>
		</React.Fragment>
	)
}

export default Navigation
