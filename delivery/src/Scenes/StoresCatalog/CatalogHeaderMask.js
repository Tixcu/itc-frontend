import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import BasicHead from '../../Components/Header/BasicHeader.js';
import StoreList from '../../Components/StoresLoader/StoresLoader.js';

import GreyLine from './GreyLine.js';
import { Header1 } from '../../Components/Header/HeaderTextStyles/HeadersStyles.js';

export default class CatalogHeader extends React.Component {
    render() {
        return( 
            <Grid>
                <Row>
                    <header>
                        <BasicHead black destination="/"/>
                        <GreyLine/>
                    </header>
                </Row>
                <Row center="xs">
                    <Col xs={12}>
                        <Header1>Рестораны</Header1>
                    </Col>
                </Row>
                <StoreList btn/>
            </Grid>
        )
    }
}