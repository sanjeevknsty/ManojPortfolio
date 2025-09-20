import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Paper, List, ListItem, ListItemText } from "@mui/material";
const Experience = () => {
    return (
        <div style={{ width: "100%", height: "100vh", paddingTop:"50px"}}>
             <div className="card-header" style={{paddingTop:"30px"}}>
                Experience
            </div>
            <div style={{ width: "100%", height: "80%", display: "flex", padding: "6rem" }}>
                <div style={{ width: "30%", backgroundColor: "" }} >
                    {/* <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            minWidth: "152px",
                            alignItems: "flex-start",
                            bgcolor: "#aaa",
                        }}
                    >
                        <Box
                            sx={{
                                width: "6px",
                                minHeight: "100%",
                                bgcolor: "orange",
                                alignSelf: "stretch",
                                borderRadius: "0 4px 4px 0",
                                marginRight: "18px",
                            }}
                        />
                        <Box sx={{ pt: 2, pl: 0.5, pr: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontSize: "1.1em" }}>
                                04/2024 – Current
                            </Typography>
                            <Typography variant="body2" sx={{ color: "grey.800" }}>
                                Chennai, India
                            </Typography>
                        </Box>
                    </Box> */}
                    <Box sx={{ pr: 2, textAlign: "center" }}>
                        
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 900,  fontSize: '35px',letterSpacing: "1px", marginBottom:"1rem" }}
                        >
                            Aerlync Labs
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.700" }}>
                            Chennai
                        </Typography>
                        <Typography variant="body2" sx={{ color: "grey.700" }}>
                            April 2024 - Present
                        </Typography>
                    </Box>

                </div>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: 0 }}>
                    {/* Dot */}
                    <Box
                        sx={{
                            width: 16,
                            height: 16,
                            bgcolor: "orange",
                            borderRadius: "50%",
                            marginBottom: -2,
                            zIndex: 10,                 // higher z-index
                            boxShadow: "0 0 6px orange", // subtle glowing shadow
                            border: "2px solid #fff",   // white border for contrast
                        }}
                    />
                    {/* Vertical line */}
                    <Box
                        sx={{
                            width: "2px",
                            bgcolor: "orange",
                            borderRadius: "1px",
                            minHeight: "100%",
                            marginTop: 0,
                        }}
                    />
                </Box>


                <div style={{ width: "70%", backgroundColor: "" }}>


                    {/* Right Section: Role and Bullets */}
                    <Box sx={{ pl: 0, flex: 1 }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 700, mb: 1, color: "#ccc", textAlign:"left",marginLeft:"1rem"}}
                        >
                                                        Embedded Software Engineer

                        </Typography>
                        <List dense sx={{ pl: 2, pt: 0 }}>
                            <ListItem sx={{ display: "list-item", px: 0, pt: 0 }}>
                                <ListItemText
                                    primary="- Developed and validated BLE firmware on Atmosic SoCs, implementing 
GATT services, multi-mode advertising, and secure pairing."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", px: 0 }}>
                                <ListItemText
                                    primary="- Worked with advanced BLE features (PHY modes, subrating, TX power 
control, low-power modes, DFU)."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", px: 0 }}>
                                <ListItemText
                                    primary="- Used nRF52 sniffer and Zephyr tools for debugging, protocol 
verification, and performance optimization."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", px: 0 }}>
                                <ListItemText
                                    primary="- Contributed patches and improvements to Zephyr RTOS BLE stack as an 
open-source contributor."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                        </List>
                    </Box>



                    {/* <Box sx={{ flex: 1, px: 3, pt: 2, pb: 2 }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 700, mb: 0.4 }}
                        >
                            Embedded Software Engineer
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                            Aerlync Labs
                        </Typography>
                        <List dense sx={{ pl: 2 }}>
                            <ListItem sx={{ display: "list-item", pl: 0 }}>
                                <ListItemText
                                    primary="Developed and validated BLE firmware on Atmosic SoCs, implementing GATT services, multi-mode advertising, and secure pairing."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", pl: 0 }}>
                                <ListItemText
                                    primary="Worked with advanced BLE features (PHY modes, subrating, TX power control, low-power modes, DFU)."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", pl: 0 }}>
                                <ListItemText
                                    primary="Used nRF52 sniffer and Zephyr tools for debugging, protocol verification, and performance optimization."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                            <ListItem sx={{ display: "list-item", pl: 0 }}>
                                <ListItemText
                                    primary="Contributed patches and improvements to Zephyr RTOS BLE stack as an open-source contributor."
                                    primaryTypographyProps={{ fontSize: "1em" }}
                                />
                            </ListItem>
                        </List>
                    </Box> */}
                </div>
            </div>

            {/* Orange Line + Left Column */}

            {/* Content */}


        </div>
    )
}

export default Experience
