import React, { Component } from 'react';
import '../Style/Style.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from '@mui/material/Tab';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Row, Col } from 'reactstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



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

export class Home extends Component {
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
                    <h1>Tops</h1>
                    <Row xs="3">
                        <Col className="bg-light border">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://product.hstatic.net/1000344185/product/9008_cbd68c9db95345a2a913b1be1dae36f2_master.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            NFSWE TEE - BROWN
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Form áo Châu Âu.
                                            Định lượng : 220 gsm.
                                            100% cotton.
                                            Sản phẩm được in lụa.
                                            Tag logo được gắn ở tay áo.
                                            Tem chống hàng giả của SWE được may trong sườn áo.
                                            Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col className="bg-light border">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://product.hstatic.net/1000344185/product/7840_c2bc1e10f5b340e6bc8e6ff22bdad6aa_grande.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Form áo Châu Âu.
                                            Định lượng : 220 gsm.
                                            100% cotton.
                                            Sản phẩm được in lụa.
                                            Tag logo được gắn ở tay áo.
                                            Tem chống hàng giả của SWE được may trong sườn áo.
                                            Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col className="bg-light border">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://product.hstatic.net/1000344185/product/8960_bb0422486fd54e258b3ba49e97277e35_grande.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Form áo Châu Âu.
                                            Định lượng : 220 gsm.
                                            100% cotton.
                                            Sản phẩm được in lụa.
                                            Tag logo được gắn ở tay áo.
                                            Tem chống hàng giả của SWE được may trong sườn áo.
                                            Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                    </Row>
                    <h1>Outewear</h1>
                    <Row xs="3">
                        <Col className="bg-light border">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://product.hstatic.net/1000344185/product/3717_9f1f4ab0bf8e4db9aba2807c68c18af9_master.png"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Form áo Châu Âu.
                                            Định lượng : 220 gsm.
                                            100% cotton.
                                            Sản phẩm được in lụa.
                                            Tag logo được gắn ở tay áo.
                                            Tem chống hàng giả của SWE được may trong sườn áo.
                                            Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col className="bg-light border">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://product.hstatic.net/1000344185/product/f_765a01602c134d36a28cdaf211b66926_master.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Form áo Châu Âu.
                                            Định lượng : 220 gsm.
                                            100% cotton.
                                            Sản phẩm được in lụa.
                                            Tag logo được gắn ở tay áo.
                                            Tem chống hàng giả của SWE được may trong sườn áo.
                                            Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col className="bg-light border">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://product.hstatic.net/1000344185/product/8-ta9402-tx01-1_526cc0ab37ef472bbcdbae2fbfc4bad3_master.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Form áo Châu Âu.
                                            Định lượng : 220 gsm.
                                            100% cotton.
                                            Sản phẩm được in lụa.
                                            Tag logo được gắn ở tay áo.
                                            Tem chống hàng giả của SWE được may trong sườn áo.
                                            Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <footer className='foodter'>
                    <Row xs="3">
                        <Col>
                            THIẾT KẾ VÀ THỜI TRANG

                            Hard Mode tự hào là local đầu tiên đưa sản phẩm về mức giá #SALE 99k nhưng vẫn đảm bảo tuyệt đối chất lượng đầu ra của thương hiệu
                        </Col>
                        <Col>
                        THIẾT KẾ VÀ THỜI TRANG

Hard Mode tự hào là local đầu tiên đưa sản phẩm về mức giá #SALE 99k nhưng vẫn đảm bảo tuyệt đối chất lượng đầu ra của thương hiệu
                        </Col>
                        <Col>
                        THIẾT KẾ VÀ THỜI TRANG

Hard Mode tự hào là local đầu tiên đưa sản phẩm về mức giá #SALE 99k nhưng vẫn đảm bảo tuyệt đối chất lượng đầu ra của thương hiệu
                        </Col>
                    </Row>
                </footer>
            </div >
        )
    }
}

export default Home
