import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export class Outerwear extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <div className='navs'>
                        <Box sx={{ width: '100%' }}>
                            <Tabs value={this.value} onChange={this.handleChange} aria-label="nav tabs example">
                                <LinkTab label="Home" href="/drafts" />
                                <LinkTab label="Tops" href="/trash" />
                                <LinkTab label="Outerwear" href="/spam" />
                                <LinkTab label="Bottoms" href="/trash" />
                                <LinkTab label="Payment" href="/spam" />
                               
                            </Tabs>
                        </Box>
                    </div>
                    <div className='iconnav'>
                    <Tab icon={<PersonPinIcon />} label="ĐĂNG NHẬP" />
                    </div>
                </div>
                <div className='center'>
                   
                </div>
            </div>
        )
    }
}

export default Outerwear
