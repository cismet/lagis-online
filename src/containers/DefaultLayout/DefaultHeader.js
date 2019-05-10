import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import {
	AppAsideToggler,
	AppHeaderDropdown,
	AppNavbarBrand,
	AppSidebarToggler
} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg';
import sygnet from '../../assets/img/brand/sygnet.svg';
import Select from 'react-select';

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
	render() {
		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		const gemarkungen = [
			{ value: '3001', label: 'Barmen' },
			{ value: '3485', label: 'Beyenburg' },
			{ value: '3257', label: 'Burg' },
			{ value: '3279', label: 'Cronenberg' },
			{ value: '3278', label: 'Dönberg' },
			{ value: '3135', label: 'Elberfeld' },
			{ value: '1314', label: 'Ennepetal' },
			{ value: '1329', label: 'Gennebreck' },
			{ value: '3271', label: 'Haan' },
			{ value: '3486', label: 'Langerfeld' },
			{ value: '3487', label: 'Nächstebreck' },
			{ value: '4139', label: 'Neukirchen' },
			{ value: '3422', label: 'Oberdüssel' },
			{ value: '4241', label: 'Radevormwald' },
			{ value: '3266', label: 'Remscheid' },
			{ value: '3267', label: 'Ronsdorf' },
			{ value: '3276', label: 'Schöller' },
			{ value: '1339', label: 'Schwelm' },
			{ value: '3277', label: 'Vohwinkel' },
			{ value: '3430', label: 'Wald' }
		];

		const flureElberfeld = [
			{ value: '1', label: '1' },
			{ value: '2', label: '2' },
			{ value: '3', label: '3' },
			{ value: '4', label: '4' },
			{ value: '5', label: '5' },
			{ value: '6', label: '6' },
			{ value: '7', label: '7' },
			{ value: '8', label: '8' },
			{ value: '9', label: '9' },
			{ value: '10', label: '10' },
			{ value: '11', label: '11' },
			{ value: '12', label: '12' },
			{ value: '13', label: '13' },
			{ value: '14', label: '14' },
			{ value: '15', label: '15' },
			{ value: '16', label: '16' },
			{ value: '17', label: '17' },
			{ value: '18', label: '18' },
			{ value: '19', label: '19' },
			{ value: '20', label: '20' },
			{ value: '21', label: '21' },
			{ value: '22', label: '22' },
			{ value: '23', label: '23' },
			{ value: '24', label: '24' },
			{ value: '25', label: '25' },
			{ value: '26', label: '26' },
			{ value: '27', label: '27' },
			{ value: '28', label: '28' },
			{ value: '29', label: '29' },
			{ value: '30', label: '30' },
			{ value: '31', label: '31' },
			{ value: '32', label: '32' },
			{ value: '33', label: '33' },
			{ value: '34', label: '34' },
			{ value: '35', label: '35' },
			{ value: '36', label: '36' },
			{ value: '37', label: '37' },
			{ value: '38', label: '38' },
			{ value: '39', label: '39' },
			{ value: '40', label: '40' },
			{ value: '41', label: '41' },
			{ value: '42', label: '42' },
			{ value: '43', label: '43' },
			{ value: '44', label: '44' },
			{ value: '45', label: '45' },
			{ value: '46', label: '46' },
			{ value: '47', label: '47' },
			{ value: '48', label: '48' },
			{ value: '49', label: '49' },
			{ value: '50', label: '50' },
			{ value: '51', label: '51' },
			{ value: '52', label: '52' },
			{ value: '53', label: '53' },
			{ value: '54', label: '54' },
			{ value: '55', label: '55' },
			{ value: '56', label: '56' },
			{ value: '57', label: '57' },
			{ value: '58', label: '58' },
			{ value: '59', label: '59' },
			{ value: '60', label: '60' },
			{ value: '61', label: '61' },
			{ value: '62', label: '62' },
			{ value: '63', label: '63' },
			{ value: '64', label: '64' },
			{ value: '65', label: '65' },
			{ value: '66', label: '66' },
			{ value: '67', label: '67' },
			{ value: '68', label: '68' },
			{ value: '69', label: '69' },
			{ value: '70', label: '70' },
			{ value: '71', label: '71' },
			{ value: '72', label: '72' },
			{ value: '73', label: '73' },
			{ value: '74', label: '74' },
			{ value: '76', label: '76' },
			{ value: '77', label: '77' },
			{ value: '78', label: '78' },
			{ value: '80', label: '80' },
			{ value: '81', label: '81' },
			{ value: '82', label: '82' },
			{ value: '83', label: '83' },
			{ value: '84', label: '84' },
			{ value: '85', label: '85' },
			{ value: '86', label: '86' },
			{ value: '87', label: '87' },
			{ value: '88', label: '88' },
			{ value: '89', label: '89' },
			{ value: '90', label: '90' },
			{ value: '91', label: '91' },
			{ value: '92', label: '92' },
			{ value: '93', label: '93' },
			{ value: '94', label: '94' },
			{ value: '95', label: '95' },
			{ value: '96', label: '96' },
			{ value: '97', label: '97' },
			{ value: '98', label: '98' },
			{ value: '99', label: '99' },
			{ value: '100', label: '100' },
			{ value: '101', label: '101' },
			{ value: '102', label: '102' },
			{ value: '103', label: '103' },
			{ value: '104', label: '104' },
			{ value: '105', label: '105' },
			{ value: '106', label: '106' },
			{ value: '107', label: '107' },
			{ value: '108', label: '108' },
			{ value: '109', label: '109' },
			{ value: '110', label: '110' },
			{ value: '111', label: '111' },
			{ value: '112', label: '112' },
			{ value: '113', label: '113' },
			{ value: '114', label: '114' },
			{ value: '115', label: '115' },
			{ value: '116', label: '116' },
			{ value: '117', label: '117' },
			{ value: '118', label: '118' },
			{ value: '119', label: '119' },
			{ value: '120', label: '120' },
			{ value: '121', label: '121' },
			{ value: '122', label: '122' },
			{ value: '123', label: '123' },
			{ value: '124', label: '124' },
			{ value: '125', label: '125' },
			{ value: '126', label: '126' },
			{ value: '127', label: '127' },
			{ value: '128', label: '128' },
			{ value: '129', label: '129' },
			{ value: '130', label: '130' },
			{ value: '131', label: '131' },
			{ value: '132', label: '132' },
			{ value: '133', label: '133' },
			{ value: '134', label: '134' },
			{ value: '135', label: '135' },
			{ value: '136', label: '136' },
			{ value: '137', label: '137' },
			{ value: '138', label: '138' },
			{ value: '139', label: '139' },
			{ value: '140', label: '140' },
			{ value: '141', label: '141' },
			{ value: '142', label: '142' },
			{ value: '143', label: '143' },
			{ value: '144', label: '144' },
			{ value: '145', label: '145' },
			{ value: '146', label: '146' },
			{ value: '147', label: '147' },
			{ value: '148', label: '148' },
			{ value: '149', label: '149' },
			{ value: '150', label: '150' },
			{ value: '151', label: '151' },
			{ value: '152', label: '152' },
			{ value: '153', label: '153' },
			{ value: '154', label: '154' },
			{ value: '155', label: '155' },
			{ value: '156', label: '156' },
			{ value: '157', label: '157' },
			{ value: '158', label: '158' },
			{ value: '159', label: '159' },
			{ value: '162', label: '162' },
			{ value: '163', label: '163' },
			{ value: '164', label: '164' },
			{ value: '165', label: '165' },
			{ value: '166', label: '166' },
			{ value: '167', label: '167' },
			{ value: '168', label: '168' },
			{ value: '169', label: '169' },
			{ value: '170', label: '170' },
			{ value: '171', label: '171' },
			{ value: '172', label: '172' },
			{ value: '173', label: '173' },
			{ value: '174', label: '174' },
			{ value: '175', label: '175' },
			{ value: '176', label: '176' },
			{ value: '178', label: '178' },
			{ value: '179', label: '179' },
			{ value: '180', label: '180' },
			{ value: '181', label: '181' },
			{ value: '182', label: '182' },
			{ value: '183', label: '183' },
			{ value: '184', label: '184' },
			{ value: '185', label: '185' },
			{ value: '186', label: '186' },
			{ value: '187', label: '187' },
			{ value: '188', label: '188' },
			{ value: '189', label: '189' },
			{ value: '190', label: '190' },
			{ value: '191', label: '191' },
			{ value: '192', label: '192' },
			{ value: '193', label: '193' },
			{ value: '194', label: '194' },
			{ value: '195', label: '195' },
			{ value: '196', label: '196' },
			{ value: '197', label: '197' },
			{ value: '198', label: '198' },
			{ value: '199', label: '199' },
			{ value: '200', label: '200' },
			{ value: '201', label: '201' },
			{ value: '202', label: '202' },
			{ value: '203', label: '203' },
			{ value: '204', label: '204' },
			{ value: '205', label: '205' },
			{ value: '206', label: '206' },
			{ value: '207', label: '207' },
			{ value: '208', label: '208' },
			{ value: '209', label: '209' },
			{ value: '210', label: '210' },
			{ value: '211', label: '211' },
			{ value: '212', label: '212' },
			{ value: '213', label: '213' },
			{ value: '214', label: '214' },
			{ value: '215', label: '215' },
			{ value: '216', label: '216' },
			{ value: '217', label: '217' },
			{ value: '218', label: '218' },
			{ value: '219', label: '219' },
			{ value: '220', label: '220' },
			{ value: '221', label: '221' },
			{ value: '222', label: '222' },
			{ value: '223', label: '223' },
			{ value: '224', label: '224' },
			{ value: '225', label: '225' },
			{ value: '226', label: '226' },
			{ value: '227', label: '227' },
			{ value: '228', label: '228' },
			{ value: '229', label: '229' },
			{ value: '230', label: '230' },
			{ value: '231', label: '231' },
			{ value: '232', label: '232' },
			{ value: '233', label: '233' },
			{ value: '234', label: '234' },
			{ value: '235', label: '235' },
			{ value: '236', label: '236' },
			{ value: '237', label: '237' },
			{ value: '238', label: '238' },
			{ value: '239', label: '239' },
			{ value: '240', label: '240' },
			{ value: '241', label: '241' },
			{ value: '242', label: '242' },
			{ value: '243', label: '243' },
			{ value: '244', label: '244' },
			{ value: '245', label: '245' },
			{ value: '246', label: '246' },
			{ value: '247', label: '247' },
			{ value: '248', label: '248' },
			{ value: '249', label: '249' },
			{ value: '250', label: '250' },
			{ value: '251', label: '251' },
			{ value: '252', label: '252' },
			{ value: '253', label: '253' },
			{ value: '254', label: '254' },
			{ value: '255', label: '255' },
			{ value: '256', label: '256' },
			{ value: '257', label: '257' },
			{ value: '258', label: '258' },
			{ value: '259', label: '259' },
			{ value: '260', label: '260' },
			{ value: '261', label: '261' },
			{ value: '262', label: '262' },
			{ value: '263', label: '263' },
			{ value: '264', label: '264' },
			{ value: '265', label: '265' },
			{ value: '266', label: '266' },
			{ value: '267', label: '267' },
			{ value: '268', label: '268' },
			{ value: '269', label: '269' },
			{ value: '271', label: '271' },
			{ value: '272', label: '272' },
			{ value: '273', label: '273' },
			{ value: '274', label: '274' },
			{ value: '275', label: '275' },
			{ value: '276', label: '276' },
			{ value: '277', label: '277' },
			{ value: '278', label: '278' },
			{ value: '279', label: '279' },
			{ value: '280', label: '280' },
			{ value: '281', label: '281' },
			{ value: '282', label: '282' },
			{ value: '283', label: '283' },
			{ value: '284', label: '284' },
			{ value: '285', label: '285' },
			{ value: '286', label: '286' },
			{ value: '288', label: '288' },
			{ value: '289', label: '289' },
			{ value: '290', label: '290' },
			{ value: '291', label: '291' },
			{ value: '292', label: '292' },
			{ value: '293', label: '293' },
			{ value: '294', label: '294' },
			{ value: '295', label: '295' },
			{ value: '296', label: '296' },
			{ value: '297', label: '297' },
			{ value: '298', label: '298' },
			{ value: '300', label: '300' },
			{ value: '301', label: '301' },
			{ value: '302', label: '302' },
			{ value: '304', label: '304' },
			{ value: '305', label: '305' },
			{ value: '306', label: '306' },
			{ value: '307', label: '307' },
			{ value: '308', label: '308' },
			{ value: '309', label: '309' },
			{ value: '311', label: '311' },
			{ value: '312', label: '312' },
			{ value: '313', label: '313' },
			{ value: '314', label: '314' },
			{ value: '315', label: '315' },
			{ value: '316', label: '316' },
			{ value: '317', label: '317' },
			{ value: '318', label: '318' },
			{ value: '319', label: '319' },
			{ value: '320', label: '320' },
			{ value: '321', label: '321' },
			{ value: '322', label: '322' },
			{ value: '323', label: '323' },
			{ value: '324', label: '324' },
			{ value: '325', label: '325' },
			{ value: '326', label: '326' },
			{ value: '327', label: '327' },
			{ value: '328', label: '328' },
			{ value: '329', label: '329' },
			{ value: '330', label: '330' },
			{ value: '331', label: '331' },
			{ value: '332', label: '332' },
			{ value: '333', label: '333' },
			{ value: '334', label: '334' },
			{ value: '335', label: '335' },
			{ value: '336', label: '336' },
			{ value: '337', label: '337' },
			{ value: '338', label: '338' },
			{ value: '339', label: '339' },
			{ value: '340', label: '340' },
			{ value: '341', label: '341' },
			{ value: '342', label: '342' },
			{ value: '343', label: '343' },
			{ value: '344', label: '344' },
			{ value: '345', label: '345' },
			{ value: '346', label: '346' },
			{ value: '347', label: '347' },
			{ value: '348', label: '348' },
			{ value: '349', label: '349' },
			{ value: '350', label: '350' },
			{ value: '351', label: '351' },
			{ value: '352', label: '352' },
			{ value: '353', label: '353' },
			{ value: '354', label: '354' },
			{ value: '355', label: '355' },
			{ value: '356', label: '356' },
			{ value: '357', label: '357' },
			{ value: '358', label: '358' },
			{ value: '359', label: '359' },
			{ value: '360', label: '360' },
			{ value: '361', label: '361' },
			{ value: '362', label: '362' },
			{ value: '363', label: '363' },
			{ value: '364', label: '364' },
			{ value: '365', label: '365' },
			{ value: '366', label: '366' },
			{ value: '367', label: '367' },
			{ value: '368', label: '368' },
			{ value: '369', label: '369' },
			{ value: '370', label: '370' },
			{ value: '371', label: '371' },
			{ value: '372', label: '372' },
			{ value: '373', label: '373' },
			{ value: '374', label: '374' },
			{ value: '375', label: '375' },
			{ value: '376', label: '376' },
			{ value: '377', label: '377' },
			{ value: '379', label: '379' },
			{ value: '380', label: '380' },
			{ value: '381', label: '381' },
			{ value: '382', label: '382' },
			{ value: '383', label: '383' },
			{ value: '384', label: '384' },
			{ value: '385', label: '385' },
			{ value: '386', label: '386' },
			{ value: '387', label: '387' },
			{ value: '388', label: '388' },
			{ value: '389', label: '389' },
			{ value: '390', label: '390' },
			{ value: '391', label: '391' },
			{ value: '392', label: '392' },
			{ value: '393', label: '393' },
			{ value: '394', label: '394' },
			{ value: '395', label: '395' },
			{ value: '396', label: '396' },
			{ value: '397', label: '397' },
			{ value: '398', label: '398' },
			{ value: '399', label: '399' },
			{ value: '400', label: '400' },
			{ value: '401', label: '401' },
			{ value: '402', label: '402' },
			{ value: '403', label: '403' },
			{ value: '404', label: '404' },
			{ value: '405', label: '405' },
			{ value: '406', label: '406' },
			{ value: '407', label: '407' },
			{ value: '408', label: '408' },
			{ value: '409', label: '409' },
			{ value: '410', label: '410' },
			{ value: '411', label: '411' },
			{ value: '412', label: '412' },
			{ value: '413', label: '413' },
			{ value: '414', label: '414' },
			{ value: '415', label: '415' },
			{ value: '416', label: '416' },
			{ value: '417', label: '417' },
			{ value: '418', label: '418' },
			{ value: '419', label: '419' },
			{ value: '420', label: '420' },
			{ value: '421', label: '421' },
			{ value: '422', label: '422' },
			{ value: '423', label: '423' },
			{ value: '424', label: '424' },
			{ value: '425', label: '425' },
			{ value: '426', label: '426' },
			{ value: '427', label: '427' },
			{ value: '430', label: '430' },
			{ value: '431', label: '431' },
			{ value: '432', label: '432' },
			{ value: '433', label: '433' },
			{ value: '434', label: '434' },
			{ value: '435', label: '435' },
			{ value: '436', label: '436' },
			{ value: '438', label: '438' },
			{ value: '439', label: '439' },
			{ value: '440', label: '440' },
			{ value: '441', label: '441' },
			{ value: '442', label: '442' },
			{ value: '443', label: '443' },
			{ value: '444', label: '444' },
			{ value: '445', label: '445' },
			{ value: '446', label: '446' },
			{ value: '447', label: '447' },
			{ value: '448', label: '448' },
			{ value: '449', label: '449' },
			{ value: '450', label: '450' },
			{ value: '451', label: '451' },
			{ value: '452', label: '452' },
			{ value: '453', label: '453' },
			{ value: '454', label: '454' },
			{ value: '455', label: '455' },
			{ value: '456', label: '456' },
			{ value: '457', label: '457' },
			{ value: '458', label: '458' },
			{ value: '459', label: '459' },
			{ value: '460', label: '460' },
			{ value: '461', label: '461' },
			{ value: '462', label: '462' },
			{ value: '463', label: '463' },
			{ value: '464', label: '464' },
			{ value: '465', label: '465' },
			{ value: '466', label: '466' },
			{ value: '467', label: '467' },
			{ value: '468', label: '468' },
			{ value: '469', label: '469' },
			{ value: '470', label: '470' },
			{ value: '471', label: '471' },
			{ value: '472', label: '472' },
			{ value: '473', label: '473' },
			{ value: '474', label: '474' },
			{ value: '475', label: '475' },
			{ value: '476', label: '476' },
			{ value: '477', label: '477' }
		];

		const fstckElberfeld_335 = [
			{ value: '053135-335-00029', label: '29' },
			{ value: '053135-335-00039', label: '39' },
			{ value: '053135-335-00040', label: '40' },
			{ value: '053135-335-00041', label: '41' },
			{ value: '053135-335-00043', label: '43' },
			{ value: '053135-335-00046', label: '46' },
			{ value: '053135-335-00048', label: '48' }
		];

		const filterConfig = {
			ignoreCase: true,
			ignoreAccents: true,
			trim: true,
			matchFrom: true
		};
		return (
			<React.Fragment>
				<AppSidebarToggler className='d-lg-none' display='md' mobile />
				<AppNavbarBrand
					full={{ src: logo, height: 30, alt: 'LagIS-online' }}
					minimized={{ src: sygnet, width: 30, height: 30, alt: 'LagIS-online' }}
				/>
				<AppSidebarToggler className='d-md-down-none' display='lg' />

				<Nav className='d-md-down-none' navbar>
					<NavItem style={{ paddingLeft: '10px', paddingRight: '10px' }}>
						<div style={{ width: '200px' }}>
							<Select
								options={gemarkungen}
								isSearchable={true}
								placeholder='Gemarkung'
								value={{ value: '3135', label: 'Elberfeld' }}
							/>
						</div>
					</NavItem>
					<NavItem style={{ paddingRight: '10px' }}>
						<div style={{ width: '100px' }}>
							<Select
								options={flureElberfeld}
								isSearchable={true}
								placeholder='Flur'
								value={{ value: '335', label: '335' }}
							/>
						</div>
					</NavItem>
					<NavItem style={{ paddingRight: '20px' }}>
						<div style={{ width: '120px' }}>
							<Select
								options={fstckElberfeld_335}
								isSearchable={true}
								placeholder='Flurstück'
								value={{ value: '053135-335-00048', label: '48' }}
							/>
						</div>
					</NavItem>
					<NavItem style={{ paddingRight: '20px' }}>
						<NavItem className='d-md-down-none'>
							<NavLink to='#' className='nav-link'>
								<i className='fa fa-filter' />
							</NavLink>
						</NavItem>
					</NavItem>
					<NavItem className='d-md-down-none'>
						<NavLink to='#' className='nav-link'>
							<i className='fa fa-refresh' />
						</NavLink>
					</NavItem>
				</Nav>
				<Nav className='ml-auto' navbar>
					<NavItem className='d-md-down-none'>
						<NavLink to='#' className='nav-link'>
							<i className='icon-printer' />
						</NavLink>
					</NavItem>

					<NavItem className='d-md-down-none'>
						<NavLink to='#' className='nav-link'>
							<i className='fa fa-search' />
						</NavLink>
					</NavItem>

					<NavItem className='d-md-down-none'>
						<NavLink to='#' className='nav-link'>
							<i className='fa fa-file-text-o' />
						</NavLink>
					</NavItem>
					<NavItem className='d-md-down-none'>
						<NavLink to='#' className='nav-link'>
							<i className='fa fa-paste' />
						</NavLink>
					</NavItem>
					<NavItem className='d-md-down-none'>
						<NavLink to='#' className='nav-link'>
							<i className='fa fa-copy' />
						</NavLink>
					</NavItem>
					<AppHeaderDropdown direction='down'>
						<DropdownToggle nav>
							<img
								src={'../../assets/img/avatars/6.jpg'}
								className='img-avatar'
								alt='admin@bootstrapmaster.com'
							/>
						</DropdownToggle>
						<DropdownMenu right style={{ right: 'auto' }}>
							<DropdownItem header tag='div' className='text-center'>
								<strong>Account</strong>
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-bell-o' /> Updates<Badge color='info'>42</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-envelope-o' /> Messages<Badge color='success'>42</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-tasks' /> Tasks<Badge color='danger'>42</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-comments' /> Comments<Badge color='warning'>42</Badge>
							</DropdownItem>
							<DropdownItem header tag='div' className='text-center'>
								<strong>Settings</strong>
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-user' /> Profile
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-wrench' /> Settings
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-usd' /> Payments<Badge color='secondary'>42</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className='fa fa-file' /> Projects<Badge color='primary'>42</Badge>
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>
								<i className='fa fa-shield' /> Lock Account
							</DropdownItem>
							<DropdownItem onClick={(e) => this.props.onLogout(e)}>
								<i className='fa fa-lock' /> Logout
							</DropdownItem>
						</DropdownMenu>
					</AppHeaderDropdown>
				</Nav>
				<AppAsideToggler className='d-md-down-none' />
				<AppAsideToggler className='d-lg-none' mobile />
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
