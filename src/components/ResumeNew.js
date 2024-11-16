import React, {useState, useEffect} from 'react'
import {Container, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {AiOutlineDownload} from 'react-icons/ai'
import {Document, Page, pdfjs} from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const resumeLink =
	'https://raw.githubusercontent.com/anurag19100/portfolio-website/main/src/assets/anurag_gupta_cv.pdf'

function ResumeNew() {
	const [width, setWidth] = useState(1200)

	useEffect(() => {
		setWidth(window.innerWidth)
	}, [])

	return (
		<div>
			<Container
				fluid
				className='resume-section'
				style={{padding: '0', margin: '0'}}>
				{/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

				<Row className='resume'>
					<Document
						file={resumeLink}
						className='d-flex justify-content-center '>
						<Page
							pageNumber={1}
							scale={width > 786 ? 1.3 : 0.5}
							style={{padding: '0', margin: '0'}}
						/>
					</Document>
				</Row>

				<Row style={{justifyContent: 'center', position: 'relative'}}>
					<Button
						variant='primary'
						href='https://drive.google.com/uc?export=download&id=1YJsajrXQ4jRRUEyHlCBZN50KbmmIup-p'
						target='_blank'
						style={{maxWidth: '250px'}}>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</div>
	)
}

export default ResumeNew
