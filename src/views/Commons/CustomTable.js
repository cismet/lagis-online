import React, { useState } from 'react';
import 'react-table/react-table.css';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';
import { Col, Row, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const createHeader = (cols) => {
	var header = [];

	for (var index = 0; index < cols.length; ++index) {
		header.push(<th key={cols[index].Header}>{cols[index].Header}</th>);
	}

	return header;
};

const createRows = (cols, data, offset, rowsPerPage, selectionListener, selectedIndex) => {
	var rows = [];

	for (var rowIndex = offset; rowIndex < data.length && rowIndex < offset + rowsPerPage; ++rowIndex) {
		var col = [];
		const currentRow = rowIndex;
		var style = selectedIndex != null && selectedIndex === rowIndex ? { backgroundColor: 'lightblue' } : {};

		for (var colIindex = 0; colIindex < cols.length; ++colIindex) {
			col.push(<td key={rowIndex * 10 + colIindex}>{data[rowIndex][cols[colIindex].accessor]}</td>);
		}

		if (selectionListener != null) {
			rows.push(
				<tr key={rowIndex} style={style} onClick={() => selectionListener(currentRow)}>
					{col}
				</tr>
			);
		} else {
			rows.push(
				<tr key={rowIndex} style={style}>
					{col}
				</tr>
			);
		}
	}

	return rows;
};

const createPagination = (page, totalRows, rowsPerPage, setPage) => {
	var pagination = [];
	var pages = [];

	for (var pageIndex = 0; pageIndex < totalRows / rowsPerPage; ++pageIndex) {
		const currentPage = pageIndex;

		if (pageIndex === page) {
			pages.push(
				<PaginationItem key={pageIndex} active>
					<PaginationLink onClick={() => setPage(currentPage)} tag="button">
						{pageIndex + 1}
					</PaginationLink>
				</PaginationItem>
			);
		} else {
			pages.push(
				<PaginationItem key={pageIndex}>
					<PaginationLink onClick={() => setPage(currentPage)} tag="button">
						{pageIndex + 1}
					</PaginationLink>
				</PaginationItem>
			);
		}
	}

	var backItem = (
		<PaginationItem disabled={page === 0}>
			<PaginationLink onClick={() => setPage(page - 1)} previous tag="button" />
		</PaginationItem>
	);
	var nextItem = (
		<PaginationItem disabled={page === totalRows / rowsPerPage - 1 || totalRows <= rowsPerPage}>
			<PaginationLink onClick={() => setPage(page + 1)} next tag="button" />
		</PaginationItem>
	);
	pagination.push(
		<Pagination key={'page'}>
			{backItem}
			{pages}
			{nextItem}
		</Pagination>
	);

	return pagination;
};

const CustomTable = ({
	columns: cols,
	data: d,
	rowSelectionListener: listener,
	selectedRow: selectedIndex,
	buttons: buttonsEnabled,
	additionalButtons: buttons
}) => {
	const rowsPerPage = 5;
	const [ page, setPage ] = useState(0);

	if (buttonsEnabled === undefined) {
		buttonsEnabled = true;
	}

	return (
		<div>
			<Table responsive striped hover>
				<thead>
					<tr>{createHeader(cols)}</tr>
				</thead>
				<tbody>{createRows(cols, d, page * rowsPerPage, rowsPerPage, listener, selectedIndex)}</tbody>
			</Table>
			<Row>
				<Col xs="12" lg="6">
					{createPagination(page, d.length, rowsPerPage, setPage)}
				</Col>
				{buttonsEnabled && (
					<Col xs="12" lg="6" style={{ textAlign: 'right' }}>
						<ButtonToolbar className="mb-3">
							<ButtonGroup className="mr-2" style={{ margin: 'auto' }}>
								{buttons}
								<Button>
									<i className="fa fa-plus-circle fa-lg" />
								</Button>
								<Button>
									<i className="fa fa-minus-circle fa-lg" />
								</Button>
							</ButtonGroup>
						</ButtonToolbar>
					</Col>
				)}
			</Row>
		</div>
	);
};

export default CustomTable;
