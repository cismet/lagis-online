import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
// Since this component is simple and static, there's no parent container for
// it.
const Comp = ({ bgcolor, linkTo, title, subtitle, icon, number, additionalContent }) => {
	return (
		<a
			style={{
				textDecoration: 'none'
			}}
			href={linkTo}
		>
			<Card
				className={'text-white ' + bgcolor}
				style={{
					minHeight: '145px'
				}}
			>
				<CardBody className='pb-0'>
					<div className='text-value'>
						<table width='100%'>
							<tbody>
								<tr>
									<td
										style={{
											textAlign: 'left'
										}}
									>
										{title}
									</td>
									<td
										style={{
											textAlign: 'right'
										}}
									>
										<i className={icon} />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div
						style={{
							minHeight: '21px'
						}}
					>
						{subtitle}
					</div>
					<div
						style={{
							marginBottom: -150
						}}
					>
						<div
							style={{
								minHeight: '70px'
							}}
						>
							{additionalContent}
						</div>
						<div
							style={{
								fontSize: 100,
								color: '#ffffff30',
								position: 'relative',
								textAlign: 'center',
								top: -120
							}}
						>
							{number}
						</div>
					</div>
				</CardBody>
			</Card>
		</a>
	);
};
export default Comp;
Comp.propTypes = {};
