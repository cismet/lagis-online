import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import FilePanel from '../Commons/FilePanel.js';
import jsonData from './../../assets/json/fs_17778.json';

const DMS = () => {
	return <FilePanel dmsUrls={jsonData} />;
};

export default DMS;
