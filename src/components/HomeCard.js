
import React, {useState} from 'react'

import {Col} from 'react-bootstrap'
import {DiJavascript1} from 'react-icons/di'
import {GiBookshelf} from 'react-icons/gi'
import {GoRepo} from 'react-icons/go'
import HomeModal from './HomeModal'
import {TiSocialAtCircular} from 'react-icons/ti'
import{AiOutlineDesktop} from "react-icons/ai"
import {GoFileCode} from "react-icons/go"



function seticon(iconName, size) {
	if (iconName === 'AiOutlineDesktop') return <AiOutlineDesktop color='#fff' size={size} />
	else if (iconName === 'GiBookshelf')
		return <GiBookshelf color='#fff' size={size} />
	else if (iconName === 'GoFileCode')
		return <GoFileCode color='#fff' size={size} />
	else if (iconName === 'DiJavascript1')
		return <DiJavascript1 color='#fff' size={size} />
	else if (iconName === 'GoRepo') return <GoRepo color='#fff' size={size} />
	else if (iconName === 'TiSocialAtCircular')
		return <TiSocialAtCircular color='#fff' size={size} />
}

function HomeCard({HomeCards}) {
	const [lgShow, setLgShow] = useState(false)

	return (
		<React.Fragment>
			<Col className='ColStyle' xs={6} md={4}>
				<div className='innerCol'>
					<span onClick={() => setLgShow(true)} className='projectLink'>
						<div
							style={{
								background:
									`linear-gradient(120deg,` +
									HomeCards.initialColor +
									`,` +
									HomeCards.finalColor +
									`)`,
							}}
							className='innerColImg'>
							<p className='projectTitle'>{HomeCards.title}</p>
							<div className='iconHolder'>
								{seticon(HomeCards.icon, '50px')}
							</div>
						</div>
					</span>
				</div>
			</Col>
			<HomeModal lgShow={lgShow} setLgShow={setLgShow} HomeCards={HomeCards} />
		</React.Fragment>
	)
}

export default HomeCard
