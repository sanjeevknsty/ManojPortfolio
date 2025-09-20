import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import GFG from './images/certificates/image.png'
import Zephyr from './images/certificates/cerficate2.png'
import { Link } from 'react-router-dom';
const certifications = () => {
    return (
        <div style={{width:"100%",height :"100vh", backgroundColor: "rgb(34, 34, 34)"}}>
            <div className="card-header">
                Certifications
            </div>
            <div style={{display:"flex",justifyContent:"center",alignContent:"center",gap:"2rem"}}>
                <a target='_blank' href="https://drive.google.com/file/d/1OV0rPe3CqyWbCuJn_xXRmZl3GcrJYmbr/view?usp=drive_link ">

                    <Card sx={{ maxWidth: 445, backgroundColor: "#aaa" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={GFG}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    C Programming with Data Structures
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Completed a 12-week online course; gained
                                    hands-on experience in C programming, data
                                    structures, and problem-solving techniques.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
                <a target='_blank' href="https://www.credly.com/badges/83586e67-7a9b-4e88-8999-ce524393bdf7/email">

                    <Card sx={{ maxWidth: 445, backgroundColor: "#aaa" }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={Zephyr}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Certified Zephyr RTOS Open Source Contributor
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Contributed to the Zephyr RTOS by fixing
                                    BLE- related bugs and reporting issues;
                                    recognized as an official contributor.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </a>
            </div>
        </div>
    )
}

export default certifications
