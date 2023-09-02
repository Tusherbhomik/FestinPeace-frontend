import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import PropTypes from 'prop-types';
// import ResponsiveAppBar from './ResponsiveAppBar';


const drawerWidth = 240;


function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [showGeneralInfo, setShowGeneralInfo] = React.useState(false);
    const [showAddressInfo, setShowAddressInfo] = React.useState(false);
    const [showEdit, setShowEdit] = React.useState(false);




    const onhandleEditClick = () => {
        setShowEdit(!showEdit);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleGeneralClick = () => {
        setShowGeneralInfo(!showGeneralInfo);
        setShowAddressInfo(false);
    };
    const handleAddressClick = () => {
        setShowGeneralInfo(false);
        setShowAddressInfo(!showAddressInfo);
    };
    const customStyle = {
        fontFamily: 'Poppins, sans-serif',
        color: 'black',
        padding: 0,
        marginTop: 1,
        backgroundColor: 'transparent',
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleGeneralClick}>
                        <ListItemIcon>
                            <Person2Icon />
                        </ListItemIcon>
                        <ListItemText primary={<strong style={{ color: 'black' }}>General</strong>} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleAddressClick}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={<strong style={{ color: 'Black' }}>Address</strong>} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleAddressClick}>
                        <ListItemIcon>
                            <ContactsIcon />
                        </ListItemIcon>
                        <ListItemText primary={<strong style={{ color: 'Black' }}>Contacts</strong>} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleAddressClick}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary={<strong style={{ color: 'Black' }}>Settings</strong>} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            {/* <ResponsiveAppBar></ResponsiveAppBar> */}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <>
                <Typography paragraph>
                    {showGeneralInfo && (
                        <Paper sx={{ display: 'flex', width: '80vw', height: '100vh', backgroundColor: 'transparent', alignItems: 'center', padding: 5}}>
                            <Card sx={{ alignItems: 'center', backgroundColor: 'transparent', padding: 4, marginRight: 10 }}>
                                <CardContent>
                                    <Typography sx={customStyle}>
                                        <Typography >Name: Imtiaz Kabir</Typography>
                                        {
                                            showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                                        }
                                        <Typography >Age: 22</Typography>
                                        {
                                            showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                                        }
                                        <Typography >Location: JatraBari</Typography>
                                        {
                                            showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                                        }
                                        <Typography >Email: imtiazpro@gmail.com</Typography>
                                        {
                                            showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                                        }
                                        <Typography >A mediocre programmer who loves C like a boomer loves Linux. Student at BUET CSE '20</Typography>
                                        {
                                            showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                                        }
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={onhandleEditClick}>Update Profile</Button>
                                </CardActions>
                            </Card>
                            <Avatar
                                alt="imtiaz"
                                src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/326869358_1906627846347562_2097025392533582871_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHbkG9l0_m_981ERwvinPME7b5JbCG0MvztvklsIbQy_OzS21gn-RbpyZbTxHMwNixINopQwXj6---0rsLCg-y6&_nc_ohc=ld2kXKespboAX9-e1fU&_nc_ht=scontent-sin6-4.xx&oh=00_AfDJWUGZwqOLvpfJ0ksmZRX6inpf1383Ysv7rgkGYJexNA&oe=64EF4FD4"
                                sx={{ backgroundColor: 'transparent', alignItems: 'center', width: 300, height: 300 }}
                            />
                        </Paper>
                    )}
                    {showAddressInfo && (
                        <Paper sx={{ width: '80vw', height: '100vh', backgroundColor: 'transparent', alignItems: 'center', padding: 10, marginTop: 2, color: 'black' }}>
                            <Typography variant="h6" gutterBottom>
                                Address Information
                                <Button size="small" onClick={onhandleEditClick}>Edit</Button>
                            </Typography>
                            <Typography>Street: 123 Main St</Typography>
                            {
                                showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                            }
                            <Typography>City: Anytown</Typography>
                            {
                                showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                            }
                            <Typography>Country: USA</Typography>
                            {
                                showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                            }
                            <Typography>Country: USA</Typography>
                            {
                                showEdit && (<Button size="small" onClick={onhandleEditClick}>Edit</Button>)
                            }
                        </Paper>
                    )}

                </Typography>

            </>
            </Box>
        </>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
